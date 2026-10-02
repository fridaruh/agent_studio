import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server'
import { trackAICrawlerRequest } from '@datafast/ai-crawl'

// Bot traffic de DataFast: qué páginas piden ChatGPT, Googlebot, ClaudeBot…
// No se espera: corre en segundo plano con event.waitUntil y nunca retrasa la
// respuesta. El ID es el público del script de layout.tsx.
export function middleware(request: NextRequest, event: NextFetchEvent) {
  trackAICrawlerRequest(request, event, { websiteId: 'dfid_7D94N8ZLoCRuFRAKbz1JB' })
  return NextResponse.next()
}

export const config = {
  // Todo menos assets: incluye robots.txt, sitemap.xml y opengraph-image.
  // /api queda fuera (el formulario de /contact no es tráfico de bots).
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
