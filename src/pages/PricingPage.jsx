import Header from "../components/Header"
import Footer from "../components/Footer"
import PageIntro from "../components/PageIntro"
import Pricing from "../components/Pricing"
import CTA from "../components/CTA"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <PageIntro
        eyebrow="Pricing"
        title="Core plans first. Trade packs when you need them."
        text="Start with the tools every trade business needs, then add specialist packs for forms, records and trade-specific tools when they are useful."
      />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
