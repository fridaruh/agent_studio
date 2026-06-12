"""
Tests unitarios — Close Energy Agent Platform
Datos dummy: mensajes WhatsApp simulados (sin conexión real a Meta/Twilio)
"""

import sys
import os
import pytest

# Permitir imports desde agent_backend/
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from channels.whatsapp_simulator import (
    get_message,
    parse_inbound,
    INBOUND_MESSAGES,
    SimulatedWAMessage,
)
from tools import solar_sizing, pricing, crm
from agents import quoting, followup, service


# ══════════════════════════════════════════════════════════
# Fixtures
# ══════════════════════════════════════════════════════════

@pytest.fixture(autouse=True)
def reset_stores():
    """Limpia el CRM y tickets antes de cada test."""
    crm.clear_db()
    service.clear_tickets()
    yield


@pytest.fixture
def residential_inbound():
    msg = get_message("residential_new_lead")
    return parse_inbound(msg.to_webhook_payload())


@pytest.fixture
def commercial_inbound():
    msg = get_message("commercial_full_data")
    return parse_inbound(msg.to_webhook_payload())


@pytest.fixture
def industrial_inbound():
    msg = get_message("industrial_lead")
    return parse_inbound(msg.to_webhook_payload())


@pytest.fixture
def agrivoltaic_inbound():
    msg = get_message("agrivoltaic_lead")
    return parse_inbound(msg.to_webhook_payload())


@pytest.fixture
def service_fault_inbound():
    msg = get_message("service_fault_report")
    return parse_inbound(msg.to_webhook_payload())


@pytest.fixture
def warranty_inbound():
    msg = get_message("warranty_claim")
    return parse_inbound(msg.to_webhook_payload())


@pytest.fixture
def ambiguous_inbound():
    msg = get_message("ambiguous_no_data")
    return parse_inbound(msg.to_webhook_payload())


@pytest.fixture
def municipal_inbound():
    msg = get_message("municipal_rfp")
    return parse_inbound(msg.to_webhook_payload())


# ══════════════════════════════════════════════════════════
# 1. WhatsApp Simulator
# ══════════════════════════════════════════════════════════

class TestWhatsAppSimulator:

    def test_all_fixtures_available(self):
        assert len(INBOUND_MESSAGES) >= 8

    def test_webhook_payload_shape(self):
        msg = get_message("residential_new_lead")
        payload = msg.to_webhook_payload()
        assert payload["object"] == "whatsapp_business_account"
        assert "entry" in payload
        assert "messages" in payload["entry"][0]["changes"][0]["value"]

    def test_parse_inbound_extracts_fields(self, residential_inbound):
        assert "lead_id" in residential_inbound
        assert "text" in residential_inbound
        assert "channel" in residential_inbound
        assert residential_inbound["channel"] == "whatsapp"

    def test_parse_inbound_malformed_raises(self):
        with pytest.raises(ValueError, match="Payload de WhatsApp malformado"):
            parse_inbound({"broken": True})

    def test_message_ids_are_unique(self):
        ids = [SimulatedWAMessage(from_number="+5255", body="test").message_id for _ in range(50)]
        assert len(set(ids)) == 50

    def test_unknown_key_raises(self):
        with pytest.raises(KeyError):
            get_message("this_does_not_exist")


# ══════════════════════════════════════════════════════════
# 2. Solar Sizing Tool
# ══════════════════════════════════════════════════════════

