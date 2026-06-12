---
version: alpha
name: Close-Energy-design-system
description: "A clean white B2B SaaS marketing canvas built around #ffffff (pure white canvas), near-black ink (#0a0a0f), and charcoal gray (#374151) as the single chromatic accent. The system reads as professional software documentation: structured, minimal, and credible. Display and body type is set in Inter at 400–600 with measured negative tracking. Cards live as light-gray panels (surface-1 #f9fafb) with hairline borders (#e5e7eb). The charcoal accent appears on primary CTAs, eyebrow labels, and focus rings — never decoratively. Page rhythm leans on a subtle grid background in the hero and product dashboard screenshots framed in light panels rather than atmospheric color."

colors:
  primary: "#374151"
  on-primary: "#ffffff"
  primary-hover: "#1f2937"
  primary-focus: "#111827"
  ink: "#0a0a0f"
  ink-muted: "#3a3c47"
  ink-subtle: "#6b7280"
  ink-tertiary: "#9ca3af"
  canvas: "#ffffff"
  surface-1: "#f9fafb"
  surface-2: "#f3f4f6"
  surface-3: "#e9eaed"
  surface-4: "#e2e4e8"
  hairline: "#e5e7eb"
  hairline-strong: "#d1d5db"
  hairline-tertiary: "#b8bcc4"
  brand-secure: "#4b5563"
  semantic-success: "#16a34a"

typography:
  display-xl:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -3.0px
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -1.8px
  display-md:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1.0px
  headline:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.6px
  card-title:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.4px
  subhead:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.1px
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.05px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0.4px
  mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-focus}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
    border: "1px {colors.hairline}"
  feature-card-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
    border: "1px {colors.hairline-strong}"
  product-screenshot-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 0
    border: "1px {colors.hairline}"
    boxShadow: "0 8px 48px rgba(0,0,0,0.10), 0 0 0 1px #e5e7eb"
  cta-banner:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.xl}"
    padding: 48px
    border: "1px {colors.hairline}"
  icon-tile:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-subtle}"
    rounded: "{rounded.md}"
    size: 36px
    border: "1px {colors.hairline}"
  security-icon-tile:
    backgroundColor: "rgba(75,85,99,0.10)"
    textColor: "{colors.brand-secure}"
    rounded: "{rounded.md}"
    size: 36px
    border: "1px rgba(75,85,99,0.20)"
  cert-badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 6px 12px
    border: "1px {colors.hairline-strong}"
  language-tab-default:
    backgroundColor: "transparent"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  language-tab-selected:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  top-nav:
    backgroundColor: "transparent → {colors.canvas}/95 on scroll"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 56px
    backdropBlur: "md on scroll"
    border: "1px {colors.hairline} on scroll"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    padding: 64px 32px 40px
    border-top: "1px {colors.hairline}"
---

## Overview

Close Energy's marketing canvas is a clean white professional surface — `{colors.canvas}` is pure `#ffffff`. On top sits a four-step surface ladder (`{colors.surface-1}` through `{colors.surface-4}`) for cards and panels, with hairline borders running from `{colors.hairline}` (#e5e7eb) through `{colors.hairline-strong}` and `{colors.hairline-tertiary}`. Near-black text (`{colors.ink}` #0a0a0f) carries headlines and body copy.

