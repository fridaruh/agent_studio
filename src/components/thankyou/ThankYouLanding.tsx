import { PRECALL_VIDEO_URL } from '@/lib/links'
import LeadsFooter from '@/components/leads/LeadsFooter'
import Reveal from '@/components/leads/Reveal'
import ThankYouProgress from './ThankYouProgress'
import type { ReactNode } from 'react'

const faqs: Array<{ question: string; answer: ReactNode }> = [
  {
    question: '¿Qué es el Sistema Agéntico de Cotización?',
    answer: 'Es el sistema de Close Energy para ampliar la capacidad de atención comercial de una empresa solar. Integra cuatro pilares: Primera Respuesta y Motor de Cotización, Sistema de Control de Agenda, Sistema de Recuperación de Oportunidades y Gestión de proyectos y Centro de Indicadores de Mejora.',
  },
  {
    question: '¿Qué hacen los 4 pilares del sistema?',
    answer: (
      <ul className="thankyou-pillar-list">
        <li><strong>Primera Respuesta y Motor de Cotización:</strong> responde a los leads en menos de 5 segundos, conversa, resuelve dudas, solicita el recibo de luz y prepara la cotización.</li>
        <li><strong>Sistema de Control de Agenda:</strong> confirma el interés después de la cotización, coordina disponibilidad, agenda la visita técnica y la confirma con el prospecto y el equipo.</li>
        <li><strong>Sistema de Recuperación de Oportunidades:</strong> da seguimiento a cotizaciones que no se concretaron y recupera prospectos que dejaron de recibir seguimiento.</li>
        <li><strong>Gestión de proyectos y Centro de Indicadores de Mejora:</strong> monitorea proyectos activos, cotizaciones y pipeline; genera resúmenes de lo ocurrido y recomendaciones concretas de mejora.</li>
      </ul>
    ),
  },
  {
    question: '¿Cómo funciona el modelo de pago?',
    answer: 'Pago único de licencia y configuración, más gastos mensuales por uso. Pero primero analicemos tu proceso comercial y, si vemos potencial de trabajar juntos, te explicamos cómo funciona la implementación.',
  },
  {
    question: '¿Para quién es esta llamada?',
    answer: 'Para empresas solares del sector residencial principalmente, en etapa de crecimiento, que ya pagan publicidad y sienten un cuello de botella para atender, cotizar y dar seguimiento a todos sus prospectos sin aumentar la carga laboral del equipo comercial.',
  },
  {
    question: '¿Qué pasa en la llamada de 30 minutos?',
    answer: 'Analizamos tu proceso de atención comercial completo. Revisamos los pasos que sigues actualmente y te entregamos tu proceso comercial documentado junto con una visión de cómo se vería con la solución de Close Energy. Si vemos potencial de trabajar juntos, te mostramos exactamente cómo funciona el sistema.',
  },
  {
    question: '¿Es una llamada de ventas?',
    answer: 'No. El objetivo es entender tu proceso comercial, mostrarte cómo podría operar con Close Energy y determinar si existe un buen encaje para trabajar juntos.',
  },
  {
    question: '¿Qué resultado busca generar Close Energy?',
    answer: 'El objetivo es ayudarte a atender más prospectos, gestionar mejor tus proyectos activos y generar recomendaciones de mejora sin aumentar tu carga de trabajo.',
  },
  {
    question: '¿Necesito contratar más gente comercial?',
    answer: 'Close Energy está diseñado para ayudar a tu equipo ampliando la capacidad de atención, cotización, agendamiento y seguimiento sin aumentar la carga de trabajo.',
  },
  {
    question: '¿Cómo confirmo mi espacio en la llamada?',
    answer: 'Después de agendar, completa el Paso 1 viendo el video corto de preparación. Después recibirás un WhatsApp de Close Energy; responde «CONFIRMO» para asegurar tu espacio.',
  },
  {
    question: '¿Hay garantía de resultado?',
    answer: 'Te damos 4 semanas en una prueba piloto pagada para que pruebes el valor. Si no cumplimos, no pagas nada más. La llamada sirve para analizar tu proceso, determinar si existe potencial de trabajar juntos y explicarte cómo funcionaría la solución.',
  },
]

