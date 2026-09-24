export default function CtaButton({ className = '', href = '#agenda' }: { className?: string; href?: string }) {
  return (
    <a
      href={href}
      className={`leads-cta inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-button font-semibold transition-colors duration-200 ${className}`}
    >
      Agendar llamada →
    </a>
  )
}
