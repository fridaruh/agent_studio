'use client'

import { useI18n } from '@/lib/i18n/context'

const icons = [
  // Clock
  <svg key="clock" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>,
  // User slash
  <svg key="user" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="1" x2="17" y2="7"/>
  </svg>,
  // Inbox
  <svg key="inbox" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </svg>,
  // Alert
  <svg key="alert" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>,
]

export default function ProblemSection() {
  const { t } = useI18n()
  const { problem } = t

  return (
    <section className="py-section bg-canvas" id="problem">
      <div className="max-w-content mx-auto px-6">
        {/* Headline + narrative */}
        <div className="max-w-3xl mb-16">
          <h2
            className="text-ink font-semibold mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
          >
            {problem.headline}
          </h2>
          <p className="text-ink-muted text-body-lg leading-relaxed">
            {problem.narrative}
          </p>
        </div>

        {/* Pain cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problem.cards.map((card, i) => (
            <div
              key={i}
              className="p-6 bg-surface-1 border border-hairline rounded-lg hover:border-hairline-strong hover:bg-surface-2 transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-md bg-surface-2 border border-hairline flex items-center justify-center text-ink-subtle mb-4 group-hover:text-ink-muted transition-colors">
                {icons[i]}
              </div>
              <h3 className="text-ink text-card-title font-medium mb-2 leading-snug">{card.title}</h3>
              <p className="text-ink-subtle text-body-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
