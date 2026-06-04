'use client'

import { useI18n } from '@/lib/i18n/context'

const statusColors: Record<string, string> = {
  Beta: 'bg-primary/10 text-primary border-primary/20',
  Enterprise: 'bg-surface-2 text-ink-subtle border-hairline',
}

export default function MoreAgents() {
  const { t } = useI18n()
  const { moreAgents } = t

  return (
    <section className="py-section bg-surface-1 border-t border-hairline">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{moreAgents.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-12"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          {moreAgents.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {moreAgents.agents.map((agent, i) => (
            <div
              key={i}
              className="p-6 bg-surface-2 border border-hairline rounded-lg hover:border-hairline-strong transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8a8f98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/>
                  </svg>
                </div>
                <span className={`text-caption px-2.5 py-1 rounded-pill border ${statusColors[agent.status] || statusColors.Enterprise}`}>
                  {agent.status}
                </span>
              </div>
              <h3 className="text-ink text-card-title font-medium mb-2">{agent.name}</h3>
              <p className="text-ink-subtle text-body-sm leading-relaxed flex-1">{agent.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 text-button text-ink bg-surface-2 border border-hairline rounded-md hover:bg-surface-3 hover:border-hairline-strong transition-all"
          >
            {moreAgents.cta1}
          </a>
          <a
            href="#activate"
            className="px-5 py-2.5 text-button text-white bg-primary rounded-md hover:bg-primary-hover transition-colors btn-primary-glow"
          >
            {moreAgents.cta2}
          </a>
        </div>
      </div>
    </section>
  )
}
