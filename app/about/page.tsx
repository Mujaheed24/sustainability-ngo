import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/motion/Reveal'
import { Handshake, Building2, Leaf, Users, FlaskConical, Globe, Target } from 'lucide-react'

export const metadata = {
  title: 'About Us | SWWRE — Sustainability From Waste to Wealth',
}

const coreValues = [
  { Icon: Handshake, title: 'Inclusive Development', desc: 'Every program is designed to reach the most vulnerable — women, youth, and rural communities.' },
  { Icon: Building2, title: 'Good Governance', desc: 'We operate with transparency, accountability, and integrity in all we do.' },
  { Icon: Leaf, title: 'Sustainable Futures', desc: 'Our solutions are built to last — environmentally, economically, and socially.' },
  { Icon: Users, title: 'Stronger Together', desc: 'We believe in the power of community, collaboration, and shared responsibility.' },
  { Icon: FlaskConical, title: 'Evidence-Based', desc: 'Our interventions are grounded in research, data, and proven development practices.' },
  { Icon: Globe, title: 'African-Led', desc: 'Homegrown solutions built by Africans, for Africans, with global best practices.' },
]

const contextStats = [
  { number: '35M+', label: 'Nigerians at risk of hunger', bg: '#fef2f2', border: '#fecaca' },
  { number: '115/123', label: 'Nigeria on Global Hunger Index', bg: '#fff7ed', border: '#fed7aa' },
  { number: '1.7M', label: 'Graduates entering labour market yearly', bg: '#eff6ff', border: '#bfdbfe' },
  { number: '100%', label: 'Commitment to community-led solutions', bg: 'var(--brand-green-pale)', border: '#bbf7cc' },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d3a18 0%, var(--brand-green) 60%, #0d4a1e 100%)',
          padding: '96px 0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 75% 25%, rgba(45,138,69,0.2) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <Reveal>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.18)',
              color: '#ffffff',
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '0.375rem 1rem',
              borderRadius: 'var(--radius-pill)',
              marginBottom: '1.25rem',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.1em',
            }}>
              Who We Are
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.25rem', maxWidth: '680px' }}>
              About Our Organization
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '580px', lineHeight: 1.75 }}>
              We are a Nigerian-based NGO committed to transforming communities through
              sustainable waste management, renewable energy, agriculture, and livelihood empowerment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: 'var(--brand-white)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gap: '1.5rem' }} className="mv-grid">
            {/* Mission */}
            <Reveal direction="left" distance={24}>
              <div style={{ background: 'var(--brand-green-pale)', borderRadius: 'var(--radius-card-lg)', padding: '2.5rem', border: '1px solid #bbf7cc', height: '100%' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '50%', background: 'var(--brand-green)', marginBottom: '1rem' }}>
                  <Target style={{ width: '26px', height: '26px', color: '#ffffff' }} />
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-green)', marginBottom: '1rem' }}>Our Mission</h2>
                <p style={{ color: '#374151', lineHeight: 1.8, margin: 0 }}>
                  To transform waste into economic opportunity and harness renewable energy
                  to build resilient, self-sustaining communities across Nigeria and Africa —
                  ensuring no community is left behind in the journey toward a sustainable future.
                </p>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal direction="right" distance={24} delay={0.15}>
              <div style={{ background: 'var(--brand-navy)', borderRadius: 'var(--radius-card-lg)', padding: '2.5rem', border: '1px solid rgba(26,92,42,0.3)', height: '100%' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(74,222,128,0.15)', marginBottom: '1rem' }}>
                  <Globe style={{ width: '26px', height: '26px', color: '#4ade80' }} />
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#6ee07a', marginBottom: '1rem' }}>Our Vision</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                  A Nigeria — and an Africa — where every community thrives through sustainable
                  practices, clean energy access, food security, and dignified livelihoods,
                  contributing to a greener and stronger continent for present and future generations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ background: 'var(--brand-green-pale)' }}>
        <div className="container-custom">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="eyebrow">What Drives Us</span>
              <h2 className="section-title">Our Core Values</h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gap: '1.25rem' }} className="values-grid">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08} duration={0.5}>
                <div className="card" style={{ padding: '1.75rem', height: '100%' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '0.75rem', background: 'var(--brand-green-pale)', border: '1px solid #bbf7cc', marginBottom: '0.75rem' }}>
                    <value.Icon style={{ width: '22px', height: '22px', color: 'var(--brand-green)' }} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: 'var(--brand-green)', marginBottom: '0.5rem', fontSize: '1rem' }}>{value.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-custom">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="eyebrow-light">Leadership</span>
              <h2 className="section-title-light">Meet Our Founder</h2>
            </div>
          </Reveal>

          <div className="founder-inner" style={{ display: 'grid', gap: '1.5rem', alignItems: 'center' }}>
            <Reveal direction="left" distance={20}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.25rem', border: '3px solid rgba(110,224,122,0.3)', overflow: 'hidden', position: 'relative' }}>
                  <Image
                    src="/images/founder-aji-abba.jpg"
                    alt="Dr. Aji Abba, Founder of Sustainability From Waste to Wealth and Renewable Energy"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="120px"
                  />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff', margin: '0 0 4px' }}>Dr. Aji Abba</h3>
                <p style={{ color: '#6ee07a', fontSize: '0.8rem', fontWeight: 600, margin: 0 }}>Founder &amp; Executive Director</p>
              </div>
            </Reveal>

            <Reveal direction="right" distance={20} delay={0.15}>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  Dr. Aji Abba is a Sustainable Development Expert, Climate Change Solutions
                  Advocate, and Development Practitioner with extensive experience in policy
                  advisory, community empowerment, and climate resilience across Nigeria.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Driven by the belief that sustainable development is not just a goal but
                  a pathway to a better Nigeria for all, Dr. Abba founded this organization
                  to bridge the gap between policy and community-level impact.
                </p>
                <blockquote style={{ borderLeft: '3px solid #6ee07a', paddingLeft: '1rem', fontStyle: 'italic', color: '#a7f3b5', fontSize: '1rem', margin: '0 0 1.5rem' }}>
                  &quot;Democracy succeeds when no community is left behind.&quot;
                </blockquote>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Sustainable Development', 'Climate Change', 'Food Security', 'Policy Advisory', 'Community Empowerment', 'Research'].map(tag => (
                    <span key={tag} style={{ background: 'var(--brand-navy)', color: '#6ee07a', fontSize: '0.72rem', padding: '4px 12px', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(26,92,42,0.5)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Nigeria */}
      <section className="section-padding" style={{ background: 'var(--brand-white)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gap: '3rem', alignItems: 'center' }} className="context-grid">
            <Reveal direction="left" distance={24}>
              <div>
                <span className="eyebrow">The Context</span>
                <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Why This Work Matters in Nigeria</h2>
                <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
                  Nigeria stands at a crossroads. With over 35 million people at risk of hunger,
                  1.7 million graduates entering a struggling labour market annually, and communities
                  bearing the heaviest burden of climate change — the need for action has never been greater.
                </p>
                <p style={{ color: '#374151', lineHeight: 1.8, margin: 0 }}>
                  Nigeria&apos;s greatest resource is not beneath the ground — it is the talent,
                  resilience, and innovation of its people. Our work exists to unlock that potential,
                  one community at a time.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" distance={24} delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {contextStats.map(stat => (
                  <div key={stat.label} style={{ background: stat.bg, border: `1px solid ${stat.border}`, borderRadius: 'var(--radius-card)', padding: '1.5rem' }}>
                    <p style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--brand-navy)', margin: '0 0 4px' }}>{stat.number}</p>
                    <p style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .mv-grid { grid-template-columns: 1fr; }
        .values-grid { grid-template-columns: 1fr; }
        .founder-inner { grid-template-columns: 1fr; }
        .context-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) {
          .mv-grid { grid-template-columns: 1fr 1fr !important; }
          .values-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .founder-inner { grid-template-columns: 200px 1fr !important; }
          .context-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}