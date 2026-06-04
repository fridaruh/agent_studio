'use client'

import { useI18n } from '@/lib/i18n/context'

const pillarIcons = [
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
  </svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>,
]

export default function Security() {
  const { t } = useI18n()
  const { security } = t

  return (
    <section className="py-section bg-canvas" id="security">
      <div className="max-w-content mx-auto px-6">
        <p className="text-brand-secure text-eyebrow uppercase tracking-widest mb-4">{security.eyebrow}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          <h2
            className="text-ink font-semibold"
            style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
          >
            {security.headline}
          </h2>
          <p className="text-ink-muted text-body-lg leading-relaxed self-end">{security.context}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {security.pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 bg-surface-1 border border-hairline rounded-lg hover:border-hairline-strong hover:bg-surface-2 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-9 h-9 rounded-md bg-brand-secure/10 border border-brand-secure/20 flex items-center justify-center text-brand-secure group-hover:bg-brand-secure/15 transition-colors">
                  {pillarIcons[i]}
                </div>
                <span className="text-ink-tertiary font-semibold" style={{ fontSize: '32px', lineHeight: 1, letterSpacing: '-0.04em' }}>
                  {pillar.number}
                </span>
              </div>
              <h3 className="text-ink text-card-title font-medium mb-2">{pillar.title}</h3>
              <p className="text-ink-subtle text-body-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Security architecture visual */}
        <div className="mt-10 p-6 bg-surface-1 border border-hairline rounded-lg">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {['AES-256', 'TLS 1.3', 'SOC 2', 'ISO 27001', 'GDPR', 'Zero Trust'].map((cert) => (
              <span
                key={cert}
                className="px-3 py-1.5 bg-surface-2 border border-hairline-strong rounded-md text-ink-subtle text-caption font-medium hover:text-ink-muted transition-colors cursor-default"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
