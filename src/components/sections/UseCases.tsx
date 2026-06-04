'use client'

import { useRef } from 'react'
import { useI18n } from '@/lib/i18n/context'

export default function UseCases() {
  const { t } = useI18n()
  const { useCases } = t
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <section className="py-section bg-surface-1 border-y border-hairline" id="use-cases">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{useCases.eyebrow}</p>
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2
              className="text-ink font-semibold mb-3"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
            >
              {useCases.headline}
            </h2>
            <p className="text-ink-muted text-body max-w-xl">{useCases.intro}</p>
          </div>
          {/* Scroll controls */}
          <div className="hidden md:flex items-center gap-2 shrink-0 ml-8">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-md bg-surface-2 border border-hairline flex items-center justify-center text-ink-subtle hover:text-ink hover:border-hairline-strong transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-md bg-surface-2 border border-hairline flex items-center justify-center text-ink-subtle hover:text-ink hover:border-hairline-strong transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-8">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {useCases.cases.map((useCase, i) => (
              <div
                key={i}
                className="shrink-0 w-64 p-5 bg-surface-2 border border-hairline rounded-lg hover:border-hairline-strong hover:bg-surface-3 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-md bg-surface-1 border border-hairline flex items-center justify-center mb-4 text-ink-tertiary group-hover:text-ink-subtle transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <h3 className="text-ink text-body-sm font-medium mb-2 leading-snug">{useCase.type}</h3>
                <p className="text-ink-subtle text-caption leading-relaxed">{useCase.detail}</p>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 carousel-fade-right" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-4 carousel-fade-left" />
        </div>
      </div>
    </section>
  )
}
