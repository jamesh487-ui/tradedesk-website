import Header from "../components/Header"
import Footer from "../components/Footer"
import PageIntro from "../components/PageIntro"
import Features from "../components/Features"
import BuiltForTrade from "../components/BuiltForTrade"
import SupplierControl from "../components/SupplierControl"
import SmartDiagnostics from "../components/SmartDiagnostics"
import WorkflowBenefits from "../components/WorkflowBenefits"
import CTA from "../components/CTA"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <PageIntro
        eyebrow="Features"
        title="The tools you need, joined up"
        text="Jobs, quotes, invoices, suppliers, reminders and records in one cleaner workflow."
      />
      <Features />
      <BuiltForTrade />
      <SmartDiagnostics />
      <SupplierControl />
      <WorkflowBenefits />
      <CTA />
      <Footer />
    </main>
  )
}
