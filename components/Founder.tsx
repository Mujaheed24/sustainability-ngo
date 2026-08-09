'use client'

import Image from 'next/image'

export default function Founder() {
  const expertise = [
    'Sustainable Development Planning',
    'Climate Change Solutions',
    'Food Security & Livelihoods',
    'Community Empowerment',
    'Policy Advisory',
    'Research & Partnerships',
  ]

  const focus = [
    { label: 'Sustainability', color: '#4ade80' },
    { label: 'Policy & Advocacy', color: '#86efac' },
    { label: 'Climate Action', color: '#4ade80' },
    { label: 'Community Dev', color: '#86efac' },
  ]

  return (
    <section className="section-padding" style={{ background: '#0d1f2d', color: '#ffffff' }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span style={{ color: '#4ade80', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Our Founder
            </span>
            <h2 className="font-bold mt-3 mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
              Dr. Aji Abba
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#d1d5db' }}>
              A Sustainable Development Expert, Climate Change Solutions Advocate, and Development Practitioner
              with deep expertise in policy advisory, community empowerment, and climate resilience across Nigeria.
            </p>
            <blockquote
              style={{
                borderLeft: '3px solid #4ade80',
                paddingLeft: '1.25rem',
                fontStyle: 'italic',
                color: '#86efac',
                fontSize: '1.125rem',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}
            >
              &quot;Democracy succeeds when no community is left behind.&quot;
            </blockquote>
            <div className="grid grid-cols-2 gap-3">
              {expertise.map(skill => (
                <div key={skill} className="flex items-center gap-2 text-sm" style={{ color: '#d1d5db' }}>
                  <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', flexShrink: 0, display: 'block' }} />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#1a2e3e', borderRadius: '1.25rem', padding: '2rem', border: '1px solid rgba(74,222,128,0.15)' }}>
            {/* Real founder photo replacing the initials avatar */}
            <div
              style={{
                width: '112px',
                height: '112px',
                borderRadius: '50%',
                margin: '0 auto 1.5rem',
                border: '3px solid rgba(74,222,128,0.3)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/images/founder-aji-abba.jpg"
                alt="Dr. Aji Abba, Founder of Sustainability From Waste to Wealth and Renewable Energy"
                fill
                style={{ objectFit: 'cover' }}
                sizes="112px"
                priority
              />
            </div>

            <div className="text-center mb-6">
              <h3 className="font-bold text-xl">Dr. Aji Abba</h3>
              <p style={{ color: '#4ade80', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                Founder &amp; Executive Director
              </p>
              <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                Sustainable Development Expert · Climate Change Advocate
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center text-sm">
              {focus.map(item => (
                <div
                  key={item.label}
                  style={{ background: '#0d1f2d', borderRadius: '0.75rem', padding: '0.875rem 0.5rem', border: '1px solid rgba(74,222,128,0.1)' }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '4px',
                      background: item.color,
                      borderRadius: '2px',
                      margin: '0 auto 0.5rem',
                      opacity: 0.7,
                    }}
                  />
                  <p style={{ fontSize: '0.72rem', color: '#d1d5db' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}