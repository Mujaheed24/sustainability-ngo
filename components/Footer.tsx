'use client'

import Link from 'next/link'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

// Column header with a short brand-colored underline, matching the
// "Working Hours / Thematic Areas / Quick Links" header treatment
// referenced during the footer redesign.
function ColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <h4 style={{ color: 'var(--brand-white)', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 0.5rem' }}>
        {children}
      </h4>
      <div style={{ width: '2.5rem', height: '2px', background: 'var(--brand-green-bright)' }} />
    </div>
  )
}

// Same six focus areas listed in the org overview (Section 1 of the
// briefing). All point at /programs since there are no dedicated
// per-area pages yet — avoids inventing links that don't exist.
const thematicAreas = [
  'Waste Management',
  'Renewable Energy',
  'Agriculture',
  'Livelihoods',
  'Climate Resilience',
  'Policy',
]

// Same 7 states added to the Contact page's "Where We Work" grid.
const regionalOffices = 'Zamfara, Kano, Kaduna, Yobe, Maiduguri, Abuja, Lagos'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--brand-navy)', color: '#9ca3af' }} className="pt-16 pb-6">
      <div className="container-custom">
        <div
          style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr', marginBottom: '3rem' }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <img
                src="/logo.svg"
                alt="SWWRE Logo"
                style={{ width: '64px', height: '64px', objectFit: 'contain', display: 'block', flexShrink: 0 }}
              />
              <span style={{ fontWeight: 700, color: 'var(--brand-white)', fontSize: '0.875rem', lineHeight: 1.4 }}>
                Sustainability From<br />Waste to Wealth
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6b7280', maxWidth: 'min(320px, 100%)' }}>
              Transforming communities across Nigeria through waste management,
              renewable energy, agriculture, and livelihood programs.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {['Facebook', 'Instagram', 'X', 'LinkedIn'].map(social => (
                <a
                  key={social}
                  href="#"
                  style={{
                    fontSize: '0.75rem',
                    background: 'var(--brand-navy-alt)',
                    padding: '0.375rem 0.75rem',
                    borderRadius: '9999px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--brand-green)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand-white)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--brand-navy-alt)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links, with a Donate CTA up top */}
          <div>
            <ColumnHeader>Quick Links</ColumnHeader>
            <Link
              href="/donate"
              style={{
                display: 'inline-block',
                background: 'var(--brand-green)',
                color: 'var(--brand-white)',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                marginBottom: '1.25rem',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--brand-green-light)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--brand-green)'}
            >
              Become A Donor
            </Link>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'About', href: '/about' },
                { label: 'Programs', href: '/programs' },
                { label: 'Blog', href: '/blog' },
                { label: 'Get Involved', href: '/get-involved' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{ fontSize: '0.875rem', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand-green-bright)'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Thematic areas */}
          <div>
            <ColumnHeader>Thematic Areas</ColumnHeader>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {thematicAreas.map(area => (
                <li key={area}>
                  <Link
                    href="/programs"
                    style={{ fontSize: '0.875rem', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand-green-bright)'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'}
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working hours & contact */}
          <div>
            <ColumnHeader>Working Hours &amp; Contact</ColumnHeader>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--brand-white)', fontWeight: 600, margin: '0 0 0.35rem' }}>Head Office</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#6b7280', margin: 0 }}>
                <Clock style={{ width: '13px', height: '13px', color: 'var(--brand-green-bright)', flexShrink: 0 }} />
                Mon – Fri, 9am – 5pm WAT
              </p>
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--brand-white)', fontWeight: 600, margin: '0 0 0.35rem', lineHeight: 1.5 }}>
                {regionalOffices} Offices
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#6b7280', margin: 0 }}>
                <Clock style={{ width: '13px', height: '13px', color: 'var(--brand-green-bright)', flexShrink: 0 }} />
                Mon – Fri, 9am – 5pm WAT
              </p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <MapPin style={{ width: '14px', height: '14px', color: 'var(--brand-green-bright)', flexShrink: 0, marginTop: '2px' }} />
                Nigeria, West Africa
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <Mail style={{ width: '14px', height: '14px', color: 'var(--brand-green-bright)', flexShrink: 0 }} />
                <a
                  href="mailto:info@swwre.org"
                  style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand-green-bright)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'}
                >
                  info@swwre.org
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <Phone style={{ width: '14px', height: '14px', color: 'var(--brand-green-bright)', flexShrink: 0 }} />
                +234 806 544 4962
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #1f2937',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          textAlign: 'center',
          fontSize: '0.75rem',
          color: '#4b5563',
        }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Sustainability From Waste to Wealth and Renewable Energy. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '0.7rem', color: '#374151' }}>
            Nigeria, West Africa &nbsp;·&nbsp; info@swwre.org
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.4fr 1fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .footer-grid { grid-template-columns: 1.4fr 0.9fr 1fr 1.2fr !important; }
        }
      `}</style>
    </footer>
  )
}