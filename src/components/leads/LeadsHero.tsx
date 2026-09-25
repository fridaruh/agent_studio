import Reveal from './Reveal'
import CtaButton from './CtaButton'
import { VSL_VIDEO_URL } from '@/lib/links'

export default function LeadsHero() {
  return (
    <section id="hero" className="leads-hero hero-grid relative overflow-hidden scroll-mt-4">
      <div className="leads-shell leads-hero-shell relative flex w-full flex-col items-center text-center">
        <Reveal delay={80}>
          <p className="leads-qualifier inline-flex max-w-3xl items-center text-eyebrow font-medium uppercase tracking-[0.08em]">
            SOLO PARA empresas en crecimiento comercial (generalmente invierte en pauta recurrente, expos, activaciones)
          </p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="leads-display mt-7 max-w-[1180px]">
            Cómo atendemos <span className="leads-accent-underline whitespace-nowrap">3x más prospectos</span> para empresas solares residenciales, sin aumentar tu carga comercial
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="leads-deck mx-auto mt-7 max-w-3xl">
            Y cómo tú puedes transferir el mismo sistema en tu empresa solar
          </p>
        </Reveal>

        <Reveal delay={260} className="mt-10 w-full max-w-5xl">
          <div className="leads-media-frame">
            {VSL_VIDEO_URL ? (
              <iframe
                src={VSL_VIDEO_URL}
                title="Video Close Energy"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="block aspect-video w-full rounded-xl"
              />
            ) : (
              <div className="leads-video-placeholder relative flex aspect-video items-center justify-center rounded-xl">
                <span className="leads-play flex h-12 w-12 items-center justify-center rounded-full">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M6 4.5v11l9-5.5-9-5.5z" />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-9 flex flex-col items-center gap-3">
            <CtaButton />
            <p className="leads-caption text-caption">Sin compromiso · No es una llamada de ventas para presionarte</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
