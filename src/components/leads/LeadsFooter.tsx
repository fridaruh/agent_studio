export default function LeadsFooter() {
  return (
    <footer className="border-t border-hairline bg-canvas py-10">
      <div className="max-w-content mx-auto px-6 flex flex-col items-center gap-3 text-center">
        <p className="text-ink font-semibold tracking-tight text-body-sm">CLOSE ENERGY</p>
        <p className="text-caption text-ink-tertiary max-w-xl">
          Sistema Agéntico de Pre-Cotización · Fik Studio, Estudio de Transformación Agéntica para Empresas de Paneles Solares
        </p>
        <p className="text-caption text-ink-tertiary">© {new Date().getFullYear()} Close Energy</p>
      </div>
    </footer>
  )
}
