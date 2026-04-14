import Header from "../components/Header"
import Footer from "../components/Footer"
import PageIntro from "../components/PageIntro"
import HowItWorks from "../components/HowItWorks"
import CTA from "../components/CTA"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <PageIntro
        eyebrow="How It Works"
        title="Watch TradeDesk in action."
        text="Short walkthroughs showing the main setup, job, diary, checklist, supplier quote and invoicing flows inside the app."
      />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