class TestSolarSizingTool:

    def test_residential_cdmx_sizing(self):
        result = solar_sizing.calculate_system_size(450, "CDMX")
        assert result["system_kw"] > 0
        assert result["panels_count"] >= 1
        assert "inverter_model" in result
        assert result["zone"] == "cdmx"

    def test_commercial_guadalajara_sizing(self):
        result = solar_sizing.calculate_system_size(3500, "Guadalajara", "plano")
        assert result["system_kw"] > 10
        assert result["panels_count"] > 20

    def test_industrial_monterrey_sizing(self):
        result = solar_sizing.calculate_system_size(18000, "Monterrey")
        assert result["system_kw"] > 80
        assert result["inverter_model"] == "Huawei SUN2000-30KTL"

    def test_production_estimate_positive(self):
        result = solar_sizing.calculate_system_size(500, "Mérida")
        assert result["estimated_monthly_kwh"] > 0
        assert result["annual_production_kwh"] > 0

    def test_annual_equals_monthly_times_12(self):
        result = solar_sizing.calculate_system_size(300, "CDMX")
        assert abs(result["annual_production_kwh"] - result["estimated_monthly_kwh"] * 12) < 1

    def test_unknown_location_uses_default(self):
        result = solar_sizing.calculate_system_size(400, "Ciudad Desconocida")
        assert result["irradiance_kwh_m2_day"] == solar_sizing.IRRADIANCE_BY_ZONE["default"]

    def test_roi_residential(self):
        roi = solar_sizing.estimate_roi(5.0, 450, 3.5)
        assert roi["monthly_savings_mxn"] > 0
        assert roi["annual_savings_mxn"] > 0
        assert roi["system_cost_mxn"] > 0
        assert 0 < roi["payback_years"] < 30
        assert "roi_10y_pct" in roi

    def test_roi_commercial_higher_tariff(self):
        roi_res = solar_sizing.estimate_roi(10.0, 1000, 3.5)
        roi_com = solar_sizing.estimate_roi(10.0, 1000, 7.8)
        assert roi_com["monthly_savings_mxn"] > roi_res["monthly_savings_mxn"]
        assert roi_com["payback_years"] < roi_res["payback_years"]

    def test_output_shape_contract(self):
        result = solar_sizing.calculate_system_size(500, "CDMX")
        required_keys = {
            "system_kw", "panels_count", "panel_model",
            "inverter_model", "estimated_monthly_kwh",
            "annual_production_kwh", "zone", "irradiance_kwh_m2_day"
        }
        assert required_keys.issubset(result.keys())

    def test_roi_shape_contract(self):
        roi = solar_sizing.estimate_roi(5.0, 450, 3.5)
        required_keys = {
            "monthly_savings_mxn", "annual_savings_mxn",
            "system_cost_mxn", "payback_years", "roi_10y_pct",
            "total_savings_10y_mxn"
        }
        assert required_keys.issubset(roi.keys())


# ══════════════════════════════════════════════════════════
# 3. Pricing Tool
# ══════════════════════════════════════════════════════════

class TestPricingTool:

    def test_panel_price_known_sku(self):
        result = pricing.lookup_panel_price("jinko-545", 10)
        assert result["quantity"] == 10
        assert result["unit_price_mxn"] > 0
        assert result["total_mxn"] == pytest.approx(result["unit_price_mxn"] * 10, rel=1e-3)

    def test_panel_price_volume_discount_applied(self):
        result_small = pricing.lookup_panel_price("jinko-545", 5)
        result_large = pricing.lookup_panel_price("jinko-545", 20)
        assert result_large["discount_pct"] > result_small["discount_pct"]
        assert result_large["unit_price_mxn"] < result_small["unit_price_mxn"]

    def test_panel_price_50_units_max_discount(self):
        result = pricing.lookup_panel_price("jinko-545", 50)
        assert result["discount_pct"] == pytest.approx(10.0)

    def test_panel_price_unknown_sku_returns_error(self):
        result = pricing.lookup_panel_price("panel-fantasma-9000", 5)
        assert "error" in result

    def test_panel_in_stock_flag(self):
        in_stock     = pricing.lookup_panel_price("jinko-545", 1)
        out_of_stock = pricing.lookup_panel_price("canadian-550", 1)
        assert in_stock["in_stock"] is True
        assert out_of_stock["in_stock"] is False

    def test_inverter_price_lookup(self):
        result = pricing.lookup_inverter_price("fronius-5kw")
        assert result["power_kw"] == 5.0
        assert result["price_mxn"] > 0

    def test_inverter_unknown_returns_error(self):
        result = pricing.lookup_inverter_price("inversor-inventado")
        assert "error" in result

    def test_panel_price_shape_contract(self):
        result = pricing.lookup_panel_price("longi-540", 12)
        required = {"sku", "model", "watt_peak", "quantity",
                    "unit_price_mxn", "total_mxn", "discount_pct", "in_stock", "warranty_years"}
        assert required.issubset(result.keys())


