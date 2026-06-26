'use client'

import Link from 'next/link'

export default function CallToAction() {
  return (
    <section
      className="section-padding text-white"
      style={{ background: 'linear-gradient(135deg, #1a5c2a 0%, #2d8a45 100%)' }}
    >
      <div className="container-custom text-center">
        <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', maxWidth: '640px', margin: '0 auto 1rem' }}>
          Together, We Can Build a Greener Nigeria
        </h2>
        <p style={{ color: 'rgba(220,252,231,0.9)', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Whether you donate, volunteer, or partner with us — your support transforms communities and secures futures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            style={{
              background: '#ffffff',
              color: '#1a5c2a',
              fontWeight: 700,
              padding: '1rem 2rem',
              borderRadius: '9999px',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#f0fdf4'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff'}
          >
            Donate Now
          </Link>
          <Link
            href="/get-involved"
            style={{
              border: '2px solid rgba(255,255,255,0.8)',
              color: '#ffffff',
              fontWeight: 700,
              padding: '1rem 2rem',
              borderRadius: '9999px',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
          >
            Volunteer / Partner
          </Link>
        </div>
      </div>
    </section>
  )
}