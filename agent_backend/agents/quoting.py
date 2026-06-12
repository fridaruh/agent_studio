"""
QuotingAgent — lógica de calificación y cotización solar.
Sin dependencia de orquestador externo; ejecuta el pipeline de herramientas
directamente para que sea testeable de forma aislada.
"""

from __future__ import annotations
from dataclasses import dataclass
from tools.solar_sizing import calculate_system_size, estimate_roi
from tools.pricing import lookup_panel_price, lookup_inverter_price
from tools.crm import create_lead, update_lead, update_lead_stage, log_event, LeadStage


# ─── Qualification ─────────────────────────────────────────────────────────────

QUALIFYING_KEYWORDS = {
    "kwh": "monthly_kwh",
    "kw":  "monthly_kwh",
    "recibo": "needs_kwh_prompt",
    "consumo": "needs_kwh_prompt",
    "techo": "roof_type",
    "plano": "roof_type:plano",
    "inclinado": "roof_type:inclinado",
    "metálico": "roof_type:metalico",
    "cdmx": "location:cdmx",
    "guadalajara": "location:guadalajara",
    "monterrey": "location:monterrey",
    "mérida": "location:mérida",
    "yucatán": "location:mérida",
    "residencial": "project_type:residential",
    "comercial": "project_type:commercial",
    "industrial": "project_type:industrial",
    "gobierno": "project_type:government",
    "municipal": "project_type:government",
    "rancho": "project_type:agrivoltaic",
}

TARIFF_BY_TYPE = {
    "residential": 3.5,
    "commercial":  5.2,
    "industrial":  7.8,
    "government":  4.9,
    "agrivoltaic": 3.2,
}


@dataclass
class QualificationResult:
    is_qualified: bool
    monthly_kwh: float
    location: str
    roof_type: str
    project_type: str
    tariff_mxn: float
    missing_fields: list[str]


def qualify_lead(text: str) -> QualificationResult:
    """
    Extrae parámetros técnicos del mensaje del lead.
    En producción esto lo hace el LLM; aquí usamos heurísticas para tests.
    """
    text_lower = text.lower()

    # Extraer kWh numérico
    monthly_kwh = 0.0
    import re
    kwh_patterns = [
        r"(\d[\d,.]+)\s*kwh",
        r"consumo[^0-9]*(\d[\d,.]+)",
        r"(\d[\d,.]+)\s*kw[^p]",
    ]
    for pat in kwh_patterns:
        m = re.search(pat, text_lower)
        if m:
            monthly_kwh = float(m.group(1).replace(",", ""))
            break

    # Si menciona monto del recibo, estimar kWh (aprox $3.5/kWh)
    if monthly_kwh == 0:
        bill_pat = r"\$\s*(\d[\d,.]+)"
        m = re.search(bill_pat, text)
        if m:
            bill_mxn = float(m.group(1).replace(",", ""))
            monthly_kwh = round(bill_mxn / 3.5, 1)

    # Detectar ubicación
    location = "cdmx"  # default
    for kw, tag in QUALIFYING_KEYWORDS.items():
        if kw in text_lower and tag.startswith("location:"):
            location = tag.split(":")[1]
            break

    # Tipo de techo
    roof_type = "inclinado"
    if "plano" in text_lower:
        roof_type = "plano"
    elif "metálico" in text_lower or "metalico" in text_lower:
        roof_type = "metalico"

    # Tipo de proyecto
    project_type = "residential"
    for kw, tag in QUALIFYING_KEYWORDS.items():
        if kw in text_lower and tag.startswith("project_type:"):
            project_type = tag.split(":")[1]
            break
    # Heurísticas adicionales
    if any(w in text_lower for w in ["bodega", "empresa", "negocio", "comercio"]):
        project_type = "commercial"
    if any(w in text_lower for w in ["municipio", "gobierno", "licitación"]):
        project_type = "government"
    if any(w in text_lower for w in ["rancho", "campo", "riego", "agro"]):
        project_type = "agrivoltaic"

    tariff = TARIFF_BY_TYPE.get(project_type, 3.5)

    missing = []
    if monthly_kwh == 0:
        missing.append("monthly_kwh")
    if not location:
        missing.append("location")

    return QualificationResult(
        is_qualified = len(missing) == 0,
        monthly_kwh  = monthly_kwh,
        location     = location,
        roof_type    = roof_type,
        project_type = project_type,
        tariff_mxn   = tariff,
        missing_fields = missing,
    )


