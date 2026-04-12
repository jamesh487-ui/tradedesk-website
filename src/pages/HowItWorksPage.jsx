import Header from "../components/Header"
import Footer from "../components/Footer"
import PageIntro from "../components/PageIntro"
import HowItWorks from "../components/HowItWorks"
import ProductPreview from "../components/ProductPreview"
import CTA from "../components/CTA"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <PageIntro
        eyebrow="How It Works"
        title="See how TradeDesk connects the full job lifecycle"
        text="From first enquiry to final payment, TradeDesk is designed to keep the workflow joined up so work, records, reminders, supplier pricing and customer detail stay easier to control."
      />
      <HowItWorks />
      <ProductPreview />
      <CTA />
      <Footer />
    </main>
  )
}