# ══════════════════════════════════════════════════════════
# 4. CRM Tool
# ══════════════════════════════════════════════════════════

class TestCRMTool:

    def test_create_and_get_lead(self):
        lead = crm.create_lead("lead-001", "Test User", "+525500000001", "whatsapp")
        assert lead["lead_id"] == "lead-001"
        assert crm.get_lead("lead-001") is not None

    def test_update_lead_fields(self):
        crm.create_lead("lead-002", "Ana García", "+525500000002", "email")
        updated = crm.update_lead("lead-002", monthly_kwh=800.0, location="monterrey")
        assert updated["monthly_kwh"] == 800.0
        assert updated["location"] == "monterrey"

    def test_update_stage(self):
        crm.create_lead("lead-003", "Pedro López", "+525500000003", "whatsapp")
        result = crm.update_lead_stage("lead-003", crm.LeadStage.QUOTE_SENT, event="quote_sent")
        assert result["stage"] == crm.LeadStage.QUOTE_SENT
        assert any(e["event"] == "quote_sent" for e in result["events"])

    def test_list_leads_by_stage(self):
        crm.create_lead("lead-010", "A", "+1", "whatsapp")
        crm.create_lead("lead-011", "B", "+2", "whatsapp")
        crm.update_lead_stage("lead-010", crm.LeadStage.QUOTE_SENT)
        crm.update_lead_stage("lead-011", crm.LeadStage.FOLLOW_UP)
        quote_leads = crm.list_leads_by_stage(crm.LeadStage.QUOTE_SENT)
        assert len(quote_leads) == 1
        assert quote_leads[0]["lead_id"] == "lead-010"

    def test_get_nonexistent_lead_returns_none(self):
        assert crm.get_lead("lead-doesnt-exist") is None

    def test_log_event_appends_to_lead(self):
        crm.create_lead("lead-020", "X", "+1", "whatsapp")
        crm.log_event("lead-020", "quote_viewed", {"source": "email"})
        lead = crm.get_lead("lead-020")
        assert any(e["event"] == "quote_viewed" for e in lead["events"])


# ══════════════════════════════════════════════════════════
# 5. Quoting Agent — Qualificación
# ══════════════════════════════════════════════════════════

class TestQuotingAgentQualification:

    def test_qualify_residential_with_kwh(self):
        q = quoting.qualify_lead("Mi consumo es de 450 kWh mensuales en CDMX, techo inclinado")
        assert q.is_qualified
        assert q.monthly_kwh == pytest.approx(450.0)
        assert q.location == "cdmx"
        assert q.project_type == "residential"

    def test_qualify_from_bill_amount(self):
        q = quoting.qualify_lead("Mi recibo de luz es de $2,800 al mes en CDMX")
        assert q.monthly_kwh > 0
        # $2,800 / $3.5 = 800 kWh aprox
        assert 700 < q.monthly_kwh < 900

    def test_qualify_commercial_detected(self):
        q = quoting.qualify_lead("Tenemos una bodega en Guadalajara, consumo 3,500 kWh")
        assert q.project_type == "commercial"
        assert q.location == "guadalajara"
        assert q.tariff_mxn > 4.0   # tarifa comercial

    def test_qualify_industrial_detected(self):
        q = quoting.qualify_lead("Distribuidores en Monterrey, 18,000 kWh mensuales")
        assert q.monthly_kwh == pytest.approx(18000.0)
        assert q.location == "monterrey"

    def test_qualify_government_detected(self):
        q = quoting.qualify_lead("El Municipio requiere cotización, 8,500 kWh")
        assert q.project_type == "government"

    def test_qualify_agrivoltaic_detected(self):
        q = quoting.qualify_lead("Rancho en Mérida, 1,200 kWh para riego")
        assert q.project_type == "agrivoltaic"
        assert q.location == "mérida"

    def test_qualify_missing_kwh_not_qualified(self):
        q = quoting.qualify_lead("Quiero paneles solares para mi negocio, ¿cuánto cuesta?")
        assert not q.is_qualified
        assert "monthly_kwh" in q.missing_fields

    def test_flat_roof_detected(self):
        q = quoting.qualify_lead("Tenemos bodega con techo plano en CDMX, 2,000 kWh")
        assert q.roof_type == "plano"

    def test_metallic_roof_detected(self):
        q = quoting.qualify_lead("Nave industrial, techo metálico, Monterrey, 5,000 kWh")
        assert q.roof_type == "metalico"


