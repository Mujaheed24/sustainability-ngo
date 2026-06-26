'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { CheckCircle } from 'lucide-react'

const pillars = [
  {
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80',
    alt: 'Community waste management and recycling',
    title: 'Waste Management',
    desc: 'Converting waste into wealth and clean environments',
    accent: '#4ade80',
  },
  {
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=80',
    alt: 'Solar panels renewable energy',
    title: 'Renewable Energy',
    desc: 'Clean energy access for underserved communities',
    accent: '#fbbf24',
  },
  {
    img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=500&auto=format&fit=crop&q=80',
    alt: 'African farmers agriculture',
    title: 'Agriculture',
    desc: 'Climate-resilient farming for food security',
    accent: '#34d399',
  },
  {
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=80',
    alt: 'Women empowerment community livelihoods',
    title: 'Livelihoods',
    desc: 'Skills and dignified income for all',
    accent: '#60a5fa',
  },
]

const values = [
  'Inclusive Development',
  'Climate Action',
  'Community First',
  'Sustainable Futures',
]

function useInView(threshold = 0.15) {
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

export default function Mission() {
  const { ref, inView } = useInView()

  return (
    <section className="section-padding" style={{ background: '#f0faf1', overflow: 'hidden' }}>
      <div className="container-custom" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-32px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
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
              gap: '8px',
              marginBottom: '1rem',
            }}>
              <span style={{ width: 28, height: 2, background: '#1a5c2a', display: 'inline-block', borderRadius: 2 }} />
              Who We Are
            </span>

            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
              fontWeight: 900,
              color: '#0d1f2d',
              lineHeight: 1.12,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              Our Mission &amp;<br />Vision
            </h2>

            <div style={{
              borderLeft: '3px solid #1a5c2a',
              paddingLeft: '1.25rem',
              marginBottom: '1.5rem',
            }}>
              <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.9375rem' }}>
                <strong style={{ color: '#0d1f2d' }}>Mission:</strong> To transform waste into economic opportunity and harness renewable
                energy to build resilient, self-sustaining communities across Nigeria and Africa —
                leaving no community behind.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.8, fontSize: '0.9375rem' }}>
                <strong style={{ color: '#0d1f2d' }}>Vision:</strong> A Nigeria where every community thrives through sustainable practices,
                clean energy access, food security, and dignified livelihoods.
              </p>
            </div>

            {/* Values tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginTop: '1.75rem' }}>
              {values.map(v => (
                <div
                  key={v}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#ffffff',
                    border: '1px solid #d1fae5',
                    borderRadius: '9999px',
                    padding: '0.4rem 0.9rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#1a5c2a',
                  }}
                >
                  <CheckCircle style={{ width: 13, height: 13, color: '#1a5c2a' }} />
                  {v}
                </div>
              ))}
            </div>
          </div>

          {/* Right — pillar grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(32px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            {pillars.map((item, i) => (
              <div
                key={item.title}
                style={{
                  background: '#ffffff',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(26,92,42,0.07)',
                  border: '1px solid rgba(26,92,42,0.08)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  cursor: 'default',
                  marginTop: i % 2 === 1 ? '1.5rem' : '0', // stagger odd cards down
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(26,92,42,0.14)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(26,92,42,0.07)'
                }}
              >
                <div style={{ position: 'relative', height: '130px', width: '100%' }}>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13,31,45,0.5) 0%, transparent 60%)',
                  }} />
                  {/* Accent bar */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: item.accent,
                  }} />
                </div>
                <div style={{ padding: '0.875rem 1rem' }}>
                  <h3 style={{ fontWeight: 800, color: '#0d1f2d', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.72rem', color: '#6b7280', lineHeight: 1.55 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}