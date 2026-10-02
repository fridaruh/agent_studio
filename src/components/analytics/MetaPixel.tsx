'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const PIXEL_ID = '1406580320973657'
const TARGET_PATHS = new Set(['/leadsA', '/leadsB', '/thankyoupage'])

type MetaFbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue?: unknown[][]
  push?: (...args: unknown[]) => void
  loaded?: boolean
  version?: string
}

declare global {
  interface Window {
    fbq?: MetaFbq
    _fbq?: MetaFbq
    __metaPixelLastObservedPath?: string
    __metaPixelInitialized?: boolean
    __metaPixelScriptAdded?: boolean
  }
}

function installMetaPixel() {
  if (!window.fbq) {
    const fbq: MetaFbq = (...args) => {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, args)
      } else {
        fbq.queue?.push(args)
      }
    }

    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    window.fbq = fbq
    window._fbq = fbq
  }

  if (!window.__metaPixelScriptAdded) {
    window.__metaPixelScriptAdded = true
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
  }
}

export default function MetaPixel() {
  const pathname = usePathname()
  const isTargetPath = pathname !== null && TARGET_PATHS.has(pathname)

  useEffect(() => {
    if (!pathname || window.__metaPixelLastObservedPath === pathname) return

    window.__metaPixelLastObservedPath = pathname
    if (!TARGET_PATHS.has(pathname)) return

    installMetaPixel()

    if (!window.__metaPixelInitialized) {
      window.fbq?.('init', PIXEL_ID)
      window.__metaPixelInitialized = true
    }

    window.fbq?.('track', 'PageView')
  }, [pathname])

  if (!isTargetPath) return null

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  )
}
