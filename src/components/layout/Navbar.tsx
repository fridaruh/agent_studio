'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '@/lib/i18n/context'

export default function Navbar() {
  const { t, locale, setLocale } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.platform, href: '#platform' },
    { label: t.nav.agents, href: '#agents' },
    { label: t.nav.security, href: '#security' },
    { label: t.nav.faq, href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/95 backdrop-blur-md border-b border-hairline' : 'bg-transparent'
      }`}
      style={{ height: '56px' }}
    >
      <div className="max-w-content mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Close Energy" className="w-6 h-6 object-contain" />
          <span className="text-ink font-semibold text-body-sm tracking-tight">Close Energy</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-ink-subtle hover:text-ink text-body-sm transition-colors duration-150 rounded-md hover:bg-surface-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <div className="hidden md:flex items-center gap-0.5 bg-surface-1 border border-hairline rounded-pill p-0.5">
            {(['en', 'es'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-3 py-1 text-caption font-medium rounded-pill transition-all duration-150 ${
                  locale === l
                    ? 'bg-surface-2 text-ink'
                    : 'text-ink-subtle hover:text-ink-muted'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="https://outlook.office.com/bookwithme/user/90e5e6e996334c7c8b34b1a749e7c039@aicsolutions.mx/meetingtype/UKTphYVegUuWbG5239CHdw2?bookingcode=68329955-fca3-4c70-bcce-d44697386d26&anonymous&ismsaljsauthenabled&ep=mlink"
            className="hidden md:inline-flex px-3 py-1.5 text-button text-white bg-primary rounded-md hover:bg-primary-hover transition-colors duration-150 btn-primary-glow"
          >
            {t.nav.contactUs}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ink-subtle hover:text-ink transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {menuOpen ? (
                <>
                  <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-1 border-b border-hairline px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ink-subtle hover:text-ink text-body-sm py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-hairline mt-2">
            {(['en', 'es'] as const).map((l) => (
              <button
                key={l}
                onClick={() => { setLocale(l); setMenuOpen(false) }}
                className={`px-3 py-1 text-caption font-medium rounded-pill transition-all ${
                  locale === l ? 'bg-surface-2 text-ink' : 'text-ink-subtle'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="https://outlook.office.com/bookwithme/user/90e5e6e996334c7c8b34b1a749e7c039@aicsolutions.mx/meetingtype/UKTphYVegUuWbG5239CHdw2?bookingcode=68329955-fca3-4c70-bcce-d44697386d26&anonymous&ismsaljsauthenabled&ep=mlink"
            onClick={() => setMenuOpen(false)}
            className="mt-1 text-center py-2.5 text-button text-white bg-primary rounded-md"
          >
            {t.nav.contactUs}
          </a>
        </div>
      )}
    </header>
  )
}
