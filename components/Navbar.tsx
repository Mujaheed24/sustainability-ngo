'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.35s, box-shadow 0.35s',
          background: scrolled || !isHome ? 'color-mix(in srgb, var(--brand-green) 97%, transparent)' : 'transparent',
          backdropFilter: scrolled || !isHome ? 'blur(12px)' : 'none',
          boxShadow: scrolled || !isHome ? '0 2px 24px rgba(0,0,0,0.18)' : 'none',
        }}
      >
        <div
          className="container-custom"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.625rem 24px' }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/logo.svg"
              alt="SWWRE Logo"
              style={{ width: '64px', height: '64px', objectFit: 'contain', display: 'block' }}
            />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="hidden md:flex">
            {navLinks.map(link => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: active ? 700 : 500,
                    color: active ? 'var(--brand-green-accent)' : 'rgba(255,255,255,0.88)',
                    textDecoration: 'none',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                >
                  {link.name}
                  {active && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--brand-green-accent)',
                      borderRadius: '2px',
                    }} />
                  )}
                </Link>
              )
            })}
            <Link
              href="/donate"
              style={{
                background: 'var(--brand-white)',
                color: 'var(--brand-green)',
                fontWeight: 800,
                padding: '0.55rem 1.35rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                display: 'inline-block',
              }}
            >
              Donate
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brand-white)', padding: '4px', display: 'flex', alignItems: 'center' }}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: menuOpen ? '600px' : '0',
            transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            background: 'color-mix(in srgb, var(--brand-green-dark) 98%, transparent)',
            backdropFilter: 'blur(12px)',
          }}
          className="md:hidden"
        >
          <div style={{ padding: '0.5rem 24px 1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    padding: '0.875rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.9375rem',
                    fontWeight: active ? 700 : 400,
                    color: active ? 'var(--brand-green-accent)' : 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/donate"
              style={{
                marginTop: '1rem',
                background: 'var(--brand-white)',
                color: 'var(--brand-green)',
                fontWeight: 800,
                padding: '0.875rem',
                borderRadius: '0.75rem',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                display: 'block',
              }}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </nav>

      {!isHome && <div style={{ height: '80px' }} />}
    </>
  )
}