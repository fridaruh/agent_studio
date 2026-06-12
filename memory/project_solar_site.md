---
name: close-energy-site
description: Next.js marketing site for Close Energy (close.energy) — solar AI agents platform, Linear design system, ES/EN bilingual
metadata:
  type: project
---

**Project name: Close Energy** — domain: `close.energy` — logo: `/public/logo.png` (sun icon PNG).

Site built at `/Users/fridaruh/Documents/Proyectos/Solar_Agents/` using Next.js 14 + TypeScript + Tailwind CSS.

**Why:** Full marketing site per PRD (`solar_agent_prd.md`), Linear design system per `DESIGN.md`, bilingüe ES/EN desde inicio (user choice).

**Structure:**
- `src/lib/i18n/` — i18n context + translations (es.ts, en.ts)
- `src/components/layout/` — Navbar, Footer
- `src/components/sections/` — 19 section components (all P0-P3)
- `src/styles/globals.css` — CSS custom props, animations, marquee keyframes
- `tailwind.config.ts` — full Linear design token mapping

**Design tokens** from DESIGN.md: canvas #010102, primary #5e6ad2, surface ladder (1-4), ink hierarchy.
**Font substitute:** Inter (Linear Display equivalent, per DESIGN.md recommendation).

**How to apply:** When making changes, follow the Linear design system rules: no atmospheric gradients, no pill CTAs, lavender (#5e6ad2) only for brand/primary CTA/focus. Surface ladder for depth, hairline borders.

Dev server: `npm run dev` from `/Users/fridaruh/Documents/Proyectos/Solar_Agents/`.
