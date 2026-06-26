import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Blog & News | SWWRE — Sustainability From Waste to Wealth',
}

const posts = [
  {
    slug: 'waste-to-wealth-communities',
    category: 'Waste Management',
    date: 'June 10, 2025',
    title: 'How Nigerian Communities Are Turning Waste Into Income',
    excerpt:
      'Across Nigeria, communities are discovering that waste is not a problem — it is an untapped resource. From biogas to recycled plastics, here is how our program is changing lives.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
    imageAlt: 'Recycling and waste management in community',
    tagColor: { bg: '#f0fdf4', text: '#166534' },
  },
  {
    slug: 'solar-energy-off-grid',
    category: 'Renewable Energy',
    date: 'May 22, 2025',
    title: 'Solar Power Is Lighting Up Off-Grid Communities in Northern Nigeria',
    excerpt:
      'For communities without access to the national grid, solar energy is not just convenient — it is life-changing. Schools can now study after dark, and health centres can run equipment.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
    imageAlt: 'Solar panels generating renewable energy',
    tagColor: { bg: '#fefce8', text: '#854d0e' },
  },
  {
    slug: 'food-security-farmers',
    category: 'Agriculture',
    date: 'May 5, 2025',
    title: 'Climate-Smart Farming Is Helping Nigerian Farmers Beat the Odds',
    excerpt:
      'With erratic rainfall and rising temperatures threatening harvests, smallholder farmers need new tools. Our climate-smart agriculture program is delivering results on the ground.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600',
    imageAlt: 'Farmer working in field',
    tagColor: { bg: '#ecfdf5', text: '#065f46' },
  },
  {
    slug: 'women-empowerment-livelihood',
    category: 'Livelihood',
    date: 'April 18, 2025',
    title: 'Empowering Women Through Skills Training and Micro-Finance',
    excerpt:
      'When women are economically empowered, entire communities benefit. Our livelihood program is equipping women with skills, tools, and financing to start and grow their own businesses.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
    imageAlt: 'Women in community empowerment program',
    tagColor: { bg: '#eff6ff', text: '#1e40af' },
  },
  {
    slug: 'flood-preparedness-nigeria',
    category: 'Climate Resilience',
    date: 'April 2, 2025',
    title: 'Flood Preparedness: Why Every Nigerian Community Must Act Now',
    excerpt:
      'Climate change is increasing flood risks across vulnerable communities. Prepared communities save lives — here is what every household and local government needs to know.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600',
    imageAlt: 'Water and flood resilience',
    tagColor: { bg: '#f0f9ff', text: '#0369a1' },
  },
  {
    slug: 'nigeria-crossroads-opportunity',
    category: 'Policy & Advocacy',
    date: 'March 15, 2025',
    title: 'Nigeria at a Crossroads: Turning Our Challenges Into Opportunities',
    excerpt:
      'Nigeria faces real challenges — hunger, unemployment, climate risk. But these are also opportunities for innovation, community leadership, and sustainable development.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
    imageAlt: 'Policy planning and advocacy documents',
    tagColor: { bg: '#faf5ff', text: '#6b21a8' },
  },
]

export default function BlogPage() {
  const featured = posts[0]

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
            Stories & Updates
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.25rem', maxWidth: '680px' }}>
            Blog &amp; News
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '520px', lineHeight: 1.75 }}>
            Stories from the field, policy insights, community updates, and
            the latest news from our programs across Nigeria.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container-custom">
          <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Featured Story</span>
          <div
            style={{
              background: '#0d1f2d',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              display: 'grid',
            }}
            className="featured-grid"
          >
            {/* Bug 10 fixed: replaced emoji div with next/image */}
            <div style={{ position: 'relative', minHeight: '260px' }}>
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Content */}
            <div style={{ padding: '2.5rem' }}>
              <span style={{ background: featured.tagColor.bg, color: featured.tagColor.text, fontSize: '0.72rem', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '1rem' }}>
                {featured.category}
              </span>
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.25, marginBottom: '0.875rem' }}>
                {featured.title}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <Link href={`/blog/${featured.slug}`} className="btn-primary" style={{ fontSize: '0.85rem' }}>
                Read Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding" style={{ background: '#f0faf1' }}>
        <div className="container-custom">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.25rem' }}>All Articles</span>
            <h2 className="section-title">Latest Stories</h2>
          </div>

          <div style={{ display: 'grid', gap: '1.25rem' }} className="blog-grid">
            {posts.map(post => (
              <article key={post.slug} className="card" style={{ overflow: 'hidden' }}>
                {/* Bug 10 fixed: replaced emoji div with next/image */}
                <div style={{ position: 'relative', height: '160px', width: '100%' }}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '6px' }}>
                    <span style={{ background: post.tagColor.bg, color: post.tagColor.text, fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{post.readTime}</span>
                  </div>

                  <h3 style={{ fontWeight: 800, color: '#0d1f2d', fontSize: '1rem', lineHeight: 1.35, marginBottom: '0.6rem' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.83rem', lineHeight: 1.65, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{post.date}</span>
                    <Link href={`/blog/${post.slug}`} style={{ color: '#1a5c2a', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}>
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding" style={{ background: '#0d1f2d' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <span className="eyebrow-light" style={{ display: 'block', marginBottom: '0.5rem' }}>Stay Connected</span>
          <h2 className="section-title-light" style={{ marginBottom: '1rem' }}>Stay Updated</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Get our latest stories, program updates, and news delivered straight to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '440px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="field"
              style={{ flex: '1', minWidth: '200px', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)', color: '#ffffff', borderRadius: '999px', padding: '12px 20px' }}
            />
            <button className="btn-primary" style={{ whiteSpace: 'nowrap', borderRadius: '999px' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .featured-grid { grid-template-columns: 1fr; }
        .blog-grid { grid-template-columns: 1fr; }
        @media (min-width: 640px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 768px) {
          .featured-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </main>
  )
}