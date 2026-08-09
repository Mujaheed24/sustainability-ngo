import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import Reveal from './motion/Reveal'

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

export default function Mission() {
  return (
    <section className="section-padding" style={{ background: 'var(--brand-green-pale)', overflow: 'hidden' }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <Reveal direction="left" distance={32} duration={0.7}>
            <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: 28, height: 2, background: 'var(--brand-green)', display: 'inline-block', borderRadius: 2 }} />
              Who We Are
            </span>

            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              fontWeight: 900,
              color: 'var(--brand-navy)',
              lineHeight: 1.12,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              Our Mission &amp;<br />Vision
            </h2>

            <div style={{
              borderLeft: '3px solid var(--brand-green)',
              paddingLeft: '1.25rem',
              marginBottom: '1.5rem',
            }}>
              <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.9375rem' }}>
                <strong style={{ color: 'var(--brand-navy)' }}>Mission:</strong> To transform waste into economic opportunity and harness renewable
                energy to build resilient, self-sustaining communities across Nigeria and Africa —
                leaving no community behind.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.8, fontSize: '0.9375rem' }}>
                <strong style={{ color: 'var(--brand-navy)' }}>Vision:</strong> A Nigeria where every community thrives through sustainable practices,
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
                    background: 'var(--brand-white)',
                    border: '1px solid #d1fae5',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.4rem 0.9rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--brand-green)',
                  }}
                >
                  <CheckCircle style={{ width: 13, height: 13, color: 'var(--brand-green)' }} />
                  {v}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — pillar grid */}
          <Reveal direction="right" distance={32} duration={0.7} delay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {pillars.map((item, i) => (
                <div
                  key={item.title}
                  className="card-standard"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-card-lg)',
                    border: '1px solid rgba(26,92,42,0.08)',
                    marginTop: i % 2 === 1 ? '1.5rem' : '0', // stagger odd cards down
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
                    <h3 style={{ fontWeight: 800, color: 'var(--brand-navy)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.72rem', color: '#6b7280', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}