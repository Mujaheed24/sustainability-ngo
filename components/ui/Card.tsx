import { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  /** Extra classes appended after 'card-standard' (see globals.css). */
  className?: string
  /** Escape hatch for one-off overrides; prefer className/tokens first. */
  style?: CSSProperties
  /** 'lg' uses the larger radius token for hero/feature cards. Default 'default'. */
  size?: 'default' | 'lg'
}

/**
 * The single card shape for the whole site: radius, shadow, padding,
 * and hover lift all come from the design tokens in globals.css
 * (.card-standard). Reach for this instead of a fresh style={{}}
 * block per page — that inconsistency (varying radius/shadow/padding
 * across pages) is exactly what the redesign is fixing.
 *
 * Usage:
 *   <Card><h3>Program name</h3><p>...</p></Card>
 *   <Card size="lg" className="text-center">...</Card>
 */
export default function Card({ children, className = '', style, size = 'default' }: CardProps) {
  const radius = size === 'lg' ? 'var(--radius-card-lg)' : undefined
  return (
    <div
      className={`card-standard ${className}`.trim()}
      style={{ ...(radius ? { borderRadius: radius } : {}), ...style }}
    >
      {children}
    </div>
  )
}