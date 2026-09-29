import Script from 'next/script'
import Reveal from './Reveal'
import CtaButton from './CtaButton'
import LeadsCallStages from './LeadsCallStages'
import { BOOKING_WIDGET_ID, BOOKING_WIDGET_URL } from '@/lib/links'
import type { LeadsLandingVariant } from './LeadsLanding'

type LeadsAgendaProps = {
  variant?: LeadsLandingVariant
}

export default function LeadsAgenda({ variant = 'standard' }: LeadsAgendaProps) {
  const agendaHeading = variant === 'capacity'
    ? '¿Deseas atender 38.5% más prospectos sin aumentar tu carga comercial?'
    : '¿Deseas atender 3 veces más clientes sin aumentar tu carga comercial?'

  return (
    <section id="agenda" className="leads-agenda scroll-mt-4">
      <div className="leads-shell">
        <Reveal delay={100}>
          <div className="leads-agenda-grid">
            <div className="leads-agenda-copy">
              <h2 className="leads-heading max-w-3xl">
                {agendaHeading}
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
              <iframe
                src={BOOKING_WIDGET_URL}
                id={`${BOOKING_WIDGET_ID}_1790721761138`}
                title="Agendar llamada"
                allow="payment"
                scrolling="no"
                className="block min-h-[700px] w-full overflow-hidden border-none"
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
              <p className="border-t border-hairline px-6 py-4 text-caption text-ink-subtle">
                ¿No carga el calendario?{' '}
                <a href={BOOKING_WIDGET_URL} data-fast-goal="abrir_calendario" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">
                  Ábrelo en una nueva pestaña
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
