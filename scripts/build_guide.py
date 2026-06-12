"""
Genera user_guide.html con todas las imágenes embebidas como base64.
"""
import base64, os, re

SHOTS = os.path.join(os.path.dirname(__file__), "..", "public", "onboarding-shots")

def b64(filename):
    path = os.path.join(SHOTS, filename)
    if not os.path.exists(path):
        print(f"  ✗ no encontrado: {filename}")
        return ""
    with open(path, "rb") as f:
        return "data:image/png;base64," + base64.b64encode(f.read()).decode()

imgs = {k: b64(v) for k, v in {
    "hero":             "hero_full.png",
    "nav":              "nav_full.png",
    "panel1":           "platform_panel1.png",
    "panel2":           "platform_panel2.png",
    "quoting_top":      "quoting_agent_top.png",
    "quoting_steps":    "quoting_steps_detail.png",
    "followup":         "followup_full.png",
    "followup_tl":      "followup_timeline.png",
    "security":         "security_full.png",
    "faq_closed":       "faq_closed.png",
    "faq_open":         "faq_open.png",
    "cta":              "cta_final.png",
    "contact_top":      "contact_top.png",
    "contact_op":       "contact_operation.png",
    "contact_submit":   "contact_submit.png",
    "lang":             "lang_toggle.png",
}.items()}

print("Imágenes cargadas:", sum(1 for v in imgs.values() if v))

HTML = f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Guía de uso — Close Energy</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>
:root{{
  --ink:#0a0a0f; --ink-m:#3a3c47; --ink-s:#6b7280; --ink-t:#9ca3af;
  --primary:#374151; --primary-h:#1f2937;
  --canvas:#fff; --s1:#f9fafb; --s2:#f3f4f6;
  --hl:#e5e7eb; --hls:#d1d5db;
  --green:#16a34a; --green-bg:#f0fdf4; --green-bd:#bbf7d0;
  --blue:#2563eb; --blue-bg:#eff6ff; --blue-bd:#bfdbfe;
  --amber:#d97706; --amber-bg:#fffbeb; --amber-bd:#fde68a;
  --red:#dc2626; --red-bg:#fef2f2;
  --font:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;
}}
*,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
html{{scroll-behavior:smooth;font-size:16px}}
body{{font-family:var(--font);background:var(--s1);color:var(--ink);-webkit-font-smoothing:antialiased}}

/* ── SIDEBAR LAYOUT ── */
.app{{display:grid;grid-template-columns:260px 1fr;min-height:100vh}}
@media(max-width:900px){{.app{{grid-template-columns:1fr}}.sidebar{{display:none}}}}

/* ── SIDEBAR ── */
.sidebar{{
  position:sticky;top:0;height:100vh;overflow-y:auto;
  background:var(--canvas);border-right:1px solid var(--hl);
  padding:24px 0;
  scrollbar-width:thin;
}}
.sidebar-logo{{
  display:flex;align-items:center;gap:10px;
  padding:0 20px 20px;border-bottom:1px solid var(--hl);margin-bottom:16px;
}}
.sidebar-logo-text{{font-size:16px;font-weight:700;letter-spacing:-.03em;color:var(--ink)}}
.sidebar-logo-text span{{color:var(--primary)}}
.sidebar-tag{{font-size:10px;background:var(--green-bg);color:var(--green);border:1px solid var(--green-bd);border-radius:999px;padding:2px 8px;font-weight:600}}
.nav-section{{padding:8px 20px 4px;font-size:10px;font-weight:600;letter-spacing:.7px;text-transform:uppercase;color:var(--ink-t)}}
.nav-link{{
  display:flex;align-items:center;gap:10px;
  padding:8px 20px;font-size:13px;color:var(--ink-s);
  text-decoration:none;border-radius:0;cursor:pointer;
  transition:background .15s,color .15s;
  border-left:3px solid transparent;
}}
.nav-link:hover{{background:var(--s1);color:var(--ink)}}
.nav-link.active{{background:var(--s1);color:var(--primary);border-left-color:var(--primary);font-weight:500}}
.nav-icon{{font-size:15px;width:20px;text-align:center;flex-shrink:0}}
.progress-track{{
  height:2px;background:var(--hl);margin:20px 20px 0;border-radius:1px;
}}
.progress-fill{{
  height:2px;background:var(--primary);border-radius:1px;width:0%;
  transition:width .3s ease;
}}
.progress-label{{font-size:11px;color:var(--ink-t);padding:6px 20px;}}

/* ── MAIN CONTENT ── */
.main{{overflow-y:auto}}

/* ── CHAPTER ── */
.chapter{{
  max-width:800px;margin:0 auto;padding:60px 40px;
  border-bottom:1px solid var(--hl);
}}
.chapter:last-child{{border-bottom:none}}
@media(max-width:640px){{.chapter{{padding:40px 20px}}}}

/* ── CHAPTER HEADER ── */
.ch-eyebrow{{
  display:inline-flex;align-items:center;gap:8px;
  font-size:11px;font-weight:600;letter-spacing:.6px;text-transform:uppercase;
  color:var(--primary);margin-bottom:10px;
}}
.step-badge{{
  display:inline-flex;align-items:center;justify-content:center;
  width:22px;height:22px;border-radius:50%;
  background:var(--primary);color:#fff;font-size:11px;font-weight:700;
}}
.ch-title{{font-size:clamp(22px,3vw,32px);font-weight:700;letter-spacing:-.025em;line-height:1.15;margin-bottom:12px;color:var(--ink)}}
.ch-desc{{font-size:15px;color:var(--ink-m);line-height:1.65;max-width:620px;margin-bottom:28px}}

/* ── SCREENSHOT FRAME ── */
.screen-wrap{{
  position:relative;border-radius:12px;overflow:visible;
  margin:24px 0;
}}
.screen-img{{
  width:100%;border-radius:12px;display:block;
  border:1px solid var(--hl);
  box-shadow:0 4px 24px rgba(0,0,0,.08),0 0 0 1px var(--hl);
}}
.screen-caption{{
  text-align:center;font-size:12px;color:var(--ink-t);margin-top:8px;font-style:italic;
}}