# ══════════════════════════════════════════════════════════
# 6. Quoting Agent — Propuesta completa
# ══════════════════════════════════════════════════════════

class TestQuotingAgentProposal:

    def _seed_lead(self, lead_id, **kwargs):
        crm.create_lead(lead_id, "Test Lead", "+525500000000", "whatsapp", **kwargs)

    def test_build_proposal_residential(self):
        self._seed_lead("lead-r1")
        q = quoting.QualificationResult(
            is_qualified=True, monthly_kwh=450, location="cdmx",
            roof_type="inclinado", project_type="residential",
            tariff_mxn=3.5, missing_fields=[]
        )
        result = quoting.build_proposal("lead-r1", q)
        assert result["status"] == "proposal_ready"
        assert "spec" in result
        assert "roi" in result
        assert "summary" in result

    def test_build_proposal_commercial(self):
        self._seed_lead("lead-c1")
        q = quoting.QualificationResult(
            is_qualified=True, monthly_kwh=3500, location="guadalajara",
            roof_type="plano", project_type="commercial",
            tariff_mxn=5.2, missing_fields=[]
        )
        result = quoting.build_proposal("lead-c1", q)
        assert result["status"] == "proposal_ready"
        assert result["spec"]["system_kw"] > 10
        assert result["roi"]["monthly_savings_mxn"] > result["roi"]["monthly_savings_mxn"] * 0

    def test_build_proposal_unqualified_returns_prompt(self):
        self._seed_lead("lead-u1")
        q = quoting.QualificationResult(
            is_qualified=False, monthly_kwh=0, location="cdmx",
            roof_type="inclinado", project_type="residential",
            tariff_mxn=3.5, missing_fields=["monthly_kwh"]
        )
        result = quoting.build_proposal("lead-u1", q)
        assert result["status"] == "needs_more_info"
        assert "message" in result
        assert len(result["message"]) > 0

    def test_proposal_updates_crm_stage(self):
        self._seed_lead("lead-s1")
        q = quoting.QualificationResult(
            is_qualified=True, monthly_kwh=600, location="monterrey",
            roof_type="inclinado", project_type="residential",
            tariff_mxn=3.5, missing_fields=[]
        )
        quoting.build_proposal("lead-s1", q)
        lead = crm.get_lead("lead-s1")
        assert lead["stage"] == crm.LeadStage.QUOTE_SENT

    def test_proposal_logs_event(self):
        self._seed_lead("lead-e1")
        q = quoting.QualificationResult(
            is_qualified=True, monthly_kwh=500, location="cdmx",
            roof_type="inclinado", project_type="residential",
            tariff_mxn=3.5, missing_fields=[]
        )
        quoting.build_proposal("lead-e1", q)
        lead = crm.get_lead("lead-e1")
        assert any(e["event"] == "quote_generated" for e in lead["events"])

    def test_roi_payback_is_positive(self):
        self._seed_lead("lead-roi1")
        q = quoting.QualificationResult(
            is_qualified=True, monthly_kwh=800, location="mérida",
            roof_type="inclinado", project_type="residential",
            tariff_mxn=3.5, missing_fields=[]
        )
        result = quoting.build_proposal("lead-roi1", q)
        assert result["roi"]["payback_years"] > 0
        assert result["roi"]["system_cost_mxn"] > 0

    def test_industrial_gets_large_system(self):
        self._seed_lead("lead-ind1")
        q = quoting.QualificationResult(
            is_qualified=True, monthly_kwh=18000, location="monterrey",
            roof_type="metalico", project_type="industrial",
            tariff_mxn=7.8, missing_fields=[]
        )
        result = quoting.build_proposal("lead-ind1", q)
        assert result["spec"]["panels_count"] > 50
        assert result["spec"]["system_kw"] > 80

    def test_output_shape_contract(self):
        self._seed_lead("lead-shape1")
        q = quoting.QualificationResult(
            is_qualified=True, monthly_kwh=400, location="cdmx",
            roof_type="inclinado", project_type="residential",
            tariff_mxn=3.5, missing_fields=[]
        )
        result = quoting.build_proposal("lead-shape1", q)
        required = {"status", "lead_id", "spec", "panel_pricing", "inverter", "roi", "summary"}
        assert required.issubset(result.keys())


