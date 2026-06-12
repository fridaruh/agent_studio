"""Solar system sizing and ROI calculation tools."""

from __future__ import annotations
from dataclasses import dataclass


# kWh/kWp/día por zona (irradiancia promedio México)
IRRADIANCE_BY_ZONE: dict[str, float] = {
    "cdmx": 4.5,
    "guadalajara": 5.1,
    "monterrey": 5.3,
    "mérida": 5.8,
    "default": 4.8,
}

SYSTEM_LOSS_FACTOR = 0.80   # pérdidas por temperatura, polvo, cableado
PANEL_WATT_PEAK    = 545    # Wp por panel (referencia Jinko Tiger Neo 545W)
INVERTER_EFFICIENCY = 0.97


@dataclass
class SystemSpec:
    system_kw: float
    panels_count: int
    inverter_model: str
    estimated_monthly_kwh: float
    annual_production_kwh: float
    zone: str


@dataclass
class ROIReport:
    monthly_savings_mxn: float
    annual_savings_mxn: float
    system_cost_mxn: float
    payback_years: float
    roi_10y_pct: float


def calculate_system_size(monthly_kwh: float, location: str, roof_type: str = "inclinado") -> dict:
    """Calcula el tamaño del sistema solar basado en consumo y ubicación."""
    zone_key = location.lower().split(",")[0].strip()
    irr = IRRADIANCE_BY_ZONE.get(zone_key, IRRADIANCE_BY_ZONE["default"])

    # Ajuste por tipo de techo
    tilt_factor = 1.0 if roof_type == "inclinado" else 0.92

    daily_kwh = monthly_kwh / 30
    system_kw = daily_kwh / (irr * SYSTEM_LOSS_FACTOR * tilt_factor)

    panels = max(1, round(system_kw * 1000 / PANEL_WATT_PEAK))
    actual_kw = round(panels * PANEL_WATT_PEAK / 1000, 2)

    # Selección de inversor simplificada
    if actual_kw <= 5:
        inverter = "Fronius Primo 5.0-1"
    elif actual_kw <= 10:
        inverter = "Fronius Symo 10.0-3"
    elif actual_kw <= 20:
        inverter = "SMA Sunny Tripower 20000TL"
    else:
        inverter = "Huawei SUN2000-30KTL"

    monthly_prod = actual_kw * irr * 30 * SYSTEM_LOSS_FACTOR * tilt_factor
    annual_prod  = monthly_prod * 12

    return {
        "system_kw": actual_kw,
        "panels_count": panels,
        "panel_model": "Jinko Tiger Neo 545W",
        "inverter_model": inverter,
        "estimated_monthly_kwh": round(monthly_prod, 1),
        "annual_production_kwh": round(annual_prod, 1),
        "zone": zone_key,
        "irradiance_kwh_m2_day": irr,
    }


def estimate_roi(system_kw: float, monthly_kwh: float, tariff_mxn: float) -> dict:
    """Calcula ROI, período de recuperación y ahorro proyectado a 10 años."""
    # Costo estimado del sistema (MXN) — $18,000/kWp instalado
    cost_per_kwp = 18_000
    system_cost  = system_kw * cost_per_kwp

    # Producción mensual estimada y ahorro
    irr = IRRADIANCE_BY_ZONE["default"]
    monthly_prod_kwh    = system_kw * irr * 30 * SYSTEM_LOSS_FACTOR
    covered_kwh         = min(monthly_prod_kwh, monthly_kwh)
    monthly_savings_mxn = covered_kwh * tariff_mxn
    annual_savings_mxn  = monthly_savings_mxn * 12

    payback_years = system_cost / annual_savings_mxn if annual_savings_mxn > 0 else 99.0

    # ROI neto a 10 años
    total_savings_10y = annual_savings_mxn * 10
    roi_10y = ((total_savings_10y - system_cost) / system_cost) * 100

    return {
        "monthly_savings_mxn": round(monthly_savings_mxn, 2),
        "annual_savings_mxn":  round(annual_savings_mxn, 2),
        "system_cost_mxn":     round(system_cost, 2),
        "payback_years":       round(payback_years, 1),
        "roi_10y_pct":         round(roi_10y, 1),
        "total_savings_10y_mxn": round(total_savings_10y, 2),
    }