/* ── ANNOTATION SYSTEM ── */
.annotated{{position:relative;display:inline-block;width:100%}}
.pin{{
  position:absolute;
  width:26px;height:26px;border-radius:50%;
  background:var(--primary);color:#fff;
  font-size:12px;font-weight:700;
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;
  box-shadow:0 2px 8px rgba(55,65,81,.4);
  border:2px solid #fff;
  transform:translate(-50%,-50%);
  z-index:10;
  transition:transform .15s,box-shadow .15s;
}}
.pin:hover{{transform:translate(-50%,-50%) scale(1.15);box-shadow:0 4px 14px rgba(55,65,81,.5)}}
.pin.green{{background:var(--green)}}
.pin.blue{{background:var(--blue)}}
.pin.amber{{background:var(--amber)}}
.pin.red{{background:var(--red)}}

/* Tooltip on hover */
.pin::after{{
  content:attr(data-tip);
  position:absolute;
  left:50%;bottom:calc(100% + 10px);
  transform:translateX(-50%);
  background:var(--ink);color:#fff;
  font-size:12px;font-weight:500;font-style:normal;
  white-space:nowrap;padding:6px 12px;border-radius:6px;
  pointer-events:none;opacity:0;transition:opacity .2s;
  font-family:var(--font);
  max-width:240px;white-space:normal;text-align:center;line-height:1.4;
}}
.pin::before{{
  content:'';position:absolute;
  left:50%;bottom:calc(100% + 4px);transform:translateX(-50%);
  border:5px solid transparent;border-top-color:var(--ink);
  pointer-events:none;opacity:0;transition:opacity .2s;
}}
.pin:hover::after,.pin:hover::before{{opacity:1}}

/* Highlight box overlay */
.highlight{{
  position:absolute;border-radius:6px;pointer-events:none;
  border:2px solid;animation:pulse-border 2s ease infinite;
}}
.highlight.green{{border-color:var(--green);background:rgba(22,163,74,.06)}}
.highlight.blue{{border-color:var(--blue);background:rgba(37,99,235,.06)}}
.highlight.amber{{border-color:var(--amber);background:rgba(217,119,6,.06)}}
@keyframes pulse-border{{0%,100%{{opacity:.7}}50%{{opacity:1}}}}

