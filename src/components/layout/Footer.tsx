'use client'

import { useI18n } from '@/lib/i18n/context'

const pageLinkHrefs: Record<string, string> = {
  'Team': '/team',
  'Equipo': '/team',
}

export default function Footer() {
  const { t } = useI18n()
  const { footer } = t

  const columns = [footer.product, footer.company, footer.resources, footer.contact]

  return (
    <footer className="bg-canvas border-t border-hairline" style={{ padding: '64px 32px 40px' }}>
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="Close Energy" className="w-6 h-6 object-contain shrink-0" />
              <span className="text-ink font-semibold text-body-sm">Close Energy</span>
            </div>
            <p className="text-ink-subtle text-caption leading-relaxed max-w-[200px]">
              {footer.tagline}
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { label: 'Instagram', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                )},
                { label: 'X', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )},
                { label: 'LinkedIn', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                )},
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-ink-tertiary hover:text-ink-subtle transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-ink text-caption font-medium mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={pageLinkHrefs[link] ?? '#'}
                      className="text-ink-subtle hover:text-ink-muted text-caption transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hairline pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-ink-tertiary text-caption">{footer.legal}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-ink-tertiary hover:text-ink-subtle text-caption transition-colors">Privacy</a>
            <a href="#" className="text-ink-tertiary hover:text-ink-subtle text-caption transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
