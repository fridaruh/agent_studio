'use client'

import { useState, useEffect, useRef } from 'react'
import { useI18n } from '@/lib/i18n/context'

export default function QuotingAgent() {
  const { t } = useI18n()
  const { quotingAgent } = t
  const [activeStep, setActiveStep] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % quotingAgent.steps.length)
          }, 2200)
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [quotingAgent.steps.length])

  return (
    <section className="py-section bg-surface-1 border-y border-hairline" id="agents">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-3">{quotingAgent.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-2"
          style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
        >
          {quotingAgent.name}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3 mb-8">
          <p className="text-ink-muted text-body-lg leading-relaxed">{quotingAgent.subtitle}</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-ink-subtle text-body-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.7 19.79 19.79 0 0 1 1.61 5.07 2 2 0 0 1 3.59 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.67a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z"/>
              </svg>
              {quotingAgent.channels}
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-caption bg-success/15 text-success border border-success/25 rounded-pill font-medium">
                {quotingAgent.timeReduction}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before / After comparison */}
          <div className="bg-surface-2 border border-hairline rounded-lg overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 border-b border-hairline bg-surface-3 text-ink-subtle text-body-sm font-medium border-r border-hairline">
                {quotingAgent.beforeTitle}
              </div>
              <div className="px-4 py-3 border-b border-hairline bg-primary/10 text-primary text-body-sm font-medium">
                {quotingAgent.afterTitle}
              </div>
            </div>
            {quotingAgent.comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 border-b border-hairline last:border-0 ${i % 2 === 0 ? '' : 'bg-surface-1/30'}`}>
                <div className="px-4 py-3 border-r border-hairline">
                  <div className="flex items-start gap-2">
                    <svg className="shrink-0 mt-0.5 text-ink-tertiary" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    <p className="text-ink-subtle text-caption leading-relaxed">{row[0]}</p>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="flex items-start gap-2">
                    <svg className="shrink-0 mt-0.5 text-success" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <p className="text-ink-muted text-caption leading-relaxed">{row[1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated stepper */}
          <div ref={ref} className="space-y-2">
            {quotingAgent.steps.map((step, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                  activeStep === i
                    ? 'bg-primary/10 border-primary/30'
                    : 'bg-transparent border-transparent hover:border-hairline hover:bg-surface-2'
                }`}
                onClick={() => setActiveStep(i)}
              >
                {/* Step number + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-caption font-medium transition-all duration-300 ${
                    activeStep === i
                      ? 'bg-primary border-primary text-white'
                      : activeStep > i
                      ? 'bg-success/20 border-success/40 text-success'
                      : 'bg-surface-2 border-hairline text-ink-subtle'
                  }`}>
                    {activeStep > i ? (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  {i < quotingAgent.steps.length - 1 && (
                    <div className={`w-px flex-1 mt-1 min-h-[20px] transition-colors duration-300 ${activeStep > i ? 'bg-success/40' : 'bg-hairline'}`} />
                  )}
                </div>

                <div className="pt-0.5 flex-1">
                  <p className={`text-body-sm font-medium mb-0.5 transition-colors ${activeStep === i ? 'text-ink' : 'text-ink-subtle'}`}>
                    {step.title}
                  </p>
                  <p className={`text-caption leading-relaxed transition-colors ${activeStep === i ? 'text-ink-muted' : 'text-ink-tertiary'}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