# ─── Proposal builder ──────────────────────────────────────────────────────────

def build_proposal(
    lead_id: str,
    qualification: QualificationResult,
    panel_sku: str = "jinko-545",
) -> dict:
    """
    Ejecuta el pipeline completo de cotización:
    sizing → pricing → ROI → propuesta formateada.
    """
    if not qualification.is_qualified:
        return {
            "status": "needs_more_info",
            "missing_fields": qualification.missing_fields,
            "message": _missing_fields_prompt(qualification.missing_fields),
        }

    # 1. Dimensionamiento
    spec = calculate_system_size(
        monthly_kwh=qualification.monthly_kwh,
        location=qualification.location,
        roof_type=qualification.roof_type,
    )

    # 2. Precios
    panel_price   = lookup_panel_price(panel_sku, spec["panels_count"])
    inverter_slug = _inverter_slug(spec["inverter_model"])
    inverter_price = lookup_inverter_price(inverter_slug)

    # 3. ROI
    roi = estimate_roi(
        system_kw   = spec["system_kw"],
        monthly_kwh = qualification.monthly_kwh,
        tariff_mxn  = qualification.tariff_mxn,
    )

    # 4. Actualizar CRM
    update_lead(lead_id,
        monthly_kwh=qualification.monthly_kwh,
        location=qualification.location,
        roof_type=qualification.roof_type,
        project_type=qualification.project_type,
    )
    update_lead_stage(lead_id, LeadStage.QUOTE_SENT, event="quote_generated")
    log_event(lead_id, "quote_generated", {"system_kw": spec["system_kw"]})

    total_cost = (panel_price.get("total_mxn", 0) + inverter_price.get("price_mxn", 0))
    # Ajuste si el costo calculado difiere del estimado del ROI
    roi["system_cost_mxn"] = round(total_cost * 1.20, 2)  # +20% instalación y mano de obra
    roi["payback_years"] = round(roi["system_cost_mxn"] / roi["annual_savings_mxn"], 1) if roi["annual_savings_mxn"] else 99.0

    return {
        "status":        "proposal_ready",
        "lead_id":       lead_id,
        "spec":          spec,
        "panel_pricing": panel_price,
        "inverter":      inverter_price,
        "roi":           roi,
        "project_type":  qualification.project_type,
        "summary":       _format_summary(spec, roi, qualification.project_type),
    }


def _inverter_slug(model: str) -> str:
    model_l = model.lower()
    if "fronius" in model_l and "5" in model_l:  return "fronius-5kw"
    if "fronius" in model_l and "10" in model_l: return "fronius-10kw"
    if "sma"     in model_l:                     return "sma-20kw"
    if "huawei"  in model_l:                     return "huawei-30kw"
    return "fronius-5kw"


def _format_summary(spec: dict, roi: dict, project_type: str) -> str:
    return (
        f"Sistema de {spec['system_kw']} kWp · {spec['panels_count']} paneles "
        f"({spec['panel_model']}) · Inversor {spec['inverter_model']} · "
        f"Producción estimada {spec['estimated_monthly_kwh']} kWh/mes · "
        f"Ahorro mensual ${roi['monthly_savings_mxn']:,.0f} MXN · "
        f"Recuperación {roi['payback_years']} años · "
        f"Inversión total ${roi['system_cost_mxn']:,.0f} MXN"
    )


def _missing_fields_prompt(fields: list[str]) -> str:
    prompts = {
        "monthly_kwh": "¿Cuál es tu consumo mensual en kWh o el monto de tu recibo de luz?",
        "location":    "¿En qué ciudad o estado se ubica la instalación?",
    }
    return " ".join(prompts.get(f, f) for f in fields)


# ─── Agent entrypoint ──────────────────────────────────────────────────────────

def run(inbound: dict) -> dict:
    """
    Punto de entrada del Quoting Agent.
    Recibe el dict normalizado del canal y retorna la respuesta del agente.
    """
    lead_id = inbound["lead_id"]
    text    = inbound["text"]
    name    = inbound.get("name", "Cliente")

    # Crear o recuperar lead en CRM
    from tools.crm import get_lead
    if not get_lead(lead_id):
        create_lead(
            lead_id=lead_id,
            name=name,
            phone=lead_id,
            channel=inbound.get("channel", "whatsapp"),
        )

    q = qualify_lead(text)
    update_lead_stage(lead_id, LeadStage.QUALIFYING, event="message_received")

    return build_proposal(lead_id=lead_id, qualification=q)
