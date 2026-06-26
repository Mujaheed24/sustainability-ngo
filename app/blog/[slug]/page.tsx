import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'

const posts = [
  {
    slug: 'waste-to-wealth-communities',
    title: 'How Nigerian Communities Are Turning Waste Into Income',
    category: 'Waste Management',
    tagStyle: { bg: '#f0fdf4', text: '#166534' },
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
    imageAlt: 'Recycling and waste management in community',
    author: 'Dr. Aji Abba',
    date: 'June 10, 2025',
    readTime: '4 min read',
    excerpt: 'Across Nigeria, communities are discovering that waste is not a problem — it is an untapped resource. From biogas to recycled plastics, here is how our program is changing lives.',
    body: `
Across Nigeria, a quiet transformation is underway. Communities that once struggled with mountains of waste are discovering something powerful: waste is not a burden — it is an untapped resource waiting to be unlocked.

At Sustainability From Waste to Wealth and Renewable Energy (SWWRE), we have worked alongside these communities to build practical systems that turn everyday waste into income, jobs, and cleaner environments.

**From rubbish to raw material**

Plastic bottles, metal scraps, and organic waste — items that once clogged drains and blighted streets — are now being sorted, collected, and sold. Plastic goes to recyclers. Organic waste becomes compost for local farmers. Metal is sold to foundries. Each category of waste has a buyer, and each buyer puts money back into community hands.

**Biogas: energy from kitchen waste**

One of the most exciting outcomes of our waste programme is biogas production. Organic household waste — food scraps, peels, and garden matter — is fed into simple biogas digesters that produce clean cooking fuel. Families using biogas spend less on charcoal and kerosene, and their kitchens are cleaner and healthier.

**The income impact is real**

In pilot communities, households participating in the waste sorting programme earn a meaningful monthly supplement — enough to cover school fees, medication, or food in lean months. For families living on unpredictable incomes, this stability matters enormously.

**What makes it work**

The key is community ownership. SWWRE does not impose systems from the outside. We train local waste champions, establish community collection points, and connect communities directly to buyers. The system belongs to the people who run it.

**What is next**

SWWRE is expanding this model to new communities in 2026, with targets to reach tens of thousands of households. We are also advocating for state-level policy that formalises waste pickers as a recognised workforce with protections and benefits.

Waste is not Nigeria's problem. Managed well, it is Nigeria's opportunity.
    `,
  },
  {
    slug: 'solar-energy-off-grid',
    title: 'Solar Power Is Lighting Up Off-Grid Communities in Northern Nigeria',
    category: 'Renewable Energy',
    tagStyle: { bg: '#fefce8', text: '#854d0e' },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
    imageAlt: 'Solar panels generating renewable energy',
    author: 'Dr. Aji Abba',
    date: 'May 22, 2025',
    readTime: '5 min read',
    excerpt: 'For communities without access to the national grid, solar energy is not just convenient — it is life-changing. Schools can now study after dark, and health centres can run equipment.',
    body: `
In hundreds of communities across northern Nigeria, darkness falls at sunset — and with it, the day ends. Without electricity, children cannot study at night, health centres cannot run equipment, and small businesses close when the light fades. The national grid, for these communities, is a distant promise.

Solar energy is changing that — one rooftop at a time.

**SWWRE's off-grid solar programme** has installed solar home systems across communities in multiple states. Each system includes a rooftop panel, battery storage, and LED lighting points. Installation takes half a day. Maintenance is minimal. The impact is immediate.

**Children are studying longer**

With reliable light in the evenings, school-age children in programme communities have extended their study hours significantly. Teachers report that homework completion rates have improved and exam performance is rising. One headteacher told us: "Before solar, children would try to read by kerosene lamplight and give up. Now they study until 9pm."

**Health centres are functioning better**

Primary health clinics that previously could not refrigerate vaccines or operate after dark are now running more reliably. Vaccine cold chains are maintained. Night deliveries and emergencies can be handled on-site. The difference in maternal and child health outcomes is already visible.

**Small businesses are growing**

Market women, tailors, phone repairers, and food vendors who once packed up at dusk now operate well into the evening. The additional hours translate directly into additional income — sometimes increasing earnings by a third or more.

**The technology is proven and affordable**

Solar home systems are not experimental technology. They are reliable, durable, and increasingly affordable. SWWRE works with suppliers to negotiate community pricing and trains local technicians to handle maintenance, keeping costs low and skills local.

**Our goal for 2027** is to reach 1,000 households and integrate solar-powered water pumping — addressing energy and water access together.

The sun rises every day over northern Nigeria. We are making sure its energy reaches everyone.
    `,
  },
  {
    slug: 'food-security-farmers',
    title: 'Climate-Smart Farming Is Helping Nigerian Farmers Beat the Odds',
    category: 'Agriculture',
    tagStyle: { bg: '#ecfdf5', text: '#065f46' },
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600',
    imageAlt: 'Farmer working in field',
    author: 'Dr. Aji Abba',
    date: 'May 5, 2025',
    readTime: '6 min read',
    excerpt: 'With erratic rainfall and rising temperatures threatening harvests, smallholder farmers need new tools. Our climate-smart agriculture program is delivering results on the ground.',
    body: `
The rains no longer come when they used to. Across Nigeria's farming belt, smallholder farmers who once read the seasons with confidence now face unpredictable rainfall, longer dry spells, and temperatures that stress their crops. Climate change has rewritten the agricultural calendar — and those with the least are paying the highest price.

But Nigerian farmers are not giving up. Working with SWWRE, communities are combining generations of indigenous knowledge with modern climate-smart techniques to keep their farms producing.

**What is climate-smart agriculture?**

Climate-smart agriculture (CSA) is not one single technique — it is a set of practices designed to increase productivity, build resilience to climate shocks, and reduce environmental impact. SWWRE's programme focuses on the approaches most relevant to Nigerian smallholders.

**Intercropping and soil health**

Traditional Nigerian farmers long practised intercropping — growing multiple crops together — as natural insurance against failure. SWWRE has formalised and expanded this, training farmers in companion planting combinations that improve soil fertility, suppress weeds, and spread risk. When one crop struggles, another compensates.

**Rainwater harvesting**

Simple earthworks — contour bunds, half-moon catchments, and stone lines — capture and slow rainwater runoff, giving it time to soak into the soil. Farmers trained in these techniques report significantly better soil moisture during dry spells. Less water is lost; more reaches the roots.

**Community seed banks**

SWWRE supports community seed banks where farmers store and exchange drought-tolerant, locally adapted seed varieties. These seeds — selected and refined over generations — consistently outperform commercial hybrids in marginal conditions. Keeping them alive is an act of both agriculture and cultural preservation.

**The results are measurable**

In programme communities, crop failure rates have dropped substantially over four years of intervention. Household food security scores have improved. Farmers who once feared each dry season now have tools and knowledge to manage it.

Climate change is not waiting. Nigerian farmers are adapting now — and their resilience holds lessons for smallholder agriculture everywhere.
    `,
  },
  {
    slug: 'women-empowerment-livelihood',
    title: 'Empowering Women Through Skills Training and Micro-Finance',
    category: 'Livelihood',
    tagStyle: { bg: '#eff6ff', text: '#1e40af' },
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
    imageAlt: 'Women in community empowerment program',
    author: 'SWWRE Team',
    date: 'April 18, 2025',
    readTime: '4 min read',
    excerpt: 'When women are economically empowered, entire communities benefit. Our livelihood program is equipping women with skills, tools, and financing to start and grow their own businesses.',
    body: `
There is a well-documented truth in development work: when women earn, communities thrive. Women reinvest a higher proportion of their income into their families — into children's education, household nutrition, and community wellbeing. Economic empowerment of women is not just a gender issue. It is a community development strategy.

SWWRE's livelihood programme is built on this foundation.

**Skills training that matches real markets**

The programme offers practical vocational training in areas with genuine local demand: soap and detergent production, food processing and preservation, tailoring and textile design, and small-scale agriculture. Training is hands-on, practical, and delivered in local languages.

Crucially, SWWRE does not just train and leave. Graduates receive business development support — help with pricing, record-keeping, finding customers, and growing from a side income into a sustainable business.

**Micro-finance that works for women**

Access to capital is one of the biggest barriers women face when starting businesses. Traditional banks require collateral that most women do not have. SWWRE's micro-finance component provides small, accessible loans through women's cooperative groups — where members support and hold each other accountable.

Repayment rates in the programme exceed 90%, demonstrating that women given fair access to finance are highly reliable borrowers.

**The ripple effect**

Women in the programme report not just higher income, but greater confidence, decision-making power within their households, and higher status in their communities. Their children are more likely to stay in school. Their households are more likely to seek healthcare.

**Hauwa, Adamawa State:** "I used to ask my husband for money for every small thing. Now I run my own soap business. I employ two other women. I paid my children's school fees this term myself."

SWWRE's goal is to reach 2,000 women with livelihood training and micro-finance by the end of 2026. Every woman empowered is a community strengthened.
    `,
  },
  {
    slug: 'flood-preparedness-nigeria',
    title: 'Flood Preparedness: Why Every Nigerian Community Must Act Now',
    category: 'Climate Resilience',
    tagStyle: { bg: '#f0f9ff', text: '#0369a1' },
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600',
    imageAlt: 'Water and flood resilience',
    author: 'Dr. Aji Abba',
    date: 'April 2, 2025',
    readTime: '5 min read',
    excerpt: 'Climate change is increasing flood risks across vulnerable communities. Prepared communities save lives — here is what every household and local government needs to know.',
    body: `
Nigeria has always known floods. But what communities are experiencing now is different — more frequent, more severe, and more unpredictable. Climate change is loading the atmosphere with more moisture and disrupting the rainfall patterns that generations of Nigerians have adapted to. The result is a flood crisis that is growing worse every year.

Prepared communities survive floods. Unprepared ones suffer devastating, preventable losses. The gap between the two is knowledge, planning, and action taken before the rains arrive.

**Understanding your risk**

The first step in flood preparedness is knowing whether your community is at risk and what kind of flooding is likely. River flooding, flash flooding from heavy rainfall, and coastal flooding each require different responses. SWWRE works with communities to map local flood risk using simple tools and community knowledge — identifying which areas flood first, which routes are safe, and where vulnerable households are located.

**Early warning systems**

Many flood deaths occur because communities have no warning before water levels rise dangerously. SWWRE supports the establishment of community early warning systems — low-cost river gauges, radio networks, and mobile phone alert trees — that give residents time to move to safety.

**What every household should do**

Every household in a flood-prone area should identify its evacuation route and a safe meeting point. Important documents, medicines, and emergency supplies should be stored in waterproof containers at height. Every family member — including children — should know the plan.

**What local governments must do**

Flood preparedness cannot rest on households alone. Local governments must maintain drainage systems, enforce building regulations that keep construction away from flood plains, and maintain emergency response capacity. SWWRE advocates for these responsibilities to be taken seriously.

**After the flood**

Flood response matters as much as preparation. Clean water, disease prevention, and psychosocial support are critical in the days and weeks after flooding. SWWRE trains community response teams to provide immediate assistance while waiting for government support.

The floods will come. The question is whether we are ready. Act now — before the rains.
    `,
  },
  {
    slug: 'nigeria-crossroads-opportunity',
    title: 'Nigeria at a Crossroads: Turning Our Challenges Into Opportunities',
    category: 'Policy & Advocacy',
    tagStyle: { bg: '#faf5ff', text: '#6b21a8' },
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
    imageAlt: 'Policy planning and advocacy documents',
    author: 'Dr. Aji Abba',
    date: 'March 15, 2025',
    readTime: '7 min read',
    excerpt: 'Nigeria faces real challenges — hunger, unemployment, climate risk. But these are also opportunities for innovation, community leadership, and sustainable development.',
    body: `
Nigeria stands at a crossroads. The challenges are real and serious — rising food insecurity, youth unemployment, climate vulnerability, waste and pollution crises, and persistent energy poverty. These are not abstract statistics. They are the daily realities of millions of Nigerians.

But challenges and opportunities are two sides of the same coin. Every crisis contains within it the seeds of transformation — if we choose to see them, and if we have the courage to act.

**Waste as wealth**

Nigeria generates enormous quantities of waste. Most of it is mismanaged — burned in open air, dumped in waterways, left to clog drainage systems. This is a public health crisis and an environmental disaster. It is also an untapped economic opportunity worth billions of naira annually. Plastics, metals, organics, paper — every category of waste has value if collected and processed. Countries that have built waste management systems did not do so because they were rich. They did so because they chose to.

**Renewable energy as leapfrog**

Nigeria does not need to follow the fossil fuel path that industrialised countries took. We can leapfrog — building a modern energy system based on solar, wind, and biogas from the ground up. The technology is available, affordable, and proven. What is needed is political will and sustained investment.

**Agriculture as climate solution**

Nigerian smallholder farmers, equipped with the right knowledge and tools, can feed the nation and sequester carbon at the same time. Climate-smart agriculture is not charity — it is smart economics. Food security, climate resilience, and rural employment can be built together.

**The role of policy**

None of this happens without enabling policy. SWWRE advocates consistently for policies that support community-led waste management, renewable energy access, climate-smart agriculture, and the formalisation of the informal green economy.

Dr. Abba's conviction — that democracy succeeds when no community is left behind — is not just a slogan. It is a policy framework. Every budget decision, every regulatory choice, every infrastructure investment either includes communities or excludes them. We push, consistently, for inclusion.

**The moment is now**

Nigeria is not too late. But the window for making the right choices — choices that build resilience, create green jobs, and protect communities — is not unlimited. The decisions made in the next five years will shape the next fifty.

SWWRE exists to make sure those decisions are made wisely, and that no community is left out of Nigeria's sustainable future.
    `,
  },
]

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  function renderBody(text: string) {
    return text
      .trim()
      .split('\n\n')
      .map((para, i) => {
        const html = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        const isHeading = para.startsWith('**') && para.endsWith('**')
        if (isHeading) {
          return (
            <h3
              key={i}
              style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a5c2a', marginTop: '1.75rem', marginBottom: '0.5rem' }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )
        }
        return (
          <p
            key={i}
            style={{ color: '#374151', lineHeight: 1.85, marginBottom: '1.15rem' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )
      })
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d3a18 0%, #1a5c2a 60%, #0d4a1e 100%)',
          padding: '72px 0 64px',
        }}
      >
        <div className="container-custom" style={{ maxWidth: '768px', margin: '0 auto' }}>
          <Link
            href="/blog"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#a7f3b5', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back to Blog
          </Link>

          <span style={{ background: post!.tagStyle.bg, color: post!.tagStyle.text, fontSize: '0.72rem', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '1rem' }}>
            {post!.category}
          </span>

          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            {post!.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', color: '#a7f3b5', fontSize: '0.83rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User style={{ width: '14px', height: '14px' }} />{post!.author}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar style={{ width: '14px', height: '14px' }} />{post!.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock style={{ width: '14px', height: '14px' }} />{post!.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container-custom" style={{ maxWidth: '768px', margin: '0 auto' }}>

          {/* Bug 10 fixed: replaced emoji banner with next/image Unsplash photo */}
          <div style={{ position: 'relative', height: '320px', width: '100%', borderRadius: '1.25rem', overflow: 'hidden', marginBottom: '2.5rem' }}>
            <Image
              src={post!.image}
              alt={post!.imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* Body */}
          <article>{renderBody(post!.body)}</article>

          {/* Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
            <Tag style={{ width: '14px', height: '14px', color: '#9ca3af' }} />
            <span style={{ background: post!.tagStyle.bg, color: post!.tagStyle.text, fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>
              {post!.category}
            </span>
          </div>

          {/* Author card */}
          <div style={{ marginTop: '2rem', background: '#f0faf1', borderRadius: '1.25rem', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', border: '1px solid #bbf7cc' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, #1a5c2a, #2d8a45)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 800, color: '#ffffff', flexShrink: 0, letterSpacing: '-0.02em' }}>
              AA
            </div>
            <div>
              <p style={{ fontWeight: 700, color: '#0d1f2d', margin: '0 0 2px', fontSize: '0.95rem' }}>{post!.author}</p>
              <p style={{ fontSize: '0.78rem', color: '#1a5c2a', fontWeight: 600, margin: '0 0 6px' }}>
                Sustainable Development Expert &amp; Climate Change Solutions Advocate
              </p>
              <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Founder of Sustainability From Waste to Wealth and Renewable Energy (SWWRE), working to build resilient, waste-free communities across Africa.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '2.5rem', background: '#0d1f2d', color: '#ffffff', borderRadius: '1.25rem', padding: '2.25rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.625rem' }}>Want to Make a Difference?</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>Support our work or get involved in your community.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/donate" className="btn-primary">Donate Now</Link>
              <Link href="/get-involved" className="btn-outline" style={{ color: '#ffffff' }}>Get Involved</Link>
            </div>
          </div>

          {/* Back link */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1a5c2a', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem' }}>
              <ArrowLeft style={{ width: '14px', height: '14px' }} /> Back to all articles
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}