/* ── CALLOUT BOXES ── */
.callout{{
  display:flex;gap:14px;border-radius:10px;padding:16px 18px;
  margin:16px 0;font-size:14px;line-height:1.6;
  border:1px solid;
}}
.callout-icon{{font-size:18px;flex-shrink:0;margin-top:1px}}
.callout-body strong{{font-weight:600}}
.callout.tip{{background:var(--blue-bg);border-color:var(--blue-bd);color:#1e40af}}
.callout.note{{background:var(--s1);border-color:var(--hls);color:var(--ink-m)}}
.callout.warn{{background:var(--amber-bg);border-color:var(--amber-bd);color:#92400e}}
.callout.do{{background:var(--green-bg);border-color:var(--green-bd);color:#14532d}}

/* ── STEP LIST ── */
.step-list{{list-style:none;margin:16px 0;display:flex;flex-direction:column;gap:0}}
.step-li{{
  display:grid;grid-template-columns:36px 1fr;gap:14px;
  padding:14px 0;border-bottom:1px solid var(--hl);
  align-items:flex-start;
}}
.step-li:last-child{{border-bottom:none}}
.step-circle{{
  width:30px;height:30px;border-radius:50%;
  background:var(--primary);color:#fff;
  font-size:13px;font-weight:700;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;margin-top:1px;
}}
.step-text strong{{display:block;font-size:14px;color:var(--ink);margin-bottom:3px}}
.step-text span{{font-size:13px;color:var(--ink-s);line-height:1.5}}

/* ── FIELD TABLE ── */
.field-table{{width:100%;border-collapse:collapse;font-size:14px;margin:16px 0}}
.field-table th{{
  background:var(--s2);font-size:11px;font-weight:600;letter-spacing:.4px;
  text-transform:uppercase;color:var(--ink-t);
  padding:8px 12px;text-align:left;border:1px solid var(--hl);
}}
.field-table td{{padding:10px 12px;border:1px solid var(--hl);color:var(--ink-m);vertical-align:top}}
.field-table td:first-child{{font-weight:500;color:var(--ink);white-space:nowrap}}
.field-table tr:nth-child(even) td{{background:var(--s1)}}
.req{{color:var(--red);font-weight:700}}

/* ── TAG ── */
.tag{{
  display:inline-block;font-size:11px;font-weight:500;
  padding:2px 8px;border-radius:999px;
  background:var(--s2);color:var(--ink-s);border:1px solid var(--hl);
}}
.tag.green{{background:var(--green-bg);color:var(--green);border-color:var(--green-bd)}}
.tag.blue{{background:var(--blue-bg);color:var(--blue);border-color:var(--blue-bd)}}
.tag.amber{{background:var(--amber-bg);color:var(--amber);border-color:var(--amber-bd)}}

/* ── DIVIDER ── */
hr.section-div{{border:none;border-top:1px solid var(--hl);margin:32px 0}}

/* ── MOBILE TOC ── */
.mobile-toc{{
  display:none;position:sticky;top:0;z-index:50;
  background:rgba(255,255,255,.95);backdrop-filter:blur(8px);
  border-bottom:1px solid var(--hl);padding:10px 20px;
}}
@media(max-width:900px){{.mobile-toc{{display:flex;align-items:center;gap:12px}}}}
.mobile-toc select{{
  flex:1;font-size:13px;border:1px solid var(--hl);border-radius:6px;
  padding:6px 10px;background:var(--canvas);color:var(--ink);font-family:var(--font);
}}

/* ── INTRO CARD ── */
.intro-card{{
  background:var(--canvas);border:1px solid var(--hl);border-radius:14px;
  padding:32px;margin-bottom:28px;
}}
.intro-card h2{{font-size:22px;font-weight:700;letter-spacing:-.02em;margin-bottom:8px}}
.intro-card p{{font-size:14px;color:var(--ink-s);line-height:1.65}}

/* ── GRID 2 ── */
.grid2{{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0}}
@media(max-width:600px){{.grid2{{grid-template-columns:1fr}}}}
.mini-card{{
  background:var(--canvas);border:1px solid var(--hl);border-radius:10px;
  padding:16px;font-size:13px;color:var(--ink-m);
}}
.mini-card strong{{display:block;font-size:14px;color:var(--ink);margin-bottom:4px}}
.mini-card .ico{{font-size:22px;margin-bottom:10px}}

/* ── CURSOR ANNOTATION ── */
.cursor-label{{
  display:inline-flex;align-items:center;gap:6px;
  background:var(--ink);color:#fff;border-radius:999px;
  font-size:12px;font-weight:500;padding:4px 12px;
  vertical-align:middle;
}}
.cursor-dot{{width:8px;height:8px;background:#fff;border-radius:50%;opacity:.8}}

/* ── LEGEND ── */
.legend{{
  display:flex;flex-wrap:wrap;gap:10px;margin:16px 0;
}}
.legend-item{{
  display:flex;align-items:center;gap:6px;font-size:12px;color:var(--ink-s);
}}
.legend-dot{{width:12px;height:12px;border-radius:50%;flex-shrink:0}}
</style>
</head>
<body>
<div class="app">

<!-- ════════════════════════════════════════
     SIDEBAR
════════════════════════════════════════ -->
<aside class="sidebar">
  <div class="sidebar-logo">
    <div>
      <div class="sidebar-logo-text">Close<span> Energy</span></div>
      <div style="margin-top:4px"><span class="sidebar-tag">Guía de uso</span></div>
    </div>
  </div>

  <div class="progress-track"><div class="progress-fill" id="prog"></div></div>
  <div class="progress-label" id="prog-label">0% completado</div>

  <div class="nav-section">Primeros pasos</div>
  <a class="nav-link active" href="#ch0" onclick="setActive(this)"><span class="nav-icon">👋</span>Bienvenida</a>
  <a class="nav-link" href="#ch1" onclick="setActive(this)"><span class="nav-icon">🧭</span>La barra de navegación</a>
  <a class="nav-link" href="#ch2" onclick="setActive(this)"><span class="nav-icon">🏠</span>Página principal</a>

  <div class="nav-section" style="margin-top:8px">La plataforma</div>
  <a class="nav-link" href="#ch3" onclick="setActive(this)"><span class="nav-icon">📊</span>Vista del dashboard</a>
  <a class="nav-link" href="#ch4" onclick="setActive(this)"><span class="nav-icon">💬</span>Panel 2 — Tu pipeline</a>

  <div class="nav-section" style="margin-top:8px">Los agentes</div>
  <a class="nav-link" href="#ch5" onclick="setActive(this)"><span class="nav-icon">⚡</span>Agente de Cotización</a>
  <a class="nav-link" href="#ch6" onclick="setActive(this)"><span class="nav-icon">🔁</span>Agente de Seguimiento</a>

  <div class="nav-section" style="margin-top:8px">Más secciones</div>
  <a class="nav-link" href="#ch7" onclick="setActive(this)"><span class="nav-icon">🔒</span>Seguridad</a>
  <a class="nav-link" href="#ch8" onclick="setActive(this)"><span class="nav-icon">❓</span>Preguntas frecuentes</a>
  <a class="nav-link" href="#ch9" onclick="setActive(this)"><span class="nav-icon">✅</span>Cómo activar tu cuenta</a>
</aside>

<!-- ════════════════════════════════════════
     MOBILE NAV
════════════════════════════════════════ -->
<div class="mobile-toc">
  <span style="font-size:16px;font-weight:700;letter-spacing:-.02em">Close<span style="color:#374151"> Energy</span></span>
  <select onchange="document.querySelector(this.value).scrollIntoView({{behavior:'smooth'}})">
    <option value="#ch0">👋 Bienvenida</option>
    <option value="#ch1">🧭 Navegación</option>
    <option value="#ch2">🏠 Página principal</option>
    <option value="#ch3">📊 Dashboard</option>
    <option value="#ch4">💬 Tu pipeline</option>
    <option value="#ch5">⚡ Agente Cotización</option>
    <option value="#ch6">🔁 Agente Seguimiento</option>
    <option value="#ch7">🔒 Seguridad</option>
    <option value="#ch8">❓ FAQ</option>
    <option value="#ch9">✅ Activar cuenta</option>
  </select>
</div>

<!-- ════════════════════════════════════════
     MAIN
════════════════════════════════════════ -->
<main class="main" id="main-scroll">

<!-- ─── CAPÍTULO 0 — Bienvenida ─────────────────────── -->
<div class="chapter" id="ch0">
  <div class="intro-card">
    <div style="font-size:36px;margin-bottom:12px">👋</div>
    <h2>Guía de uso — Close Energy</h2>
    <p>Esta guía te explica, con capturas reales del sitio, cómo navegar cada sección de close.energy: qué hace cada botón, dónde hacer clic y cómo avanzar hasta activar tu cuenta.</p>
    <p style="margin-top:8px">Úsala como referencia antes y durante tu primera visita al sitio.</p>
  </div>

  <div class="grid2">
    <div class="mini-card"><div class="ico">⏱</div><strong>10 min de lectura</strong>9 secciones explicadas con capturas reales</div>
    <div class="mini-card"><div class="ico">🖱</div><strong>Guía interactiva</strong>Pasa el cursor sobre los números <strong>①</strong> en las imágenes para ver qué hace cada elemento</div>
    <div class="mini-card"><div class="ico">🌐</div><strong>URL del sitio</strong><a href="https://close.energy" style="color:var(--primary);font-weight:500">close.energy</a></div>
    <div class="mini-card"><div class="ico">🎯</div><strong>Objetivo final</strong>Llegar al formulario y activar tu cuenta en menos de 5 minutos</div>
  </div>
</div>


<!-- ─── CAPÍTULO 1 — Navegación ─────────────────────── -->
<div class="chapter" id="ch1">
  <div class="ch-eyebrow"><span class="step-badge">1</span>Navegación</div>
  <h1 class="ch-title">La barra de navegación</h1>
  <p class="ch-desc">La barra está fija en la parte superior en todas las páginas. Desde aquí puedes saltar a cualquier sección del sitio o cambiar el idioma.</p>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['hero']}" class="screen-img" alt="Navbar Close Energy"/>
      <!-- Logo -->
      <div class="pin" style="left:6%;top:3.5%" data-tip="Logo — clic para volver a la página principal desde cualquier lugar">A</div>
      <!-- Nav links -->
      <div class="pin blue" style="left:25%;top:3.5%" data-tip="Plataforma — baja hasta la sección del Sistema de Registro y los agentes">B</div>
      <div class="pin blue" style="left:33%;top:3.5%" data-tip="Agentes — baja directamente al Agente de Cotización y Seguimiento">C</div>
      <div class="pin blue" style="left:40%;top:3.5%" data-tip="Seguridad — muestra los 4 pilares de protección de datos">D</div>
      <div class="pin blue" style="left:47%;top:3.5%" data-tip="FAQ — preguntas frecuentes en acordeón, clic para expandir">E</div>
      <!-- Lang toggle -->
      <div class="pin amber" style="left:82%;top:3.5%" data-tip="Toggle de idioma — clic en EN para cambiar a inglés, ES para español">F</div>
      <!-- CTA -->
      <div class="pin green" style="left:93%;top:3.5%" data-tip="BOTÓN PRINCIPAL — Contáctanos — te lleva al formulario de activación">G</div>
    </div>
    <p class="screen-caption">Barra de navegación en la parte superior del sitio</p>
  </div>

  <div class="legend">
    <div class="legend-item"><div class="legend-dot" style="background:#374151"></div>Navegación interna</div>
    <div class="legend-item"><div class="legend-dot" style="background:#2563eb"></div>Anclas de sección</div>
    <div class="legend-item"><div class="legend-dot" style="background:#d97706"></div>Configuración</div>
    <div class="legend-item"><div class="legend-dot" style="background:#16a34a"></div>Acción principal</div>
  </div>

  <table class="field-table">
    <thead><tr><th>Elemento</th><th>Qué hace</th><th>Cuándo usarlo</th></tr></thead>
    <tbody>
      <tr><td>Logo <span class="tag">A</span></td><td>Regresa al inicio de la página</td><td>Si te perdiste navegando y quieres volver arriba</td></tr>
      <tr><td>Plataforma <span class="tag blue">B</span></td><td>Salta a la arquitectura de dos capas</td><td>Para entender cómo funciona el sistema</td></tr>
      <tr><td>Agentes <span class="tag blue">C</span></td><td>Salta al Agente de Cotización</td><td>Para ver qué hace cada agente en detalle</td></tr>
      <tr><td>Seguridad <span class="tag blue">D</span></td><td>Salta a los 4 pilares de seguridad</td><td>Si quieres saber cómo se protegen los datos de tus clientes</td></tr>
      <tr><td>FAQ <span class="tag blue">E</span></td><td>Salta a preguntas frecuentes</td><td>Para resolver dudas rápidas antes de contactar</td></tr>
      <tr><td>EN / ES <span class="tag amber">F</span></td><td>Cambia el idioma del sitio</td><td>Clic en EN para ver el sitio en inglés</td></tr>
      <tr><td><strong>Contáctanos</strong> <span class="tag green">G</span></td><td>Abre el formulario de activación</td><td><strong>Tu destino final</strong> — aquí empiezas el proceso</td></tr>
    </tbody>
  </table>

  <div class="callout tip">
    <span class="callout-icon">💡</span>
    <div class="callout-body">La barra se vuelve semitransparente con fondo blanco al hacer scroll, manteniéndose siempre visible aunque bajes hasta el final de la página.</div>
  </div>
</div>


<!-- ─── CAPÍTULO 2 — Página principal ───────────────── -->
<div class="chapter" id="ch2">
  <div class="ch-eyebrow"><span class="step-badge">2</span>Página principal</div>
  <h1 class="ch-title">Hero — Lo primero que ves</h1>
  <p class="ch-desc">Al abrir close.energy ves el headline y debajo una previsualización del dashboard de la plataforma. Aquí es donde entiendes el producto en 5 segundos.</p>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['hero']}" class="screen-img" alt="Hero section"/>
      <!-- Headline -->
      <div class="pin" style="left:40%;top:14%" data-tip="Propuesta de valor principal — cotizaciones en minutos, no en días">1</div>
      <!-- Subheadline -->
      <div class="pin" style="left:40%;top:24%" data-tip="Descripción breve — el agente responde en segundos y cotiza en minutos">2</div>
      <!-- CTA button -->
      <div class="pin green" style="left:37%;top:32%" data-tip="Botón Contáctanos — haz clic aquí para ir al formulario de activación">3</div>
      <!-- Dashboard preview -->
      <div class="pin blue" style="left:30%;top:54%" data-tip="Previsualización del dashboard — muestra el CRM con leads activos, conversaciones y estadísticas de tu operación">4</div>
      <!-- Dashboard stats -->
      <div class="pin amber" style="left:50%;top:44%" data-tip="Estadísticas en vivo — conversaciones activas, leads calificados hoy, propuestas pendientes y cotizaciones enviadas">5</div>
    </div>
    <p class="screen-caption">Sección hero — primera pantalla visible al entrar al sitio</p>
  </div>

  <div class="callout do">
    <span class="callout-icon">✅</span>
    <div class="callout-body"><strong>Qué hacer aquí:</strong> Observa el dashboard en la parte inferior de la pantalla. Muestra cómo se vería tu operación real — con leads entrantes, conversaciones activas y estadísticas en tiempo real. Si esto es lo que quieres, haz clic en <strong>Contáctanos</strong>.</div>
  </div>

  <hr class="section-div"/>

  <h3 style="font-size:17px;font-weight:600;margin-bottom:8px">El dashboard dentro del hero</h3>
  <p class="ch-desc" style="margin-bottom:16px">La imagen muestra el panel real que tendrías disponible una vez actives tu cuenta. Identifica cada área:</p>

  <div class="grid2">
    <div class="mini-card"><div class="ico">📋</div><strong>Sidebar izquierdo</strong>Menú de navegación: Home, Sales (Conversaciones, Leads, Cotizaciones, Instalaciones), Agents, Company, Settings</div>
    <div class="mini-card"><div class="ico">📈</div><strong>Tarjetas de estadísticas</strong>Conversaciones activas, leads calificados hoy, propuestas pendientes de aprobación y cotizaciones enviadas este mes</div>
    <div class="mini-card"><div class="ico">👥</div><strong>Recent leads</strong>Lista en tiempo real de los últimos leads con su estado: nuevo, calificado, en conversación, seguimiento, instalación</div>
    <div class="mini-card"><div class="ico">🔔</div><strong>Needs attention</strong>Alertas de leads que necesitan acción inmediata — cotizaciones pendientes de revisión y propuestas de valor</div>
  </div>
</div>


<!-- ─── CAPÍTULO 3 — Platform Panel 1 ───────────────── -->
<div class="chapter" id="ch3">
  <div class="ch-eyebrow"><span class="step-badge">3</span>La plataforma</div>
  <h1 class="ch-title">Panel 1 — Centraliza cada lead y cliente</h1>
  <p class="ch-desc">Esta sección muestra cómo todos tus canales de entrada fluyen a un solo lugar. Hay dos vistas que puedes alternar haciendo clic en las pestañas superiores.</p>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['panel1']}" class="screen-img" alt="Platform panel 1"/>
      <!-- Tab activo -->
      <div class="pin green" style="left:22%;top:80%" data-tip="Pestaña activa — Centraliza cada lead y cliente — estás en esta vista ahora">1</div>
      <!-- Tab inactivo -->
      <div class="pin" style="left:39%;top:80%" data-tip="Haz clic aquí para cambiar al Panel 2 — Interactúa con tu pipeline">2</div>
      <!-- Panel content -->
      <div class="pin blue" style="left:65%;top:90%" data-tip="Vista del panel: muestra la bandeja unificada con leads de WhatsApp, email y formulario web en una sola pantalla">3</div>
    </div>
    <p class="screen-caption">Sección "Vista previa de la plataforma" con el toggle entre paneles</p>
  </div>

  <div class="callout note">
    <span class="callout-icon">🖱</span>
    <div class="callout-body"><strong>Cómo usar el toggle:</strong> Verás dos pestañas debajo del título de sección: <em>"Centraliza cada lead y cliente"</em> y <em>"Interactúa con tu pipeline"</em>. Haz clic en cada una para ver la previsualización correspondiente.</div>
  </div>

  <ul class="step-list">
    <li class="step-li"><div class="step-circle">1</div><div class="step-text"><strong>Localiza la sección "Vista previa de la plataforma"</strong><span>Desplázate hacia abajo desde el hero. La encontrarás después de la sección de métricas.</span></div></li>
    <li class="step-li"><div class="step-circle">2</div><div class="step-text"><strong>Observa la pestaña activa (resaltada)</strong><span>Por defecto estará en "Centraliza cada lead y cliente". La previsualización muestra la bandeja unificada de leads.</span></div></li>
    <li class="step-li"><div class="step-circle">3</div><div class="step-text"><strong>Haz clic en "Interactúa con tu pipeline"</strong><span>La previsualización cambia para mostrar el asistente de IA donde puedes hacer preguntas sobre tu operación.</span></div></li>
  </ul>
</div>


<!-- ─── CAPÍTULO 4 — Panel 2 ────────────────────────── -->
<div class="chapter" id="ch4">
  <div class="ch-eyebrow"><span class="step-badge">4</span>La plataforma</div>
  <h1 class="ch-title">Panel 2 — Interactúa con tu pipeline</h1>
  <p class="ch-desc">El segundo panel muestra el asistente de IA entrenado en tu operación. Puedes preguntarle en lenguaje natural sobre cualquier lead, cotización o instalación.</p>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['panel2']}" class="screen-img" alt="Platform panel 2"/>
      <div class="pin amber" style="left:39%;top:80%" data-tip="Pestaña activa ahora — Interactúa con tu pipeline">1</div>
      <div class="pin blue" style="left:78%;top:85%" data-tip="Chat con el asistente — escribe preguntas como '¿Cuántos leads están esperando cotización?' y el agente responde con datos de tu operación">2</div>
    </div>
    <p class="screen-caption">Panel 2 — el asistente responde preguntas sobre tu pipeline en tiempo real</p>
  </div>

  <div class="callout tip">
    <span class="callout-icon">💡</span>
    <div class="callout-body">En la plataforma real podrás escribir preguntas como: <em>"¿Cuántos leads están esperando cotización?"</em>, <em>"Genera la cotización de Industrias Monterrey"</em> o <em>"¿Qué leads llevan más de 48h sin respuesta?"</em></div>
  </div>
</div>


<!-- ─── CAPÍTULO 5 — Agente de Cotización ───────────── -->
<div class="chapter" id="ch5">
  <div class="ch-eyebrow"><span class="step-badge">5</span>Agentes</div>
  <h1 class="ch-title">Agente de Cotización</h1>
  <p class="ch-desc">Esta sección del sitio explica cómo funciona el agente que maneja todas las solicitudes de cotización. Verás una comparación antes/después y el flujo de 6 pasos.</p>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['quoting_top']}" class="screen-img" alt="Quoting agent"/>
      <div class="pin" style="left:20%;top:12%" data-tip="Etiqueta 'AGENTE 01' — indica que es el primer agente del sistema">1</div>
      <div class="pin blue" style="left:20%;top:23%" data-tip="Nombre: Agente de Cotización — maneja residencial, comercial e industrial">2</div>
      <div class="pin green" style="left:28%;top:36%" data-tip="Badge de canal — funciona con WhatsApp, Email y Formulario web">3</div>
      <div class="pin amber" style="left:28%;top:42%" data-tip="Tiempo de reducción — de 3-7 días hábiles a menos de 4 horas">4</div>
      <div class="pin" style="left:18%;top:58%" data-tip="Columna 'Hoy manual' — así funciona sin el agente (cola de espera, revisión manual, Excel)">5</div>
      <div class="pin green" style="left:48%;top:58%" data-tip="Columna 'Con Agente IA' — así funciona con el agente (respuesta en 60s, extracción automática, cotización con ROI)">6</div>
      <div class="pin blue" style="left:72%;top:42%" data-tip="Paso 1 del stepper — Captura del lead. Los 6 pasos se muestran a la derecha y se pueden seguir visualmente">7</div>
    </div>
    <p class="screen-caption">Sección del Agente de Cotización con comparación antes/después y stepper de 6 pasos</p>
  </div>

  <hr class="section-div"/>

  <h3 style="font-size:17px;font-weight:600;margin-bottom:8px">Los 6 pasos del Agente de Cotización</h3>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['quoting_steps']}" class="screen-img" alt="Quoting steps"/>
      <div class="pin" style="left:72%;top:15%" data-tip="Paso 5 — Generación de cotización: crea propuesta personalizada con ROI y período de recuperación">5</div>
      <div class="pin green" style="left:72%;top:38%" data-tip="Paso 6 — Entrega al cliente: envía resumen con opciones recomendadas y próximos pasos. Este es el paso final.">6</div>
    </div>
    <p class="screen-caption">Pasos 5 y 6 del flujo de cotización — el agente genera y entrega la propuesta automáticamente</p>
  </div>

  <ul class="step-list">
    <li class="step-li"><div class="step-circle">1</div><div class="step-text"><strong>Captura del lead</strong><span>El lead llega por WhatsApp, email o formulario web. El agente lo captura automáticamente.</span></div></li>
    <li class="step-li"><div class="step-circle">2</div><div class="step-text"><strong>Calificación</strong><span>El agente hace preguntas estructuradas: consumo mensual, ubicación, tipo de techo, tipo de proyecto.</span></div></li>
    <li class="step-li"><div class="step-circle">3</div><div class="step-text"><strong>Dimensionamiento técnico</strong><span>Calcula el tamaño del sistema basándose en el consumo y la irradiancia de la zona.</span></div></li>
    <li class="step-li"><div class="step-circle">4</div><div class="step-text"><strong>Consulta de precios</strong><span>Extrae precios actuales de paneles, inversores y balance of system de tus proveedores.</span></div></li>
    <li class="step-li"><div class="step-circle">5</div><div class="step-text"><strong>Generación de cotización</strong><span>Crea la propuesta personalizada con ROI proyectado y período de recuperación.</span></div></li>
    <li class="step-li"><div class="step-circle">6</div><div class="step-text"><strong>Entrega al cliente</strong><span>Envía una comparativa de 2–3 opciones de sistema con los próximos pasos claros.</span></div></li>
  </ul>

  <div class="callout warn">
    <span class="callout-icon">⚠️</span>
    <div class="callout-body"><strong>Antes de activar:</strong> el equipo de Close Energy entrena al agente con tu catálogo de precios, tus proveedores y tus reglas de negocio. El agente no usa precios genéricos — usa los tuyos.</div>
  </div>
</div>


<!-- ─── CAPÍTULO 6 — Agente de Seguimiento ──────────── -->
<div class="chapter" id="ch6">
  <div class="ch-eyebrow"><span class="step-badge">6</span>Agentes</div>
  <h1 class="ch-title">Agente de Seguimiento</h1>
  <p class="ch-desc">El Agente de Seguimiento se activa automáticamente después de que se entrega una cotización. Escanea el pipeline, personaliza el mensaje y lo envía al canal correcto sin que tu equipo haga nada.</p>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['followup']}" class="screen-img" alt="Follow-up agent"/>
      <div class="pin" style="left:20%;top:10%" data-tip="Etiqueta 'AGENTE 02' — segundo agente del sistema">1</div>
      <div class="pin blue" style="left:25%;top:22%" data-tip="Promesa del agente: cada lead recibe al menos 5 toques automáticos sin recordatorios manuales">2</div>
      <div class="pin green" style="left:25%;top:42%" data-tip="Paso activo: Escaneo del pipeline — el agente identifica qué leads llevan más tiempo sin actividad">3</div>
      <div class="pin amber" style="left:72%;top:42%" data-tip="Timeline de seguimiento — muestra los días y canales de cada toque: Día 1 WA, Día 2 Email, Día 4 WA, Día 7 seguimiento de valor">4</div>
    </div>
    <p class="screen-caption">Sección del Agente de Seguimiento con el timeline de toques automáticos</p>
  </div>

  <hr class="section-div"/>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['followup_tl']}" class="screen-img" alt="Follow-up timeline"/>
      <div class="pin green" style="left:72%;top:22%" data-tip="Canal WA — WhatsApp. El badge de color indica por qué canal se envió cada toque">1</div>
      <div class="pin blue" style="left:72%;top:40%" data-tip="Canal EM — Email. El agente elige el canal preferido del lead automáticamente">2</div>
      <div class="pin amber" style="left:65%;top:58%" data-tip="Toque personalizado — el mensaje cambia según el perfil del lead y su etapa">3</div>
      <div class="pin" style="left:65%;top:76%" data-tip="Toque final — seguimiento de valor añadido antes de marcar el lead para escalación humana">4</div>
    </div>
    <p class="screen-caption">Timeline de seguimiento — WA (WhatsApp) y EM (Email) se asignan automáticamente</p>
  </div>

  <div class="callout tip">
    <span class="callout-icon">💡</span>
    <div class="callout-body">Los badges <strong>WA</strong> (WhatsApp) y <strong>EM</strong> (Email) en el timeline muestran por qué canal el agente enviará cada mensaje. El agente detecta cuál canal prefiere el lead según dónde inició la conversación.</div>
  </div>
