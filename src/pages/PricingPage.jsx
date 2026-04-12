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
        title="Clear pricing for a platform that grows with the business"
        text="TradeDesk is designed for sole traders and growing trade teams that want cleaner workflow, better control and a more connected system as the workload builds."
      />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
