'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n/context'

export default function VideoDemo() {
  const { t } = useI18n()
  const { videoDemo } = t
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-section bg-canvas" id="demo">
      <div className="max-w-content mx-auto px-6">
        <p className="text-primary text-eyebrow uppercase tracking-widest mb-4">{videoDemo.eyebrow}</p>
        <h2
          className="text-ink font-semibold mb-3"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          {videoDemo.headline}
        </h2>
        <p className="text-ink-muted text-body-lg mb-10 max-w-xl">{videoDemo.subheadline}</p>

        <div
          className="relative w-full aspect-video bg-surface-1 border border-hairline rounded-xl overflow-hidden cursor-pointer group"
          onClick={() => setPlaying(true)}
        >
          {/* Placeholder visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 hero-grid opacity-30" />

            {/* Mock video content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <button
                className={`w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
                  playing ? 'opacity-0 scale-90' : 'opacity-100 scale-100 group-hover:scale-110 btn-primary-glow'
                }`}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </button>
              {!playing && (
                <p className="text-ink-subtle text-body-sm">{videoDemo.playLabel}</p>
              )}
            </div>
          </div>

          {/* Duration badge */}
          {!playing && (
            <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-canvas/80 backdrop-blur-sm border border-hairline rounded text-caption text-ink-subtle">
              3:42
            </div>
          )}

          {/* Placeholder "playing" state */}
          {playing && (
            <div className="absolute inset-0 bg-surface-2 flex items-center justify-center">
              <p className="text-ink-subtle text-body-sm">Video embed placeholder — add YouTube or MP4 URL</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
