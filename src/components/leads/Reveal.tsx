'use client'

import { useEffect, useRef, useState } from 'react'

/** Fades content in on first intersection. Content already on screen at first paint stays visible. */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) {
      setReduceMotion(true)
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return
    if (el.getBoundingClientRect().top < window.innerHeight) {
      return
    }
    setVisible(false)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible || reduceMotion ? 'none' : 'translateY(16px)',
        transition: reduceMotion
          ? 'none'
          : `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
