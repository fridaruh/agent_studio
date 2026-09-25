import Reveal from './Reveal'
import CtaButton from './CtaButton'
import LeadsCallStages from './LeadsCallStages'
import { CALENDLY_URL } from '@/lib/links'

export default function LeadsAgenda() {
  return (
    <section id="agenda" className="leads-agenda scroll-mt-4">
      <div className="leads-shell">
        <Reveal delay={100}>
          <div className="leads-agenda-grid">
            <div className="leads-agenda-copy">
              <p className="max-w-xl text-body-lg leading-8 text-ink-muted">
                Así que si ahora mismo eres una empresa solar residencial, pagas publicidad y sientes un cuello de botella al atender al cliente...
              </p>
              <h2 className="leads-heading mt-6 max-w-3xl">
                Y deseas atender 3 veces más clientes sin aumentar tu carga comercial
              </h2>
              <div className="mt-8">
                <CtaButton href="#calendario" />
              </div>
              <p className="mt-5 max-w-xl text-body-sm leading-6 text-ink-subtle">
                Esta no es una llamada de ventas para presionarte. El objetivo es demostrarte cómo puedes crecer sin drama.
              </p>

              <LeadsCallStages />
            </div>

            <div id="calendario" className="leads-calendar scroll-mt-4">
              <div className="border-b border-hairline px-6 py-5">
                <h3 className="leads-card-heading">Close Energy — Llamada Discovery</h3>
                <p className="mt-1 text-body-sm text-ink-subtle">⏱ 30 min</p>
              </div>
              {CALENDLY_URL ? (
                <iframe
                  src={`${CALENDLY_URL}?hide_gdpr_banner=1`}
                  title="Agendar llamada"
                  loading="lazy"
                  className="block h-[700px] w-full"
                />
              ) : (
                <div className="flex h-[700px] w-full items-center justify-center text-body-sm text-ink-subtle">
                  Calendario próximamente
                </div>
              )}
              {CALENDLY_URL && (
                <p className="border-t border-hairline px-6 py-4 text-caption text-ink-subtle">
                  ¿No carga el calendario?{' '}
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">
                    Ábrelo en una nueva pestaña
                  </a>
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
