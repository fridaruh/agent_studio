import Reveal from './Reveal'
import SlideTag from './SlideTag'
import CtaButton from './CtaButton'

const PAINS = [
  {
    title: 'Pauta y expos que no convierten',
    detail: 'Sin cotizaciones ni visitas agendadas',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="3 7 10 14 14 10 21 17" />
        <polyline points="15 17 21 17 21 11" />
      </svg>
    ),
  },
  {
    title: 'Comparación y regateo',
    detail: 'Tu competencia se malbarata',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3v18" />
        <path d="M4 7h16" />
        <path d="M6 7l-3 6a3.5 3.5 0 0 0 6 0L6 7z" />
        <path d="M18 7l-3 6a3.5 3.5 0 0 0 6 0L18 7z" />
      </svg>
    ),
  },
  {
    title: 'Leads que se enfrían',
    detail: 'Esperando cotización sin sistema (~6 h respuesta previa · Synelmex)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 16 14" />
      </svg>
    ),
  },
]

export default function LeadsPain() {
  return (
    <section id="dolor" className="py-section bg-canvas">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SlideTag slide="02" label="DOLOR" />
        </Reveal>
        <Reveal delay={80}>
          <p className="text-primary text-eyebrow uppercase tracking-widest mt-6">El dolor que nadie te cuenta</p>
        </Reveal>
        <Reveal delay={140}>
          <h2
            className="text-ink font-semibold mt-4 max-w-3xl"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
          >
            El problema no son tus leads ni tu pauta: tu frente comercial (tú, asesor o analista) es el cuello de botella — y cada día pagas por leads que se queman antes de cotización.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-ink-muted text-body-lg mt-6 max-w-2xl">
            No es falta de esfuerzo: el lead espera horas a que alguien cotice; mientras, se enfría, cotiza con otro o deja de contestar.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {PAINS.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 80}>
              <div className="h-full rounded-lg border border-hairline bg-surface-1 p-6 transition-colors duration-150 hover:bg-surface-2 hover:border-hairline-strong">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-surface-2 text-ink-subtle">
                  {pain.icon}
                </span>
                <h3 className="text-ink text-card-title font-medium mt-5">{pain.title}</h3>
                <p className="text-ink-subtle text-body-sm mt-2">{pain.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Promise */}
        <Reveal delay={120}>
          <div className="mt-12 rounded-xl border border-hairline bg-surface-1 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3
                className="text-ink font-semibold"
                style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Que cada lead que ya pagaste se convierta
              </h3>
              <p className="text-ink-muted text-body-lg mt-3">Sin saturar de trabajo a tu equipo</p>
            </div>
            <CtaButton className="shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
