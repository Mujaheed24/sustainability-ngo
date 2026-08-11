'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/motion/Reveal'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

// Brand icons were removed from lucide-react — using plain SVGs instead
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// Same base input styling pattern used on Get Involved / Donate: a local
// style object paired with className="form-input" (globals.css supplies the
// focus-state border color). Replaces the old className="field", which was
// never defined anywhere in globals.css — same silently-unstyled-input bug
// found and fixed on the Donate page's custom-amount field.
const inputStyle = {
  width: '100%',
  border: '1.5px solid #e5e7eb',
  borderRadius: '0.75rem',
  padding: '0.75rem 1rem',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_CONTACT_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        alert('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      alert('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const subjects = [
    'General Inquiry',
    'Partnership Opportunity',
    'Volunteer Interest',
    'Donation / Funding',
    'Media & Press',
    'Program Information',
    'Other',
  ]

  const socialLinks = [
    { icon: <IconFacebook />, href: '#', label: 'Facebook' },
    { icon: <IconInstagram />, href: '#', label: 'Instagram' },
    { icon: <IconX />, href: '#', label: 'X / Twitter' },
    { icon: <IconLinkedIn />, href: '#', label: 'LinkedIn' },
  ]

  const infoCards = [
    { icon: <Mail style={{ width: '22px', height: '22px', color: 'var(--brand-green)' }} />, title: 'Email Us', lines: ['info@swwre.org'], sub: 'We reply within 1–2 business days' },
    { icon: <Phone style={{ width: '22px', height: '22px', color: 'var(--brand-green)' }} />, title: 'Call Us', lines: ['+234 806 544 4962'], sub: 'Mon – Fri, 9am – 5pm WAT' },
    { icon: <MapPin style={{ width: '22px', height: '22px', color: 'var(--brand-green)' }} />, title: 'Location', lines: ['Nigeria, West Africa'], sub: 'Serving communities across Africa' },
  ]

  const offices = [
    'Zamfara',
    'Kano',
    'Kaduna',
    'Yobe',
    'Maiduguri',
    'Abuja',
    'Lagos',
  ]

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d3a18 0%, var(--brand-green) 60%, #0d4a1e 100%)',
          padding: '80px 0 72px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(45,138,69,0.2) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', marginBottom: '1.5rem' }}>
              <Mail style={{ width: '28px', height: '28px', color: 'var(--brand-white)' }} />
            </div>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--brand-white)', marginBottom: '1rem' }}>
              Get In Touch
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
              Have a question, partnership idea, or just want to learn more? We&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Where We Work — office/coverage grid */}
      <section className="section-padding" style={{ background: 'var(--brand-white)', paddingTop: 'var(--spacing-section-y)', paddingBottom: '3rem' }}>
        <div className="container-custom">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
              <span className="eyebrow">Where We Work</span>
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Our Locations</h2>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.7 }}>
                SWWRE runs programs and maintains a community presence across these states.
              </p>
            </div>
          </Reveal>
          <div className="offices-grid" style={{ display: 'grid', gap: '1rem' }}>
            {offices.map((city, i) => (
              <Reveal key={city} delay={i * 0.06}>
                <div
                  className="card-standard"
                  style={{ padding: '1.5rem 1.25rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}
                >
                  <div style={{ background: 'var(--brand-green-pale)', borderRadius: '9999px', padding: '0.75rem', display: 'inline-flex' }}>
                    <MapPin style={{ width: '20px', height: '20px', color: 'var(--brand-green)' }} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: 'var(--brand-navy)', fontSize: '0.95rem', margin: 0 }}>{city}</h3>
                  <p style={{ fontSize: '0.78rem', color: '#9ca3af', margin: 0 }}>Nigeria</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'var(--brand-green-pale)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gap: '2rem', alignItems: 'start' }} className="contact-grid">

            {/* Left — info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {infoCards.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="card-standard" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--brand-green-pale)', borderRadius: '0.75rem', padding: '0.75rem', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '2px', fontSize: '0.95rem' }}>{item.title}</h3>
                      {item.lines.map(line => <p key={line} style={{ color: 'var(--brand-green)', fontWeight: 600, margin: '0 0 2px', fontSize: '0.9rem' }}>{line}</p>)}
                      <p style={{ fontSize: '0.78rem', color: '#9ca3af', margin: 0 }}>{item.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Social links */}
              <Reveal delay={infoCards.length * 0.08}>
                <div className="card-standard" style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '1rem', fontSize: '0.95rem' }}>Follow Us</h3>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'var(--brand-green-pale)',
                          color: 'var(--brand-green)',
                          borderRadius: '0.75rem',
                          padding: '0.75rem',
                          textDecoration: 'none',
                          transition: 'background 0.15s, color 0.15s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--brand-green)'; e.currentTarget.style.color = 'var(--brand-white)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'var(--brand-green-pale)'; e.currentTarget.style.color = 'var(--brand-green)'; }}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — form */}
            <Reveal delay={0.1}>
              <div style={{ background: 'var(--brand-white)', borderRadius: 'var(--radius-card-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', padding: '2.25rem' }}>
                {submitted ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem 1rem', gap: '1rem' }}>
                    <CheckCircle style={{ width: '60px', height: '60px', color: 'var(--brand-green)' }} />
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--brand-navy)', margin: 0 }}>Message Sent!</h2>
                    <p style={{ color: '#6b7280', maxWidth: '300px', lineHeight: 1.65, margin: 0 }}>
                      Thank you for reaching out. We&apos;ll get back to you within 1–2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{ background: 'none', border: 'none', color: 'var(--brand-green)', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', textDecoration: 'underline', marginTop: '0.5rem' }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--brand-green)', marginBottom: '1.5rem' }}>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{ display: 'grid', gap: '1.25rem' }} className="form-row">
                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '6px' }}>Full Name *</label>
                          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} className="form-input" />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '6px' }}>Email Address *</label>
                          <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle} className="form-input" />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '6px' }}>Subject *</label>
                        <select name="subject" required value={formData.subject} onChange={handleChange} style={{ ...inputStyle, background: '#fff' }} className="form-input">
                          <option value="">Select a subject…</option>
                          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '6px' }}>Message *</label>
                        <textarea name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us how we can help…" style={{ ...inputStyle, resize: 'none' }} className="form-input" />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          background: loading ? '#6b7280' : 'var(--brand-green)',
                          color: 'var(--brand-white)',
                          fontWeight: 700,
                          fontSize: '1rem',
                          padding: '1rem',
                          borderRadius: '0.875rem',
                          border: 'none',
                          cursor: loading ? 'not-allowed' : 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'background 0.15s',
                        }}
                      >
                        {loading ? 'Sending…' : (<>Send Message <Send style={{ width: '18px', height: '18px' }} /></>)}
                      </button>

                      <p style={{ fontSize: '0.72rem', color: '#9ca3af', textAlign: 'center', margin: 0 }}>
                        By submitting this form you agree to be contacted by SWWRE regarding your inquiry.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .contact-grid { grid-template-columns: 1fr; }
        .form-row { grid-template-columns: 1fr; }
        .offices-grid { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 640px) {
          .form-row { grid-template-columns: 1fr 1fr !important; }
          .offices-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 2fr !important; }
          .offices-grid { grid-template-columns: repeat(7, 1fr) !important; }
        }
      `}</style>
    </>
  )
}