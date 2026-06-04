'use client'

import { useI18n } from '@/lib/i18n/context'

export default function TrustBadge() {
  const { t } = useI18n()

  return (
    <div className="flex justify-center pt-8 pb-2">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-1 border border-hairline rounded-pill text-caption text-ink-subtle">
        <div className="w-1.5 h-1.5 rounded-full bg-success" />
        {t.trustBadge.text}
      </div>
    </div>
  )
}
