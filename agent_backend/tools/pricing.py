"""Panel and inverter pricing tools (catalog lookup)."""

from __future__ import annotations

# Catálogo de precios dummy (MXN, precio instalador sin IVA)
PANEL_CATALOG: dict[str, dict] = {
    "jinko-545": {
        "model":      "Jinko Tiger Neo 545W",
        "watt_peak":  545,
        "price_unit": 4_200,
        "stock":      True,
        "warranty_years": 25,
    },
    "longi-540": {
        "model":      "LONGi Hi-MO 6 540W",
        "watt_peak":  540,
        "price_unit": 3_950,
        "stock":      True,
        "warranty_years": 25,
    },
    "canadian-550": {
        "model":      "Canadian Solar HiHero 550W",
        "watt_peak":  550,
        "price_unit": 4_500,
        "stock":      False,
        "warranty_years": 25,
    },
}

INVERTER_CATALOG: dict[str, dict] = {
    "fronius-5kw": {
        "model": "Fronius Primo 5.0-1",
        "power_kw": 5.0,
        "price_unit": 22_000,
        "warranty_years": 7,
    },
    "fronius-10kw": {
        "model": "Fronius Symo 10.0-3",
        "power_kw": 10.0,
        "price_unit": 35_000,
        "warranty_years": 7,
    },
    "sma-20kw": {
        "model": "SMA Sunny Tripower 20000TL",
        "power_kw": 20.0,
        "price_unit": 58_000,
        "warranty_years": 5,
    },
    "huawei-30kw": {
        "model": "Huawei SUN2000-30KTL",
        "power_kw": 30.0,
        "price_unit": 72_000,
        "warranty_years": 5,
    },
}

VOLUME_DISCOUNTS = [
    (50, 0.10),
    (20, 0.07),
    (10, 0.04),
    (1,  0.00),
]


def _volume_discount(qty: int) -> float:
    for threshold, pct in VOLUME_DISCOUNTS:
        if qty >= threshold:
            return pct
    return 0.0


def lookup_panel_price(panel_sku: str, quantity: int) -> dict:
    """Retorna precio de panel con descuento por volumen."""
    sku = panel_sku.lower().replace(" ", "-")
    item = PANEL_CATALOG.get(sku)

    if not item:
        # Fallback: buscar por coincidencia parcial
        for key, val in PANEL_CATALOG.items():
            if sku in key or key in sku:
                item = val
                sku  = key
                break

    if not item:
        return {"error": f"SKU '{panel_sku}' no encontrado en catálogo"}

    discount   = _volume_discount(quantity)
    unit_price = item["price_unit"] * (1 - discount)
    total      = unit_price * quantity

    return {
        "sku":             sku,
        "model":           item["model"],
        "watt_peak":       item["watt_peak"],
        "quantity":        quantity,
        "unit_price_mxn":  round(unit_price, 2),
        "total_mxn":       round(total, 2),
        "discount_pct":    round(discount * 100, 1),
        "in_stock":        item["stock"],
        "warranty_years":  item["warranty_years"],
    }


def lookup_inverter_price(inverter_sku: str) -> dict:
    """Retorna precio de inversor del catálogo."""
    sku  = inverter_sku.lower().replace(" ", "-")
    item = INVERTER_CATALOG.get(sku)

    if not item:
        for key, val in INVERTER_CATALOG.items():
            if any(word in key for word in sku.split("-") if len(word) > 2):
                item = val
                break

    if not item:
        return {"error": f"Inversor '{inverter_sku}' no encontrado"}

    return {
        "model":          item["model"],
        "power_kw":       item["power_kw"],
        "price_mxn":      item["price_unit"],
        "warranty_years": item["warranty_years"],
    }
