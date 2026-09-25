import type { Metadata } from 'next'
import LeadsLanding from '@/components/leads/LeadsLanding'

export const metadata: Metadata = {
  title: 'Close Energy · Sistema Agéntico de Cotización Solar',
  description:
    'Cómo atendemos 3x más clientes, sin aumentar tu carga comercial.',
  alternates: {
    canonical: 'https://close.energy/leadsA',
  },
}

export default function LeadsAPage() {
  return <LeadsLanding />
}
