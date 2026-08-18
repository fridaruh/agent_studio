'use client'

import { useI18n } from '@/lib/i18n/context'
import { BOOKING_URL } from '@/lib/links'

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

        {/* CTA */}
        <div className="mt-8">
          <a
            href={BOOKING_URL}
            className="px-6 py-3 text-button text-white bg-primary rounded-md hover:bg-primary-hover transition-colors duration-150 btn-primary-glow"
          >
            {hero.cta1}
          </a>
        </div>

        {/* Dashboard screenshot */}
        <div
          className="w-full max-w-5xl mt-16 rounded-2xl overflow-hidden border border-hairline"
          style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.10), 0 0 0 1px #e5e7eb' }}
        >
          <img
            src="/dashboard.png"
            alt="Close Energy dashboard"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  )
}
