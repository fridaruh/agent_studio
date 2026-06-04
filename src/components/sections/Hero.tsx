'use client'

import { useI18n } from '@/lib/i18n/context'

const clientLogos = [
  'SolarNorte', 'Enersol MX', 'Helio Group', 'SunTech LAT', 'Voltix', 'GreenWatt',
]

export default function Hero() {
  const { t } = useI18n()
  const { hero } = t

  return (
    <section className="relative min-h-screen flex flex-col pt-14 overflow-hidden bg-canvas hero-grid">

      <div className="relative max-w-content mx-auto w-full px-6 pt-24 pb-16 flex flex-col items-center text-center">
        {/* Headline */}
        <h1
          className="text-ink font-semibold max-w-4xl"
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.07, letterSpacing: '-0.035em' }}
        >
          {hero.headline}
        </h1>

        {/* Subheadline */}
        <p
          className="text-ink-muted mt-6 max-w-2xl"
          style={{ fontSize: 'clamp(16px, 1.4vw, 20px)', lineHeight: 1.55, letterSpacing: '-0.01em' }}
        >
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
          <a
            href="#contact"
            className="px-5 py-2.5 text-button text-ink bg-surface-1 border border-hairline rounded-md hover:bg-surface-2 transition-colors duration-150"
          >
            {hero.cta1}
          </a>
          <a
            href="#activate"
            className="px-5 py-2.5 text-button text-white bg-primary rounded-md hover:bg-primary-hover transition-colors duration-150 btn-primary-glow"
          >
            {hero.cta2}
          </a>
        </div>

        {/* Dashboard mockup */}
        <div
          className="w-full max-w-4xl mt-16 rounded-xl border border-hairline-strong bg-surface-1 overflow-hidden"
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 0 0 1px #e5e7eb' }}
        >
          {/* Dashboard header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-hairline bg-surface-2">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {['#ff5f56', '#ffbd2e', '#27c93f'].map((c) => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c, opacity: 0.8 }} />
                ))}
              </div>
              <span className="text-ink-subtle text-caption font-medium">{hero.dashboardLabel}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {hero.dashboardFilters.map((f, i) => (
                <span
                  key={f}
                  className={`px-2.5 py-0.5 text-caption rounded-pill ${
                    i === 0
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-ink-subtle hover:text-ink-muted cursor-pointer'
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Lead cards */}
          <div className="divide-y divide-hairline">
            {hero.leads.map((lead, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3.5 hover:bg-surface-2 transition-colors group">
                {/* Avatar */}
                <div className="w-8 h-8 rounded-md bg-surface-3 border border-hairline flex items-center justify-center shrink-0">
                  <span className="text-caption text-ink-subtle font-medium">{lead.company[0]}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-ink text-body-sm font-medium truncate">{lead.company}</span>
                    <span className="text-caption text-ink-tertiary px-1.5 py-0.5 rounded bg-surface-3 border border-hairline shrink-0">
                      {lead.type}
                    </span>
                  </div>
                  <p className="text-ink-subtle text-caption truncate">{lead.msg}</p>
                </div>

                {/* Status + time */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span
                    className={`text-caption px-2 py-0.5 rounded-pill ${
                      lead.statusColor === 'primary'
                        ? 'bg-primary/15 text-primary border border-primary/25'
                        : lead.statusColor === 'success'
                        ? 'bg-success/15 text-success border border-success/25'
                        : 'bg-surface-3 text-ink-subtle border border-hairline'
                    }`}
                  >
                    {lead.status}
                  </span>
                  <span className="text-ink-tertiary text-caption">{lead.time}</span>
                </div>

                {/* Quick action */}
                <button className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 text-caption text-primary bg-primary/10 rounded border border-primary/20 hover:bg-primary/20">
                  →
                </button>
              </div>
            ))}
          </div>

          {/* Dashboard footer stats */}
          <div className="flex items-center gap-6 px-5 py-3 border-t border-hairline bg-surface-2">
            {hero.dashboardStats.map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                <span className="text-caption text-ink-subtle">{stat}</span>
              </div>
            ))}
            <div className="ml-auto flex items-center gap-1.5 text-caption text-ink-subtle">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live
            </div>
          </div>
        </div>

        {/* Client marquee */}
        <div className="w-full mt-16">
          <p className="text-ink-tertiary text-caption mb-6 uppercase tracking-widest">{hero.clientsLabel}</p>
          <div className="relative overflow-hidden">
            <div className="flex gap-12 marquee-track" style={{ width: 'max-content' }}>
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity cursor-pointer">
                    <div className="w-5 h-5 rounded-sm bg-hairline-strong" />
                    <span className="text-ink-subtle text-body-sm font-medium whitespace-nowrap">{logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
