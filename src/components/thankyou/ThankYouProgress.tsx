'use client'

import { useEffect, useState } from 'react'

const STEPS = [
  { id: 'video', num: '01', label: 'Video' },
  { id: 'confirmacion', num: '02', label: 'Confirmación' },
  { id: 'preguntas', num: '03', label: 'Preguntas' },
]

export default function ThankYouProgress() {
  const [active, setActive] = useState(STEPS[0].id)

  useEffect(() => {
    const onScroll = () => {
      const midpoint = window.innerHeight / 2
      let current = STEPS[0].id
      for (const step of STEPS) {
        const element = document.getElementById(step.id)
        if (element && element.getBoundingClientRect().top <= midpoint) current = step.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav aria-label="Pasos de preparación" className="thankyou-progress hidden xl:flex fixed right-7 top-1/2 z-40 -translate-y-1/2 flex-col">
      {STEPS.map((step) => {
        const isActive = active === step.id
        return (
          <a
            key={step.id}
            href={`#${step.id}`}
            className={`group flex min-h-11 items-center justify-end gap-3 border-r px-3 transition-colors duration-200 ${isActive ? 'is-active' : ''}`}
            aria-current={isActive ? 'location' : undefined}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] transition-colors duration-200">
              {step.num} {step.label}
            </span>
            <span className="thankyou-progress-mark h-1.5 w-1.5 rounded-full transition-all duration-200" aria-hidden />
          </a>
        )
      })}
    </nav>
  )
}
