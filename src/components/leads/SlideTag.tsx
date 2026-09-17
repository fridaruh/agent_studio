/** Mono strip identifying the VSL slide, e.g. "CLOSE ENERGY · FIK / VSL — 01 / 05 — HERO". */
export default function SlideTag({ slide, label }: { slide: string; label: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3 font-mono text-mono text-ink-tertiary">
      <span>CLOSE ENERGY · FIK / VSL</span>
      <span className="h-px w-8 bg-hairline-strong" aria-hidden />
      <span className="text-ink-subtle">
        {slide} / 05 — {label}
      </span>
    </div>
  )
}
