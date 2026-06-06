'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n/context'

export default function ContactForm() {
  const { t } = useI18n()
  const c = t.contact

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [installTypes, setInstallTypes] = useState<string[]>([])
  const [volume, setVolume] = useState('')
  const [bottleneck, setBottleneck] = useState('')
  const [referral, setReferral] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  function toggleArr(arr: string[], val: string): string[] {
    return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 className="text-ink font-semibold mb-3" style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em' }}>
            {c.successTitle}
          </h2>
          <p className="text-ink-subtle text-body leading-relaxed">{c.successBody}</p>
        </div>
      </div>
    )
  }

  const inputClass = 'w-full px-3.5 py-2.5 bg-canvas border border-hairline rounded-md text-ink text-body-sm placeholder:text-ink-tertiary focus:outline-none focus:border-primary/50 transition-colors'
  const sectionLabel = 'text-ink-tertiary text-caption font-medium uppercase tracking-widest mb-6 block'
  const fieldLabel = 'text-ink text-body-sm font-medium mb-2 block'

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-6 py-16">
      <p className="text-ink-subtle text-body leading-relaxed mb-12">{c.subtitle}</p>

      {/* TU EMPRESA */}
      <div className="mb-10">
        <span className={sectionLabel}>{c.sectionCompany}</span>
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={fieldLabel}>{c.firstName}</label>
              <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputClass} placeholder="María" />
            </div>
            <div>
              <label className={fieldLabel}>{c.lastName}</label>
              <input required value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputClass} placeholder="González" />
            </div>
          </div>
          <div>
            <label className={fieldLabel}>{c.email}</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="maria@empresa.com" />
          </div>
          <div>
            <label className={fieldLabel}>{c.phone}</label>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-3 py-2.5 bg-canvas border border-hairline rounded-md text-ink text-body-sm shrink-0">
                <span>🇲🇽</span>
                <span>+52</span>
              </div>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="55 1234 5678" />
            </div>
          </div>
          <div>
            <label className={fieldLabel}>{c.company}</label>
            <input required value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} placeholder="Solares del Norte" />
          </div>
        </div>
      </div>

      <div className="border-t border-hairline mb-10" />

      {/* TU OPERACIÓN */}
      <div className="mb-10">
        <span className={sectionLabel}>{c.sectionOperation}</span>
        <div className="space-y-7">
          {/* Install types */}
          <div>
            <label className={fieldLabel}>{c.installTitle}</label>
            <div className="grid grid-cols-3 gap-3">
              {c.installOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setInstallTypes(toggleArr(installTypes, opt))}
                  className={`py-4 flex flex-col items-center gap-2 rounded-md border text-body-sm transition-all ${
                    installTypes.includes(opt)
                      ? 'border-primary/50 bg-primary/5 text-primary'
                      : 'border-hairline bg-canvas text-ink-subtle hover:border-hairline-strong hover:text-ink'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                    installTypes.includes(opt) ? 'border-primary bg-primary' : 'border-hairline-strong'
                  }`}>
                    {installTypes.includes(opt) && (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                        <polyline points="2 6 5 9 10 3"/>
                      </svg>
                    )}
                  </div>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Volume */}
          <div>
            <label className={fieldLabel}>{c.volumeTitle}</label>
            <div className="grid grid-cols-2 gap-3">
              {c.volumeOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setVolume(opt)}
                  className={`px-4 py-3 rounded-md border text-body-sm text-left transition-all ${
                    volume === opt
                      ? 'border-primary/50 bg-primary/5 text-primary'
                      : 'border-hairline bg-canvas text-ink-subtle hover:border-hairline-strong hover:text-ink'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Bottleneck */}
          <div>
            <label className={fieldLabel}>{c.bottleneckTitle}</label>
            <div className="relative">
              <select
                value={bottleneck}
                onChange={(e) => setBottleneck(e.target.value)}
                className={`${inputClass} appearance-none pr-10 cursor-pointer`}
              >
                <option value="">{c.bottleneckPlaceholder}</option>
                {c.bottleneckOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink-tertiary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline mb-10" />

      {/* UNA ÚLTIMA COSA */}
      <div className="mb-10">
        <span className={sectionLabel}>{c.sectionLast}</span>
        <div>
          <label className={fieldLabel}>{c.referralTitle}</label>
          <div className="grid grid-cols-2 gap-3">
            {c.referralOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setReferral(toggleArr(referral, opt))}
                className={`px-4 py-3 rounded-md border text-body-sm text-left transition-all ${
                  referral.includes(opt)
                    ? 'border-primary/50 bg-primary/5 text-primary'
                    : 'border-hairline bg-canvas text-ink-subtle hover:border-hairline-strong hover:text-ink'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 text-button text-white bg-primary rounded-md hover:bg-primary-hover transition-colors btn-primary-glow flex items-center justify-center gap-2"
      >
        {c.submit}
        <div className="w-4 h-4 rounded border border-white/40 flex items-center justify-center">
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <polyline points="2 6 5 9 10 3"/>
          </svg>
        </div>
      </button>
    </form>
  )
}
