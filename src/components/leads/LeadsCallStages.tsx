'use client'

import { useEffect, useRef, useState } from 'react'

const CALL_STAGES = [
  {
    title: 'Analizamos tu atención comercial',
    detail: 'Revisamos tu proceso de atención comercial completo.',
  },
  {
    title: 'Revisamos el recorrido',
    detail: 'Vemos los pasos que sigues hoy con cada prospecto.',
  },
  {
    title: 'Documentamos tu proceso actual',
    detail: 'Te entregamos tu proceso comercial actual documentado.',
  },
  {
    title: 'Visualizamos la solución',
    detail: 'Vemos cómo se vería con nuestra solución y, si hay potencial, te mostramos exactamente cómo funciona.',
  },
]

export default function LeadsCallStages() {
  const [activeStage, setActiveStage] = useState(0)
  const stagesRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()
  const manualPause = useRef(false)

  const selectStage = (index: number) => {
    manualPause.current = true
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = undefined
    setActiveStage(index)
  }

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    const stages = stagesRef.current
    if (!stages) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !manualPause.current) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          intervalRef.current = setInterval(() => {
            setActiveStage((current) => (current + 1) % CALL_STAGES.length)
          }, 2600)
        } else if (!entry.isIntersecting && intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = undefined
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(stages)
    return () => {
      observer.disconnect()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div ref={stagesRef} className="leads-call-stages mt-12 max-w-xl">
      <ol className="leads-call-stage-list">
        {CALL_STAGES.map((stage, index) => {
          const active = activeStage === index
          const complete = activeStage > index
          return (
            <li key={stage.title} className={`leads-call-stage ${active ? 'is-active' : ''} ${complete ? 'is-complete' : ''}`}>
              <button
                type="button"
                onClick={() => selectStage(index)}
                onFocus={() => selectStage(index)}
                onPointerDown={() => selectStage(index)}
                aria-label={`Etapa ${index + 1}: ${stage.title}`}
                aria-pressed={active}
              >
                <span className="leads-call-stage-indicator" aria-hidden>{complete ? '✓' : `0${index + 1}`}</span>
                <span>
                  <span className="leads-call-stage-title">{stage.title}</span>
                  <span className="leads-call-stage-detail">{stage.detail}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
      <p className="leads-call-promise">
        <strong>No tienes nada que perder: al final de la llamada te llevas tu proceso comercial actual documentado.</strong>
      </p>
    </div>
  )
}
