'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n/context'

function InboxMockup({ label }: { label: string }) {
  const items = [
    { ch: 'WA', name: 'Casa García', msg: 'Recibí la cotización, muy completo...', time: '09:42', unread: true },
    { ch: 'EM', name: 'Industrias Norte', msg: 'Necesitamos ajuste en el inversor...', time: '09:31', unread: false },
    { ch: 'WA', name: 'Agro del Valle', msg: '¿Cuándo programamos la visita?', time: '08:55', unread: true },
    { ch: 'WB', name: 'Rooftop Express', msg: 'Solicitud recibida. Procesando...', time: '08:10', unread: false },
  ]

  return (
    <div className="bg-surface-1 border border-hairline rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-hairline bg-surface-2 flex items-center justify-between">
        <span className="text-ink text-body-sm font-medium">{label}</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success" />
          <span className="text-caption text-ink-subtle">Live</span>
        </div>
      </div>
      {items.map((item, i) => (
        <div key={i} className={`flex items-center gap-3 px-4 py-3 border-b border-hairline last:border-0 ${item.unread ? 'bg-surface-1' : 'bg-canvas'}`}>
          <div className={`w-8 h-8 rounded-md flex items-center justify-center text-caption font-medium shrink-0 ${
            item.ch === 'WA' ? 'bg-success/20 text-success' :
            item.ch === 'EM' ? 'bg-primary/20 text-primary' :
            'bg-surface-3 text-ink-subtle'
          }`}>
            {item.ch}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className={`text-body-sm ${item.unread ? 'text-ink font-medium' : 'text-ink-muted'}`}>{item.name}</span>
              <span className="text-caption text-ink-tertiary">{item.time}</span>
            </div>
            <p className="text-caption text-ink-subtle truncate">{item.msg}</p>
          </div>
          {item.unread && <div className="w-2 h-2 rounded-full bg-primary shrink-0" />}
        </div>
      ))}
    </div>
  )
}

function ChatMockup({ messages }: { messages: { role: string; text: string }[] }) {
  return (
    <div className="bg-surface-1 border border-hairline rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-hairline bg-surface-2 flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>
          </svg>
        </div>
        <div>
          <span className="text-ink text-body-sm font-medium">Agente IA</span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-success" />
            <span className="text-caption text-ink-subtle">Online</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`relative max-w-[85%] px-3.5 py-2.5 rounded-lg text-body-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-surface-2 border border-hairline text-ink-muted'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-hairline bg-surface-2">
        <div className="flex items-center gap-2 bg-surface-1 border border-hairline rounded-md px-3 py-2">
          <span className="text-caption text-ink-tertiary flex-1">Pregunta algo sobre tu pipeline...</span>
          <button className="w-6 h-6 rounded bg-primary flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PlatformPreview() {
  const { t } = useI18n()
  const { platformPreview } = t
  const [activePanel, setActivePanel] = useState(0)

  const panels = [platformPreview.panel1, platformPreview.panel2]

  return (
    <section className="py-section bg-canvas" id="platform">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{platformPreview.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-12 max-w-2xl"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          {platformPreview.headline}
        </h2>

        {/* Toggle tabs */}
        <div className="flex items-center gap-1 bg-surface-1 border border-hairline rounded-pill p-1 w-fit mb-10">
          {panels.map((panel, i) => (
            <button
              key={i}
              onClick={() => setActivePanel(i)}
              className={`px-4 py-1.5 text-body-sm rounded-pill transition-all duration-200 ${
                activePanel === i
                  ? 'bg-surface-3 text-ink font-medium'
                  : 'text-ink-subtle hover:text-ink-muted'
              }`}
            >
              {panel.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Description */}
          <div>
            <h3 className="text-ink font-medium text-headline mb-4">{panels[activePanel].label}</h3>
            <p className="text-ink-muted text-body-lg leading-relaxed mb-8">{panels[activePanel].desc}</p>

            <div>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-md text-primary text-button hover:bg-primary/20 transition-all">
                {platformPreview.quotingCta}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Visual panel */}
          <div>
            {activePanel === 0 ? (
              <InboxMockup label={panels[0].label} />
            ) : (
              <ChatMockup messages={platformPreview.chatMessages} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
