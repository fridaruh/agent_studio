/**
 * Shape of a /contact submission, and how it gets rendered for the #leads channel.
 * Shared by the client form and the API route so the two can't drift.
 */

export type Lead = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  installTypes: string[]
  volume: string
  bottleneck: string
  referral: string[]
  /** Which locale the visitor filled the form in — the reply should match it. */
  locale: string
}

/** Fields the form marks `required`. Everything else is optional by design. */
const REQUIRED = ['firstName', 'lastName', 'email', 'company'] as const

const MAX_FIELD_LENGTH = 500

/**
 * Validates and normalizes an untrusted request body.
 * Returns the lead, or a list of problems for a 400.
 */
export function parseLead(body: unknown): { lead: Lead } | { errors: string[] } {
  const errors: string[] = []

  if (typeof body !== 'object' || body === null) {
    return { errors: ['body must be a JSON object'] }
  }
  const raw = body as Record<string, unknown>

  const str = (key: string): string => {
    const v = raw[key]
    if (typeof v !== 'string') return ''
    return v.trim().slice(0, MAX_FIELD_LENGTH)
  }

  const arr = (key: string): string[] => {
    const v = raw[key]
    if (!Array.isArray(v)) return []
    return v
      .filter((x): x is string => typeof x === 'string')
      .slice(0, 20)
      .map((x) => x.trim().slice(0, MAX_FIELD_LENGTH))
  }

  const lead: Lead = {
    firstName: str('firstName'),
    lastName: str('lastName'),
    email: str('email'),
    phone: str('phone'),
    company: str('company'),
    installTypes: arr('installTypes'),
    volume: str('volume'),
    bottleneck: str('bottleneck'),
    referral: arr('referral'),
    locale: str('locale') === 'en' ? 'en' : 'es',
  }

  for (const field of REQUIRED) {
    if (!lead[field]) errors.push(`${field} is required`)
  }
  // Deliberately loose: the browser already ran type="email", and this only guards
  // against a body that never went through the form. Rejecting real-but-unusual
  // addresses would cost us a lead, which is worse than accepting a bad one.
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    errors.push('email is not a valid address')
  }

  return errors.length > 0 ? { errors } : { lead }
}

/** Renders a lead as the Markdown body of a #leads channel message. */
export function formatLead(lead: Lead, receivedAt: Date): string {
  const name = `${lead.firstName} ${lead.lastName}`.trim()
  const list = (xs: string[]) => (xs.length > 0 ? xs.join(', ') : '—')
  const or = (s: string) => s || '—'

  const timestamp = receivedAt.toISOString().replace('T', ' ').slice(0, 16) + ' UTC'

  return [
    `## 🌞 Lead nuevo — ${lead.company}`,
    '',
    `**${name}** · ${lead.email}${lead.phone ? ` · +52 ${lead.phone}` : ''}`,
    '',
    '| Campo | Respuesta |',
    '|---|---|',
    `| Empresa | ${or(lead.company)} |`,
    `| Tipo de instalaciones | ${list(lead.installTypes)} |`,
    `| Proyectos al mes | ${or(lead.volume)} |`,
    `| Mayor cuello de botella | ${or(lead.bottleneck)} |`,
    `| Cómo nos encontró | ${list(lead.referral)} |`,
    `| Idioma del formulario | ${lead.locale === 'en' ? 'Inglés' : 'Español'} |`,
    `| Recibido | ${timestamp} |`,
    '',
    `Responder a: ${lead.email}`,
  ].join('\n')
}
