import Reveal from './Reveal'
import { CALENDLY_URL } from '@/lib/links'

export default function LeadsAgenda() {
  return (
    <section id="agenda" className="py-section bg-canvas scroll-mt-4">
      <div className="max-w-content mx-auto px-6">
        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-xl border border-hairline bg-surface-1 p-8 md:p-12">
            <div className="absolute inset-0 hero-grid opacity-60" aria-hidden />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <h2
                  className="text-ink font-semibold max-w-2xl"
                  style={{ fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
                >
                  Aplica ahora si deseas atender 3 veces más clientes sin aumentar tu carga comercial.
                </h2>
                <p className="text-ink-muted text-body-lg mt-6 max-w-xl">
                  30 minutos · Sin compromiso · Analizamos tu proceso de atención comercial completo y cómo se vería con nuestra solución
                </p>
                <p className="text-ink-subtle text-body-sm mt-6 max-w-xl">
                  No tienes nada que perder: al final de la llamada te llevas tu proceso comercial actual documentado.
                </p>
              </div>

              <div className="w-full overflow-hidden rounded-lg border border-hairline bg-canvas">
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
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-caption text-ink-tertiary text-center mt-8 max-w-2xl mx-auto">
            Para empresas solares residenciales que invierten $15,000 a $20,000 dólares al mes en pauta recurrente y/o hacen ferias y activaciones
          </p>
        </Reveal>
      </div>
    </section>
  )
}
