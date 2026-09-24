import Reveal from './Reveal'
import CtaButton from './CtaButton'

const PILLARS = [
  {
    num: '01',
    title: 'Primera Respuesta y Motor de Cotización',
    detail: 'Responde a todos tus leads en menos de 5 segundos; conversa, responde dudas y pide su recibo de luz; calcula la cotización, la envía y confirma la venta.',
    result: 'Agendar más visitas técnicas con interés de compra confirmado.',
    without: 'Sin contestar y calificar a mano prospectos en WhatsApp ni armar cotizaciones en Excel.',
  },
  {
    num: '02',
    title: 'Sistema de Control de Agenda',
    detail: 'Confirma interés de compra después de la cotización; coordina la visita técnica revisando disponibilidad del equipo; notifica al equipo y confirma la visita con cliente y equipo.',
    result: 'Automatizar el proceso de agendamiento con prospectos dispuestos a comprar.',
    without: 'Sin que tu equipo tenga que insistir por WhatsApp o teléfono para generar una visita técnica.',
  },
  {
    num: '03',
    title: 'Sistema de Recuperación de Oportunidades',
    detail: 'Da seguimiento a cotizaciones que no se concretaron y recupera clientes que estuvieron interesados pero no recibieron seguimiento.',
    result: 'Recuperar oportunidades que parecían perdidas.',
    without: 'Sin depender de la memoria o la iniciativa de tu equipo para dar seguimiento a cotizaciones olvidadas.',
  },
  {
    num: '04',
    title: 'Gestión de proyectos y Centro de Indicadores de Mejora',
    detail: 'Monitorea tareas y métricas de desempeño en cotizaciones, pipeline y proyectos activos; crea resúmenes específicos de lo que pasó y lo que toca hoy en una nota de voz; lista recomendaciones con acciones concretas de mejora.',
    result: 'Visibilidad De proyectos activos y Todo Tu Frente Comercial',
    without: 'Sin iniciar de cero cada mañana para saber qué pasó ni operar a ciegas.',
  },
]

export default function LeadsOffer() {
  return (
    <section id="oferta" className="py-8 md:py-10 bg-canvas">
      <div className="max-w-content mx-auto px-6 xl:pr-44 min-[1700px]:pr-6">
        <Reveal delay={80}>
          <p className="text-primary text-eyebrow uppercase tracking-widest">Cómo funciona</p>
        </Reveal>
        <Reveal delay={140}>
          <h2
            className="text-ink font-semibold mt-4 max-w-6xl"
            style={{ fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.13, letterSpacing: '-0.025em' }}
          >
            No somos una agencia de marketing ni una desarrolladora de software. Somos un Estudio de Transformación Agéntica para Empresas de Paneles Solares.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-ink-muted text-body-lg mt-5 max-w-4xl">
            Lo que hacemos se llama Sistema Agéntico de Pre-Cotización. Te instalamos un sistema completo de atención a clientes y operamos todo el sistema de principio a fin.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
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
                <p className="mt-auto pt-5 text-caption text-ink-tertiary">{pillar.without}</p>
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
