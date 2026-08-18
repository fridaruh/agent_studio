import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ProblemSection from '@/components/sections/ProblemSection'
import PlatformPreview from '@/components/sections/PlatformPreview'
import KeyDifferentiator from '@/components/sections/KeyDifferentiator'
import QuotingAgent from '@/components/sections/QuotingAgent'
import FollowUpAgent from '@/components/sections/FollowUpAgent'
import MoreAgents from '@/components/sections/MoreAgents'
import Integrations from '@/components/sections/Integrations'
import PipelineAssistant from '@/components/sections/PipelineAssistant'
import Security from '@/components/sections/Security'
import UseCases from '@/components/sections/UseCases'
import RoiCalculator from '@/components/sections/RoiCalculator'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <PlatformPreview />
      <KeyDifferentiator />
      <QuotingAgent />
      <FollowUpAgent />
      <MoreAgents />
      <Integrations />
      <PipelineAssistant />
      <Security />
      <UseCases />
      <RoiCalculator />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
