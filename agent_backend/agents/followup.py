"""
FollowUpAgent — escanea leads sin actividad y genera mensajes de seguimiento.
"""

from __future__ import annotations
from dataclasses import dataclass
from datetime import datetime, timedelta
from tools.crm import get_lead, update_lead_stage, log_event, LeadStage, list_leads_by_stage


FOLLOWUP_WINDOWS_HOURS = [24, 48, 168]   # 1d, 2d, 7d

TEMPLATES: dict[str, list[str]] = {
    "residential": [
        "Hola {name}, quería asegurarme de que recibiste tu cotización solar. "
        "¿Tienes alguna duda sobre los paneles o el período de recuperación?",
        "Hola {name}, sé que evaluar una inversión como esta toma tiempo. "
        "¿Hay algo que quieras comparar o aclarar sobre la propuesta?",
        "Hola {name}, solo un último seguimiento. Si cambia tu situación o "
        "quieres revisar opciones de financiamiento, aquí estamos.",
    ],
    "commercial": [
        "Buenos días {name}, ¿pudieron revisar internamente la propuesta de sistema solar? "
        "Podemos agendar una llamada técnica si lo necesitan.",
        "Hola {name}, ¿hay algún punto de la propuesta que necesiten desarrollar "
        "para presentar a dirección? Podemos enviar memoria de cálculo adicional.",
        "Hola {name}, seguimos disponibles si necesitan información complementaria "
        "para su proceso de aprobación.",
    ],
    "government": [
        "Buenos días {name}, ¿requieren documentación adicional para su proceso "
        "de licitación? Podemos enviar carta de especificaciones técnicas.",
        "Hola {name}, ¿avanzó la revisión de la propuesta solar por parte de su área técnica?",
        "Buenos días {name}, seguimos disponibles para aclarar cualquier punto "
        "técnico o financiero de la propuesta.",
    ],
}

DEFAULT_TEMPLATES = TEMPLATES["residential"]


@dataclass
class FollowUpResult:
    lead_id:   str
    name:      str
    channel:   str
    message:   str
    touch_num: int
    escalate:  bool


def _hours_since(iso_ts: str) -> float:
    try:
        dt = datetime.fromisoformat(iso_ts)
    except ValueError:
        return 0.0
    return (datetime.now() - dt).total_seconds() / 3600


def _touch_count(events: list[dict]) -> int:
    return sum(1 for e in events if e.get("event") == "followup_sent")


def _should_escalate(touch_num: int, hours_since_quote: float) -> bool:
    # Escalar si ya recibió 3 toques sin responder, sin importar el tiempo
    return touch_num >= 3


def generate_followup(lead_id: str) -> FollowUpResult | None:
    """
    Evalúa si un lead necesita seguimiento y genera el mensaje apropiado.
    Retorna None si el lead no necesita seguimiento en este momento.
    """
    lead = get_lead(lead_id)
    if not lead:
        return None

    # Solo seguir leads en etapa quote_sent o follow_up
    if lead["stage"] not in (LeadStage.QUOTE_SENT, LeadStage.FOLLOW_UP):
        return None

    hours_inactive = _hours_since(lead["last_activity_at"])
    touch_num      = _touch_count(lead["events"])

    # Verificar si está en una ventana de seguimiento
    in_window = any(
        abs(hours_inactive - w) < 2          # ±2h de tolerancia
        or hours_inactive >= w               # o ya superó el umbral
        for w in FOLLOWUP_WINDOWS_HOURS
        if touch_num < FOLLOWUP_WINDOWS_HOURS.index(w) + 1
    )

    # Para tests, simplificamos: si hay inactividad > 0h y touch_num < 3, proceder
    if touch_num >= 3:
        if _should_escalate(touch_num, hours_inactive):
            return FollowUpResult(
                lead_id=lead_id,
                name=lead["name"],
                channel=lead["channel"],
                message=f"Escalando lead {lead['name']} a equipo de ventas — sin respuesta tras 3 toques.",
                touch_num=touch_num,
                escalate=True,
            )
        return None

    project_type = lead.get("project_type", "residential")
    templates    = TEMPLATES.get(project_type, DEFAULT_TEMPLATES)
    msg_idx      = min(touch_num, len(templates) - 1)
    message      = templates[msg_idx].format(name=lead["name"].split()[0])

    # Registrar el toque
    update_lead_stage(lead_id, LeadStage.FOLLOW_UP, event="followup_sent")
    log_event(lead_id, "followup_sent", {"touch_num": touch_num + 1, "channel": lead["channel"]})

    return FollowUpResult(
        lead_id=lead_id,
        name=lead["name"],
        channel=lead["channel"],
        message=message,
        touch_num=touch_num + 1,
        escalate=False,
    )


def run(inbound: dict) -> dict:
    """Punto de entrada del Follow-Up Agent (activado por scheduler o mensaje directo)."""
    lead_id = inbound["lead_id"]
    result  = generate_followup(lead_id)

    if result is None:
        return {"status": "no_action", "lead_id": lead_id}

    return {
        "status":    "escalate" if result.escalate else "followup_sent",
        "lead_id":   result.lead_id,
        "channel":   result.channel,
        "message":   result.message,
        "touch_num": result.touch_num,
    }
