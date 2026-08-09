import { ReactNode, CSSProperties } from 'react'

interface SectionProps {
  children: ReactNode
  /** Small uppercase label above the heading, e.g. "OUR MISSION". */
  eyebrow?: string
  /** Section heading text. Omit if the section builds its own custom header. */
  heading?: ReactNode
  /** Optional supporting copy under the heading. */
  subheading?: ReactNode
  /** Background color token or CSS value. Default transparent. */
  background?: string
  /** 'lg' uses the larger vertical rhythm token for hero-scale sections. */
  spacing?: 'default' | 'lg'
  className?: string
  style?: CSSProperties
  /** Center the eyebrow/heading/subheading block. Default true. */
  centerHeader?: boolean
}

/**
 * Standard section wrapper: consistent vertical rhythm (via the
 * spacing tokens), consistent container width (.container-custom),
 * and a consistent eyebrow → heading → subheading header pattern.
 * This replaces each page hand-rolling its own section padding and
 * heading markup with slightly different font sizes/spacing.
 *
 * Usage:
 *   <Section eyebrow="Our Mission" heading="Why we exist" subheading="...">
 *     <Programs />
 *   </Section>
 */
export default function Section({
  children,
  eyebrow,
  heading,
  subheading,
  background,
  spacing = 'default',
  className = '',
  style,
  centerHeader = true,
}: SectionProps) {
  const paddingY = spacing === 'lg' ? 'var(--spacing-section-y-lg)' : 'var(--spacing-section-y)'

  return (
    <section
      className={className}
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        background,
        ...style,
      }}
    >
      <div className="container-custom">
        {(eyebrow || heading || subheading) && (
          <div
            style={{
              textAlign: centerHeader ? 'center' : 'left',
              maxWidth: centerHeader ? '640px' : undefined,
              margin: centerHeader ? '0 auto 3rem' : '0 0 3rem',
            }}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {heading && (
              <h2
                style={{
                  fontSize: 'var(--font-size-h2)',
                  fontWeight: 800,
                  color: 'var(--brand-navy)',
                  lineHeight: 1.15,
                  marginBottom: subheading ? '1rem' : 0,
                }}
              >
                {heading}
              </h2>
            )}
            {subheading && (
              <p style={{ fontSize: 'var(--font-size-body-lg, 1.125rem)', color: '#4b5563', lineHeight: 1.7 }}>
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}