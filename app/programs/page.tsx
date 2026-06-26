import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Our Programs | SWWRE — Sustainability From Waste to Wealth',
}

const programs = [
  {
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
    imageAlt: 'Recycling and waste management',
    title: 'Waste to Wealth',
    slug: 'waste-to-wealth',
    tagline: 'Turning environmental problems into economic opportunities',
    description:
      'Our Waste to Wealth program trains communities to collect, sort, and convert waste into compost, biogas, and sellable recycled materials. We work with households, schools, and local governments to establish waste collection systems that generate income while cleaning up the environment.',
    activities: [
      'Community waste collection & sorting training',
      'Biogas production from organic waste',
      'Compost making for agriculture',
      'Plastic & metal recycling cooperatives',
      'Waste-to-energy pilot projects',
    ],
    impact: 'Cleaner communities, new income streams, reduced pollution',
    gradient: 'linear-gradient(135deg, #166534, #1a5c2a)',
    bg: '#f0faf1',
  },
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
    imageAlt: 'Solar panels renewable energy',
    title: 'Renewable Energy',
    slug: 'renewable-energy',
    tagline: 'Clean energy access for every Nigerian community',
    description:
      'We deploy solar panels, solar lanterns, and other clean energy solutions to off-grid homes, schools, health centres, and small businesses. Energy poverty is one of the biggest barriers to development — we are breaking that barrier one community at a time.',
    activities: [
      'Solar panel installation for homes & schools',
      'Solar-powered health centre electrification',
      'Clean cooking solutions (biogas stoves)',
      'Solar irrigation for smallholder farmers',
      'Renewable energy skills training for youth',
    ],
    impact: 'Energy access, lower costs, improved health & education outcomes',
    gradient: 'linear-gradient(135deg, #92400e, #b45309)',
    bg: '#fffbeb',
  },
  {
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600',
    imageAlt: 'Farmers in a field agriculture',
    title: 'Climate-Smart Agriculture',
    slug: 'agriculture',
    tagline: 'Feeding communities with climate-resilient farming',
    description:
      'With food insecurity threatening millions of Nigerians, we support smallholder farmers — especially women and youth — with climate-resilient farming techniques, improved seeds, water harvesting methods, and direct market linkages to improve yields and incomes.',
    activities: [
      'Climate-resilient farming technique training',
      'Improved seed & input distribution',
      'Rainwater harvesting & irrigation support',
      'Farmer cooperatives & market linkages',
      'Flood preparedness & disaster risk reduction',
    ],
    impact: 'Better yields, food security, climate resilience for farming families',
    gradient: 'linear-gradient(135deg, #065f46, #059669)',
    bg: '#ecfdf5',
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
    imageAlt: 'Community livelihood empowerment training',
    title: 'Livelihood & Empowerment',
    slug: 'livelihood',
    tagline: 'Skills, jobs, and dignity for every Nigerian',
    description:
      'We equip youth, women, and vulnerable groups with vocational skills, entrepreneurship training, and access to micro-finance. From tailoring to solar technician training — we create pathways to sustainable income and economic independence.',
    activities: [
      'Vocational skills training (tailoring, welding, solar tech)',
      'Entrepreneurship & business development',
      'Micro-finance & savings group support',
      'Women economic empowerment programs',
      'Youth employment & mentorship',
    ],
    impact: 'Jobs created, businesses launched, families lifted out of poverty',
    gradient: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
    bg: '#eff6ff',
  },
]

export default function ProgramsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d3a18 0%, #1a5c2a 60%, #0d4a1e 100%)',
          padding: '96px 0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 75% 25%, rgba(45,138,69,0.2) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          {/* Bug 7 fixed: replaced .hero-badge class with inline styles */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.18)',
            color: '#ffffff',
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '0.375rem 1rem',
            borderRadius: '9999px',
            marginBottom: '1.25rem',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.1em',
          }}>
            What We Do
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.25rem', maxWidth: '680px' }}>
            Our Programs
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '580px', lineHeight: 1.75 }}>
            Four interconnected programs tackling waste, energy poverty, food insecurity,
            and unemployment — building communities that are resilient, self-sufficient, and sustainable.
          </p>
        </div>
      </section>

      {/* Programs — alternating layout */}
      {programs.map((program, index) => (
        <section
          key={program.slug}
          className="section-padding"
          style={{ background: index % 2 === 0 ? '#ffffff' : program.bg }}
        >
          <div className="container-custom">
            <div style={{ display: 'grid', gap: '3rem', alignItems: 'center' }} className={`prog-grid ${index % 2 !== 0 ? 'prog-reverse' : ''}`}>

              {/* Text */}
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#1a5c2a' }}>
                  Program 0{index + 1}
                </span>
                <div style={{ margin: '0.5rem 0 0.75rem' }}>
                  <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#0d1f2d', margin: 0 }}>
                    {program.title}
                  </h2>
                </div>
                <p style={{ color: '#1a5c2a', fontWeight: 600, fontStyle: 'italic', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  {program.tagline}
                </p>
                <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem' }}>{program.description}</p>
                <div style={{ background: '#f0faf1', borderRadius: '0.875rem', padding: '1rem 1.25rem', border: '1px solid #bbf7cc' }}>
                  <p style={{ fontSize: '0.82rem', color: '#1a5c2a', margin: 0 }}>
                    <strong>Impact:</strong> {program.impact}
                  </p>
                </div>
              </div>

              {/* Activities card with image */}
              <div style={{ background: program.gradient, borderRadius: '1.25rem', overflow: 'hidden', color: '#ffffff' }}>
                {/* Bug 10 fixed: replaced emoji with next/image Unsplash photo */}
                <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    style={{ objectFit: 'cover', opacity: 0.6 }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div style={{ padding: '2.25rem' }}>
                  <h3 style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem', opacity: 0.7 }}>
                    Key Activities
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {program.activities.map(activity => (
                      <li key={activity} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', lineHeight: 1.5 }}>
                        <span style={{ width: '20px', height: '20px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', flexShrink: 0, marginTop: '1px' }}>
                          ✓
                        </span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0d1f2d' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem' }}>
            Want to Support These Programs?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Your donation, partnership, or volunteer work directly funds these
            community programs across Nigeria.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn-primary">Donate to a Program</Link>
            <Link href="/get-involved" className="btn-outline" style={{ color: '#ffffff' }}>Partner With Us</Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .prog-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) {
          .prog-grid { grid-template-columns: 1fr 1fr !important; }
          .prog-reverse > *:first-child { order: 2; }
          .prog-reverse > *:last-child { order: 1; }
        }
      `}</style>
    </main>
  )
}