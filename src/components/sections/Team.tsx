'use client'

import { useI18n } from '@/lib/i18n/context'

const agentIcons = [
  // Megaphone - content
  <svg key="stanley" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
  </svg>,
  // Layers - scope/tasks
  <svg key="elliot" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>,
  // Zap - quoting speed
  <svg key="nova" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
  // Refresh - follow-up loops
  <svg key="rex" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>,
]

export default function Team() {
  const { t } = useI18n()
  const { team } = t

  return (
    <section id="team" className="py-section bg-canvas border-t border-hairline">
      <div className="max-w-content mx-auto px-6">

        {/* Header */}
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{team.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-4"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          {team.headline}
        </h2>
        <p className="text-ink-subtle text-body leading-relaxed max-w-2xl mb-16">{team.subheadline}</p>

        {/* Human founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {team.founders.map((founder) => (
            <div key={founder.name} className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-surface-2 border border-hairline flex items-center justify-center shrink-0">
                <span className="text-ink font-semibold text-base tracking-tight">{founder.initials}</span>
              </div>
              <div>
                <h3
                  className="text-ink font-semibold uppercase tracking-wide mb-1"
                  style={{ fontSize: '15px', letterSpacing: '0.04em' }}
                >
                  {founder.name}
                </h3>
                <p className="text-primary text-body-sm font-medium mb-2">{founder.role}</p>
                <p className="text-ink-subtle text-body-sm leading-relaxed">{founder.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Autonomous team divider */}
        <div className="border-t border-hairline pt-12 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
            <p
              className="text-ink font-semibold uppercase tracking-wide"
              style={{ fontSize: '13px', letterSpacing: '0.06em' }}
            >
              {team.autonomousEyebrow}
            </p>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-pill text-caption font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              24/7 Active
            </span>
          </div>
          <p className="text-ink-subtle text-body-sm">{team.autonomousDesc}</p>
        </div>

        {/* AI agent cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {team.agents.map((agent, i) => (
            <div
              key={agent.name}
              className="p-5 bg-surface-1 border border-hairline rounded-lg hover:border-hairline-strong transition-all duration-200 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-surface-2 border border-hairline flex items-center justify-center text-ink-subtle">
                {agentIcons[i]}
              </div>
              <div>
                <h3
                  className="text-ink font-semibold uppercase tracking-wide mb-0.5"
                  style={{ fontSize: '13px', letterSpacing: '0.04em' }}
                >
                  {agent.name}
                </h3>
                <p className="text-primary text-caption font-medium">{agent.role}</p>
              </div>
              <p className="text-ink-subtle text-caption leading-relaxed flex-1">{agent.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
