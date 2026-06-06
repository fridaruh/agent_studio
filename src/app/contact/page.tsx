import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact: Close Energy',
  description: 'Activate your Close Energy account. Takes 30 seconds.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '56px' }}>
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