The single chromatic accent is **charcoal gray** `{colors.primary}` (#374151) — used on primary CTA buttons and eyebrow labels. A darker hover state (`{colors.primary-hover}` #1f2937) and deepest focus tint (`{colors.primary-focus}` #111827) extend the same hue. The system avoids saturated chromatic colors on the marketing canvas; the only semantic color is `{colors.semantic-success}` (#16a34a) for success indicators, and `{colors.brand-secure}` (#4b5563) scopes specifically to the security section.

Type is set in **Inter** (Google Fonts, loaded at weights 400/500/600/700) with **JetBrains Mono** reserved for code and ID tokens. The hero renders a subtle grid overlay (`hero-grid`) — a 40×40px near-transparent grid on canvas — as the only decorative background motif.

**Key Characteristics:**
- **White-canvas marketing system** — `{colors.canvas}` (#ffffff) is the base surface.
- **Charcoal-gray accent** (`{colors.primary}` #374151) — used scarcely on primary CTA and eyebrow labels.
- Four-step light surface ladder (canvas → surface-1 → surface-2 → surface-3 → surface-4) carries hierarchy without shadow.
- Fluid display type: hero headline uses `clamp(36px, 5.5vw, 72px)` with `-0.035em` tracking; headings scale with `clamp()` throughout.
- Cards use `{rounded.lg}` 12px corners with 1px hairline borders; hover lifts to `surface-2`.
- **Subtle hero-grid background** — the only decorative surface treatment.
- No atmospheric gradients. No saturated accent colors. No dark surfaces on marketing chrome.

## Colors

### Brand & Accent
- **Charcoal** ({colors.primary}): The accent — primary CTA, eyebrow labels, stepper connector top.
- **Charcoal Hover** ({colors.primary-hover}): Darker charcoal (#1f2937) — hovered state of the primary CTA.
- **Charcoal Focus** ({colors.primary-focus}): Deepest tint (#111827) — pressed state, focus rings.

### Surface
- **Canvas** ({colors.canvas}): Default page background — pure white #ffffff.
- **Surface 1** ({colors.surface-1}): One step above canvas (#f9fafb) — feature cards, pain cards, security cards, footer panels.
- **Surface 2** ({colors.surface-2}): Two steps above (#f3f4f6) — hovered cards, selected language tab, icon tile backgrounds, cert badges.
- **Surface 3** ({colors.surface-3}): Three steps above (#e9eaed) — deepest lifted surface.
- **Surface 4** ({colors.surface-4}): Four steps above (#e2e4e8).
- **Hairline** ({colors.hairline}): 1px borders on cards and dividers (#e5e7eb).
- **Hairline Strong** ({colors.hairline-strong}): Stronger 1px borders — hovered card borders, cert badges (#d1d5db).
- **Hairline Tertiary** ({colors.hairline-tertiary}): Tertiary borders (#b8bcc4).

### Text
- **Ink** ({colors.ink}): All headlines and primary body type — near-black #0a0a0f.
- **Ink Muted** ({colors.ink-muted}): Secondary type at #3a3c47 — hero subheadline, narrative paragraphs.
- **Ink Subtle** ({colors.ink-subtle}): Tertiary type at #6b7280 — card body, nav links, footer columns.
- **Ink Tertiary** ({colors.ink-tertiary}): Quaternary at #9ca3af — captions, "clients" label, footer legal.

### Semantic
- **Success Green** ({colors.semantic-success}): #16a34a — success indicators.
- **Brand Secure** ({colors.brand-secure}): Muted gray #4b5563 — used exclusively in the Security section eyebrow and icon tiles.

## Typography

### Font Family

- **Inter** — Google Fonts, weights 400/500/600/700. Carries all display, headline, body, button, and caption text. Fallback: `-apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif`.
- **JetBrains Mono** — Used for code snippets and status tokens. Fallback: `ui-monospace, SF Mono, Menlo, monospace`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 600 | 1.05 | -3.0px | Largest hero headline (fluid: clamp) |
| `{typography.display-lg}` | 56px | 600 | 1.10 | -1.8px | Section opener headlines (fluid: clamp) |
| `{typography.display-md}` | 40px | 600 | 1.15 | -1.0px | Sub-section headlines |
| `{typography.headline}` | 28px | 600 | 1.20 | -0.6px | CTA banner heading |
| `{typography.card-title}` | 22px | 500 | 1.25 | -0.4px | Feature card title, pain card title |
| `{typography.subhead}` | 20px | 400 | 1.40 | -0.2px | Lead paragraphs |
| `{typography.body-lg}` | 18px | 400 | 1.50 | -0.1px | Hero subheadline, narrative paragraphs |
| `{typography.body}` | 16px | 400 | 1.50 | -0.05px | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Card body, nav links, footer columns |
| `{typography.caption}` | 12px | 400 | 1.40 | 0 | Captions, meta, footer legal |
| `{typography.button}` | 14px | 500 | 1.20 | 0 | All button labels |
| `{typography.eyebrow}` | 13px | 500 | 1.30 | 0.4px | Section eyebrow (uppercase + positive tracking) |
| `{typography.mono}` | 13px | 400 | 1.50 | 0 | JetBrains Mono for code in product screenshots |

### Principles

- **Fluid display type**: Hero and major section headlines use `clamp()` values rather than fixed pixel sizes — they scale between `display-md` (40px) and `display-xl` (72–80px) across viewport widths.
- **Aggressive negative tracking on display** (-0.035em at hero sizes).
- **Eyebrow uses positive tracking** (+0.4px, uppercase) — taxonomic contrast against the negative-tracked display.
- **Mono only in code contexts.** JetBrains Mono lives inside product screenshots and cert tokens.

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- Card interior padding: `{spacing.lg}` 24px on feature/pain/security cards; `{spacing.xxl}` 48px on CTA banners.
- Button padding: 8px vertical · 14px horizontal (standard) · 12px vertical · 24px horizontal (hero/CTA).
- Section vertical rhythm: `py-section` = 96px top + 96px bottom.

### Grid & Container

- Max content width: `1280px`.
- Pain/feature/security card grids: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- Footer link grid: 6-column (2-col brand + 4 × link columns).

### Hero Background

The hero section uses `.hero-grid` — a `40×40px` grid of `rgba(0,0,0,0.05)` lines on canvas. It also appears at `60%` opacity inside the CTA banner. This is the only decorative background treatment.

### Whitespace Philosophy

White canvas IS the breathing room. Sections share the canvas background; hierarchy is created by lifting content onto `surface-1` panels, not by color-blocking sections. `{spacing.section}` 96px vertical padding between sections.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No border, no background shift | Body text, hero text, footer |
| 1 (surface-1 lift) | `{colors.surface-1}` bg + 1px `{colors.hairline}` | Default cards (pain, feature, security, platform) |
| 2 (surface-2 lift on hover) | `{colors.surface-2}` bg + 1px `{colors.hairline-strong}` | Hovered card state |
| 3 (screenshot card) | `{colors.surface-1}` bg + 1px `{colors.hairline}` + `box-shadow 0 8px 48px rgba(0,0,0,0.10)` | Product dashboard screenshot |
| 4 (focus ring) | 2px `{colors.primary-focus}` outline at 25% opacity | Focused input, focused button |

The system relies on the surface ladder and hairline borders. Drop shadows are used only on the product screenshot card.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, status badges |
| `{rounded.sm}` | 6px | Inline tags |
| `{rounded.md}` | 8px | All buttons, form inputs, icon tiles |
| `{rounded.lg}` | 12px | Feature cards, pain cards, security cards, platform cards |
| `{rounded.xl}` | 16px | Product screenshot panels, CTA banner |
| `{rounded.xxl}` | 24px | Rare oversized containers |
| `{rounded.pill}` | 9999px | Language toggle tabs, social icon containers |
| `{rounded.full}` | 9999px | Avatar circles |

## Components

### Buttons

**`button-primary`** — Charcoal CTA. The default primary CTA across all pages.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 8px 14px (nav) / 12px 24px (hero/section CTAs), rounded `{rounded.md}`.
- Hover: background shifts to `{colors.primary-hover}` + `box-shadow 0 4px 12px rgba(0,0,0,0.15)` via `.btn-primary-glow`.
- Pressed: background shifts to `{colors.primary-focus}`.

### Cards

**`feature-card`** — Generic feature or pain-point tile.
- Background `{colors.surface-1}`, 1px `{colors.hairline}` border, rounded `{rounded.lg}`, padding 24px.
- Hover: lifts to `surface-2` + `hairline-strong` border.
- Contains an `icon-tile` (36×36px, `surface-2` bg, `rounded.md`) at top.

**`product-screenshot-card`** — Dashboard screenshot panel in the hero.
- Background `{colors.surface-1}`, 1px `{colors.hairline}` border, rounded `{rounded.xl}`, no inner padding (image fills).
- Extra depth: `box-shadow 0 8px 48px rgba(0,0,0,0.10), 0 0 0 1px #e5e7eb`.

**`cta-banner`** — Closing CTA panel near page bottom.
- Background `{colors.surface-1}`, 1px `{colors.hairline}` border, rounded `{rounded.xl}`, padding 48px.
- Contains `.hero-grid` overlay at 60% opacity for subtle texture.

### Security Section

**`security-icon-tile`** — Icon container in security pillar cards.
- Background `rgba(75,85,99,0.10)`, 1px `rgba(75,85,99,0.20)` border, `{colors.brand-secure}` icon color, 36×36px, `{rounded.md}`.

**`cert-badge`** — Certification pill in the security architecture strip.
- Background `{colors.surface-2}`, 1px `{colors.hairline-strong}` border, `{colors.ink-subtle}` text, `{rounded.md}`, padding 6px 12px.

### Navigation

**`top-nav`** — Sticky bar, 56px tall.
- Default: transparent background.
- Scrolled (>16px): `{colors.canvas}/95` + `backdrop-blur-md` + 1px `{colors.hairline}` bottom border.
- Contains: wordmark left, nav links center, language toggle + primary CTA right.
- Mobile: hamburger below 768px → `surface-1` dropdown with nav links + language toggle + CTA.

**Language toggle** — Pill tab group in nav.
- Container: `surface-1` bg + `hairline` border + `rounded.pill`, padding 2px.
- Default tab: transparent bg, `ink-subtle` text.
- Selected tab: `surface-2` bg, `ink` text.

### Footer

**`footer`** — 6-column grid on canvas.
- Background `{colors.canvas}`, 1px `{colors.hairline}` top border, padding 64px 32px 40px.
- Brand column (2-col span): wordmark + tagline + social icon row.
- 4 link columns: caption-weight column titles + caption-weight links in `ink-subtle`.
- Bottom bar: `ink-tertiary` legal text left, Privacy + Terms links right.

### Client Marquee

Continuous horizontal scroll of client logo placeholders. Each item: `opacity-40` at rest, `opacity-70` on hover. A 16×16px `hairline-strong` rounded square placeholder + `ink-subtle` brand name in `body-sm`. Animation: `marquee 40s linear infinite`, pauses on hover.

## Do's and Don'ts

### Do

- Keep `{colors.canvas}` (#ffffff) as the anchor surface — the whole system reads against white.
- Use `{colors.primary}` charcoal ONLY for: primary CTA buttons and eyebrow labels.
- Use the four-step surface ladder for card hierarchy. Lift cards one level on hover.
- Use `clamp()` for hero and major section headlines — never hardcode pixel sizes at the display level.
- Apply negative letter-spacing on display text (-0.035em at hero, scaling up toward 0 at body).
- Use `.hero-grid` as the only decorative background treatment (hero section + CTA banner at 60% opacity).
- Use `{rounded.md}` 8px for all buttons and icon tiles; `{rounded.lg}` for cards; `{rounded.xl}` for screenshot panels and the CTA banner.
- Use `{colors.brand-secure}` (#4b5563) exclusively in the Security section.

### Don't

- Don't ship a dark-mode marketing page.
- Don't introduce a second chromatic accent (blue, orange, green, purple for marketing chrome).
- Don't add atmospheric gradients, spotlight effects, or colored section backgrounds.
- Don't pill-round CTAs.
- Don't use `{colors.primary}` as a card fill or section background.
- Don't use `box-shadow` on cards except the product screenshot card.
- Don't skip surface levels when building hierarchy.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| Desktop | 1280px | Max content width |
| Tablet | 1024px | Some 2-col layouts collapse |
| Mobile-Lg | 768px | Nav collapses to hamburger; card grids go 1-up |
| Mobile | 480px | Display type at minimum clamp value (~36px) |

### Fluid Type

Hero headline: `clamp(36px, 5.5vw, 72px)` at `-0.035em`.  
Section headlines: `clamp(28px, 3.5vw, 48px)` or `clamp(28px, 3vw, 44px)` at `-0.025em`.  
CTA banner headline: `clamp(28px, 4vw, 56px)` at `-0.025em`.

### Touch Targets

- CTAs hold ≥40px tap height across viewports.
- Language tab pills hold ≥36px tap height; grow to ≥44px on touch.
- Nav links hold ≥40px tap target height on mobile.

### Collapsing Strategy

- **Top nav**: links + language toggle + CTA collapse to hamburger below 768px.
- **Card grids** (4-up desktop): → 2-up at `sm` (640px) → 1-up below.
- **Display type**: scales down via `clamp()` — no manual breakpoint overrides needed.
- **Footer grid**: 6-col → 2-col below 768px.

### Image Behavior

- Product dashboard screenshot maintains aspect ratio and never crops — it fills the full content width up to 1024px (`max-w-5xl`).
- Client marquee logos collapse from 6+ across to a scrolling strip on all viewports.

## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name.
2. New sections default to `bg-canvas` with `py-section` padding; lift content onto `surface-1` cards.
3. Default body to `{typography.body}` at weight 400; headlines at weight 600.
4. All display-level font sizes must use `clamp()`.
5. Add new variants as separate component entries.
6. Treat charcoal as scarce: primary CTA and eyebrow only.
7. Hero background uses `.hero-grid` class; CTA banner may reuse it at reduced opacity.

## Known Gaps

- Dark mode is not implemented and is not planned.
- Form-field error and validation styling is not yet defined.
- Animation tokens (counter, stepper, marquee) are implemented via `IntersectionObserver` + `useState` — no animation library. Timing values (0.3s ease-out, 0.5s ease-out) are inline, not tokenized.
- Client logo marquee uses text placeholders; real logos will need a defined container height.
- Social icon links in the footer are placeholder `href="#"`.
