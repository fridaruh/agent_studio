import Reveal from './Reveal'
import CtaButton from './CtaButton'
import { CALENDLY_URL } from '@/lib/links'

export default function LeadsAgenda() {
  return (
    <section id="agenda" className="leads-agenda scroll-mt-4">
      <div className="leads-shell">
        <Reveal delay={100}>
          <div className="leads-agenda-grid">
            <div className="leads-agenda-copy">
              <p className="max-w-xl text-[18px] leading-8 text-white/70">
                Así que si ahora mismo eres una empresa solar residencial, pagas publicidad y sientes un cuello de botella al atender al cliente...
              </p>
              <h2 className="leads-heading leads-heading-light mt-6 max-w-3xl">
                Y deseas atender 3 veces más clientes sin aumentar tu carga comercial
              </h2>
              <div className="mt-8">
                <CtaButton href="#calendario" />
              </div>
              <p className="mt-5 max-w-xl text-[14px] leading-6 text-white/60">
                Esta no es una llamada de ventas para presionarte. El objetivo es demostrarte cómo puedes crecer sin drama.
              </p>

              <div className="leads-agenda-notes mt-12 max-w-xl space-y-5 text-[16px] leading-7 text-white/70">
                <p>En esta llamada analizaremos tu proceso de atención comercial completo.</p>
                <p>
                  Veremos los pasos que sigues y te daremos tu proceso comercial actual documentado y cómo se vería con nuestra
                  solución.
                </p>
                <p>Si vemos potencial de trabajar juntos, te mostramos exactamente cómo funciona.</p>
                <p className="font-medium text-white">
                  No tienes nada que perder: al final de la llamada te llevas tu proceso comercial actual documentado.
                </p>
              </div>
            </div>

            <div id="calendario" className="leads-calendar scroll-mt-4">
              <div className="border-b border-black/10 px-6 py-5">
                <h3 className="leads-card-heading">Close Energy — Llamada Discovery</h3>
                <p className="mt-1 text-[14px] text-black/60">⏱ 30 min</p>
              </div>
              {CALENDLY_URL ? (
                <iframe
                  src={`${CALENDLY_URL}?hide_gdpr_banner=1`}
                  title="Agendar llamada"
                  loading="lazy"
                  className="block h-[700px] w-full"
                />
              ) : (
                <div className="flex h-[700px] w-full items-center justify-center text-[14px] text-black/60">
                  Calendario próximamente
                </div>
              )}
              {CALENDLY_URL && (
                <p className="border-t border-black/10 px-6 py-4 text-[12px] text-black/50">
                  ¿No carga el calendario?{' '}
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black">
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
