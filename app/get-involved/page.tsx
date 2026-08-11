'use client'
import { useState } from 'react'
import { HandHeart, Handshake, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import CopyLinkButton from '@/components/CopyLinkButton'
import Reveal from '@/components/motion/Reveal'

export default function GetInvolvedPage() {
  const [volunteerStatus, setVolunteerStatus] = useState<'idle' | 'success'>('idle')
  const [partnerStatus, setPartnerStatus] = useState<'idle' | 'success'>('idle')

  const handleVolunteer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    setVolunteerStatus('success')
    form.reset()
  }

  const handlePartner = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    await fetch('https://formspree.io/f/YOUR_FORM_ID_2', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    setPartnerStatus('success')
    form.reset()
  }

  const inputStyle = {
    width: '100%',
    border: '1px solid #e5e7eb',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const darkInputStyle = {
    width: '100%',
    background: 'var(--brand-navy)',
    border: '1px solid rgba(74,222,128,0.2)',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const ways = [
    {
      Icon: HandHeart,
      title: 'Volunteer',
      desc: 'Give your time and skills to support our programs on the ground or remotely. Every skill is needed.',
      action: 'Fill Volunteer Form Below',
      href: '#volunteer',
    },
    {
      Icon: Handshake,
      title: 'Partner With Us',
      desc: "Are you an organization, business, or institution? Let's collaborate to multiply our impact.",
      action: 'Fill Partnership Form Below',
      href: '#partner',
    },
    {
      Icon: Heart,
      title: 'Donate',
      desc: 'Fund community programs, equipment, training, and operations. Every naira makes a difference.',
      action: 'Go to Donate Page',
      href: '/donate',
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--brand-green) 0%, #0d4a1e 100%)',
          color: '#ffffff',
          padding: '96px 0 80px',
        }}
      >
        <div className="container-custom">
          <Reveal>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.18)',
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.375rem 1rem',
                borderRadius: 'var(--radius-pill)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Join The Movement
            </span>
            <h1 className="font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1, maxWidth: '600px' }}>
              Get Involved
            </h1>
            <p style={{ color: 'rgba(220,252,231,0.9)', fontSize: '1.125rem', marginTop: '1.5rem', maxWidth: '560px', lineHeight: 1.7 }}>
              Whether you volunteer your time, partner with us as an organization,
              or simply spread the word — every action counts. Together we build
              a stronger, greener Nigeria.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="section-padding" style={{ background: 'var(--brand-white)' }}>
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-12">
              <span className="eyebrow">How You Can Help</span>
              <h2 className="section-title mt-3">Ways to Get Involved</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {ways.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} duration={0.5}>
                <div className="card" style={{ padding: '2rem', textAlign: 'center', height: '100%' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--brand-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <item.Icon style={{ width: '26px', height: '26px', color: '#ffffff' }} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: 'var(--brand-green)', fontSize: '1.125rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1rem' }}>{item.desc}</p>
                  <Link href={item.href} style={{ color: 'var(--brand-green)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                    {item.action} →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="section-padding" style={{ background: 'var(--brand-green-pale)' }} id="volunteer">
        <div className="container-custom">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <Reveal>
              <div className="text-center mb-10">
                <span className="eyebrow">Join Our Team</span>
                <h2 className="section-title mt-3">Volunteer Registration</h2>
                <p style={{ color: '#6b7280', marginTop: '0.75rem' }}>
                  Fill in the form below and we will reach out to match you with the right program.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <CopyLinkButton anchor="#volunteer" label="Copy Volunteer Form Link" />
                </div>
              </div>
            </Reveal>

            {volunteerStatus === 'success' ? (
              <Reveal>
                <div style={{ background: 'var(--brand-green)', color: '#ffffff', borderRadius: 'var(--radius-card-lg)', padding: '2.5rem', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <HandHeart style={{ width: '28px', height: '28px', color: '#ffffff' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Thank You!</h3>
                  <p style={{ color: 'rgba(220,252,231,0.9)' }}>
                    Your volunteer application has been received. We will contact you soon to discuss next steps.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={handleVolunteer} style={{ background: '#ffffff', borderRadius: 'var(--radius-card-lg)', padding: '2rem', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-navy)', marginBottom: '0.5rem' }}>Full Name *</label>
                      <input type="text" name="name" required placeholder="Your full name" style={inputStyle} className="form-input" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-navy)', marginBottom: '0.5rem' }}>Email Address *</label>
                      <input type="email" name="email" required placeholder="your@email.com" style={inputStyle} className="form-input" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-navy)', marginBottom: '0.5rem' }}>Phone Number</label>
                      <input type="tel" name="phone" placeholder="+234 000 000 0000" style={inputStyle} className="form-input" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-navy)', marginBottom: '0.5rem' }}>Location (State/City)</label>
                      <input type="text" name="location" placeholder="e.g. Lagos, Abuja, Kano" style={inputStyle} className="form-input" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-navy)', marginBottom: '0.5rem' }}>Area of Interest *</label>
                    <select name="interest" required style={{ ...inputStyle, background: '#fff' }} className="form-input">
                      <option value="">Select a program area</option>
                      <option>Waste to Wealth</option>
                      <option>Renewable Energy</option>
                      <option>Climate-Smart Agriculture</option>
                      <option>Livelihood & Empowerment</option>
                      <option>Communications & Social Media</option>
                      <option>Research & Policy</option>
                      <option>General Support</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-navy)', marginBottom: '0.5rem' }}>Availability</label>
                    <select name="availability" style={{ ...inputStyle, background: '#fff' }} className="form-input">
                      <option value="">Select availability</option>
                      <option>Weekdays only</option>
                      <option>Weekends only</option>
                      <option>Flexible / Any time</option>
                      <option>Remote only</option>
                      <option>Field work available</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-navy)', marginBottom: '0.5rem' }}>Tell Us About Yourself</label>
                    <textarea name="message" rows={4} placeholder="Your skills, experience, and why you want to volunteer..." style={{ ...inputStyle, resize: 'none' }} className="form-input" />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                    Submit Volunteer Application
                  </button>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="section-padding" style={{ background: 'var(--brand-navy)', color: '#ffffff' }} id="partner">
        <div className="container-custom">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <Reveal>
              <div className="text-center mb-10">
                <span className="eyebrow-light">Collaborate With Us</span>
                <h2 className="section-title-light mt-3">Partnership Registration</h2>
                <p style={{ color: '#9ca3af', marginTop: '0.75rem' }}>
                  Organizations, businesses, government agencies, and institutions
                  are welcome to partner with us for greater community impact.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <CopyLinkButton anchor="#partner" label="Copy Partnership Form Link" dark />
                </div>
              </div>
            </Reveal>

            {partnerStatus === 'success' ? (
              <Reveal>
                <div style={{ background: 'var(--brand-green)', borderRadius: 'var(--radius-card-lg)', padding: '2.5rem', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <Handshake style={{ width: '28px', height: '28px', color: '#ffffff' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Partnership Request Received!</h3>
                  <p style={{ color: 'rgba(220,252,231,0.9)' }}>
                    Thank you for your interest in partnering with us. Our team will review your proposal and be in touch shortly.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={handlePartner} style={{ background: '#1a2e3e', borderRadius: 'var(--radius-card-lg)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Organization Name *</label>
                      <input type="text" name="org_name" required placeholder="Your organization name" style={darkInputStyle} className="form-input-dark" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Contact Person *</label>
                      <input type="text" name="contact_name" required placeholder="Full name" style={darkInputStyle} className="form-input-dark" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Email Address *</label>
                      <input type="email" name="email" required placeholder="contact@organization.com" style={darkInputStyle} className="form-input-dark" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Phone Number</label>
                      <input type="tel" name="phone" placeholder="+234 000 000 0000" style={darkInputStyle} className="form-input-dark" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Organization Type *</label>
                    <select name="org_type" required style={darkInputStyle} className="form-input-dark">
                      <option value="">Select organization type</option>
                      <option>NGO / Non-profit</option>
                      <option>Private Company / Business</option>
                      <option>Government Agency</option>
                      <option>International Organization</option>
                      <option>Academic / Research Institution</option>
                      <option>Community Group</option>
                      <option>Media / Press</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Partnership Interest</label>
                    <select name="partnership_type" style={darkInputStyle} className="form-input-dark">
                      <option value="">Select partnership type</option>
                      <option>Funding / Grant Support</option>
                      <option>Technical Assistance</option>
                      <option>Community Program Collaboration</option>
                      <option>Research & Policy Partnership</option>
                      <option>Media & Awareness Campaign</option>
                      <option>Training & Capacity Building</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Partnership Proposal *</label>
                    <textarea name="proposal" required rows={5} placeholder="Describe your organization, what you are proposing, and how we can work together..." style={{ ...darkInputStyle, resize: 'none' }} className="form-input-dark" />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                    Submit Partnership Request
                  </button>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}