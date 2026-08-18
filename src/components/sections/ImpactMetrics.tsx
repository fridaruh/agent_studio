'use client'

import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/lib/i18n/context'

function useCountUp(target: number, duration = 2000, start = false) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!start) return
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [start, target, duration])

  return current
}

/**
 * 'static'  — show the final number. Server render, no-JS, and the case where the
 *             section is already on screen at first paint all land here.
 * 'ready'   — section is below the fold, numbers held at 0 waiting to scroll in.
 * 'running' — counting up.
 */
type Phase = 'static' | 'ready' | 'running'

function StatCard({
  value, suffix, prefix, label, phase,
}: {
  value: number
  suffix: string
  prefix?: string
  label: string
  phase: Phase
}) {
  const count = useCountUp(value, 1800, phase === 'running')
  const shown = phase === 'static' ? value : count

  return (
    <div className="p-8 bg-surface-1 border border-hairline rounded-lg">
      <div
        className="font-semibold text-ink mb-3"
        style={{ fontSize: 'clamp(40px, 4vw, 64px)', lineHeight: 1, letterSpacing: '-0.04em' }}
      >
        <span className="text-primary">{prefix}</span>
        <span>{shown}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-ink-subtle text-body-sm leading-relaxed">{label}</p>
    </div>
  )
}

export default function ImpactMetrics() {
  const { t } = useI18n()
  const { metrics } = t
  const ref = useRef<HTMLElement>(null)
  const [phase, setPhase] = useState<Phase>('static')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Already visible at first paint — leave the final numbers as they are instead of
    // resetting them to 0 and counting up in front of the reader.
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setPhase('ready')
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setPhase('running'); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-section bg-canvas" id="metrics">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{metrics.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-12 max-w-2xl"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          {metrics.headline}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.stats.map((stat, i) => (
            <StatCard
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              prefix={'prefix' in stat ? stat.prefix : undefined}
              label={stat.label}
              phase={phase}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
