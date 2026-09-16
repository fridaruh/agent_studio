import Reveal from './Reveal'
import SlideTag from './SlideTag'
import CtaButton from './CtaButton'

const ROWS = [
  {
    before: 'El prospecto espera horas (a veces hasta el día siguiente) a que alguien lo atienda',
    after: 'Respuesta en segundos + cotización en minutos (vs días)',
  },
  {
    before: 'Perseguir clientes por WhatsApp o teléfono para agendar',
    after: 'Visita técnica confirmada y agendada directo en calendario',
  },
  {
    before: 'Seguimiento depende de tu memoria o la del equipo (cotizaciones olvidadas)',
    after: 'Seguimiento/recuperación automática + dashboard y resumen diario con recomendaciones',
  },
]

export default function LeadsBeforeAfter() {
  return (
    <section id="variable" className="py-section bg-canvas">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SlideTag slide="04" label="VARIABLE" />
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-ink font-semibold mt-6 max-w-3xl"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
          >
            Antes → Después (con Close Energy)
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {ROWS.map((row, i) => (
            <Reveal key={row.before} delay={i * 80}>
              <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                <div className="rounded-lg border border-hairline bg-surface-1 p-6">
                  <p className="text-caption uppercase tracking-widest text-ink-tertiary">Antes</p>
                  <p className="text-ink-muted text-body mt-3">{row.before}</p>
                </div>
                <div className="flex items-center justify-center text-ink-tertiary text-headline" aria-hidden>
                  <span className="rotate-90 md:rotate-0">→</span>
                </div>
                <div className="rounded-lg border border-hairline-strong bg-canvas p-6">
                  <p className="text-eyebrow uppercase tracking-widest text-primary">Después · Close Energy</p>
                  <p className="text-ink text-body font-medium mt-3">{row.after}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <CtaButton />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