# ══════════════════════════════════════════════════════════
# 7. Quoting Agent — Flujo end-to-end desde WhatsApp dummy
# ══════════════════════════════════════════════════════════

class TestQuotingAgentE2E:

    def test_residential_full_flow(self, residential_inbound):
        result = quoting.run(residential_inbound)
        lead = crm.get_lead(residential_inbound["lead_id"])
        assert lead is not None
        assert result["status"] in ("proposal_ready", "needs_more_info")

    def test_commercial_full_flow_proposal_ready(self, commercial_inbound):
        result = quoting.run(commercial_inbound)
        assert result["status"] == "proposal_ready"
        assert result["spec"]["system_kw"] > 10

    def test_industrial_full_flow(self, industrial_inbound):
        result = quoting.run(industrial_inbound)
        assert result["status"] == "proposal_ready"
        assert result["spec"]["panels_count"] > 50

    def test_agrivoltaic_full_flow(self, agrivoltaic_inbound):
        result = quoting.run(agrivoltaic_inbound)
        assert result["status"] == "proposal_ready"
        assert result["project_type"] == "agrivoltaic"

    def test_ambiguous_message_needs_more_info(self, ambiguous_inbound):
        result = quoting.run(ambiguous_inbound)
        assert result["status"] == "needs_more_info"
        assert "monthly_kwh" in result["missing_fields"]

    def test_municipal_rfp_full_flow(self, municipal_inbound):
        result = quoting.run(municipal_inbound)
        assert result["status"] == "proposal_ready"
        assert result["project_type"] == "government"

    def test_lead_created_in_crm_on_first_contact(self, residential_inbound):
        lead_id = residential_inbound["lead_id"]
        assert crm.get_lead(lead_id) is None   # antes del run
        quoting.run(residential_inbound)
        assert crm.get_lead(lead_id) is not None

    def test_duplicate_run_doesnt_duplicate_lead(self, residential_inbound):
        quoting.run(residential_inbound)
        quoting.run(residential_inbound)
        leads = [l for l in crm._DB.values()
                 if l.lead_id == residential_inbound["lead_id"]]
        assert len(leads) == 1


# ══════════════════════════════════════════════════════════
# 8. Follow-up Agent
# ══════════════════════════════════════════════════════════

