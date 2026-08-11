'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpStatProps {
  /** Full display value, e.g. "35M+", "100%", "4". */
  value: string
  /** Set false for values that shouldn't animate (e.g. a year like "2025"). */
  animate?: boolean
  /** Animation duration in ms. */
  duration?: number
  style?: React.CSSProperties
  className?: string
}

/**
 * Renders a stat number that counts up from 0 to its target once it
 * scrolls into view. Parses a leading numeric portion (with optional
 * comma separators) out of `value` and keeps any prefix/suffix
 * (e.g. "M+", "%", "K") static around it. Falls back to the plain
 * static value when the number can't be parsed, animation is turned
 * off, or the user has requested reduced motion.
 */
export default function CountUpStat({ value, animate = true, duration = 1400, style, className }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(animate ? value.replace(/[\d,]+/, '0') : value)
  const [hasRun, setHasRun] = useState(false)

  useEffect(() => {
    if (!animate) return
    const match = value.match(/^([^\d]*)([\d,]+)(.*)$/)
    if (!match) return // no numeric portion found — leave the static value as-is

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync to final value when motion is disabled, not a cascading update
      setDisplay(value)
      return
    }

    const [, prefix, numStr, suffix] = match
    const target = parseInt(numStr.replace(/,/g, ''), 10)
    const el = ref.current
    if (!el || Number.isNaN(target)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true)
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            const current = Math.round(target * eased)
            setDisplay(`${prefix}${current.toLocaleString()}${suffix}`)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, animate, duration])

  return (
    <span ref={ref} style={style} className={className}>
      {display}
    </span>
  )
}