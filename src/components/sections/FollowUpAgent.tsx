'use client'

import { useState, useEffect, useRef } from 'react'
import { useI18n } from '@/lib/i18n/context'

export default function FollowUpAgent() {
  const { t } = useI18n()
  const { followUpAgent } = t
  const [activeStep, setActiveStep] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % followUpAgent.steps.length)
          }, 2000)
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [followUpAgent.steps.length])

  const channelIcons = [
    <svg key="s" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    <svg key="b" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    <svg key="p" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    <svg key="c" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.7 19.79 19.79 0 0 1 1.61 5.07 2 2 0 0 1 3.59 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.67a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z"/></svg>,
    <svg key="db" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    <svg key="bell" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  ]

  return (
    <section className="py-section bg-canvas" id="followup-agent">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-3">{followUpAgent.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-2"
          style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
        >
          {followUpAgent.name}
        </h2>
        <p className="text-ink-muted text-body-lg leading-relaxed mb-6 max-w-2xl">{followUpAgent.subtitle}</p>

        {/* Promise badge */}
        <div className="inline-flex items-start gap-3 px-5 py-4 bg-primary/10 border border-primary/25 rounded-lg mb-12 max-w-xl">
          <svg className="shrink-0 mt-0.5 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <p className="text-ink-muted text-body-sm leading-relaxed">{followUpAgent.promise}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Stepper */}
          <div ref={ref} className="space-y-2">
            {followUpAgent.steps.map((step, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                  activeStep === i
                    ? 'bg-primary/10 border-primary/30'
                    : 'bg-transparent border-transparent hover:border-hairline hover:bg-surface-1'
                }`}
                onClick={() => setActiveStep(i)}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-8 h-8 rounded-md border flex items-center justify-center transition-all duration-300 ${
                    activeStep === i
                      ? 'bg-primary border-primary text-white'
                      : activeStep > i
                      ? 'bg-success/20 border-success/40 text-success'
                      : 'bg-surface-1 border-hairline text-ink-subtle'
                  }`}>
                    {activeStep > i ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      channelIcons[i]
                    )}
                  </div>
                  {i < followUpAgent.steps.length - 1 && (
                    <div className={`w-px flex-1 mt-1 min-h-[16px] transition-colors duration-300 ${activeStep > i ? 'bg-success/40' : 'bg-hairline'}`} />
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

          {/* Visual: follow-up timeline */}
          <div className="bg-surface-1 border border-hairline rounded-lg p-6">
            <p className="text-ink-subtle text-body-sm font-medium mb-5">Timeline de seguimiento</p>
            {[
              { label: 'Día 1', action: 'Mensaje inicial de calificación', channel: 'WA', done: true },
              { label: 'Día 2', action: 'Seguimiento con cotización adjunta', channel: 'EM', done: activeStep >= 3 },
              { label: 'Día 4', action: 'Recordatorio personalizado', channel: 'WA', done: activeStep >= 4 },
              { label: 'Día 7', action: 'Seguimiento de valor añadido', channel: 'EM', done: activeStep >= 5 },
              { label: 'Día 14', action: 'Escalación a vendedor humano', channel: '🔔', done: false },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-3 py-3 border-b border-hairline last:border-0 transition-opacity ${
                item.done ? 'opacity-100' : 'opacity-40'
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.done ? 'bg-success' : 'bg-hairline-strong'}`} />
                <span className="text-caption text-ink-tertiary w-12 shrink-0">{item.label}</span>
                <span className="text-caption text-ink-subtle flex-1">{item.action}</span>
                <span className={`text-caption px-2 py-0.5 rounded-md ${
                  item.channel === 'WA' ? 'bg-success/15 text-success' :
                  item.channel === 'EM' ? 'bg-primary/15 text-primary' :
                  'bg-surface-2 text-ink-subtle'
                }`}>
                  {item.channel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