class TestFollowUpAgent:

    def _lead_in_quote_sent(self, lead_id: str = "lead-fu1") -> str:
        crm.create_lead(lead_id, "María Torres", "+525511111111", "whatsapp",
                        project_type="residential")
        crm.update_lead_stage(lead_id, crm.LeadStage.QUOTE_SENT)
        return lead_id

    def test_generates_followup_for_quote_sent_lead(self):
        lead_id = self._lead_in_quote_sent()
        result = followup.generate_followup(lead_id)
        assert result is not None
        assert result.touch_num == 1
        assert len(result.message) > 0
        assert not result.escalate

    def test_followup_message_contains_name(self):
        lead_id = self._lead_in_quote_sent("lead-fu2")
        result = followup.generate_followup(lead_id)
        assert "María" in result.message

    def test_followup_updates_stage_to_follow_up(self):
        lead_id = self._lead_in_quote_sent("lead-fu3")
        followup.generate_followup(lead_id)
        lead = crm.get_lead(lead_id)
        assert lead["stage"] == crm.LeadStage.FOLLOW_UP

    def test_followup_logs_event(self):
        lead_id = self._lead_in_quote_sent("lead-fu4")
        followup.generate_followup(lead_id)
        lead = crm.get_lead(lead_id)
        assert any(e["event"] == "followup_sent" for e in lead["events"])

    def test_no_followup_for_new_lead(self):
        crm.create_lead("lead-fu5", "X", "+1", "whatsapp")
        # stage = NEW por defecto
        result = followup.generate_followup("lead-fu5")
        assert result is None

    def test_no_followup_for_closed_won(self):
        lead_id = self._lead_in_quote_sent("lead-fu6")
        crm.update_lead_stage(lead_id, crm.LeadStage.CLOSED_WON)
        result = followup.generate_followup(lead_id)
        assert result is None

    def test_escalates_after_3_touches(self):
        lead_id = self._lead_in_quote_sent("lead-fu7")
        # Simular 3 toques anteriores
        for _ in range(3):
            crm.log_event(lead_id, "followup_sent")
        crm.update_lead_stage(lead_id, crm.LeadStage.FOLLOW_UP)
        result = followup.generate_followup(lead_id)
        assert result is not None
        assert result.escalate is True

    def test_commercial_uses_commercial_template(self):
        lead_id = "lead-fu8"
        crm.create_lead(lead_id, "Empresa SA", "+525522222222", "email",
                        project_type="commercial")
        crm.update_lead_stage(lead_id, crm.LeadStage.QUOTE_SENT)
        result = followup.generate_followup(lead_id)
        # Plantilla comercial menciona "área técnica" o "dirección"
        assert result is not None
        assert "Empresa" in result.message or "propuesta" in result.message.lower()

    def test_run_returns_correct_status(self):
        lead_id = self._lead_in_quote_sent("lead-fu9")
        result = followup.run({"lead_id": lead_id})
        assert result["status"] in ("followup_sent", "no_action", "escalate")

    def test_run_no_action_for_nonexistent_lead(self):
        result = followup.run({"lead_id": "lead-nonexistent-xyz"})
        assert result["status"] == "no_action"


# ══════════════════════════════════════════════════════════
# 9. Service Agent
# ══════════════════════════════════════════════════════════

