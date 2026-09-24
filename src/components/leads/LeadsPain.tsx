import Reveal from './Reveal'
import CtaButton from './CtaButton'

const PAINS = [
  {
    title: 'Pauta y expos que no convierten',
    detail: 'Llevas meses invirtiendo en pauta y expos pero sientes que ese flujo no convierte en cotizaciones y visitas agendadas.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="3 7 10 14 14 10 21 17" />
        <polyline points="15 17 21 17 21 11" />
      </svg>
    ),
  },
  {
    title: 'Comparación y regateo',
    detail: 'Estás cansado de que te comparen y te regateen porque tu competencia se malbarata.',
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
    detail: 'No tienes un sistema para evitar que tus leads se enfríen esperando una cotización.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Prospectos que dejan de responder',
    detail: 'Algunos prospectos dejan de responder cuando les entregas tu cotización, posiblemente porque recibieron otras propuestas.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.6A8 8 0 1 1 21 12z" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
      </svg>
    ),
  },
]

export default function LeadsPain() {
  return (
    <section id="dolor" className="py-8 md:py-10 bg-canvas">
      <div className="max-w-content mx-auto px-6 xl:pr-44 min-[1700px]:pr-6">
        <Reveal delay={80}>
          <p className="text-primary text-eyebrow uppercase tracking-widest">El problema no son tus leads ni tus anuncios</p>
        </Reveal>
        <Reveal delay={140}>
          <h2
            className="text-ink font-semibold mt-4 max-w-6xl"
            style={{ fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.13, letterSpacing: '-0.025em' }}
          >
            El problema real es que no tienes manos suficientes para atender a todos.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-5 max-w-4xl space-y-3 text-ink-muted text-body-lg">
            <p>Ambos sabemos que tu producto es muy atractivo: todos los días te llegan prospectos nuevos.</p>
            <p>
              Pero ese prospecto espera horas —a veces hasta el día siguiente— a que alguien lo atienda. Mientras espera, se
              desespera, cotiza con otro o deja de contestar.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
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

        {/* Cierre */}
        <Reveal delay={120}>
          <div className="mt-8 rounded-xl border border-hairline bg-surface-1 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <h3
              className="text-ink font-semibold"
              style={{ fontSize: 'clamp(22px, 2.3vw, 32px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Al final del día terminas pagando por prospectos que no se convierten en clientes.
            </h3>
            <CtaButton className="shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
