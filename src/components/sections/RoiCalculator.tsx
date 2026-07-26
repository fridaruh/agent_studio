'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n/context'
import { BOOKING_URL } from '@/lib/links'

/**
 * Every figure this section shows is derived from numbers the visitor types.
 * There is no efficiency benchmark of ours baked in anywhere — the one
 * forward-looking input, how much of the quoting work gets automated, is a
 * slider the visitor sets, and it is labelled as their assumption. Close Energy
 * has no audited savings figure to publish yet; until it does, this section must
 * not imply one.
 */

type FieldKey = 'leads' | 'hoursPerQuote' | 'hourlyCost' | 'avgTicket' | 'closeRate' | 'unfollowed'

const LIMITS: Record<FieldKey, { min: number; max: number; initial: number }> = {
  leads: { min: 0, max: 5000, initial: 40 },
  hoursPerQuote: { min: 0, max: 100, initial: 3 },
  hourlyCost: { min: 0, max: 100000, initial: 250 },
  avgTicket: { min: 0, max: 100000000, initial: 180000 },
  closeRate: { min: 0, max: 100, initial: 20 },
  unfollowed: { min: 0, max: 100, initial: 30 },
}

const FIELD_ORDER: FieldKey[] = ['leads', 'hoursPerQuote', 'hourlyCost', 'avgTicket', 'closeRate', 'unfollowed']

/** Text state, not numbers: otherwise clearing a field snaps it back to 0 mid-typing. */
function toNumber(raw: string, key: FieldKey) {
  const parsed = Number(raw.replace(/[^0-9.]/g, ''))
  if (!Number.isFinite(parsed)) return 0
  return Math.min(Math.max(parsed, LIMITS[key].min), LIMITS[key].max)
}

export default function RoiCalculator() {
  const { t, locale } = useI18n()
  const { roi } = t

  const [values, setValues] = useState<Record<FieldKey, string>>(
    () => Object.fromEntries(FIELD_ORDER.map((k) => [k, String(LIMITS[k].initial)])) as Record<FieldKey, string>
  )
  const [automation, setAutomation] = useState(50)

  const n = (key: FieldKey) => toNumber(values[key], key)

  const hoursPerMonth = n('leads') * n('hoursPerQuote')
  const costPerMonth = hoursPerMonth * n('hourlyCost')
  const revenueAtRisk = n('leads') * (n('unfollowed') / 100) * (n('closeRate') / 100) * n('avgTicket')
  const hoursFreed = hoursPerMonth * (automation / 100)
  const savedPerYear = hoursFreed * n('hourlyCost') * 12

  const money = new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  })
  const number = new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US', { maximumFractionDigits: 0 })

  const inputClass =
    'w-full px-3.5 py-2.5 bg-canvas border border-hairline rounded-md text-ink text-body-sm focus:outline-none focus:border-primary/50 transition-colors'

  return (
    <section className="py-section bg-canvas" id="roi">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{roi.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-3 max-w-2xl"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          {roi.headline}
        </h2>
        <p className="text-ink-muted text-body-lg max-w-2xl mb-12">{roi.intro}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Inputs */}
          <div className="p-6 sm:p-8 bg-surface-1 border border-hairline rounded-lg">
            <span className="text-ink-tertiary text-caption font-medium uppercase tracking-widest mb-6 block">
              {roi.inputsTitle}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FIELD_ORDER.map((key) => (
                <div key={key}>
                  <label htmlFor={`roi-${key}`} className="text-ink text-body-sm font-medium mb-2 block">
                    {roi.fields[key].label}
                  </label>
                  <input
                    id={`roi-${key}`}
                    type="number"
                    inputMode="numeric"
                    min={LIMITS[key].min}
                    max={LIMITS[key].max}
                    value={values[key]}
                    onChange={(e) => setValues((prev) => ({ ...prev, [key]: e.target.value }))}
                    className={inputClass}
                  />
                  <p className="text-ink-tertiary text-caption mt-1.5 leading-relaxed">{roi.fields[key].hint}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="p-6 sm:p-8 bg-surface-1 border border-hairline rounded-lg flex flex-col">
            <span className="text-ink-tertiary text-caption font-medium uppercase tracking-widest mb-6 block">
              {roi.resultsTitle}
            </span>

            <div className="space-y-4">
              <div className="p-5 bg-canvas border border-hairline rounded-md">
                <p className="text-ink-subtle text-body-sm mb-1.5">{roi.results.hours}</p>
                <p className="text-ink font-semibold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.03em' }}>
                  {number.format(hoursPerMonth)}
                  <span className="text-primary text-subhead ml-1">{roi.results.hoursUnit}</span>
                </p>
              </div>

              <div className="p-5 bg-canvas border border-hairline rounded-md">
                <p className="text-ink-subtle text-body-sm mb-1.5">{roi.results.cost}</p>
                <p className="text-ink font-semibold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.03em' }}>
                  {money.format(costPerMonth)}
                </p>
              </div>

              <div className="p-5 bg-canvas border border-hairline rounded-md">
                <p className="text-ink-subtle text-body-sm mb-1.5">{roi.results.atRisk}</p>
                <p className="text-ink font-semibold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.03em' }}>
                  {money.format(revenueAtRisk)}
                </p>
                <p className="text-ink-tertiary text-caption mt-2 leading-relaxed">{roi.results.atRiskNote}</p>
              </div>
            </div>

            {/* The visitor's own assumption, kept visibly separate from the figures above. */}
            <div className="mt-6 pt-6 border-t border-hairline">
              <div className="flex items-baseline justify-between mb-3">
                <label htmlFor="roi-automation" className="text-ink text-body-sm font-medium">
                  {roi.scenario.label}
                </label>
                <span className="text-primary font-semibold text-subhead">{automation}%</span>
              </div>
              <input
                id="roi-automation"
                type="range"
                min={0}
                max={100}
                step={5}
                value={automation}
                onChange={(e) => setAutomation(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
              />
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                  <p className="text-ink-subtle text-body-sm mb-1">{roi.scenario.hoursFreed}</p>
                  <p className="text-ink font-semibold text-headline" style={{ letterSpacing: '-0.025em' }}>
                    {number.format(hoursFreed)}
                    <span className="text-primary text-body ml-1">{roi.results.hoursUnit}</span>
                  </p>
                </div>
                <div>
                  <p className="text-ink-subtle text-body-sm mb-1">{roi.scenario.savedPerYear}</p>
                  <p className="text-ink font-semibold text-headline" style={{ letterSpacing: '-0.025em' }}>
                    {money.format(savedPerYear)}
                  </p>
                </div>
              </div>
              <p className="text-ink-tertiary text-caption mt-4 leading-relaxed">{roi.scenario.disclaimer}</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-ink-subtle text-body-sm mb-4">{roi.bottomCta}</p>
          <a
            href={BOOKING_URL}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary rounded-md text-white text-button hover:bg-primary-hover transition-all"
          >
            {t.nav.contactUs}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