</div>


<!-- ─── CAPÍTULO 7 — Seguridad ───────────────────────── -->
<div class="chapter" id="ch7">
  <div class="ch-eyebrow"><span class="step-badge">7</span>Seguridad</div>
  <h1 class="ch-title">Tus datos, protegidos por diseño</h1>
  <p class="ch-desc">Esta sección explica cómo se protege la información de tus clientes. Las empresas solares manejan datos sensibles — direcciones, facturas de energía, datos de financiamiento.</p>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['security']}" class="screen-img" alt="Security section"/>
      <div class="pin" style="left:12%;top:50%" data-tip="Pilar 01 — Cifrado de extremo a extremo: AES-256 y TLS 1.3. Ningún dato viaja o se almacena sin cifrar.">1</div>
      <div class="pin blue" style="left:37%;top:50%" data-tip="Pilar 02 — RAG bajo demanda: los datos de tus clientes solo se recuperan cuando se necesitan, nunca están expuestos en memoria compartida.">2</div>
      <div class="pin amber" style="left:62%;top:50%" data-tip="Pilar 03 — Protección contra abuso de API: límites de tasa, detección de anomalías y rotación automática de tokens.">3</div>
      <div class="pin green" style="left:87%;top:50%" data-tip="Pilar 04 — Aislamiento de inquilino: tu empresa opera en un entorno completamente separado. Tus datos nunca se mezclan con los de otro cliente.">4</div>
    </div>
    <p class="screen-caption">Los 4 pilares de seguridad de Close Energy</p>
  </div>

  <table class="field-table">
    <thead><tr><th>#</th><th>Pilar</th><th>Qué significa para tu empresa</th></tr></thead>
    <tbody>
      <tr><td>01</td><td>Cifrado extremo a extremo</td><td>Datos de clientes — direcciones, recibos de luz, financiamiento — viajan y se guardan siempre cifrados con AES-256 y TLS 1.3</td></tr>
      <tr><td>02</td><td>RAG bajo demanda</td><td>El agente solo consulta los datos de un cliente cuando los necesita para esa conversación específica — nunca quedan expuestos</td></tr>
      <tr><td>03</td><td>Protección de API</td><td>Si alguien intenta acceder sin autorización, el sistema detecta el abuso y bloquea automáticamente</td></tr>
      <tr><td>04</td><td>Aislamiento de inquilino</td><td>Lo que ocurre en tu cuenta nunca es visible para otros clientes de la plataforma</td></tr>
    </tbody>
  </table>

  <div class="callout note">
    <span class="callout-icon">🏅</span>
    <div class="callout-body">Justo debajo de los 4 pilares verás los badges de certificación: <strong>AES-256 · TLS 1.3 · SOC 2 · ISO 27001 · GDPR · Zero Trust</strong>. Estos son los estándares con los que cumple la infraestructura.</div>
  </div>
