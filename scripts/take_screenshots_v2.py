"""Screenshots precisos de cada elemento interactivo de Close Energy."""

import asyncio, os, base64
from playwright.async_api import async_playwright

BASE = "http://localhost:3000"
OUT  = os.path.join(os.path.dirname(__file__), "..", "public", "onboarding-shots")
os.makedirs(OUT, exist_ok=True)

async def go(page, url, scroll_y=0, wait_ms=700):
    await page.goto(BASE + url, wait_until="networkidle")
    await page.wait_for_timeout(400)
    if scroll_y:
        await page.evaluate(f"window.scrollTo(0,{scroll_y})")
        await page.wait_for_timeout(wait_ms)

async def shot_clip(page, filename, clip):
    await page.screenshot(path=os.path.join(OUT, filename), clip=clip)
    print(f"  ✓  {filename}")

async def shot_el(page, filename, selector, padding=0):
    el = page.locator(selector).first
    await el.scroll_into_view_if_needed()
    await page.wait_for_timeout(400)
    box = await el.bounding_box()
    if box:
        await page.screenshot(path=os.path.join(OUT, filename), clip={
            "x": max(0, box["x"] - padding),
            "y": max(0, box["y"] - padding),
            "width":  box["width"]  + padding * 2,
            "height": box["height"] + padding * 2,
        })
        print(f"  ✓  {filename}")
    else:
        print(f"  ✗  {filename} — elemento no encontrado")

async def shot_full(page, filename):
    await page.screenshot(path=os.path.join(OUT, filename), full_page=False)
    print(f"  ✓  {filename}")

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        ctx = await browser.new_context(
            viewport={"width": 1280, "height": 800},
            device_scale_factor=2,
        )
        page = await ctx.new_page()

        # ── 1. NAVBAR completo ──────────────────────────────────
        await go(page, "/")
        await shot_el(page, "nav_full.png", "nav", padding=0)

        # ── 2. HERO + dashboard — página entera arriba ──────────
        await go(page, "/")
        await shot_full(page, "hero_full.png")

        # ── 3. Dashboard mockup dentro del hero ─────────────────
        await go(page, "/")
        # El dashboard es la imagen/mockup dentro del hero
        await shot_el(page, "dashboard_mockup.png",
                      "img[alt*='dashboard'], img[alt*='Dashboard'], "
                      ".dashboard, [class*='dashboard'], [class*='Dashboard']",
                      padding=16)

        # ── 4. Botones CTA del hero ──────────────────────────────
        await go(page, "/")
        await shot_el(page, "hero_ctas.png", "section:first-of-type .flex, section:first-of-type [class*='cta'], section:first-of-type [class*='flex']", padding=8)

        # ── 5. Panel 1 de plataforma — "Centraliza cada lead" ───
        await go(page, "/", scroll_y=2400, wait_ms=900)
        await shot_full(page, "platform_panel1.png")

        # ── 6. Panel 2 — toggle al segundo panel ────────────────
        await go(page, "/", scroll_y=2400, wait_ms=900)
        # Intentar hacer click en el segundo tab/panel
        tabs = page.locator("button").all()
        btns = await page.locator("button").all()
        for btn in btns:
            txt = await btn.text_content()
            if txt and "pipeline" in txt.lower():
                await btn.click()
                await page.wait_for_timeout(600)
                break
        await shot_full(page, "platform_panel2.png")

        # ── 7. Sección completa de agente de cotización ─────────
        await go(page, "/", scroll_y=3300, wait_ms=800)
        await shot_full(page, "quoting_agent_top.png")

        # ── 8. Stepper del agente de cotización ─────────────────
        await go(page, "/", scroll_y=3700, wait_ms=800)
        await shot_full(page, "quoting_steps_detail.png")

        # ── 9. Agente de seguimiento completo ───────────────────
        await go(page, "/", scroll_y=4700, wait_ms=800)
        await shot_full(page, "followup_full.png")

        # ── 10. Timeline de seguimiento ──────────────────────────
        await go(page, "/", scroll_y=5100, wait_ms=800)
        await shot_full(page, "followup_timeline.png")

        # ── 11. Seguridad ────────────────────────────────────────
        await go(page, "/", scroll_y=5800, wait_ms=800)
        await shot_full(page, "security_full.png")

        # ── 12. FAQ — cerrado ────────────────────────────────────
        await go(page, "/", scroll_y=6600, wait_ms=800)
        await shot_full(page, "faq_closed.png")

        # ── 13. FAQ — abrir primer item ──────────────────────────
        await go(page, "/", scroll_y=6600, wait_ms=800)
        faq_btns = await page.locator("button[aria-expanded], details summary, [class*='accordion'] button, [class*='faq'] button").all()
        if faq_btns:
            await faq_btns[0].click()
            await page.wait_for_timeout(500)
        await shot_full(page, "faq_open.png")

        # ── 14. CTA final ────────────────────────────────────────
        await go(page, "/", scroll_y=7200, wait_ms=800)
        await shot_full(page, "cta_final.png")

        # ── 15. Formulario de contacto — parte 1 ────────────────
        await go(page, "/contact", scroll_y=0)
        await shot_full(page, "contact_top.png")

        # ── 16. Formulario — parte 2 (tu operación) ─────────────
        await go(page, "/contact", scroll_y=700)
        await shot_full(page, "contact_operation.png")

        # ── 17. Formulario — submit ──────────────────────────────
        await go(page, "/contact", scroll_y=1400)
        await shot_full(page, "contact_submit.png")

        # ── 18. Toggle idioma EN/ES ──────────────────────────────
        await go(page, "/")
        await shot_clip(page, "lang_toggle.png", {
            "x": 1050, "y": 0, "width": 230, "height": 56
        })

        await browser.close()
        print(f"\n✓ Screenshots listos en {OUT}")

asyncio.run(main())
