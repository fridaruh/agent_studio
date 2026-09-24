export default function CtaButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="#agenda"
      className={`inline-flex items-center justify-center px-6 py-3 text-button text-white bg-primary rounded-md hover:bg-primary-hover transition-colors duration-150 btn-primary-glow ${className}`}
    >
      Agendar llamada →
    </a>
  )
}
