'use client'

import { useI18n } from '@/lib/i18n/context'

export default function Integrations() {
  const { t } = useI18n()
  const { integrations } = t

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

        {/* Integration grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {integrations.categories.map((cat) => (
            <div key={cat.name} className="p-5 bg-surface-1 border border-hairline rounded-lg hover:border-hairline-strong transition-all">
              <p className="text-ink-tertiary text-eyebrow uppercase tracking-widest mb-3">{cat.name}</p>
              <div className="space-y-2">
                {cat.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2.5 py-1.5">
                    <div className="w-6 h-6 rounded bg-surface-2 border border-hairline flex items-center justify-center">
                      <span className="text-ink-tertiary font-mono text-caption">{tool[0]}</span>
                    </div>
                    <span className="text-ink-muted text-body-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All integrations visual bar */}
        <div className="flex items-center justify-center gap-3 py-6 border border-hairline rounded-lg bg-surface-1 mb-8">
          {['SF', 'HB', 'WA', 'GM', 'OL', 'JR', 'MN', 'AS', 'AU', 'HL', 'SP', 'NS'].map((abbr, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-md bg-surface-2 border border-hairline flex items-center justify-center text-ink-tertiary text-caption font-medium hover:border-hairline-strong hover:text-ink-subtle transition-all cursor-default"
              title={abbr}
            >
              {abbr}
            </div>
          ))}
          <span className="text-ink-tertiary text-caption ml-2">+más</span>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-ink-subtle text-body-sm mb-4">{integrations.bottomCta}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-1 border border-hairline rounded-md text-ink-subtle text-button hover:text-ink hover:border-hairline-strong transition-all"
          >
            Contáctanos
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
