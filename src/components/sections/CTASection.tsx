'use client'

import { useI18n } from '@/lib/i18n/context'

export default function CTASection() {
  const { t } = useI18n()
  const { cta } = t

  return (
    <section className="py-section bg-canvas" id="contact">
      <div className="max-w-content mx-auto px-6">
        <div className="relative rounded-xl bg-surface-1 border border-hairline overflow-hidden p-12 text-center">
          <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />

          <div className="relative">
            <h2
              className="text-ink font-semibold mb-2"
              style={{ fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              {cta.headline}
            </h2>
            <p
              className="text-ink-muted mb-10"
              style={{ fontSize: 'clamp(18px, 2vw, 24px)', letterSpacing: '-0.01em' }}
            >
              {cta.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                className="px-6 py-3 text-button text-ink bg-surface-2 border border-hairline rounded-md hover:bg-surface-3 hover:border-hairline-strong transition-all"
              >
                {cta.cta1}
              </a>
              <a
                href="#activate"
                className="px-6 py-3 text-button text-white bg-primary rounded-md hover:bg-primary-hover transition-colors btn-primary-glow"
              >
                {cta.cta2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
