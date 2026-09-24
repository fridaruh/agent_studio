import Reveal from './Reveal'
import CtaButton from './CtaButton'
import { VSL_VIDEO_URL } from '@/lib/links'

export default function LeadsHero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-canvas hero-grid">
      <div className="relative max-w-content mx-auto w-full px-6 xl:pr-44 min-[1700px]:pr-6 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col items-center text-center">
        {/* Qualifier */}
        <Reveal delay={80}>
          <p className="inline-flex max-w-2xl items-center rounded-pill border border-danger bg-danger px-4 py-2 text-eyebrow font-semibold text-white">
            SOLO PARA empresas en crecimiento comercial (generalmente invierte en pauta recurrente, expos, activaciones)
          </p>
        </Reveal>

        {/* Headline */}
        <Reveal delay={140}>
          <h1
            className="text-ink font-semibold max-w-6xl mt-5"
            style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.07, letterSpacing: '-0.035em' }}
          >
            Cómo atendemos <span className="whitespace-nowrap">3x más clientes</span>, sin aumentar tu carga comercial
          </h1>
        </Reveal>

        {/* Subheadline */}
        <Reveal delay={200}>
          <p
            className="text-ink-muted mt-4 max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(16px, 1.4vw, 20px)', lineHeight: 1.55, letterSpacing: '-0.01em' }}
          >
            Atención y Motor de Cotización, Sistema de Agendamiento, Levanta Muertos y Centro de IA
          </p>
        </Reveal>

        {/* VSL player */}
        <Reveal delay={260} className="w-full max-w-4xl mt-6">
          <div
            className="rounded-xl overflow-hidden border border-hairline bg-surface-1"
            style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.10), 0 0 0 1px #e5e7eb' }}
          >
            {VSL_VIDEO_URL ? (
              <iframe
                src={VSL_VIDEO_URL}
                title="Video Close Energy"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="block aspect-video w-full"
              />
            ) : (
            <div className="relative aspect-video hero-grid flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M6 4.5v11l9-5.5-9-5.5z" />
                </svg>
              </span>
            </div>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-hairline bg-canvas px-5 py-3">
              <span className="text-caption text-ink-tertiary">Ya has comenzado a ver este video</span>
              <span className="flex items-center gap-4 text-body-sm">
                <span className="text-ink font-medium">▷ Continuar viendo</span>
                <span className="text-ink-tertiary" aria-hidden>·</span>
                <span className="text-ink-subtle">↺ Comenzar desde el principio</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={320}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CtaButton />
            <p className="text-caption text-ink-tertiary">Sin compromiso · No es una llamada de alta presión</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