export default function ThankYouLanding() {
  return (
    <main className="leads-page thankyou-page">
      <ThankYouProgress />

      <section className="thankyou-hero hero-grid relative overflow-hidden" aria-labelledby="thankyou-title">
        <div className="leads-shell leads-hero-shell relative flex flex-col items-center text-center">
          <Reveal delay={80}>
            <p className="leads-qualifier inline-flex items-center text-eyebrow font-medium uppercase tracking-[0.08em]">Importante: leer antes de tu llamada</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="thankyou-alert mt-7">¡Espera!</p>
            <h1 id="thankyou-title" className="leads-display mt-3 max-w-5xl">Cómo prepararte para tu llamada con <span className="leads-accent-underline">Close Energy</span></h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="thankyou-warning mx-auto mt-7 max-w-3xl">Si no completas estos pasos, tu llamada puede ser cancelada y tu espacio asignado a otra persona.</p>
          </Reveal>
        </div>
      </section>

      <section id="video" className="leads-section leads-paper scroll-mt-4" aria-labelledby="video-title">
        <div className="leads-shell">
          <Reveal delay={80}>
            <div className="thankyou-section-intro">
              <p className="leads-kicker">01 / 03 · Paso 1</p>
              <h2 id="video-title" className="leads-heading mt-4">Importante: mira este video</h2>
              <p className="leads-body-copy mt-4 max-w-2xl">Tómate unos minutos para conocer cómo aprovechar mejor la conversación con nuestro equipo.</p>
            </div>
          </Reveal>
          <Reveal delay={140} className="mt-8">
            <div className="leads-media-frame">
              {PRECALL_VIDEO_URL ? (
                <iframe className="aspect-video w-full rounded-xl" src={PRECALL_VIDEO_URL} title="Video de preparación para tu llamada con Close Energy" allowFullScreen />
              ) : (
                <div className="thankyou-video-placeholder flex aspect-video flex-col items-center justify-center rounded-xl px-6 text-center">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-subtle">Paso 1 de 3</span>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink">Video de preparación próximamente</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-ink-subtle">Aquí aparecerá el video corto que debes ver antes de la llamada.</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="confirmacion" className="leads-section leads-surface scroll-mt-4" aria-labelledby="confirmacion-title">
        <div className="leads-shell">
          <Reveal delay={80}>
            <div className="thankyou-confirmation-grid">
              <div>
                <p className="leads-kicker">02 / 03 · Paso 2</p>
                <h2 id="confirmacion-title" className="leads-heading mt-4">Confirma tu llamada</h2>
                <p className="leads-body-copy mt-5 max-w-xl">En los próximos 15 minutos recibirás un WhatsApp de Close Energy. Responde <strong>«CONFIRMO»</strong> para asegurar tu llamada con el equipo.</p>
                <p className="thankyou-release-note mt-6">Si no recibimos tu confirmación dentro de los próximos 15 minutos, tu espacio podrá liberarse para otra persona.</p>
              </div>
              <aside className="thankyou-whatsapp" aria-label="Vista previa del mensaje de WhatsApp">
                <div className="thankyou-whatsapp-top">
                  <span className="thankyou-whatsapp-avatar" aria-hidden>CE</span>
                  <div><p className="font-medium text-ink">Close Energy</p><p className="text-xs text-ink-subtle">WhatsApp</p></div>
                </div>
                <div className="thankyou-whatsapp-body">
                  <p className="thankyou-whatsapp-bubble">Hola, gracias por agendar. Responde <strong>CONFIRMO</strong> para asegurar tu llamada.</p>
                  <p className="thankyou-pending mt-4">WhatsApp de Close Energy · enlace pendiente</p>
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="preguntas" className="leads-section leads-paper scroll-mt-4" aria-labelledby="preguntas-title">
        <div className="leads-shell">
          <Reveal delay={80}>
            <p className="leads-kicker">03 / 03 · Paso 3</p>
            <h2 id="preguntas-title" className="leads-heading mt-4 max-w-4xl">En este punto quizás aún tengas preguntas</h2>
          </Reveal>
          <div className="thankyou-faq mt-8">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={Math.min(index * 35, 180)}>
                <details className="thankyou-faq-item">
                  <summary><span className="thankyou-faq-number">{String(index + 1).padStart(2, '0')}</span><span>{faq.question}</span><span className="thankyou-faq-plus" aria-hidden>+</span></summary>
                  <div className="thankyou-faq-answer">{typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadsFooter />
    </main>
  )
}
