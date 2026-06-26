'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&auto=format&fit=crop&q=80',
    alt: 'Waste recycling and composting community program',
    title: 'Waste to Wealth',
    description: 'We train communities to collect, sort, and convert waste into compost, biogas, and sellable materials — turning environmental problems into economic opportunities.',
    tags: ['Recycling', 'Biogas', 'Compost'],
    accentColor: '#16a34a',
    href: '/programs',
  },
  {
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&auto=format&fit=crop&q=80',
    alt: 'Solar panels and renewable energy installation',
    title: 'Renewable Energy',
    description: 'Deploying solar and clean energy solutions to homes, schools, and health centres in off-grid communities across Nigeria.',
    tags: ['Solar', 'Clean Energy', 'Off-Grid'],
    accentColor: '#d97706',
    href: '/programs',
  },
  {
    img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=700&auto=format&fit=crop&q=80',
    alt: 'Smallholder farmers climate-smart agriculture',
    title: 'Climate-Smart Agriculture',
    description: 'Supporting smallholder farmers with climate-resilient techniques, improved seeds, and market access to boost food security.',
    tags: ['Food Security', 'Farmers', 'Climate Resilience'],
    accentColor: '#059669',
    href: '/programs',
  },
  {
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&auto=format&fit=crop&q=80',
    alt: 'Women empowerment and youth livelihood training',
    title: 'Livelihood & Empowerment',
    description: 'Equipping youth and women with vocational skills, entrepreneurship training, and access to micro-finance for sustainable income.',
    tags: ['Youth', 'Women', 'Entrepreneurship'],
    accentColor: '#2563eb',
    href: '/programs',
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Programs() {
  const { ref, inView } = useInView()

  return (
    <section className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container-custom">
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span style={{
            color: '#1a5c2a',
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '1rem',
          }}>
            <span style={{ width: 28, height: 2, background: '#1a5c2a', display: 'inline-block', borderRadius: 2 }} />
            What We Do
            <span style={{ width: 28, height: 2, background: '#1a5c2a', display: 'inline-block', borderRadius: 2 }} />
          </span>
          <h2 style={{
            fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
            fontWeight: 900,
            color: '#0d1f2d',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Our Programs
          </h2>
          <p style={{ color: '#6b7280', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.9375rem' }}>
            Four interconnected programs designed to build resilient, self-sufficient communities from the ground up.
          </p>
        </div>

        {/* Program cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {programs.map((program, i) => (
            <div
              key={program.title}
              style={{
                border: '1px solid #f0faf1',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                background: '#ffffff',
                transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
                cursor: 'default',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: `${0.1 + i * 0.1}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-6px) scale(1.01)'
                el.style.boxShadow = '0 20px 48px rgba(26,92,42,0.12)'
                el.style.borderColor = program.accentColor
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0) scale(1)'
                el.style.boxShadow = 'none'
                el.style.borderColor = '#f0faf1'
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden' }}>
                <Image
                  src={program.img}
                  alt={program.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="program-img"
                />
                {/* Bottom gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13,31,45,0.55) 0%, transparent 55%)',
                }} />
                {/* Accent stripe */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: program.accentColor,
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 800, color: '#0d1f2d', fontSize: '1.05rem', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {program.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {program.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {program.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        background: '#f0faf1',
                        color: '#1a5c2a',
                        fontSize: '0.68rem',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '9999px',
                        fontWeight: 600,
                        border: '1px solid #d1fae5',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={program.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: program.accentColor,
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                    transition: 'gap 0.2s',
                  }}
                >
                  Learn More <ArrowRight style={{ width: 14, height: 14 }} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href="/programs"
            style={{
              background: '#1a5c2a',
              color: '#ffffff',
              fontWeight: 800,
              padding: '1.1rem 2.5rem',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(26,92,42,0.25)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(26,92,42,0.35)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(26,92,42,0.25)'
            }}
          >
            Explore All Programs <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </div>
    </section>
  )
}