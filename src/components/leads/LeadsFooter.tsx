export default function LeadsFooter() {
  return (
    <footer className="leads-footer">
      <div className="leads-shell flex flex-col items-center gap-4 text-center">
        <p className="text-[13px] font-semibold tracking-[0.12em] text-white">CLOSE ENERGY</p>
        <span className="h-px w-12 bg-[#FF5A00]" aria-hidden />
        <p className="max-w-2xl text-[12px] leading-5 text-white/50">
          Sistema Agéntico de Pre-Cotización · Fik Studio, Estudio de Transformación Agéntica para Empresas de Paneles Solares
        </p>
        <p className="text-[12px] text-white/40">© {new Date().getFullYear()} Close Energy</p>
      </div>
    </footer>
  )
}
