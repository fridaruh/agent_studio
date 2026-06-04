'use client'

import { useI18n } from '@/lib/i18n/context'

export default function CaseStudy() {
  const { t } = useI18n()
  const { caseStudy } = t

  return (
    <section className="py-section bg-surface-1 border-y border-hairline" id="case-study">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-8">{caseStudy.eyebrow}</p>

        <div className="relative rounded-xl bg-surface-2 border border-hairline overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 hero-grid opacity-20" />

          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-surface-1 border border-hairline flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a8f98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-ink text-body-sm font-medium">{caseStudy.client}</p>
                  <p className="text-ink-tertiary text-caption">Solar installer</p>
                </div>
              </div>

              <blockquote className="text-ink font-medium mb-6" style={{ fontSize: 'clamp(20px, 2vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.015em' }}>
                &ldquo;{caseStudy.result}&rdquo;
              </blockquote>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-button hover:text-primary-hover transition-colors group"
              >
                {caseStudy.cta}
                <svg className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Stats callout */}
            <div className="shrink-0 grid grid-cols-2 gap-3 w-full md:w-auto">
              {[
                { value: '80%', label: 'Reducción en tiempo de cotización' },
                { value: '+35%', label: 'Aumento en conversión' },
                { value: '100%', label: 'Leads respondidos < 5 min' },
                { value: '5–8×', label: 'ROI en 90 días' },
              ].map((stat) => (
                <div key={stat.label} className="px-4 py-3 bg-surface-1 border border-hairline rounded-lg text-center">
                  <p className="text-ink font-semibold text-headline">{stat.value}</p>
                  <p className="text-ink-tertiary text-caption mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
