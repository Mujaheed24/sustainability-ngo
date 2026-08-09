'use client'

import { motion, useReducedMotion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  /** Direction the content travels in as it reveals. Default 'up'. */
  direction?: RevealDirection
  /** Delay in seconds before this element starts animating. Use to stagger siblings. */
  delay?: number
  /** Distance in px the content travels. Default 24. */
  distance?: number
  /** Animation duration in seconds. Default 0.6. */
  duration?: number
  /** Pass through to the wrapping div. */
  className?: string
  /** Fraction of the element that must be visible before it triggers (0–1). Default 0.2. */
  amount?: number
  /** Re-trigger every time it scrolls into view, instead of only once. Default false. */
  repeat?: boolean
}

const offsets: Record<RevealDirection, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
}

/**
 * Wrap any section/card/block in <Reveal> to give it a consistent
 * scroll-triggered fade + slide-in. This is the site's single source
 * of truth for "how things animate in" — don't hand-roll IntersectionObserver
 * or ad-hoc framer-motion variants elsewhere; extend this component instead.
 *
 * Usage:
 *   <Reveal><Card /></Reveal>
 *   <Reveal direction="left" delay={0.1}><Card /></Reveal>
 *
 * Staggering a grid of cards:
 *   {items.map((item, i) => (
 *     <Reveal key={item.id} delay={i * 0.08}>...</Reveal>
 *   ))}
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 24,
  duration = 0.6,
  className,
  amount = 0.2,
  repeat = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const offset = offsets[direction]

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x ? offset.x * distance : 0,
      y: offset.y ? offset.y * distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1], // easeOutQuint-ish — matches the site's confident, warm feel
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}