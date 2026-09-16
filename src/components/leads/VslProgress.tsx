'use client'

import { useEffect, useState } from 'react'

/** Estructura VSL — fixed rail marking the 5 slides; highlights the one in view. */
const SLIDES = [
  { id: 'hero', num: '01', label: 'Hero' },
  { id: 'dolor', num: '02', label: 'Dolor' },
  { id: 'oferta', num: '03', label: 'Oferta' },
  { id: 'variable', num: '04', label: 'Variable' },
  { id: 'agenda', num: '05', label: 'Agenda' },
]

export default function VslProgress() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2
      let current = SLIDES[0].id
      for (const slide of SLIDES) {
        const el = document.getElementById(slide.id)
        if (el && el.getBoundingClientRect().top <= mid) current = slide.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Estructura VSL"
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
    >
      {SLIDES.map((slide) => {
        const isActive = active === slide.id
        return (
          <a
            key={slide.id}
            href={`#${slide.id}`}
            className="group flex items-center justify-end gap-3"
          >
            <span
              className={`font-mono text-mono transition-colors duration-200 ${
                isActive ? 'text-ink' : 'text-ink-tertiary group-hover:text-ink-subtle'
              }`}
            >
              {slide.num} {slide.label}
            </span>
            <span
              className={`h-px transition-all duration-200 ${
                isActive ? 'w-8 bg-primary' : 'w-4 bg-hairline-strong group-hover:bg-hairline-tertiary'
              }`}
              aria-hidden
            />
          </a>
        )
      })}
    </nav>
  )
}
