import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Reveal from './motion/Reveal'

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

export default function Programs() {
  return (
    <section className="section-padding" style={{ background: 'var(--brand-white)' }}>
      <div className="container-custom">
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ width: 28, height: 2, background: 'var(--brand-green)', display: 'inline-block', borderRadius: 2 }} />
              What We Do
              <span style={{ width: 28, height: 2, background: 'var(--brand-green)', display: 'inline-block', borderRadius: 2 }} />
            </span>
            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              fontWeight: 900,
              color: 'var(--brand-navy)',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}>
              Our Programs
            </h2>
            <p style={{ color: '#6b7280', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.9375rem' }}>
              Four interconnected programs designed to build resilient, self-sufficient communities from the ground up.
            </p>
          </div>
        </Reveal>

        {/* Program cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--spacing-card-gap)' }}>
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 0.1} duration={0.5}>
              <div
                className="card-standard program-card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-card-lg)',
                  border: '1px solid var(--brand-green-pale)',
                  height: '100%',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src={program.img}
                    alt={program.alt}
                    fill
                    style={{ objectFit: 'cover' }}
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
                  <h3 style={{ fontWeight: 800, color: 'var(--brand-navy)', fontSize: '1.05rem', marginBottom: '0.75rem', lineHeight: 1.25 }}>
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
                          background: 'var(--brand-green-pale)',
                          color: 'var(--brand-green)',
                          fontSize: '0.68rem',
                          padding: '0.3rem 0.65rem',
                          borderRadius: 'var(--radius-pill)',
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
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              href="/programs"
              className="cta-pill"
              style={{
                background: 'var(--brand-green)',
                color: 'var(--brand-white)',
                fontWeight: 800,
                padding: '1.1rem 2.5rem',
                borderRadius: 'var(--radius-pill)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                boxShadow: '0 4px 20px rgba(26,92,42,0.25)',
              }}
            >
              Explore All Programs <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}