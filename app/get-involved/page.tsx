'use client'
import { useState } from 'react'
import { HandHeart, Handshake, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

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
    background: '#0d1f2d',
    border: '1px solid rgba(74,222,128,0.2)',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a5c2a 0%, #0d4a1e 100%)',
          color: '#ffffff',
          padding: '6rem 0',
        }}
      >
        <div className="container-custom">
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.18)',
              color: '#ffffff',
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
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
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span style={{ color: '#1a5c2a', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              How You Can Help
            </span>
            <h2 className="font-bold mt-3" style={{ color: '#0d1f2d', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
              Ways to Get Involved
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map(item => (
              <div
                key={item.title}
                style={{ background: '#f0faf1', borderRadius: '1.25rem', padding: '2rem', textAlign: 'center', transition: 'box-shadow 0.2s' }}
                className="hover:shadow-md"
              >
                <div style={{ width: '56px', height: '56px', background: '#1a5c2a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <item.Icon style={{ width: '26px', height: '26px', color: '#ffffff' }} />
                </div>
                <h3 style={{ fontWeight: 700, color: '#1a5c2a', fontSize: '1.125rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1rem' }}>{item.desc}</p>
                <Link href={item.href} style={{ color: '#1a5c2a', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                  {item.action} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="section-padding" style={{ background: '#f0faf1' }} id="volunteer">
        <div className="container-custom">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="text-center mb-10">
              <span style={{ color: '#1a5c2a', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Join Our Team
              </span>
              <h2 className="font-bold mt-3" style={{ color: '#0d1f2d', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                Volunteer Registration
              </h2>
              <p style={{ color: '#6b7280', marginTop: '0.75rem' }}>
                Fill in the form below and we will reach out to match you with the right program.
              </p>
            </div>

            {volunteerStatus === 'success' ? (
              <div style={{ background: '#1a5c2a', color: '#ffffff', borderRadius: '1.25rem', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <HandHeart style={{ width: '28px', height: '28px', color: '#ffffff' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Thank You!</h3>
                <p style={{ color: 'rgba(220,252,231,0.9)' }}>
                  Your volunteer application has been received. We will contact you soon to discuss next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleVolunteer} style={{ background: '#ffffff', borderRadius: '1.25rem', padding: '2rem', boxShadow: '0 1px 8px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0d1f2d', marginBottom: '0.5rem' }}>Full Name *</label>
                    <input type="text" name="name" required placeholder="Your full name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0d1f2d', marginBottom: '0.5rem' }}>Email Address *</label>
                    <input type="email" name="email" required placeholder="your@email.com" style={inputStyle} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0d1f2d', marginBottom: '0.5rem' }}>Phone Number</label>
                    <input type="tel" name="phone" placeholder="+234 000 000 0000" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0d1f2d', marginBottom: '0.5rem' }}>Location (State/City)</label>
                    <input type="text" name="location" placeholder="e.g. Lagos, Abuja, Kano" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0d1f2d', marginBottom: '0.5rem' }}>Area of Interest *</label>
                  <select name="interest" required style={{ ...inputStyle, background: '#fff' }}>
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
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0d1f2d', marginBottom: '0.5rem' }}>Availability</label>
                  <select name="availability" style={{ ...inputStyle, background: '#fff' }}>
                    <option value="">Select availability</option>
                    <option>Weekdays only</option>
                    <option>Weekends only</option>
                    <option>Flexible / Any time</option>
                    <option>Remote only</option>
                    <option>Field work available</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0d1f2d', marginBottom: '0.5rem' }}>Tell Us About Yourself</label>
                  <textarea name="message" rows={4} placeholder="Your skills, experience, and why you want to volunteer..." style={{ ...inputStyle, resize: 'none' }} />
                </div>
                <button
                  type="submit"
                  style={{ width: '100%', background: '#1a5c2a', color: '#ffffff', fontWeight: 700, padding: '1rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'background 0.2s' }}
                >
                  Submit Volunteer Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="section-padding" style={{ background: '#0d1f2d', color: '#ffffff' }} id="partner">
        <div className="container-custom">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="text-center mb-10">
              <span style={{ color: '#4ade80', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Collaborate With Us
              </span>
              <h2 className="font-bold mt-3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                Partnership Registration
              </h2>
              <p style={{ color: '#9ca3af', marginTop: '0.75rem' }}>
                Organizations, businesses, government agencies, and institutions
                are welcome to partner with us for greater community impact.
              </p>
            </div>

            {partnerStatus === 'success' ? (
              <div style={{ background: '#1a5c2a', borderRadius: '1.25rem', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <Handshake style={{ width: '28px', height: '28px', color: '#ffffff' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Partnership Request Received!</h3>
                <p style={{ color: 'rgba(220,252,231,0.9)' }}>
                  Thank you for your interest in partnering with us. Our team will review your proposal and be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartner} style={{ background: '#1a2e3e', borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Organization Name *</label>
                    <input type="text" name="org_name" required placeholder="Your organization name" style={darkInputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Contact Person *</label>
                    <input type="text" name="contact_name" required placeholder="Full name" style={darkInputStyle} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Email Address *</label>
                    <input type="email" name="email" required placeholder="contact@organization.com" style={darkInputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Phone Number</label>
                    <input type="tel" name="phone" placeholder="+234 000 000 0000" style={darkInputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#86efac', marginBottom: '0.5rem' }}>Organization Type *</label>
                  <select name="org_type" required style={{ ...darkInputStyle }}>
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
                  <select name="partnership_type" style={{ ...darkInputStyle }}>
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
                  <textarea name="proposal" required rows={5} placeholder="Describe your organization, what you are proposing, and how we can work together..." style={{ ...darkInputStyle, resize: 'none' }} />
                </div>
                <button
                  type="submit"
                  style={{ width: '100%', background: '#1a5c2a', color: '#ffffff', fontWeight: 700, padding: '1rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'background 0.2s' }}
                >
                  Submit Partnership Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
