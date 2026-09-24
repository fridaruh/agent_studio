import Reveal from './Reveal'
import CtaButton from './CtaButton'

const PILLARS = [
  {
    num: '01',
    title: 'Atención y Motor de Cotización',
    detail: 'Responde <5 s, conversa y pide recibo, cotiza con tu visto bueno y confirma la venta',
    result: 'Atención inmediata, cotizaciones en minutos vs días y confirmación de interés',
    caseNote: 'Synelmex — de ~6 h a 15 min en tiempo de respuesta',
    casePending: false,
  },
  {
    num: '02',
    title: 'Sistema de Agendamiento',
    detail: 'Confirma interés post-cotización, coordina visita, avisa al equipo, agenda en calendario',
    result: 'Sólo los mejores prospectos dispuestos a comprar',
    caseNote: 'caso pendiente',
    casePending: true,
  },
  {
    num: '03',
    title: 'Levanta Muertos',
    detail: 'Da seguimiento a cotizaciones y recupera clientes perdidos',
    result: 'Mejores resultados sin tirar dinero a la basura',
    caseNote: 'caso pendiente',
    casePending: true,
  },
  {
    num: '04',
    title: 'Centro de IA',
    detail: 'Dashboard de métricas (cotizaciones, leads, pipeline), resumen de voz diario, recomendaciones con acciones',
    result: 'Visibilidad de todo tu frente comercial en un solo lugar y mejores decisiones diarias',
    caseNote: 'caso pendiente',
    casePending: true,
  },
]

export default function LeadsOffer() {
  return (
    <section id="oferta" className="py-section bg-canvas">
      <div className="max-w-content mx-auto px-6">
        <Reveal delay={80}>
          <p className="text-primary text-eyebrow uppercase tracking-widest mt-6">Cómo funciona</p>
        </Reveal>
        <Reveal delay={140}>
          <h2
            className="text-ink font-semibold mt-4 max-w-3xl"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
          >
            No es una agencia de marketing ni un software más. Es un Estudio de Transformación Agéntica para Empresas de Paneles Solares.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-ink-muted text-body-lg mt-6 max-w-2xl">
            Te instalamos y operamos el Sistema Agéntico de Pre-Cotización Solar de principio a fin. Licencia/configuración una vez; lo variable son bolsas de capacidad.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.num} delay={(i % 2) * 80}>
              <div className="h-full flex flex-col rounded-lg border border-hairline bg-surface-1 p-6 transition-colors duration-150 hover:bg-surface-2 hover:border-hairline-strong">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-surface-2 font-mono text-mono text-ink-subtle">
                    {pillar.num}
                  </span>
                  <span className="text-primary text-eyebrow uppercase tracking-widest">Pilar {pillar.num}</span>
                </div>
                <h3 className="text-ink text-card-title font-medium mt-5">{pillar.title}</h3>
                <p className="text-ink-subtle text-body-sm mt-2">{pillar.detail}</p>
                <p className="text-body-sm mt-4 flex gap-2">
                  <span className="text-success" aria-hidden>✓</span>
                  <span className="text-ink">{pillar.result}</span>
                </p>
                <div className="mt-auto pt-5">
                  <span
                    className={`inline-flex rounded-md border px-3 py-1.5 text-caption ${
                      pillar.casePending
                        ? 'border-hairline bg-surface-2 text-ink-tertiary'
                        : 'border-hairline-strong bg-surface-2 text-ink font-medium'
                    }`}
                  >
                    {pillar.caseNote}
                  </span>
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
