'use client'

import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import CtaButton from './CtaButton'

const PILLARS = [
  {
    num: '01',
    title: 'Primera Respuesta y Motor de Cotización',
    detail: 'Responde a todos tus leads en menos de 5 segundos; conversa, responde dudas y pide su recibo de luz; calcula la cotización, la envía y confirma la venta.',
    result: 'Agendar más visitas técnicas con interés de compra confirmado.',
    without: 'Sin contestar y calificar a mano prospectos en WhatsApp ni armar cotizaciones en Excel.',
  },
  {
    num: '02',
    title: 'Sistema de Control de Agenda',
    detail: 'Confirma interés de compra después de la cotización; coordina la visita técnica revisando disponibilidad del equipo; notifica al equipo y confirma la visita con cliente y equipo.',
    result: 'Automatizar el proceso de agendamiento con prospectos dispuestos a comprar.',
    without: 'Sin que tu equipo tenga que insistir por WhatsApp o teléfono para generar una visita técnica.',
  },
  {
    num: '03',
    title: 'Sistema de Recuperación de Oportunidades',
    detail: 'Da seguimiento a cotizaciones que no se concretaron y recupera clientes que estuvieron interesados pero no recibieron seguimiento.',
    result: 'Recuperar oportunidades que parecían perdidas.',
    without: 'Sin depender de la memoria o la iniciativa de tu equipo para dar seguimiento a cotizaciones olvidadas.',
  },
  {
    num: '04',
    title: 'Gestión de proyectos y Centro de Indicadores de Mejora',
    detail: 'Monitorea tareas y métricas de desempeño en cotizaciones, pipeline y proyectos activos; crea resúmenes específicos de lo que pasó y lo que toca hoy en una nota de voz; lista recomendaciones con acciones concretas de mejora.',
    result: 'Visibilidad De proyectos activos y Todo Tu Frente Comercial',
    without: 'Sin iniciar de cero cada mañana para saber qué pasó ni operar a ciegas.',
  },
]

export default function LeadsOffer() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()
  const manualPause = useRef(false)

  const selectStep = (index: number) => {
    manualPause.current = true
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = undefined
    setActiveStep(index)
  }

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !manualPause.current) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          intervalRef.current = setInterval(() => {
            setActiveStep((current) => (current + 1) % PILLARS.length)
          }, 3000)
        } else if (!entry.isIntersecting && intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = undefined
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(section)
    return () => {
      observer.disconnect()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section id="oferta" ref={sectionRef} className="leads-section leads-surface scroll-mt-4">
      <div className="leads-shell">
        <Reveal delay={80}>
          <p className="leads-kicker">Cómo funciona</p>
        </Reveal>

        <div className="leads-intro-grid mt-6">
          <Reveal delay={140}>
            <h2 className="leads-heading max-w-5xl">
              No somos una agencia de marketing ni una desarrolladora de software.
              <span className="mt-2 block">Somos un Estudio de Transformación Agéntica para Empresas de Paneles Solares.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="leads-body-copy">
              Y lo que hacemos es instalarte un Sistema Agéntico de Cotización.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <h3 className="leads-pillars-heading mt-14">Pilares del sistema:</h3>
        </Reveal>

        <div className="leads-offer-layout mt-6">
          <div className="border-b leads-border">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.num} delay={(i % 2) * 70}>
              <article className={`leads-offer-row ${activeStep === i ? 'is-active' : ''} ${activeStep > i ? 'is-complete' : ''}`}>
                <div className="leads-offer-number">
                  <button
                    type="button"
                    onClick={() => selectStep(i)}
                    onFocus={() => selectStep(i)}
                    onPointerDown={() => selectStep(i)}
                    aria-label={`Ver pilar ${pillar.num}: ${pillar.title}`}
                    aria-pressed={activeStep === i}
                  >
                    <span aria-hidden>{activeStep > i ? '✓' : pillar.num}</span>
                  </button>
                </div>
                <div>
                  <p className="leads-row-label">Pilar {pillar.num}</p>
                  <h4 className="leads-card-heading mt-3">{pillar.title}</h4>
                  <p className="leads-small-copy mt-4">{pillar.detail}</p>
                </div>
                <div className="leads-offer-outcome">
                  <p className="flex gap-3 text-[15px] leading-6">
                    <span className="leads-check" aria-hidden>✓</span>
                    <span>{pillar.result}</span>
                  </p>
                  <p className="leads-caption mt-6 text-caption leading-5">{pillar.without}</p>
                </div>
              </article>
            </Reveal>
          ))}
          </div>
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
