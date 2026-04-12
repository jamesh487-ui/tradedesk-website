import Header from "../components/Header"
import Footer from "../components/Footer"
import PageIntro from "../components/PageIntro"
import About from "../components/About"
import Problem from "../components/Problem"
import FAQ from "../components/FAQ"
import CTA from "../components/CTA"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <PageIntro
        eyebrow="Why TradeDesk"
        title="Built for businesses that have outgrown disconnected systems"
        text="TradeDesk exists to give trade businesses a more connected way to run jobs, customers, quotes, invoices, suppliers and records without relying on a patchwork of tools."
      />
      <About />
      <Problem />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
