'use client'

import { useI18n } from '@/lib/i18n/context'

export default function Footer() {
  const { t } = useI18n()
  const { footer } = t

  const columns = [footer.product, footer.company, footer.contact]

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
            {/* Socials: reinstate each <a> once we have the real profile URLs.
                They used to render with href="#", which is a dead link. */}
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-ink text-caption font-medium mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-ink-subtle hover:text-ink-muted text-caption transition-colors"
                    >
                      {link.label}
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
          {/* Privacidad / Términos: restore these two links, pointing at /privacidad and
              /terminos, once Iker's legal copy lands and those routes exist. */}
        </div>
      </div>
    </footer>
  )
}
