import Reveal from './Reveal'
import CtaButton from './CtaButton'

const PAINS = [
  {
    title: 'Pauta y expos que no convierten',
    detail: 'Llevas meses invirtiendo en pauta y expos pero sientes que ese flujo no convierte en cotizaciones y visitas agendadas.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="3 7 10 14 14 10 21 17" />
        <polyline points="15 17 21 17 21 11" />
      </svg>
    ),
  },
  {
    title: 'Comparación y regateo',
    detail: 'Estás cansado de que te comparen y te regateen porque tu competencia se malbarata.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Prospectos que dejan de responder',
    detail: 'Algunos prospectos dejan de responder cuando les entregas tu cotización, posiblemente porque recibieron otras propuestas.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.6A8 8 0 1 1 21 12z" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
      </svg>
    ),
  },
]

export default function LeadsPain() {
  return (
    <section id="dolor" className="leads-section leads-paper scroll-mt-4">
      <div className="leads-shell">
        <Reveal delay={80}>
          <p className="leads-kicker">El problema no son tus leads ni tus anuncios</p>
        </Reveal>

        <div className="leads-intro-grid mt-6">
          <Reveal delay={140}>
            <h2 className="leads-heading max-w-4xl">
              El problema real es que no tienes manos suficientes para atender a todos.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="leads-body-copy space-y-4">
              <p>Ambos sabemos que tu producto es muy atractivo: todos los días te llegan prospectos nuevos.</p>
              <p>
                Pero ese prospecto espera horas —a veces hasta el día siguiente— a que alguien lo atienda. Mientras espera, se
                desespera, cotiza con otro o deja de contestar.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="leads-pain-grid mt-14">
          {PAINS.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 70}>
              <article className="leads-pain-item h-full">
                <div className="leads-pain-diagram">
                  <span>{pain.icon}</span>
                  <span className="font-mono text-[10px] tracking-[0.08em]">0{i + 1}</span>
                </div>
                <h3 className="leads-card-heading mt-8">{pain.title}</h3>
                <p className="leads-small-copy mt-4">{pain.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="leads-lead-flow mt-8" aria-label="Flujo actual de atención">
            <div className="leads-flow-stage">
              <span className="leads-flow-index">01</span>
              <p>todos los días te llegan prospectos nuevos.</p>
            </div>
            <span className="leads-flow-line" aria-hidden />
            <div className="leads-flow-stage leads-flow-stage-wait">
              <span className="leads-flow-index">02</span>
              <p>ese prospecto espera horas</p>
            </div>
            <span className="leads-flow-line" aria-hidden />
            <div className="leads-flow-stage">
              <span className="leads-flow-index">03</span>
              <p>se desespera, cotiza con otro o deja de contestar.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="leads-inline-cta mt-14">
            <h3 className="leads-subheading max-w-4xl">
              Al final del día terminas pagando por prospectos que no se convierten en clientes.
            </h3>
            <CtaButton className="shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
