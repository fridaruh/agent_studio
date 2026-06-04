'use client'

import { useI18n } from '@/lib/i18n/context'

export default function PlatformArchitecture() {
  const { t } = useI18n()
  const { architecture } = t

  return (
    <section className="py-section bg-surface-1 border-y border-hairline">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{architecture.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-16 max-w-2xl"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          {architecture.headline}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Layer 01 */}
          <div className="p-8 bg-surface-2 border border-hairline rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-hairline rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-semibold text-ink-tertiary"
                  style={{ fontSize: '56px', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {architecture.layer1.number}
                </span>
                <span className="text-caption text-ink-subtle bg-surface-3 border border-hairline px-2.5 py-1 rounded-pill">
                  {architecture.layer1.label}
                </span>
              </div>

              <h3 className="text-ink font-semibold text-headline mb-3">{architecture.layer1.title}</h3>
              <p className="text-ink-subtle text-body leading-relaxed mb-8">{architecture.layer1.desc}</p>

              {/* Integration chips */}
              <div className="flex flex-wrap gap-2">
                {architecture.layer1.integrations.map((name) => (
                  <span
                    key={name}
                    className="px-2.5 py-1 bg-surface-1 border border-hairline rounded-md text-ink-subtle text-caption hover:border-hairline-strong hover:text-ink-muted transition-all cursor-default"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Layer 02 */}
          <div className="p-8 bg-surface-2 border border-hairline rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-hairline rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-semibold text-ink-tertiary"
                  style={{ fontSize: '56px', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {architecture.layer2.number}
                </span>
                <span className="text-caption text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-pill">
                  {architecture.layer2.label}
                </span>
              </div>

              <h3 className="text-ink font-semibold text-headline mb-3">{architecture.layer2.title}</h3>
              <p className="text-ink-subtle text-body leading-relaxed mb-8">{architecture.layer2.desc}</p>

              {/* Agent chips */}
              <div className="flex flex-wrap gap-2">
                {architecture.layer2.agents.map((name, i) => (
                  <span
                    key={name}
                    className={`px-2.5 py-1 rounded-md text-caption transition-all cursor-default ${
                      i === 0 || i === 1
                        ? 'bg-primary/15 border border-primary/25 text-primary hover:bg-primary/20'
                        : 'bg-surface-1 border border-hairline text-ink-subtle hover:border-hairline-strong hover:text-ink-muted'
                    }`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Connector arrow */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3 text-ink-tertiary">
            <div className="h-px w-16 bg-hairline-strong" />
            <span className="text-caption">Layer 01 feeds Layer 02</span>
            <div className="h-px w-16 bg-hairline-strong" />
          </div>
        </div>
      </div>
    </section>
  )
}
