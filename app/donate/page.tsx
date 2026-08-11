'use client'

// Note: metadata can't be exported from a 'use client' file. If real SEO
// titles are wanted here, this page needs a server wrapper (layout.tsx or
// splitting into a server component + client child) — flagging for Phase 3
// rather than restructuring the page as part of this redesign pass.

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Heart, CreditCard, Building2, Smartphone, ArrowRight, Leaf, Recycle, Sun, Globe, Flag } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'

const donationTiers = [
  {
    amount: 5000,
    label: '₦5,000',
    impact: 'Plants 10 trees in a degraded community',
    Icon: Leaf,
    iconColor: '#166534',
    iconBg: '#f0fdf4',
  },
  {
    amount: 10000,
    label: '₦10,000',
    impact: 'Provides a waste-sorting kit for one household',
    Icon: Recycle,
    iconColor: 'var(--brand-green)',
    iconBg: 'var(--brand-green-pale)',
  },
  {
    amount: 50000,
    label: '₦50,000',
    impact: 'Funds one solar lantern for a rural family',
    Icon: Sun,
    iconColor: '#854d0e',
    iconBg: '#fefce8',
  },
]

const bankDetails = {
  bankName: 'First Bank of Nigeria',
  accountName: 'Sustainability From Waste to Wealth and Renewable Energy',
  accountNumber: '0000000000',
  sortCode: '011',
}

