import Reveal from './Reveal'
import CtaButton from './CtaButton'
import { CALENDLY_URL } from '@/lib/links'

export default function LeadsAgenda() {
  return (
    <section id="agenda" className="py-8 md:py-10 bg-canvas scroll-mt-4">
      <div className="max-w-content mx-auto px-6 xl:pr-44 min-[1700px]:pr-6">
        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-xl border border-hairline bg-surface-1 p-8 md:p-12">
            <div className="absolute inset-0 hero-grid opacity-60" aria-hidden />
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
              <div>
                <p className="text-ink-muted text-body-lg max-w-xl">
                  Así que si ahora mismo eres una empresa solar residencial, pagas publicidad y sientes un cuello de botella al atender al cliente...
                </p>
                <h2
                  className="text-ink font-semibold mt-4"
                  style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.13, letterSpacing: '-0.025em' }}
                >
                  Y deseas atender 3 veces más clientes sin aumentar tu carga comercial
                </h2>
                <div className="mt-6">
                  <CtaButton href="#calendario" />
                </div>
                <p className="text-ink-subtle text-body-sm mt-4 max-w-xl">
                  Esta no es una llamada de ventas para presionarte. El objetivo es demostrarte cómo puedes crecer sin drama.
                </p>

                <div className="mt-8 max-w-xl space-y-3 text-ink-muted text-body">
                  <p>En esta llamada analizaremos tu proceso de atención comercial completo.</p>
                  <p>
                    Veremos los pasos que sigues y te daremos tu proceso comercial actual documentado y cómo se vería con nuestra
                    solución.
                  </p>
                  <p>Si vemos potencial de trabajar juntos, te mostramos exactamente cómo funciona.</p>
                  <p className="text-ink font-medium">
                    No tienes nada que perder: al final de la llamada te llevas tu proceso comercial actual documentado.
                  </p>
                </div>
              </div>

              <div id="calendario" className="scroll-mt-4 w-full overflow-hidden rounded-lg border border-hairline bg-canvas">
                <div className="px-5 pt-5 pb-3">
                  <h3 className="text-ink text-card-title font-medium">Close Energy — Llamada Discovery</h3>
                  <p className="text-ink-subtle text-body-sm mt-1">⏱ 30 min</p>
                </div>
                {CALENDLY_URL ? (
                  <iframe
                    src={`${CALENDLY_URL}?hide_gdpr_banner=1`}
                    title="Agendar llamada"
                    loading="lazy"
                    className="block h-[700px] w-full"
                  />
                ) : (
                  <div className="flex h-[700px] w-full items-center justify-center text-ink-subtle text-body-sm">
                    Calendario próximamente
                  </div>
                )}
                {CALENDLY_URL && (
                  <p className="px-5 py-3 text-caption text-ink-tertiary border-t border-hairline">
                    ¿No carga el calendario?{' '}
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
                      Ábrelo en una nueva pestaña
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
