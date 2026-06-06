import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Team from '@/components/sections/Team'

export const metadata: Metadata = {
  title: 'Team: Close Energy',
  description: 'Meet the people and AI agents behind Close Energy.',
}

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '56px' }}>
        <Team />
      </div>
      <Footer />
    </main>
  )
}
