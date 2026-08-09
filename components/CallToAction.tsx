import Link from 'next/link'
import Reveal from './motion/Reveal'

export default function CallToAction() {
  return (
    <section
      className="section-padding text-white"
      style={{ background: 'linear-gradient(135deg, var(--brand-green) 0%, var(--brand-green-light) 100%)' }}
    >
      <div className="container-custom text-center">
        <Reveal>
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', maxWidth: '640px', margin: '0 auto 1rem' }}>
            Together, We Can Build a Greener Nigeria
          </h2>
          <p style={{ color: 'rgba(220,252,231,0.9)', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Whether you donate, volunteer, or partner with us — your support transforms communities and secures futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="cta-pill-solid"
              style={{
                background: 'var(--brand-white)',
                color: 'var(--brand-green)',
                fontWeight: 700,
                padding: '1rem 2rem',
                borderRadius: 'var(--radius-pill)',
                display: 'inline-block',
              }}
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="cta-pill-outline"
              style={{
                border: '2px solid rgba(255,255,255,0.8)',
                color: '#ffffff',
                fontWeight: 700,
                padding: '1rem 2rem',
                borderRadius: 'var(--radius-pill)',
                display: 'inline-block',
              }}
            >
              Volunteer / Partner
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}