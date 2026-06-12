"""
ServiceAgent — maneja requests post-instalación:
fallas, garantías, mantenimiento, alertas de monitoreo.
"""

from __future__ import annotations
import re
from dataclasses import dataclass
from tools.crm import get_lead, log_event, create_lead, LeadStage

# ─── Ticket store (in-memory) ──────────────────────────────────────────────────

_TICKETS: dict[str, dict] = {}
_TICKET_SEQ = 0


def _next_ticket_id() -> str:
    global _TICKET_SEQ
    _TICKET_SEQ += 1
    return f"TKT-{_TICKET_SEQ:04d}"


def clear_tickets() -> None:
    global _TICKET_SEQ
    _TICKETS.clear()
    _TICKET_SEQ = 0


# ─── Install folio DB (dummy) ──────────────────────────────────────────────────

INSTALLATIONS: dict[str, dict] = {
    "CE-2024-0891": {
        "client_id":    "+525512345678",
        "client_name":  "Carlos Mendoza",
        "system_kw":    5.45,
        "panels":       10,
        "inverter":     "Fronius Primo 5.0-1",
        "install_date": "2024-03-15",
        "warranty_exp": "2049-03-15",
        "inverter_warranty_exp": "2031-03-15",
        "status":       "active",
    },
    "CE-2023-0412": {
        "client_id":    "+525555556666",
        "client_name":  "Municipio Tlalnepantla",
        "system_kw":    18.7,
        "panels":       34,
        "inverter":     "SMA Sunny Tripower 20000TL",
        "install_date": "2023-11-20",
        "warranty_exp": "2048-11-20",
        "inverter_warranty_exp": "2028-11-20",
        "status":       "active",
    },
}

FAULT_KEYWORDS   = ["apagado", "falla", "error", "roja", "no funciona", "no genera", "detuvo", "paró"]
WARRANTY_KEYWORDS = ["garantía", "garantia", "garantizar", "cobertura", "reclamar", "defecto"]
MAINTENANCE_KEYWORDS = ["mantenimiento", "limpieza", "revisión", "inspección", "servicio"]
MONITORING_KEYWORDS  = ["monitoreo", "generación baja", "genera menos", "porcentaje", "producción"]

PRIORITY_MAP = {
    "fault":       "high",
    "warranty":    "medium",
    "maintenance": "low",
    "monitoring":  "medium",
    "general":     "low",
}


@dataclass
class ServiceTicket:
    ticket_id:      str
    lead_id:        str
    folio:          str | None
    category:       str       # fault | warranty | maintenance | monitoring | general
    priority:       str       # high | medium | low
    description:    str
    installation:   dict | None
    action_required: str


def classify_request(text: str) -> str:
    text_l = text.lower()
    if any(k in text_l for k in FAULT_KEYWORDS):        return "fault"
    if any(k in text_l for k in WARRANTY_KEYWORDS):     return "warranty"
    if any(k in text_l for k in MAINTENANCE_KEYWORDS):  return "maintenance"
    if any(k in text_l for k in MONITORING_KEYWORDS):   return "monitoring"
    return "general"


def extract_folio(text: str) -> str | None:
    m = re.search(r"CE-\d{4}-\d{4}", text, re.IGNORECASE)
    return m.group(0).upper() if m else None


def _action_for(category: str, installation: dict | None) -> str:
    actions = {
        "fault":       "Despachar técnico en 24h. Revisar inversor y strings de paneles.",
        "warranty":    "Verificar cobertura en sistema. Abrir caso con fabricante si aplica.",
        "maintenance": "Agendar visita de limpieza y revisión en los próximos 5 días hábiles.",
        "monitoring":  "Revisar lectura de generación vs esperada. Verificar string fallido.",
        "general":     "Asignar a agente de customer success para seguimiento.",
    }
    return actions.get(category, actions["general"])


def create_ticket(lead_id: str, text: str) -> ServiceTicket:
    """Clasifica el request y abre un ticket de servicio."""
    category    = classify_request(text)
    folio       = extract_folio(text)
    installation = INSTALLATIONS.get(folio) if folio else None
    priority    = PRIORITY_MAP[category]
    ticket_id   = _next_ticket_id()

    ticket = ServiceTicket(
        ticket_id=ticket_id,
        lead_id=lead_id,
        folio=folio,
        category=category,
        priority=priority,
        description=text[:300],
        installation=installation,
        action_required=_action_for(category, installation),
    )

    _TICKETS[ticket_id] = {
        "ticket_id":   ticket.ticket_id,
        "lead_id":     ticket.lead_id,
        "folio":       ticket.folio,
        "category":    ticket.category,
        "priority":    ticket.priority,
        "description": ticket.description,
        "action":      ticket.action_required,
        "installation": ticket.installation,
    }

    log_event(lead_id, "service_ticket_created", {
        "ticket_id": ticket_id,
        "category":  category,
        "priority":  priority,
    })

    return ticket


def get_ticket(ticket_id: str) -> dict | None:
    return _TICKETS.get(ticket_id)


def run(inbound: dict) -> dict:
    """Punto de entrada del Service Agent."""
    lead_id = inbound["lead_id"]
    text    = inbound["text"]

    from tools.crm import get_lead as _get_lead
    if not _get_lead(lead_id):
        create_lead(lead_id=lead_id, name=inbound.get("name", "Cliente"), phone=lead_id, channel="whatsapp")

    ticket = create_ticket(lead_id, text)

    return {
        "status":      "ticket_created",
        "ticket_id":   ticket.ticket_id,
        "category":    ticket.category,
        "priority":    ticket.priority,
        "action":      ticket.action_required,
        "folio_found": ticket.folio is not None,
        "installation": ticket.installation,
    }
