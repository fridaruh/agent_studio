export default function CtaButton({ className = '', href = '#agenda' }: { className?: string; href?: string }) {
  return (
    <a
      href={href}
      className={`leads-cta inline-flex min-h-11 items-center justify-center rounded-md px-6 py-3 text-button font-medium transition-colors duration-150 ${className}`}
    >
      Agendar llamada →
    </a>
  )
}
