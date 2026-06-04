import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PressStrip from '@/components/sections/PressStrip'
import ProblemSection from '@/components/sections/ProblemSection'
import ImpactMetrics from '@/components/sections/ImpactMetrics'
import PlatformPreview from '@/components/sections/PlatformPreview'
import PlatformArchitecture from '@/components/sections/PlatformArchitecture'
import KeyDifferentiator from '@/components/sections/KeyDifferentiator'
import QuotingAgent from '@/components/sections/QuotingAgent'
import FollowUpAgent from '@/components/sections/FollowUpAgent'
import MoreAgents from '@/components/sections/MoreAgents'
import VideoDemo from '@/components/sections/VideoDemo'
import CaseStudy from '@/components/sections/CaseStudy'
import Security from '@/components/sections/Security'
import UseCases from '@/components/sections/UseCases'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PressStrip />
      <ProblemSection />
      <ImpactMetrics />
      <PlatformPreview />
      <PlatformArchitecture />
      <KeyDifferentiator />
      <QuotingAgent />
      <FollowUpAgent />
      <MoreAgents />
      <VideoDemo />
      <CaseStudy />
      <Security />
      <UseCases />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
