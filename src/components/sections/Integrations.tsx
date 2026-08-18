'use client'

import { useI18n } from '@/lib/i18n/context'
import { BOOKING_URL } from '@/lib/links'

// Node geometry for the desktop SVG diagram (viewBox 0 0 800 400)
const SOURCE_Y = [72, 200, 328]
const TARGET_Y = [72, 200, 328]
const SOURCE_PATHS = [
  'M200 72 C 272 72, 268 190, 330 190',
  'M200 200 C 260 200, 270 200, 330 200',
  'M200 328 C 272 328, 268 210, 330 210',
]
const TARGET_PATHS = [
  'M470 190 C 532 190, 528 72, 600 72',
  'M470 200 C 540 200, 530 200, 600 200',
  'M470 210 C 532 210, 528 328, 600 328',
]

export default function Integrations() {
  const { t } = useI18n()
  const { integrations } = t
  const { diagram } = integrations

  const featuredPairs = [
    integrations.featured.slice(0, 2),
    integrations.featured.slice(2, 4),
    integrations.featured.slice(4, 6),
  ]

  return (
    <section className="py-section bg-canvas" id="integrations">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{integrations.eyebrow}</p>
        <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between mb-12">
          <div>
            <h2
              className="text-ink font-semibold mb-3"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
            >
              {integrations.headline}
            </h2>
            <p className="text-ink-muted text-body-lg">{integrations.tagline}</p>
          </div>
        </div>

        {/* Animated connection diagram — desktop */}
        <div className="hidden md:block mb-12">
          <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label={integrations.headline}>
            {/* Connection lines */}
            {[...SOURCE_PATHS, ...TARGET_PATHS].map((d) => (
              <path key={d} d={d} className="stroke-hairline-strong" fill="none" strokeWidth="1.5" />
            ))}

            {/* Traveling pulses */}
            <g className="motion-reduce:hidden">
              {SOURCE_PATHS.map((d, i) => (
                <circle key={d} r="3.5" className="fill-primary">
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1}s`} path={d} />
                </circle>
              ))}
              {TARGET_PATHS.map((d, i) => (
                <circle key={d} r="3.5" className="fill-primary">
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${0.5 + i * 1}s`} path={d} />
                </circle>
              ))}
            </g>

            {/* Source app nodes */}
            {diagram.sources.map((name, i) => (
              <g key={name}>
                <rect x="30" y={SOURCE_Y[i] - 24} width="170" height="48" rx="10" className="fill-surface-1 stroke-hairline" />
                <text x="115" y={SOURCE_Y[i] + 5} textAnchor="middle" className="fill-ink-muted" fontSize="14">
                  {name}
                </text>
              </g>
            ))}

            {/* Target app nodes */}
            {diagram.targets.map((name, i) => (
              <g key={name}>
                <rect x="600" y={TARGET_Y[i] - 24} width="170" height="48" rx="10" className="fill-surface-1 stroke-hairline" />
                <text x="685" y={TARGET_Y[i] + 5} textAnchor="middle" className="fill-ink-muted" fontSize="14">
                  {name}
                </text>
              </g>
            ))}

            {/* Hub pulse ring */}
            <circle cx="400" cy="200" r="50" className="stroke-primary motion-reduce:hidden" fill="none" strokeWidth="1">
              <animate attributeName="r" values="48;72" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0" dur="2.5s" repeatCount="indefinite" />
            </circle>

            {/* Hub node */}
            <rect x="330" y="164" width="140" height="72" rx="12" className="fill-surface-2 stroke-hairline-strong" />
            <text x="400" y="196" textAnchor="middle" className="fill-ink font-semibold" fontSize="15">
              {diagram.hub}
            </text>
            <text x="400" y="216" textAnchor="middle" className="fill-ink-tertiary" fontSize="11">
              {diagram.hubLabel}
            </text>
          </svg>
        </div>

        {/* Connection diagram — mobile (stacked, no lines) */}
        <div className="md:hidden flex flex-col items-center gap-3 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {diagram.sources.map((name) => (
              <span key={name} className="px-3 py-1.5 bg-surface-1 border border-hairline rounded-md text-ink-muted text-body-sm">
                {name}
              </span>
            ))}
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-tertiary">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <div className="px-6 py-3 bg-surface-2 border border-hairline-strong rounded-lg text-center">
            <p className="text-ink font-semibold text-body">{diagram.hub}</p>
            <p className="text-ink-tertiary text-caption">{diagram.hubLabel}</p>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-tertiary">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <div className="flex flex-wrap justify-center gap-2">
            {diagram.targets.map((name) => (
              <span key={name} className="px-3 py-1.5 bg-surface-1 border border-hairline rounded-md text-ink-muted text-body-sm">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Featured apps — 3 columns of 2, "and many more…" on the right */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-12">
          {featuredPairs.map((pair) => (
            <div key={pair.join('-')} className="flex flex-col gap-4">
              {pair.map((app) => (
                <div key={app} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-surface-2 border border-hairline flex items-center justify-center">
                    <span className="text-ink-tertiary font-mono text-caption">{app[0]}</span>
                  </div>
                  <span className="text-ink-muted text-body-sm">{app}</span>
                </div>
              ))}
            </div>
          ))}
          <span className="text-ink-subtle text-body">{integrations.andMore}</span>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-ink-subtle text-body-sm mb-4">{integrations.bottomCta}</p>
          <a
            href={BOOKING_URL}
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-1 border border-hairline rounded-md text-ink-subtle text-button hover:text-ink hover:border-hairline-strong transition-all"
          >
            {t.nav.contactUs}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
