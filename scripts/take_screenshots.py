"""
Toma screenshots de cada sección de close.energy (localhost:3000)
para el onboarding interactivo.
"""

import asyncio, os
from playwright.async_api import async_playwright

BASE  = "http://localhost:3000"
OUT   = os.path.join(os.path.dirname(__file__), "..", "public", "onboarding-shots")
os.makedirs(OUT, exist_ok=True)

SHOTS = [
    # (filename, url, selector_to_highlight, scroll_y, viewport_clip)
    # viewport_clip = None → full-width screenshot of element
    ("01_navbar.png",          "/", "nav",                           0,    None),
    ("02_hero.png",            "/", "section:first-of-type",         0,    None),
    ("03_hero_ctas.png",       "/", None,                            0,    {"x":0,"y":360,"width":1280,"height":200}),
    ("04_dashboard_preview.png","/", None,                           0,    {"x":560,"y":100,"width":700,"height":520}),
    ("05_problem.png",         "/", None,                            700,  None),
    ("06_metrics.png",         "/", None,                            1500, None),
    ("07_platform_panels.png", "/", None,                            2200, None),
    ("08_quoting_agent.png",   "/", None,                            3400, None),
    ("09_quoting_steps.png",   "/", None,                            3800, None),
    ("10_followup_agent.png",  "/", None,                            4600, None),
    ("11_security.png",        "/", None,                            5400, None),
    ("12_faq.png",             "/", None,                            6200, None),
    ("13_cta.png",             "/", None,                            7000, None),
    ("14_contact_form.png",    "/contact", None,                     0,    None),
]

async def shot(page, filename, url, selector, scroll_y, clip):
    await page.goto(BASE + url, wait_until="networkidle")
    await page.wait_for_timeout(800)

    if scroll_y:
        await page.evaluate(f"window.scrollTo(0, {scroll_y})")
        await page.wait_for_timeout(600)

    path = os.path.join(OUT, filename)

    if selector:
        el = page.locator(selector).first
        await el.scroll_into_view_if_needed()
        await page.wait_for_timeout(400)
        await el.screenshot(path=path)
    elif clip:
        await page.screenshot(path=path, clip=clip)
    else:
        # screenshot de lo visible en viewport
        await page.screenshot(path=path)

    print(f"  ✓  {filename}")
    return path

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        ctx     = await browser.new_context(
            viewport={"width": 1280, "height": 800},
            device_scale_factor=2,     # retina → screenshots nítidos
        )
        page = await ctx.new_page()

        print("Tomando screenshots…")
        paths = []
        for args in SHOTS:
            try:
                path = await shot(page, *args)
                paths.append(path)
            except Exception as e:
                print(f"  ✗  {args[0]}: {e}")

        await browser.close()
        print(f"\nListo — {len(paths)} screenshots en {OUT}")

asyncio.run(main())
