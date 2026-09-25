import type { Metadata } from 'next'
import VslProgress from '@/components/leads/VslProgress'
import LeadsHero from '@/components/leads/LeadsHero'
import LeadsPain from '@/components/leads/LeadsPain'
import LeadsOffer from '@/components/leads/LeadsOffer'
import LeadsBeforeAfter from '@/components/leads/LeadsBeforeAfter'
import LeadsAgenda from '@/components/leads/LeadsAgenda'
import LeadsFooter from '@/components/leads/LeadsFooter'

export const metadata: Metadata = {
  title: 'Close Energy · Sistema Agéntico de Cotización Solar',
  description:
    'Cómo atendemos 3x más clientes, sin aumentar tu carga comercial.',
  alternates: {
    canonical: 'https://close.energy/leads',
  },
}

export default function LeadsPage() {
  return (
    <main className="leads-page">
      <VslProgress />
      <LeadsHero />
      <LeadsPain />
      <LeadsOffer />
      <LeadsBeforeAfter />
      <LeadsAgenda />
      <LeadsFooter />
    </main>
  )
}