class TestServiceAgent:

    def test_fault_classification(self):
        ticket = service.create_ticket("+525512345678",
            "El inversor está apagado y muestra luz roja, folio CE-2024-0891")
        assert ticket.category == "fault"
        assert ticket.priority == "high"

    def test_warranty_classification(self):
        ticket = service.create_ticket("+525512345678",
            "Quiero reclamar garantía por un panel defectuoso CE-2023-0412")
        assert ticket.category == "warranty"
        assert ticket.priority == "medium"

    def test_maintenance_classification(self):
        ticket = service.create_ticket("+525512345678",
            "Necesito agendar mantenimiento y limpieza de los paneles")
        assert ticket.category == "maintenance"
        assert ticket.priority == "low"

    def test_folio_extraction_found(self, service_fault_inbound):
        ticket = service.create_ticket(
            service_fault_inbound["lead_id"],
            service_fault_inbound["text"]
        )
        assert ticket.folio == "CE-2024-0891"

    def test_folio_extraction_not_found(self):
        ticket = service.create_ticket("+525500000099",
            "Tengo un problema con mi sistema pero no sé mi número de folio")
        assert ticket.folio is None

    def test_installation_data_attached_when_folio_found(self, service_fault_inbound):
        ticket = service.create_ticket(
            service_fault_inbound["lead_id"],
            service_fault_inbound["text"]
        )
        assert ticket.installation is not None
        assert ticket.installation["system_kw"] == pytest.approx(5.45)

    def test_ticket_id_is_unique(self):
        ids = set()
        for i in range(20):
            t = service.create_ticket(f"+5255000000{i:02d}", "Falla en el sistema")
            ids.add(t.ticket_id)
        assert len(ids) == 20

    def test_run_creates_ticket_for_fault(self, service_fault_inbound):
        result = service.run(service_fault_inbound)
        assert result["status"] == "ticket_created"
        assert result["category"] == "fault"
        assert result["priority"] == "high"
        assert result["folio_found"] is True

    def test_run_creates_ticket_for_warranty(self, warranty_inbound):
        result = service.run(warranty_inbound)
        assert result["status"] == "ticket_created"
        assert result["category"] == "warranty"
        assert result["folio_found"] is True

    def test_run_creates_lead_if_not_exists(self, service_fault_inbound):
        lead_id = service_fault_inbound["lead_id"]
        assert crm.get_lead(lead_id) is None
        service.run(service_fault_inbound)
        assert crm.get_lead(lead_id) is not None

    def test_ticket_logged_in_crm_events(self, service_fault_inbound):
        service.run(service_fault_inbound)
        lead = crm.get_lead(service_fault_inbound["lead_id"])
        assert any(e["event"] == "service_ticket_created" for e in lead["events"])

    def test_output_shape_contract(self, service_fault_inbound):
        result = service.run(service_fault_inbound)
        required = {"status", "ticket_id", "category", "priority", "action", "folio_found"}
        assert required.issubset(result.keys())


# ══════════════════════════════════════════════════════════
# 10. Integración cruzada — flujo completo de lead
# ══════════════════════════════════════════════════════════

class TestCrossAgentFlow:

    def test_quote_then_followup_flow(self):
        """Un lead residencial recibe cotización y luego seguimiento."""
        msg = get_message("commercial_full_data")
        inbound = parse_inbound(msg.to_webhook_payload())

        # Paso 1: Quoting Agent
        quote_result = quoting.run(inbound)
        assert quote_result["status"] == "proposal_ready"

        lead_id = inbound["lead_id"]
        lead    = crm.get_lead(lead_id)
        assert lead["stage"] == crm.LeadStage.QUOTE_SENT

        # Paso 2: Follow-up Agent (lead en quote_sent sin respuesta)
        fu_result = followup.run({"lead_id": lead_id})
        assert fu_result["status"] == "followup_sent"

        lead = crm.get_lead(lead_id)
        assert lead["stage"] == crm.LeadStage.FOLLOW_UP

    def test_service_request_from_existing_lead(self):
        """Un cliente ya en el CRM abre un ticket de servicio."""
        # El lead ya existe (fue cotizado antes)
        lead_id = "+525512345678"
        crm.create_lead(lead_id, "Carlos Mendoza", lead_id, "whatsapp",
                        project_type="residential")
        crm.update_lead_stage(lead_id, crm.LeadStage.CLOSED_WON)

        msg     = get_message("service_fault_report")
        inbound = parse_inbound(msg.to_webhook_payload())
        result  = service.run(inbound)

        assert result["status"] == "ticket_created"
        assert result["priority"] == "high"

        # El lead ya existía — no se crea duplicado
        leads = [l for l in crm._DB.values() if l.lead_id == lead_id]
        assert len(leads) == 1

    def test_multiple_leads_isolated(self):
        """Múltiples leads no se interfieren entre sí."""
        msgs = [
            get_message("residential_new_lead"),
            get_message("commercial_full_data"),
            get_message("industrial_lead"),
        ]
        inbounds = [parse_inbound(m.to_webhook_payload()) for m in msgs]
        results  = [quoting.run(i) for i in inbounds]

        lead_ids = [i["lead_id"] for i in inbounds]
        assert len(set(lead_ids)) == 3   # todos distintos

        for r in results:
            assert r["status"] in ("proposal_ready", "needs_more_info")