</div>


<!-- ─── CAPÍTULO 8 — FAQ ─────────────────────────────── -->
<div class="chapter" id="ch8">
  <div class="ch-eyebrow"><span class="step-badge">8</span>Preguntas frecuentes</div>
  <h1 class="ch-title">Cómo usar la sección de FAQ</h1>
  <p class="ch-desc">Las preguntas frecuentes están organizadas en un acordeón. Cada pregunta se expande al hacer clic para mostrar la respuesta.</p>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['faq_closed']}" class="screen-img" alt="FAQ cerrado"/>
      <div class="pin" style="left:50%;top:40%" data-tip="Cada fila es una pregunta — haz clic en cualquiera para expandirla y leer la respuesta">1</div>
      <div class="pin amber" style="left:94%;top:40%" data-tip="Ícono de flecha o '+' — indica que la pregunta está cerrada. Clic para abrir.">2</div>
    </div>
    <p class="screen-caption">FAQ con todas las preguntas cerradas — haz clic en cualquier fila</p>
  </div>

  <div class="callout note">
    <span class="callout-icon">🖱</span>
    <div class="callout-body"><strong>Cómo navegar el FAQ:</strong> haz clic en el texto de cualquier pregunta (o en la flecha del lado derecho). La fila se expande y muestra la respuesta. Haz clic de nuevo para cerrarla. Solo una respuesta se muestra a la vez.</div>
  </div>

  <hr class="section-div"/>
  <h3 style="font-size:16px;font-weight:600;margin-bottom:12px">Preguntas más relevantes</h3>
  <table class="field-table">
    <thead><tr><th>Pregunta</th><th>Respuesta resumida</th></tr></thead>
    <tbody>
      <tr><td>¿Cuánto tarda la implementación?</td><td>5–7 días hábiles. No se requiere equipo de TI de tu lado.</td></tr>
      <tr><td>¿Reemplaza a mi equipo de ventas?</td><td>No. Automatiza las tareas repetitivas para que tu equipo se enfoque en cerrar deals.</td></tr>
      <tr><td>¿En qué canales trabaja?</td><td>WhatsApp, email y formularios web de forma nativa. Teléfono disponible bajo solicitud.</td></tr>
      <tr><td>¿Qué tan precisas son las cotizaciones?</td><td>99% de precisión en dimensionamiento y precios, con puntos de control humano antes de la entrega.</td></tr>
      <tr><td>¿Qué ROI puedo esperar?</td><td>5–8x ROI en los primeros 90 días.</td></tr>
    </tbody>
  </table>
