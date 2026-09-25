import type { Metadata } from 'next'
import LeadsLanding from '@/components/leads/LeadsLanding'

export const metadata: Metadata = {
  title: 'Close Energy · Sistema Agéntico de Cotización Solar',
  description:
    'Cómo atendemos 38.5% más prospectos para empresas solares residenciales, sin aumentar tu carga de trabajo.',
  alternates: {
    canonical: 'https://close.energy/leadsB',
  },
}

export default function LeadsBPage() {
  return <LeadsLanding variant="capacity" />
}
