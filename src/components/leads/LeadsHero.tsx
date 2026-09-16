import Reveal from './Reveal'
import SlideTag from './SlideTag'
import CtaButton from './CtaButton'

export default function LeadsHero() {
  return (
    <section id="hero" className="relative pt-14 overflow-hidden bg-canvas hero-grid">
      <div className="relative max-w-content mx-auto w-full px-6 pt-20 pb-section flex flex-col items-center text-center">
        <Reveal>
          <div className="flex justify-center">
            <SlideTag slide="01" label="HERO" />
          </div>
        </Reveal>

        {/* Qualifier */}
        <Reveal delay={80}>
          <p className="mt-6 inline-flex max-w-2xl items-center rounded-pill border border-hairline bg-surface-1 px-4 py-2 text-eyebrow text-primary">
            SOLO PARA empresas solares residenciales con demanda entrante (pauta recurrente y/o ferias/activaciones)
          </p>
        </Reveal>

        {/* Headline */}
        <Reveal delay={140}>
          <h1
            className="text-ink font-semibold max-w-4xl mt-8"
            style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.07, letterSpacing: '-0.035em' }}
          >
            Cómo atendemos <span className="whitespace-nowrap">3x más clientes</span> para empresas solares residenciales, sin aumentar tu carga comercial
          </h1>
        </Reveal>

        {/* Subheadline */}
        <Reveal delay={200}>
          <p
            className="text-ink-muted mt-6 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(16px, 1.4vw, 20px)', lineHeight: 1.55, letterSpacing: '-0.01em' }}
          >
            Instalamos y operamos Atención y Motor de Cotización, Sistema de Agendamiento, Levanta Muertos y Centro de IA
          </p>
        </Reveal>

        {/* VSL player */}
        <Reveal delay={260} className="w-full max-w-4xl mt-12">
          <div
            className="rounded-xl overflow-hidden border border-hairline bg-surface-1"
            style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.10), 0 0 0 1px #e5e7eb' }}
          >
            <div className="relative aspect-video hero-grid flex items-center justify-center">
              <span className="absolute top-4 left-5 font-mono text-mono text-ink-tertiary">
                CLOSE ENERGY · FIK / VSL
              </span>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M6 4.5v11l9-5.5-9-5.5z" />
                </svg>
              </span>
            </div>
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
          <div className="mt-10 flex flex-col items-center gap-3">
            <CtaButton />
            <p className="text-caption text-ink-tertiary">Sin compromiso · No es una llamada de alta presión</p>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <p className="mt-12 font-mono text-mono text-ink-tertiary max-w-2xl">
            Sistema = Sistema Agéntico de Pre-Cotización Solar · Estudio de Transformación Agéntica para Empresas de Paneles Solares
          </p>
        </Reveal>
      </div>
    </section>
  )
}