</div>


<!-- ─── CAPÍTULO 9 — Formulario de contacto ─────────── -->
<div class="chapter" id="ch9">
  <div class="ch-eyebrow"><span class="step-badge">9</span>Activar tu cuenta</div>
  <h1 class="ch-title">Cómo llenar el formulario de activación</h1>
  <p class="ch-desc">El formulario está en <strong>/contact</strong>. Llega aquí haciendo clic en el botón <strong>Contáctanos</strong> o <strong>Activar mi cuenta</strong> desde cualquier parte del sitio. Solo toma 30 segundos.</p>

  <div class="callout do">
    <span class="callout-icon">🎯</span>
    <div class="callout-body"><strong>Hay dos formas de llegar:</strong> clic en <em>Contáctanos</em> en el navbar (arriba a la derecha) o en el botón <em>Activar mi cuenta</em> en el hero o al final de la página.</div>
  </div>

  <hr class="section-div"/>
  <h3 style="font-size:16px;font-weight:600;margin-bottom:12px">Sección 1 — TU EMPRESA</h3>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['contact_top']}" class="screen-img" alt="Formulario de contacto parte 1"/>
      <div class="pin" style="left:28%;top:33%" data-tip="Campo Nombre — escribe tu nombre de pila">1</div>
      <div class="pin" style="left:72%;top:33%" data-tip="Campo Apellido — escribe tu apellido">2</div>
      <div class="pin blue" style="left:50%;top:47%" data-tip="Correo de negocios — usa tu email de empresa, no uno personal. Ej: maria@solaresnorte.com">3</div>
      <div class="pin blue" style="left:50%;top:60%" data-tip="Teléfono — selecciona el código de país (+52 para México) y escribe tu número. El equipo te contactará aquí.">4</div>
      <div class="pin" style="left:50%;top:73%" data-tip="Nombre de tu empresa — escribe el nombre comercial o razón social">5</div>
    </div>
    <p class="screen-caption">Sección "TU EMPRESA" — campos de identificación básica</p>
  </div>

  <table class="field-table">
    <thead><tr><th>Campo</th><th>Qué escribir</th><th></th></tr></thead>
    <tbody>
      <tr><td>Nombre</td><td>Tu nombre de pila</td><td><span class="req">*</span></td></tr>
      <tr><td>Apellido</td><td>Tu apellido paterno</td><td><span class="req">*</span></td></tr>
      <tr><td>Correo de negocios</td><td>Email de empresa (no Gmail/Hotmail personal)</td><td><span class="req">*</span></td></tr>
      <tr><td>Teléfono</td><td>Número de contacto con lada. El código de país viene preseleccionado en +52</td><td><span class="req">*</span></td></tr>
      <tr><td>Nombre de tu empresa</td><td>Razón social o nombre comercial de tu instaladora</td><td><span class="req">*</span></td></tr>
    </tbody>
  </table>

  <hr class="section-div"/>
  <h3 style="font-size:16px;font-weight:600;margin-bottom:12px">Sección 2 — TU OPERACIÓN</h3>

  <div class="screen-wrap">
    <div class="annotated">
      <img src="{imgs['contact_op']}" class="screen-img" alt="Formulario operación"/>
      <div class="pin" style="left:28%;top:12%" data-tip="Tipo de instalación — selecciona una o varias: Residencial, Comercial, Industrial. Puedes marcar más de una.">1</div>
      <div class="pin blue" style="left:36%;top:33%" data-tip="Volumen mensual — elige el rango más cercano a tu operación actual: 1-5, 6-15, 16-50 o más de 50 proyectos por mes">2</div>
      <div class="pin amber" style="left:50%;top:53%" data-tip="Mayor cuello de botella — menú desplegable. Opciones: Cotizaciones lentas, Seguimiento de leads, Coordinación de servicio, Sin vista única del cliente. Elige el que más te afecta.">3</div>
      <div class="pin" style="left:36%;top:74%" data-tip="¿Cómo llegaste a Close Energy? — selecciona una opción. Esto ayuda a entender qué canal funciona mejor.">4</div>
      <div class="pin green" style="left:50%;top:96%" data-tip="Botón ACTIVAR MI CUENTA — haz clic aquí cuando hayas llenado todo. El equipo te contacta en menos de 24 horas.">5</div>
    </div>
    <p class="screen-caption">Sección "TU OPERACIÓN" y botón final de activación</p>
  </div>

  <ul class="step-list">
    <li class="step-li"><div class="step-circle">1</div><div class="step-text"><strong>Tipo de instalaciones</strong><span>Marca las casillas que apliquen: Residencial, Comercial, Industrial. Puedes seleccionar más de una.</span></div></li>
    <li class="step-li"><div class="step-circle">2</div><div class="step-text"><strong>Proyectos al mes</strong><span>Haz clic en el rango de tu volumen actual. La tarjeta seleccionada queda resaltada.</span></div></li>
    <li class="step-li"><div class="step-circle">3</div><div class="step-text"><strong>Mayor cuello de botella</strong><span>Abre el menú desplegable y elige el problema que más te afecta hoy: cotizaciones lentas, seguimiento, coordinación o falta de vista unificada.</span></div></li>
    <li class="step-li"><div class="step-circle">4</div><div class="step-text"><strong>¿Cómo llegaste a Close Energy?</strong><span>Selecciona la opción más cercana (anuncio, recomendación, Google, etc.).</span></div></li>
    <li class="step-li"><div class="step-circle">5</div><div class="step-text"><strong>Haz clic en "Activar mi cuenta"</strong><span>El equipo de Close Energy te responde por correo o WhatsApp en menos de 24 horas con tu propuesta de activación personalizada.</span></div></li>
  </ul>

  <div class="callout do">
    <span class="callout-icon">✅</span>
    <div class="callout-body">Después de enviar el formulario verás un mensaje de confirmación: <em>"Ya estás en la lista. Nos pondremos en contacto contigo por correo o WhatsApp en menos de 24 horas con tu propuesta de activación."</em></div>
  </div>

  <hr class="section-div"/>

  <div class="intro-card" style="background:var(--green-bg);border-color:var(--green-bd)">
    <div style="font-size:32px;margin-bottom:12px">🚀</div>
    <h2 style="color:var(--green)">¡Listo para empezar!</h2>
    <p style="color:#15803d">Ya sabes cómo navegar el sitio completo de Close Energy. El siguiente paso es hacer clic en <strong>Contáctanos</strong> y llenar el formulario de activación.</p>
    <p style="margin-top:10px;color:#15803d">URL: <a href="https://close.energy" style="color:var(--green);font-weight:600" target="_blank">close.energy</a></p>
  </div>
