import Reveal from './Reveal'
import CtaButton from './CtaButton'

const ROWS = [
  {
    before: 'El prospecto espera horas —a veces hasta el día siguiente— a que alguien lo atienda.',
    after: 'Primera respuesta en menos de 5 segundos y un sistema que conversa, califica y cotiza.',
  },
  {
    before: 'Tu equipo insiste por WhatsApp o teléfono para generar una visita técnica.',
    after: 'El sistema confirma interés, coordina disponibilidad, agenda y confirma la visita técnica.',
  },
  {
    before: 'El seguimiento depende de la memoria o la iniciativa de tu equipo y las cotizaciones se olvidan.',
    after: 'Seguimiento y recuperación de oportunidades, con métricas, resumen diario y recomendaciones concretas de mejora.',
  },
]

export default function LeadsBeforeAfter() {
  return (
    <section id="variable" className="py-8 md:py-10 bg-canvas">
      <div className="max-w-content mx-auto px-6 xl:pr-44 min-[1700px]:pr-6">
        <Reveal delay={80}>
          <h2
            className="text-ink font-semibold max-w-6xl"
            style={{ fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.13, letterSpacing: '-0.025em' }}
          >
            Antes → Después (con Close Energy)
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-col gap-5">
          {ROWS.map((row, i) => (
            <Reveal key={row.before} delay={i * 80}>
              <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                <div className="rounded-lg border border-danger/30 bg-danger/5 p-6">
                  <p className="text-caption uppercase tracking-widest text-danger font-medium">Antes</p>
                  <p className="text-ink-muted text-body mt-3">{row.before}</p>
                </div>
                <div className="flex items-center justify-center text-ink-tertiary text-headline" aria-hidden>
                  <span className="rotate-90 md:rotate-0">→</span>
                </div>
                <div className="rounded-lg border border-success/30 bg-success/5 p-6">
                  <p className="text-eyebrow uppercase tracking-widest text-success font-medium">Después · Close Energy</p>
                  <p className="text-ink text-body font-medium mt-3">{row.after}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex justify-center">
            <CtaButton />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
