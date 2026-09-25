import VslProgress from './VslProgress'
import LeadsHero from './LeadsHero'
import LeadsPain from './LeadsPain'
import LeadsOffer from './LeadsOffer'
import LeadsBeforeAfter from './LeadsBeforeAfter'
import LeadsAgenda from './LeadsAgenda'
import LeadsFooter from './LeadsFooter'

export type LeadsLandingVariant = 'standard' | 'capacity'

type LeadsLandingProps = {
  variant?: LeadsLandingVariant
}

export default function LeadsLanding({ variant = 'standard' }: LeadsLandingProps) {
  const isCapacityVariant = variant === 'capacity'

  return (
    <main className="leads-page">
      <VslProgress />
      <LeadsHero variant={variant} />
      <LeadsPain />
      <LeadsOffer />
      <LeadsBeforeAfter />
      <LeadsAgenda variant={variant} />
      <LeadsFooter showMethodologyNote={isCapacityVariant} />
    </main>
  )
}
