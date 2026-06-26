'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, Leaf } from 'lucide-react'

const stats = [
  { number: '4', label: 'Core Programs' },
  { number: '35M+', label: 'Nigerians We Serve' },
  { number: '2025', label: 'Year Founded' },
  { number: '100%', label: 'Community Focus' },
]

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1800&auto=format&fit=crop&q=80"
          alt="Nigerian community landscape"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
        />
        {/* Layered gradient overlay — darker at left for text legibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, rgba(13,31,45,0.94) 0%, rgba(26,92,42,0.88) 45%, rgba(13,74,30,0.75) 100%)',
        }} />
        {/* Bottom fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to top, rgba(13,31,45,0.6) 0%, transparent 100%)',
        }} />
      </div>

      {/* Subtle animated leaves / particles — keyframes live in globals.css */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden', pointerEvents: 'none' }}>
        {[
          { top: '15%', left: '72%', size: 28, delay: '0s', dur: '8s' },
          { top: '55%', left: '85%', size: 18, delay: '2s', dur: '11s' },
          { top: '30%', left: '60%', size: 22, delay: '4s', dur: '9s' },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: 0.12,
              animation: `floatLeaf ${p.dur} ${p.delay} ease-in-out infinite`,
            }}
          >
            <Leaf style={{ width: '100%', height: '100%', color: '#86efac' }} />
          </div>
        ))}
      </div>

      {/* Main hero content */}
      <div
        className="container-custom"
        style={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          paddingTop: '120px',
          paddingBottom: '80px',
        }}
      >
        <div style={{ maxWidth: '760px' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(134,239,172,0.25)',
              color: '#86efac',
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              marginBottom: '2rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Nigeria · Africa · Global Impact
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              color: '#ffffff',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Turning Waste<br />Into{' '}
            <span style={{
              color: '#4ade80',
              position: 'relative',
              display: 'inline-block',
            }}>
              Wealth.
            </span>
            <br />
            Powering Communities<br />With{' '}
            <span style={{ color: '#86efac' }}>Clean Energy.</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.75,
              color: 'rgba(220,252,231,0.9)',
              maxWidth: '580px',
              marginBottom: '2.5rem',
            }}
          >
            We are transforming lives across Nigeria through sustainable waste management,
            renewable energy, climate-resilient agriculture, and community livelihood programs.
            <strong style={{ color: '#86efac', fontWeight: 700 }}> No community left behind.</strong>
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <Link
              href="/programs"
              style={{
                background: '#ffffff',
                color: '#1a5c2a',
                fontWeight: 800,
                borderRadius: '9999px',
                padding: '1rem 2.25rem',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              Our Programs
            </Link>
            <Link
              href="/get-involved"
              style={{
                border: '2px solid rgba(255,255,255,0.6)',
                color: '#ffffff',
                fontWeight: 700,
                borderRadius: '9999px',
                padding: '1rem 2.25rem',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                transition: 'background 0.2s, border-color 0.2s',
                display: 'inline-block',
                backdropFilter: 'blur(4px)',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              Get Involved
            </Link>
            <Link
              href="/donate"
              style={{
                background: 'linear-gradient(135deg, #4ade80, #2d8a45)',
                color: '#0d1f2d',
                fontWeight: 800,
                borderRadius: '9999px',
                padding: '1rem 2.25rem',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 20px rgba(74,222,128,0.3)',
                display: 'inline-block',
              }}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(13,31,45,0.65)',
          backdropFilter: 'blur(16px)',
          padding: '1.5rem 0',
        }}
      >
        <div
          className="container-custom"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0', justifyContent: 'center' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: '1 1 140px',
                textAlign: 'center',
                padding: '0.5rem 1.5rem',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#4ade80', margin: 0, lineHeight: 1 }}>
                {stat.number}
              </p>
              <p style={{ fontSize: '0.72rem', color: 'rgba(220,252,231,0.7)', marginTop: '0.25rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — keyframes live in globals.css */}
      <div
        style={{
          position: 'absolute',
          bottom: '120px',
          right: '40px',
          zIndex: 3,
          opacity: 0.6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          animation: 'bounceDown 2s ease-in-out infinite',
        }}
        className="hidden md:flex"
      >
        <span style={{ fontSize: '0.6rem', color: '#86efac', letterSpacing: '0.15em', textTransform: 'uppercase', writingMode: 'vertical-lr' }}>
          Scroll
        </span>
        <ArrowDown style={{ width: '14px', height: '14px', color: '#86efac' }} />
      </div>
    </section>
  )
}
