'use client'

import { useI18n } from '@/lib/i18n/context'

const outlets = ['TechCrunch', 'Forbes', 'PV Tech', 'Solar Power World', 'CleanTechnica', 'Axios']

export default function PressStrip() {
  const { t } = useI18n()

  return (
    <section className="border-y border-hairline bg-canvas py-8">
      <div className="max-w-content mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <span className="text-ink-tertiary text-eyebrow uppercase tracking-widest shrink-0">
            {t.press.asSeenIn}
          </span>
          <div className="flex items-center gap-8 flex-wrap justify-center sm:justify-start">
            {outlets.map((name) => (
              <span
                key={name}
                className="text-ink-tertiary text-body-sm font-medium opacity-50 hover:opacity-80 transition-opacity cursor-pointer"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
