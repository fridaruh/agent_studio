'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n/context'

function AccordionItem({
  question, answer, isOpen, onToggle,
}: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void
}) {
  return (
    <div className={`border-b border-hairline last:border-0 transition-colors ${isOpen ? 'bg-surface-1' : ''}`}>
      <button
        className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 hover:bg-surface-1 transition-colors group"
        onClick={onToggle}
      >
        <span className={`text-body font-medium transition-colors ${isOpen ? 'text-ink' : 'text-ink-muted group-hover:text-ink'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-200 ${
          isOpen ? 'bg-primary/10 border-primary/30 text-primary rotate-45' : 'bg-surface-2 border-hairline text-ink-subtle'
        }`}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
      </button>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="px-6 pb-5">
          <p className="text-ink-subtle text-body-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useI18n()
  const { faq } = t
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-section bg-surface-1 border-t border-hairline" id="faq">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{faq.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-12"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          {faq.headline}
        </h2>

        <div className="max-w-3xl">
          <div className="bg-surface-2 border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
            {faq.questions.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
