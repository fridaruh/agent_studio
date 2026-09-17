'use client'

import { useEffect, useState } from 'react'
import { BOOKING_URL } from '@/lib/links'

export default function LeadsNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-14 transition-colors duration-200 ${
        scrolled ? 'bg-canvas/95 backdrop-blur-md border-b border-hairline' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto h-full px-6 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <a href="/" className="text-ink font-semibold tracking-tight text-body-sm">
            CLOSE ENERGY
          </a>
          <span className="font-mono text-mono text-ink-tertiary hidden sm:inline">FIK / VSL</span>
        </div>
        <a
          href={BOOKING_URL}
          className="px-4 py-2 text-button text-white bg-primary rounded-md hover:bg-primary-hover transition-colors duration-150 btn-primary-glow"
        >
          Agendar llamada →
        </a>
      </div>
    </header>
  )
}
