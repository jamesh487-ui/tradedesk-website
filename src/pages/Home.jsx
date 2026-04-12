import { useEffect } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import HomeBenefits from "../components/HomeBenefits"
import HomePlans from "../components/HomePlans"
import ProductPreview from "../components/ProductPreview"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Home() {
  useEffect(() => {
    document.title = "TradeDesk - Job Management Software for Trade Businesses"
  }, [])

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <HomeBenefits />
      <ProductPreview />
      <HomePlans />
      <CTA />
      <Footer />
    </main>
  )
}
