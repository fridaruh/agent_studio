import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Close Energy: agentes IA para empresas solares'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Generated share card. Swap this route for a static /public asset once the
// designed og:image lands.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: '#374151',
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 600, color: '#111827' }}>
            Close Energy
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              color: '#111827',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              maxWidth: '960px',
            }}
          >
            Cotiza más rápido de lo que tu competencia puede contestar el teléfono.
          </div>
          <div style={{ fontSize: 30, color: '#6b7280', maxWidth: '860px' }}>
            El agente IA diseñado para instaladores solares.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {['Cotización en < 4 h', 'Seguimiento automático', 'WhatsApp · Email · Web'].map(
            (chip) => (
              <div
                key={chip}
                style={{
                  padding: '10px 18px',
                  borderRadius: '999px',
                  border: '1px solid #e5e7eb',
                  background: '#f9fafb',
                  fontSize: 22,
                  color: '#4b5563',
                }}
              >
                {chip}
              </div>
            )
          )}
        </div>
      </div>
    ),
    size
  )
}
