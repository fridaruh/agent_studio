'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    datafast?: (goal: string, params?: Record<string, string>) => void
  }
}

// Goal de DataFast cuando alguien termina de agendar en el Calendly embebido
// de /leads. El iframe de calendly.com avisa por postMessage (solo si su URL
// lleva embed_domain, ver LeadsAgenda); la conversión es `calendly.event_scheduled`.
export default function CalendlyGoal() {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== 'https://calendly.com') return
      if (e.data?.event !== 'calendly.event_scheduled') return
      window.datafast?.('agendar_llamada')
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return null
}
