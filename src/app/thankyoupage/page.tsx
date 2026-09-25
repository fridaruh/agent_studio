import type { Metadata } from 'next'
import ThankYouLanding from '@/components/thankyou/ThankYouLanding'

export const metadata: Metadata = {
  title: 'Close Energy · Prepara tu llamada',
  description: 'Completa estos pasos para confirmar y preparar tu llamada con Close Energy.',
  alternates: {
    canonical: 'https://close.energy/thankyoupage',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return <ThankYouLanding />
}
