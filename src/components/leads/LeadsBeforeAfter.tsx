'use client'

import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import CtaButton from './CtaButton'

const ROWS = [
  {
    before: 'El prospecto espera horas —a veces hasta el día siguiente— a que alguien lo atienda.',
    after: 'Primera respuesta en menos de 5 segundos y un sistema que conversa, califica y cotiza.',
  },
  {
    before: 'Tu equipo insiste por WhatsApp o teléfono para generar una visita técnica.',
    after: 'El sistema confirma interés, coordina disponibilidad, agenda y confirma la visita técnica.',
  },
  {
    before: 'El seguimiento depende de la memoria o la iniciativa de tu equipo y las cotizaciones se olvidan.',
    after: 'Seguimiento y recuperación de oportunidades, con métricas, resumen diario y recomendaciones concretas de mejora.',
  },
]

function CheckMark() {
  return (
    <svg className="leads-completion-mark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function LeadsBeforeAfter() {
  const panelRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    const panel = panelRef.current
    if (!panel) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    )
    observer.observe(panel)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="variable" className="leads-section leads-paper scroll-mt-4">
      <div className="leads-shell">
        <Reveal delay={80}>
          <h2 className="leads-heading max-w-6xl">Antes → Después (con Close Energy)</h2>
        </Reveal>

        <div ref={panelRef} className={`leads-comparison-panel mt-8 ${inView ? 'is-in-view' : ''}`}>
          <div className="leads-comparison-header" aria-hidden>
            <span>Antes</span>
            <span className="leads-comparison-header-spacer" />
            <span>Después · Close Energy</span>
          </div>
          {ROWS.map((row, i) => (
            <Reveal key={row.before} delay={i * 70}>
              <article className="leads-comparison-row">
                <div className="leads-before-cell">
                  <p className="leads-row-label">Antes</p>
                  <p className="leads-small-copy mt-3">{row.before}</p>
                </div>
                <div className="leads-comparison-arrow" aria-hidden>
                  <span className="leads-comparison-arrow-line" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>
                <div className="leads-after-cell">
                  <p className="leads-row-label leads-row-label-accent">Después · Close Energy</p>
                  <div className="mt-3 flex gap-3">
                    <CheckMark />
                    <p className="text-body-sm font-medium leading-7 text-ink">{row.after}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <CtaButton />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
