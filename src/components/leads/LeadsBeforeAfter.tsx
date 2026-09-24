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
    <section id="variable" className="leads-section leads-paper scroll-mt-4">
      <div className="leads-shell">
        <Reveal delay={80}>
          <h2 className="leads-heading max-w-6xl">Antes → Después (con Close Energy)</h2>
        </Reveal>

        <div className="mt-14 border-b leads-border">
          {ROWS.map((row, i) => (
            <Reveal key={row.before} delay={i * 70}>
              <article className="leads-comparison-row">
                <div className="leads-before-cell">
                  <p className="leads-row-label">Antes</p>
                  <p className="leads-small-copy mt-4">{row.before}</p>
                </div>
                <div className="leads-comparison-arrow" aria-hidden>→</div>
                <div className="leads-after-cell">
                  <p className="leads-row-label leads-row-label-accent">Después · Close Energy</p>
                  <p className="mt-4 text-[16px] font-medium leading-7">{row.after}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <CtaButton />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
