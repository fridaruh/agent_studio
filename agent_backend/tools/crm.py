"""CRM tool — in-memory store (simulates HubSpot/Salesforce in tests)."""

from __future__ import annotations
from dataclasses import dataclass, field, asdict
from datetime import datetime
from enum import Enum


class LeadStage(str, Enum):
    NEW             = "new"
    QUALIFYING      = "qualifying"
    QUOTE_SENT      = "quote_sent"
    FOLLOW_UP       = "follow_up"
    NEGOTIATING     = "negotiating"
    CLOSED_WON      = "closed_won"
    CLOSED_LOST     = "closed_lost"


@dataclass
class Lead:
    lead_id:          str
    name:             str
    phone:            str
    channel:          str           # "whatsapp" | "email" | "webform"
    stage:            LeadStage = LeadStage.NEW
    location:         str = ""
    monthly_kwh:      float = 0.0
    roof_type:        str = "inclinado"
    tariff_mxn:       float = 3.5
    project_type:     str = "residential"
    notes:            str = ""
    events:           list[dict] = field(default_factory=list)
    created_at:       str = field(default_factory=lambda: datetime.now().isoformat())
    last_activity_at: str = field(default_factory=lambda: datetime.now().isoformat())


# In-memory store
_DB: dict[str, Lead] = {}


def seed_lead(lead: Lead) -> None:
    """Inserta un lead directamente (para tests y fixtures)."""
    _DB[lead.lead_id] = lead


def clear_db() -> None:
    """Limpia el store (entre tests)."""
    _DB.clear()


def get_lead(lead_id: str) -> dict | None:
    lead = _DB.get(lead_id)
    return asdict(lead) if lead else None


def create_lead(
    lead_id: str,
    name: str,
    phone: str,
    channel: str,
    **kwargs,
) -> dict:
    lead = Lead(lead_id=lead_id, name=name, phone=phone, channel=channel, **kwargs)
    _DB[lead_id] = lead
    return asdict(lead)


def update_lead(lead_id: str, **fields) -> dict:
    lead = _DB.get(lead_id)
    if not lead:
        return {"error": f"Lead {lead_id} no encontrado"}
    for k, v in fields.items():
        if hasattr(lead, k):
            setattr(lead, k, v)
    lead.last_activity_at = datetime.now().isoformat()
    return asdict(lead)


def update_lead_stage(lead_id: str, stage: LeadStage, event: str = "") -> dict:
    lead = _DB.get(lead_id)
    if not lead:
        return {"error": f"Lead {lead_id} no encontrado"}
    lead.stage = stage
    lead.last_activity_at = datetime.now().isoformat()
    if event:
        lead.events.append({"event": event, "at": lead.last_activity_at})
    return asdict(lead)


def list_leads_by_stage(stage: LeadStage) -> list[dict]:
    return [asdict(l) for l in _DB.values() if l.stage == stage]


def log_event(lead_id: str, event: str, metadata: dict | None = None) -> dict:
    lead = _DB.get(lead_id)
    if not lead:
        return {"error": f"Lead {lead_id} no encontrado"}
    entry = {"event": event, "at": datetime.now().isoformat(), **(metadata or {})}
    lead.events.append(entry)
    return entry
