# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (run to verify before pushing)
npm run lint     # ESLint check
```

There are no tests in this project.

## Architecture

**Next.js 14 App Router** — single-page marketing site. All sections live in `src/app/page.tsx` imported as server components. Client interactivity is handled inside each section component with `'use client'`.

### i18n

`src/lib/i18n/` — custom context-based i18n (no external library). `I18nProvider` wraps the app in `layout.tsx`. All components consume translations via `useI18n()` hook. Adding copy = edit both `es.ts` and `en.ts`.

### Design system

Defined in `DESIGN.md` and mapped to Tailwind tokens in `tailwind.config.ts`. Key rules:
- **Light theme**: canvas `#ffffff`, surface ladder `surface-1` → `surface-4` (light grays), text `ink` → `ink-tertiary` (dark to muted).
- **Primary color** (`#374151`) is used for both CTA buttons (`bg-primary`) and eyebrow labels (`text-primary`).
- No atmospheric gradients, no hardcoded dark colors. All colors via Tailwind tokens.
- Animations (counters, steppers) use `IntersectionObserver` + `useState` — no animation library.

### Section components

Each section in `src/components/sections/` is self-contained: it imports `useI18n()` and reads its slice of translations directly. Sections are stateless unless they have interactive UI (toggles, accordions, steppers).

### Adding/removing a section

1. Create `src/components/sections/NewSection.tsx`
2. Add translation keys to both `src/lib/i18n/es.ts` and `src/lib/i18n/en.ts`
3. Import and place in `src/app/page.tsx`

## Deployment

Linked to Vercel project `fridaruhs-projects/agent_studio`. Production URL: **https://solar-agent-studio.vercel.app**

```bash
vercel --prod --scope fridaruhs-projects   # deploy to production
```
