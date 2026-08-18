import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Team from '@/components/sections/Team'

export const metadata: Metadata = {
  title: 'Equipo: Close Energy',
  description: 'Conoce a las personas y agentes IA detrás de Close Energy.',
}

export default function EquipoPage() {
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
