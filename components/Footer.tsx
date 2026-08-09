'use client'

import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0d1f2d', color: '#9ca3af' }} className="pt-16 pb-6">
      <div className="container-custom">
        <div
          style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr', marginBottom: '3rem' }}
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
              <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.875rem', lineHeight: 1.4 }}>
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
                    background: '#1a2e3e',
                    padding: '0.375rem 0.75rem',
                    borderRadius: '9999px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#1a5c2a'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#1a2e3e'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'About', href: '/about' },
                { label: 'Programs', href: '/programs' },
                { label: 'Blog', href: '/blog' },
                { label: 'Get Involved', href: '/get-involved' },
                { label: 'Donate', href: '/donate' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{ fontSize: '0.875rem', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#4ade80'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <MapPin style={{ width: '14px', height: '14px', color: '#4ade80', flexShrink: 0, marginTop: '2px' }} />
                Nigeria, West Africa
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <Mail style={{ width: '14px', height: '14px', color: '#4ade80', flexShrink: 0 }} />
                <a
                  href="mailto:info@swwre.org"
                  style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#4ade80'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'}
                >
                  info@swwre.org
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <Phone style={{ width: '14px', height: '14px', color: '#4ade80', flexShrink: 0 }} />
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
          .footer-grid { grid-template-columns: 2fr 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  )
}