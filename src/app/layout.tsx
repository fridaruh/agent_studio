import type { Metadata } from 'next'
import { I18nProvider } from '@/lib/i18n/context'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Close Energy: Agentes IA para empresas solares',
  description: 'La plataforma de agentes IA diseñada para instaladores y distribuidores solares. Automatiza cotizaciones, seguimiento de clientes y coordinación de servicio.',
  metadataBase: new URL('https://close.energy'),
  openGraph: {
    title: 'Close Energy: Agentes IA para empresas solares',
    description: 'Automatiza cotizaciones, seguimiento de clientes y coordinación de servicio: de extremo a extremo.',
    type: 'website',
    url: 'https://close.energy',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