</div>

</main><!-- /main -->
</div><!-- /app -->

<script>
/* ── PROGRESS ── */
const main = document.getElementById('main-scroll');
const prog = document.getElementById('prog');
const progLbl = document.getElementById('prog-label');
const chapters = document.querySelectorAll('.chapter');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', updateProgress);
function updateProgress() {{
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  const pct = Math.round((scrolled / total) * 100);
  prog.style.width = pct + '%';
  progLbl.textContent = pct + '% completado';

  // Highlight active nav
  let current = '';
  chapters.forEach(ch => {{
    const top = ch.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.45) current = ch.id;
  }});
  navLinks.forEach(a => {{
    const href = a.getAttribute('href').replace('#','');
    a.classList.toggle('active', href === current);
  }});
}}

function setActive(el) {{
  navLinks.forEach(a => a.classList.remove('active'));
  el.classList.add('active');
}}

/* ── REVEAL ON SCROLL ── */
const obs = new IntersectionObserver(entries => {{
  entries.forEach(e => {{
    if (e.isIntersecting) e.target.style.opacity = '1';
  }});
}}, {{threshold: 0.1}});
document.querySelectorAll('.chapter').forEach(c => {{
  c.style.opacity = '0';
  c.style.transition = 'opacity .5s ease';
  obs.observe(c);
}});
// First chapter visible immediately
document.querySelector('#ch0').style.opacity = '1';
</script>
</body>
</html>"""

out_path = os.path.join(os.path.dirname(__file__), "..", "user_guide.html")
with open(out_path, "w") as f:
    f.write(HTML)

size_mb = os.path.getsize(out_path) / 1_000_000
print(f"✓ user_guide.html generado — {size_mb:.1f} MB")
