"""
WhatsApp inbound simulator — genera payloads dummy que replican
el formato de la Meta Cloud API / Twilio WhatsApp sin conectarse a ningún servicio.
"""

from __future__ import annotations
from dataclasses import dataclass, field
from datetime import datetime
import uuid


@dataclass
class SimulatedWAMessage:
    """Replica el shape de un webhook de Meta WhatsApp Cloud API."""
    from_number: str
    body: str
    message_id: str = field(default_factory=lambda: f"wamid.{uuid.uuid4().hex[:20]}")
    timestamp: str  = field(default_factory=lambda: str(int(datetime.now().timestamp())))
    display_phone_number: str = "+52 55 1234 5678"
    phone_number_id: str = "123456789012345"

    def to_webhook_payload(self) -> dict:
        """Construye el JSON exacto que envía Meta en el webhook POST."""
        return {
            "object": "whatsapp_business_account",
            "entry": [{
                "id": "WABA_ID_DEMO",
                "changes": [{
                    "value": {
                        "messaging_product": "whatsapp",
                        "metadata": {
                            "display_phone_number": self.display_phone_number,
                            "phone_number_id": self.phone_number_id,
                        },
                        "contacts": [{
                            "profile": {"name": _name_from_number(self.from_number)},
                            "wa_id": self.from_number.replace("+", "").replace(" ", ""),
                        }],
                        "messages": [{
                            "from": self.from_number,
                            "id":   self.message_id,
                            "timestamp": self.timestamp,
                            "text": {"body": self.body},
                            "type": "text",
                        }],
                    },
                    "field": "messages",
                }],
            }],
        }


def _name_from_number(number: str) -> str:
    names = {
        "+525512345678": "Carlos Mendoza",
        "+525598765432": "Laura Rodríguez",
        "+525511112222": "Empresa Solar Norte",
        "+525533334444": "Rancho El Progreso",
        "+525555556666": "Municipio Tlalnepantla",
    }
    clean = number.replace(" ", "").replace("-", "")
    return names.get(clean, "Cliente Demo")


# ─── Fixtures de mensajes dummy ────────────────────────────────────────────────

INBOUND_MESSAGES: dict[str, SimulatedWAMessage] = {

    # Residencial — primer contacto pidiendo cotización
    "residential_new_lead": SimulatedWAMessage(
        from_number="+525512345678",
        body=(
            "Buenas tardes, estoy interesado en instalar paneles solares "
            "en mi casa en CDMX. Mi recibo de luz es de alrededor de $2,800 "
            "al mes. ¿Me pueden dar una cotización?"
        ),
    ),

    # Comercial — lead calificado con datos completos
    "commercial_full_data": SimulatedWAMessage(
        from_number="+525598765432",
        body=(
            "Hola, tenemos una bodega en Guadalajara. Consumo mensual de 3,500 kWh, "
            "techo plano, tarifa industrial. Quiero opciones de financiamiento "
            "y el retorno de inversión a 5 y 10 años."
        ),
    ),

    # Industrial — proyecto grande
    "industrial_lead": SimulatedWAMessage(
        from_number="+525511112222",
        body=(
            "Somos distribuidores de alimentos en Monterrey. Nuestro consumo "
            "es de 18,000 kWh mensuales. Necesitamos una propuesta técnica "
            "con múltiples opciones de sistema. Techo metálico inclinado."
        ),
    ),

    # Agrivoltaico
    "agrivoltaic_lead": SimulatedWAMessage(
        from_number="+525533334444",
        body=(
            "Tenemos un rancho en Mérida, Yucatán. Queremos paneles solares "
            "para riego y consumo del rancho, como 1,200 kWh al mes. "
            "¿Funciona con sistema off-grid?"
        ),
    ),

    # Follow-up — cliente que ya recibió cotización y no ha respondido
    "followup_cold_lead": SimulatedWAMessage(
        from_number="+525598765432",
        body="Hola, ¿ya vieron mi solicitud? No he recibido respuesta.",
    ),

    # Servicio post-venta — reporte de falla
    "service_fault_report": SimulatedWAMessage(
        from_number="+525512345678",
        body=(
            "Hola, ya llevo 3 días con los paneles apagados. "
            "El inversor muestra una luz roja. Mi folio de instalación "
            "es CE-2024-0891. ¿Qué hago?"
        ),
    ),

    # Garantía
    "warranty_claim": SimulatedWAMessage(
        from_number="+525555556666",
        body=(
            "Buen día, uno de los paneles que instalaron hace 8 meses "
            "está generando menos del 50% de lo esperado según el monitoreo. "
            "¿Cómo procedo para reclamar garantía? Folio CE-2023-0412."
        ),
    ),

    # Mensaje ambiguo / sin datos de consumo
    "ambiguous_no_data": SimulatedWAMessage(
        from_number="+525512345678",
        body="Hola quiero paneles solares para mi negocio, ¿cuánto cuesta?",
    ),

    # Lead con presupuesto ajustado
    "budget_constrained": SimulatedWAMessage(
        from_number="+525533334444",
        body=(
            "Buenos días. Quiero instalar paneles pero mi presupuesto es de "
            "máximo $60,000 pesos. Mi consumo es de 350 kWh al mes en CDMX. "
            "¿Alcanza para algo decente?"
        ),
    ),

    # Lead municipal / gobierno
    "municipal_rfp": SimulatedWAMessage(
        from_number="+525555556666",
        body=(
            "El Municipio de Tlalnepantla requiere cotización formal para "
            "instalación de sistema solar en edificio de oficinas. Consumo: "
            "8,500 kWh mensuales. Necesitamos propuesta técnica con ROI y "
            "memoria de cálculo para licitación."
        ),
    ),
}


def get_message(key: str) -> SimulatedWAMessage:
    """Obtiene un mensaje dummy por nombre."""
    if key not in INBOUND_MESSAGES:
        raise KeyError(f"Mensaje '{key}' no encontrado. Disponibles: {list(INBOUND_MESSAGES)}")
    return INBOUND_MESSAGES[key]


def parse_inbound(payload: dict) -> dict:
    """
    Parsea un webhook payload de WhatsApp (Meta Cloud API format)
    y retorna un dict normalizado para los agentes.
    """
    try:
        msg = payload["entry"][0]["changes"][0]["value"]["messages"][0]
        contact = payload["entry"][0]["changes"][0]["value"]["contacts"][0]
        return {
            "lead_id":    msg["from"],
            "name":       contact["profile"]["name"],
            "text":       msg["text"]["body"],
            "channel":    "whatsapp",
            "message_id": msg["id"],
            "timestamp":  msg["timestamp"],
        }
    except (KeyError, IndexError) as exc:
        raise ValueError(f"Payload de WhatsApp malformado: {exc}") from exc