const customAmountInputStyle = {
  width: '100%',
  border: '1.5px solid #e5e7eb',
  borderRadius: '0.75rem',
  padding: '0.75rem 1rem',
  fontSize: '1.1rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'flutterwave' | 'bank'>('paystack')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount

  function handleCopy(key: string, value: string) {
    navigator.clipboard.writeText(value)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  function handlePaystack() {
    if (!finalAmount || finalAmount < 100) return alert('Please enter a valid amount (minimum ₦100).')
    alert(`Paystack integration coming soon.\nAmount: ₦${finalAmount.toLocaleString()}\n\nReplace this with your Paystack Popup or redirect.`)
  }

  function handleFlutterwave() {
    if (!finalAmount || finalAmount < 100) return alert('Please enter a valid amount (minimum ₦100).')
    alert(`Flutterwave integration coming soon.\nAmount: ₦${finalAmount.toLocaleString()}\n\nReplace this with your Flutterwave Popup or redirect.`)
  }

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
              <Heart style={{ width: '28px', height: '28px', color: '#ffffff' }} />
            </div>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem' }}>
              Make a Donation
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
              Your support drives sustainable change across Nigerian communities — from waste to wealth, from darkness to solar light.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Donate section */}
      <section className="section-padding" style={{ background: 'var(--brand-green-pale)' }}>
        <div className="container-custom" style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* Tiers */}
          <Reveal>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--brand-green)', textAlign: 'center', marginBottom: '1.25rem' }}>Choose an Amount</h2>
              <div style={{ display: 'grid', gap: '1rem' }} className="tiers-grid">
                {donationTiers.map(tier => {
                  const active = selectedAmount === tier.amount && !customAmount
                  return (
                    <button
                      key={tier.amount}
                      onClick={() => { setSelectedAmount(tier.amount); setCustomAmount('') }}
                      style={{
                        borderRadius: 'var(--radius-card)',
                        border: `2px solid ${active ? 'var(--brand-green)' : '#e5e7eb'}`,
                        padding: '1.25rem',
                        textAlign: 'left',
                        background: active ? 'var(--brand-green)' : 'var(--brand-white)',
                        color: active ? '#ffffff' : 'var(--brand-navy)',
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                        transform: active ? 'scale(1.02)' : 'scale(1)',
                        boxShadow: active ? '0 4px 20px rgba(26,92,42,0.3)' : 'none',
                      }}
                    >
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '0.625rem',
                        background: active ? 'rgba(255,255,255,0.2)' : tier.iconBg,
                        marginBottom: '0.75rem',
                      }}>
                        <tier.Icon style={{ width: '20px', height: '20px', color: active ? '#ffffff' : tier.iconColor }} />
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '4px' }}>{tier.label}</div>
                      <div style={{ fontSize: '0.82rem', color: active ? 'rgba(255,255,255,0.75)' : '#6b7280' }}>{tier.impact}</div>
                    </button>
                  )
                })}
              </div>

              {/* Custom amount */}
              <div style={{ background: 'var(--brand-white)', borderRadius: 'var(--radius-card)', border: '1.5px solid #e5e7eb', padding: '1.25rem', marginTop: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
                  Or enter a custom amount (₦)
                </label>
                <input
                  type="number"
                  min="100"
                  placeholder="e.g. 25000"
                  value={customAmount}
                  onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
                  className="form-input"
                  style={customAmountInputStyle}
                />
              </div>
            </div>
          </Reveal>

          {/* Summary banner */}
          {finalAmount && finalAmount >= 100 && (
            <div style={{ background: 'var(--brand-green)', color: '#ffffff', borderRadius: '0.875rem', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <span style={{ fontWeight: 600 }}>Donating:</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 900 }}>₦{finalAmount.toLocaleString()}</span>
            </div>
          )}

          {/* Payment method tabs */}
          <Reveal>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--brand-green)', textAlign: 'center', marginBottom: '1rem' }}>Payment Method</h2>
              <div style={{ display: 'flex', background: 'var(--brand-white)', borderRadius: '0.875rem', overflow: 'hidden', border: '1.5px solid #e5e7eb' }}>
                {[
                  { key: 'paystack', label: 'Paystack', icon: <CreditCard style={{ width: '16px', height: '16px' }} /> },
                  { key: 'flutterwave', label: 'Flutterwave', icon: <Smartphone style={{ width: '16px', height: '16px' }} /> },
                  { key: 'bank', label: 'Bank Transfer', icon: <Building2 style={{ width: '16px', height: '16px' }} /> },
                ].map(method => (
                  <button
                    key={method.key}
                    onClick={() => setPaymentMethod(method.key as typeof paymentMethod)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '0.875rem 0.5rem',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      border: 'none',
                      cursor: 'pointer',
                      background: paymentMethod === method.key ? 'var(--brand-green)' : 'transparent',
                      color: paymentMethod === method.key ? '#ffffff' : '#6b7280',
                      transition: 'all 0.15s',
                    }}
                  >
                    {method.icon}
                    <span className="tab-label-full">{method.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Payment panel */}
          <Reveal>
            <div className="card-standard" style={{ borderRadius: 'var(--radius-card-lg)', padding: '2rem' }}>
              {paymentMethod === 'paystack' && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'var(--brand-green-pale)', marginBottom: '1rem' }}>
                    <CreditCard style={{ width: '30px', height: '30px', color: 'var(--brand-green)' }} />
                  </div>
                  <h3 style={{ fontWeight: 900, fontSize: '1.2rem', color: 'var(--brand-navy)', marginBottom: '0.5rem' }}>Pay with Paystack</h3>
                  <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: 1.65, fontSize: '0.9rem' }}>
                    Secure Nigerian payment gateway. Supports cards, bank transfer, USSD, and mobile money.
                  </p>
                  <button onClick={handlePaystack} className="btn-primary" style={{ fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
                    Donate via Paystack <ArrowRight style={{ width: '18px', height: '18px' }} />
                  </button>
                  <p style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: '1rem' }}>
                    Payments are securely processed by Paystack. Your card details are never stored.
                  </p>
                </div>
              )}

              {paymentMethod === 'flutterwave' && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: '#fff7ed', marginBottom: '1rem' }}>
                    <Smartphone style={{ width: '30px', height: '30px', color: '#ff5f00' }} />
                  </div>
                  <h3 style={{ fontWeight: 900, fontSize: '1.2rem', color: 'var(--brand-navy)', marginBottom: '0.5rem' }}>Pay with Flutterwave</h3>
                  <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: 1.65, fontSize: '0.9rem' }}>
                    Pan-African payment gateway. Supports cards, mobile money, M-Pesa, and more across Africa.
                  </p>
                  <button onClick={handleFlutterwave} style={{ background: '#ff5f00', color: '#ffffff', fontWeight: 700, fontSize: '1rem', padding: '0.875rem 2rem', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'background 0.15s' }}>
                    Donate via Flutterwave <ArrowRight style={{ width: '18px', height: '18px' }} />
                  </button>
                  <p style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: '1rem' }}>
                    Payments are securely processed by Flutterwave across 34 African countries.
                  </p>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div>
                  <h3 style={{ fontWeight: 900, fontSize: '1.2rem', color: 'var(--brand-navy)', textAlign: 'center', marginBottom: '1.25rem' }}>Bank Transfer Details</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { key: 'bankName', label: 'Bank Name', value: bankDetails.bankName },
                      { key: 'accountName', label: 'Account Name', value: bankDetails.accountName },
                      { key: 'accountNumber', label: 'Account Number', value: bankDetails.accountNumber },
                      { key: 'sortCode', label: 'Sort Code', value: bankDetails.sortCode },
                    ].map(({ key, label, value }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--brand-green-pale)', borderRadius: '0.75rem', padding: '0.875rem 1rem', gap: '1rem' }}>
                        <div>
                          <p style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600, margin: '0 0 2px' }}>{label}</p>
                          <p style={{ color: 'var(--brand-navy)', fontWeight: 700, margin: 0, fontSize: '0.9rem', wordBreak: 'break-word' }}>{value}</p>
                        </div>
                        <button onClick={() => handleCopy(key, value)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brand-green)', fontSize: '0.78rem', fontWeight: 700, flexShrink: 0 }}>
                          {copiedKey === key ? '✅ Copied' : 'Copy'}
                        </button>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#6b7280', marginTop: '1rem', textAlign: 'center', lineHeight: 1.65 }}>
                    After transferring, please email{' '}
                    <a href="mailto:info@swwre.org" style={{ color: 'var(--brand-green)', fontWeight: 600 }}>info@swwre.org</a>
                    {' '}with your name and payment reference so we can confirm your donation.
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          {/* Trust signals */}
          <Reveal>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '2.5rem' }} className="trust-grid">
              {[
                { Icon: Flag, iconColor: '#166534', iconBg: '#f0fdf4', title: 'Nigeria-Based', desc: 'Registered NGO operating across Nigerian communities' },
                { Icon: Globe, iconColor: 'var(--brand-green)', iconBg: 'var(--brand-green-pale)', title: 'Africa-Focused', desc: 'Programs designed for African environmental realities' },
                { Icon: Heart, iconColor: '#166534', iconBg: '#f0fdf4', title: '100% to Programs', desc: 'All donations go directly to community impact projects' },
              ].map(item => (
                <div key={item.title} className="card-standard" style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', background: item.iconBg, marginBottom: '0.625rem' }}>
                    <item.Icon style={{ width: '22px', height: '22px', color: item.iconColor }} />
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--brand-green)', marginBottom: '4px', fontSize: '0.9rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.55 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      <Footer />

      <style>{`
        .tiers-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        @media (min-width: 480px) {
          .tiers-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .trust-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        /* .tab-label-full: was referenced with no rule anywhere, so the payment
           method label text never hid on narrow screens as its name implies.
           Fixed here — icon-only tabs below 380px, icon + label above it. */
        @media (max-width: 380px) {
          .tab-label-full { display: none; }
        }
      `}</style>
    </>
  )
}