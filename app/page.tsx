import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Programs from '@/components/Programs'
import Founder from '@/components/Founder'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Programs />
      <Founder />
      <CallToAction />
      <Footer />
    </main>
  )
}