'use client'

import { useI18n } from '@/lib/i18n/context'

export default function PipelineAssistant() {
  const { t } = useI18n()
  const { pipelineAssistant } = t

  return (
    <section className="py-section bg-surface-1 border-t border-hairline" id="pipeline">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{pipelineAssistant.eyebrow}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-ink font-semibold mb-4" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              {pipelineAssistant.headline}
            </h2>
            <p className="text-ink-muted text-body-lg leading-relaxed">{pipelineAssistant.context}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pipelineAssistant.capabilities.map((capability, index) => (
              <article key={capability.title} className="p-5 bg-surface-2 border border-hairline rounded-lg">
                <span className="text-primary text-caption font-medium">0{index + 1}</span>
                <h3 className="text-ink text-card-title font-medium mt-3 mb-2">{capability.title}</h3>
                <p className="text-ink-subtle text-body-sm leading-relaxed">{capability.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
