import { useState } from "react"
import customerPortalScreenshot from "../assets/screenshots/features-customer-portal-tablet.png"
import dashboardScreenshot from "../assets/screenshots/dashboard-phone-generated.png"
import diaryPhoneScreenshot from "../assets/screenshots/features-diary-map-phone.png"
import diaryTabletScreenshot from "../assets/screenshots/features-diary-tablet-clean.png"
import featureHeroPhoneScreenshot from "../assets/screenshots/feature-hero-phone.png"
import featureHeroTabletScreenshot from "../assets/screenshots/feature-hero-tablet.png"
import jobChecklistPhoneScreenshot from "../assets/screenshots/features-job-checklist-phone.png"
import jobDetailTabletScreenshot from "../assets/screenshots/features-job-detail-tablet.png"
import customerDetailPhoneScreenshot from "../assets/screenshots/features-customer-detail-phone.png"
import formsCertificateTabletScreenshot from "../assets/screenshots/features-forms-certificate-tablet.png"
import formsPhoneScreenshot from "../assets/screenshots/features-forms-phone.png"
import aiReportingTabletScreenshot from "../assets/screenshots/features-ai-reporting-tablet.png"
import aiSupplierPhoneScreenshot from "../assets/screenshots/features-ai-supplier-phone.png"
import smartDiagnosticsScreenshot from "../assets/screenshots/smart-diagnostics-summary.png"
import supplierPoTabletScreenshot from "../assets/screenshots/features-supplier-po-tablet.png"
import inventoryPhoneScreenshot from "../assets/screenshots/features-inventory-phone.png"
import financeTabletScreenshot from "../assets/screenshots/features-finance-tablet.png"
import invoicePhoneScreenshot from "../assets/screenshots/features-invoice-phone.png"
import stripeIcon from "../assets/integrations/stripe-icon.jpeg"
import outlookLogo from "../assets/integrations/outlook-logo.png"
import sageLogo from "../assets/integrations/sage-icon-boxed.svg"
import plumbingHeatingAddOnImage from "../assets/addons/plumbing-heating.png"
import electricalAddOnImage from "../assets/addons/electrical.png"
import renewablesAddOnImage from "../assets/addons/renewables.png"
import hvacRefrigerationAddOnImage from "../assets/addons/hvac-refrigeration.jpg"
import fireSecurityAddOnImage from "../assets/addons/fire-security.jpg"
import cleaningAddOnImage from "../assets/addons/cleaning.jpeg"
import landscapingAddOnImage from "../assets/addons/landscaping.jpg"
import buildingMaintenanceAddOnImage from "../assets/addons/building-maintenance.jpg"
import paintingDecoratingAddOnImage from "../assets/addons/painting-decorating.avif"

const allPlans = ["Free", "Starter", "Pro", "Premium"]
const starterPlus = ["Starter", "Pro", "Premium"]
const proPlus = ["Pro", "Premium"]
const premiumOnly = ["Premium"]

const workflowSections = [
  {
    eyebrow: "Diary & scheduling",
    title: "Smarter scheduling for fewer gaps and less running around.",
    text: "Book work manually when you need control, or use smart scheduling to find gaps, reduce dead time and avoid running between jobs.",
    tabletImage: diaryTabletScreenshot,
    phoneImage: diaryPhoneScreenshot,
    reverse: false,
    rawTablet: true,
    rawPhone: true,
    tabletScaleClass: "scale-110 lg:scale-125",
    phonePosition: "-bottom-7 -right-1 sm:-right-4 lg:-right-8",
    bullets: [
      { label: "Manual scheduling", plan: "Free", text: "Day, week and month diary views for booking work by hand." },
      { label: "Slot finder", plan: "Starter+", text: "Find suitable gaps in the diary without checking every day manually." },
      { label: "Online booking", plan: "Starter+", text: "Let customers choose from available appointment slots without opening the full customer portal." },
      { label: "Smart scheduling", plan: "Pro+", text: "Suggest booking times around availability, travel time and existing work." },
      { label: "Route planner", plan: "Pro+", text: "Plan diary routes around location, travel time and the order of work." },
    ],
  },
  {
    eyebrow: "Customer management",
    title: "Keep every customer, site and asset connected.",
    text: "Customer records should hold more than a phone number. TradeDesk links customers, addresses, assets, documents, jobs, quotes and invoices together.",
    tabletImage: customerPortalScreenshot,
    phoneImage: customerDetailPhoneScreenshot,
    reverse: true,
    rawTablet: true,
    rawPhone: true,
    tabletScaleClass: "scale-120 lg:scale-135",
    phonePosition: "-bottom-7 -right-1 sm:-right-4 lg:-right-8",
    bullets: [
      { label: "Customer management", plan: "Free", text: "Manage names, contacts, addresses and job history." },
      { label: "Multiple sites", plan: "Free", text: "Support customers with more than one address, site or property." },
      { label: "Asset records", plan: "Starter+", text: "Store equipment, asset and installation records." },
      { label: "Secure document links", plan: "Free", text: "Send quote and invoice links without exposing a wider customer hub." },
      { label: "Customer portal", plan: "Starter+", text: "Give customers a shared hub for jobs, documents, messages and appointment history." },
    ],
  },
  {
    eyebrow: "Job Management",
    title: "Stop losing job details across notes, photos and messages.",
    text: "Keep notes, photos, videos, checklists, materials and customer updates inside the job, so nothing gets lost between the first visit and the final invoice.",
    tabletImage: jobDetailTabletScreenshot,
    phoneImage: jobChecklistPhoneScreenshot,
    reverse: false,
    rawTablet: true,
    rawPhone: true,
    tabletScaleClass: "scale-105 lg:scale-112",
    phonePosition: "-bottom-7 -right-1 sm:-right-4 lg:-right-8",
    bullets: [
      { label: "Job timeline", plan: "Free", text: "Keep notes, updates, media and key job activity in one place." },
      { label: "Checklists", plan: "Free", text: "Build repeatable checks so work is completed properly and recorded clearly." },
      { label: "Video transcription", plan: "Pro+", text: "Turn job videos into written notes, summaries and follow-up actions." },
      { label: "Job profit tracking", plan: "Pro+", text: "Track labour, materials, mileage and direct expenses against each job." },
    ],
  },
  {
    eyebrow: "Quotes, Invoices & Payments",
    title: "From customer enquiry to getting paid, TradeDesk has you covered.",
    text: "Create professional quotes and invoices, take deposits, raise staged invoices and keep payment status connected to the job.",
    tabletImage: financeTabletScreenshot,
    phoneImage: invoicePhoneScreenshot,
    reverse: true,
    rawTablet: true,
    rawPhone: true,
    tabletScaleClass: "scale-105 lg:scale-112",
    phonePosition: "-bottom-7 -right-1 sm:-right-4 lg:-right-8",
    bullets: [
      { label: "Quotes", plan: "Free", text: "Build quotes, send approval links and track customer acceptance." },
      { label: "Invoices", plan: "Free", text: "Create invoices from completed work and monitor payment status." },
      { label: "Deposits", plan: "Free", text: "Set deposit terms on quotes and carry the balance through to invoicing." },
      { label: "Staged invoices", plan: "Free", text: "Split larger jobs into deposit, stage and final invoices." },
      { label: "Customer links", plan: "Free", text: "Let customers view quote and invoice details without another app." },
      { label: "Branded paperwork", plan: "Starter+", text: "Add your logo and business details to customer-facing documents." },
    ],
  },
  {
    eyebrow: "Suppliers, POs & inventory",
    title: "Control materials, supplier prices and purchase orders.",
    text: "Keep supplier quotes, purchase orders, materials and direct costs connected to the work instead of scattered across emails and notes.",
    tabletImage: supplierPoTabletScreenshot,
    phoneImage: inventoryPhoneScreenshot,
    reverse: false,
    rawTablet: true,
    rawPhone: true,
    tabletScaleClass: "scale-105 lg:scale-112",
    phonePosition: "-bottom-7 -right-1 sm:-right-4 lg:-right-8",
    bullets: [
      { label: "Supplier management", plan: "Starter+", text: "Store supplier records, send quote requests and create purchase orders." },
      { label: "Inventory", plan: "Free", text: "Manage materials, stock and supplier-specific pricing." },
      { label: "Smart import", plan: "Pro+", text: "Import full supplier quotes without manually typing every line item." },
      { label: "Direct costs", plan: "Pro+", text: "Track materials, supplier pricing, mileage and expenses against each job." },
    ],
  },
  {
    eyebrow: "Records & Handover",
    title: "Keep records, evidence and handovers in one place.",
    text: "Create job records, checklists, certificates and handover documents where they belong: against the customer, site and job history.",
    tabletImage: formsCertificateTabletScreenshot,
    phoneImage: formsPhoneScreenshot,
    reverse: true,
    rawTablet: true,
    rawPhone: true,
    tabletScaleClass: "scale-120 lg:scale-125",
    phonePosition: "-bottom-7 -right-1 sm:-right-4 lg:-right-8",
    bullets: [
      { label: "Structured records", plan: "Add-on", text: "Complete forms, certificates, reports and handover notes from the job." },
      { label: "Linked history", plan: "Add-on", text: "Store completed records against jobs, customers and sites." },
      { label: "Branded output", plan: "Starter+", text: "Add your logo to customer-facing records and documents." },
      { label: "Checklist reports", plan: "Starter+", text: "Turn completed checklist work into clear customer-ready reports." },
    ],
  },
  {
    eyebrow: "Smart tools & reporting",
    title: "Spend less time typing, chasing and checking.",
    text: "Use smart tools for faster drafts, supplier quote imports, video summaries and reporting that helps you spot what needs attention.",
    tabletImage: aiReportingTabletScreenshot,
    phoneImage: aiSupplierPhoneScreenshot,
    reverse: false,
    rawTablet: true,
    rawPhone: true,
    tabletScaleClass: "scale-105 lg:scale-112",
    phonePosition: "-bottom-7 -right-1 sm:-right-4 lg:-right-8",
    bullets: [
      { label: "Message drafting", plan: "Free+", text: "Create customer-facing message drafts faster, then review and send when ready." },
      { label: "Shared Smart tools", plan: "Pro+", text: "Use heavier Smart tools for supplier imports, matching and video summaries." },
      { label: "Smart imports", plan: "Pro+", text: "Read supplier quotes faster and reduce manual line-item entry." },
      { label: "Video summaries", plan: "Pro+", text: "Turn job videos into written notes, summaries and follow-up actions." },
      { label: "KPIs & reports", plan: "Pro+", text: "Track quote conversion, paid rate, outstanding balances and overdue work." },
    ],
  },
]

const availability = [
  { feature: "Customer, site and contact management", plans: allPlans },
  { feature: "Jobs, diary, quotes and invoices", plans: allPlans },
  { feature: "Secure quote and invoice links", plans: allPlans },
  { feature: "Deposits and staged invoices", plans: allPlans },
  { feature: "Manual diary scheduling", plans: allPlans },
  { feature: "Basic checklists", plans: allPlans },
  { feature: "Smart message drafting", plans: allPlans },
  { feature: "Inventory management", plans: allPlans },
  { feature: "Basic reporting", plans: allPlans },
  { feature: "Trade add-ons", values: { Free: "£15/mo", Starter: "£10/mo", Pro: "£5/mo", Premium: "Included" } },
  { feature: "Customer portal", plans: starterPlus },
  { feature: "Online booking", plans: starterPlus },
  { feature: "Branded paperwork", plans: starterPlus },
  { feature: "Advanced checklists and checklist reports", plans: starterPlus },
  { feature: "Supplier quote requests and purchase orders", plans: starterPlus },
  { feature: "Asset records and follow-up reminders", plans: starterPlus },
  { feature: "Diary slot finder and multi-visit jobs", plans: starterPlus },
  { feature: "Smart supplier quote import", plans: proPlus },
  { feature: "Video transcription and summaries", plans: proPlus },
  { feature: "Job profit tracking", plans: proPlus },
  { feature: "Advanced reporting and KPIs", plans: proPlus },
  { feature: "Route planner and customer job tracking links", plans: proPlus },
  { feature: "Advanced route planner", plans: premiumOnly },
  { feature: "Guided setup and priority support", plans: premiumOnly },
]

const addOns = [
  {
    title: "Plumbing & Heating",
    status: "Coming soon",
    gradient: "from-sky-700 via-cyan-500 to-amber-300",
    image: plumbingHeatingAddOnImage,
    summary: "Specialist records, certificates and Smart Diagnostics for plumbing and heating work.",
    includes: [
      "Gas safety, commissioning and service certificate packs",
      "Heating and plumbing forms, warning notices and job records",
      "Smart Diagnostics for Plumbing & Heating with its own monthly allowance",
      "Trade calculators for heating, pipework and materials",
    ],
  },
  {
    title: "Electrical",
    status: "Coming soon",
    gradient: "from-yellow-400 via-orange-500 to-slate-950",
    image: electricalAddOnImage,
    summary: "Certificates, test records and practical tools for domestic and commercial electrical work.",
    includes: [
      "EIC, EICR, minor works and danger notification record packs",
      "EV charger survey and handover records",
      "Cable, load and voltage-drop calculators",
      "Inspection, test result and remedial action checklists",
    ],
  },
  {
    title: "Renewables",
    status: "Coming soon",
    gradient: "from-emerald-500 via-lime-400 to-sky-500",
    image: renewablesAddOnImage,
    summary: "Survey, commissioning and handover tools for renewables installers.",
    includes: [
      "Heat pump, solar PV and battery survey records",
      "Handover checklists for MCS documents, warranties and operating information",
      "Heat loss, sizing and performance calculation helpers",
      "Maintenance and performance check records",
    ],
  },
  {
    title: "HVAC & Refrigeration",
    status: "Coming soon",
    gradient: "from-cyan-500 via-blue-700 to-slate-950",
    image: hvacRefrigerationAddOnImage,
    summary: "Service logs, compliance records and practical tools for HVAC and refrigeration teams.",
    includes: [
      "F-gas, pressure test and refrigerant log records",
      "Commissioning and maintenance report packs",
      "Airflow, refrigerant and performance calculators",
      "Service checklists, remedial notes and follow-up actions",
    ],
  },
  {
    title: "Fire & Security",
    status: "Coming soon",
    gradient: "from-red-600 via-orange-500 to-slate-950",
    image: fireSecurityAddOnImage,
    summary: "Inspection, commissioning and maintenance records for life-safety systems.",
    includes: [
      "Alarm, CCTV, access control and emergency lighting records",
      "Zone, device and detector test sheets",
      "Maintenance visit and remedial report packs",
      "Commissioning, inspection and service checklists",
    ],
  },
  {
    title: "Cleaning",
    status: "Coming soon",
    gradient: "from-teal-400 via-sky-500 to-indigo-600",
    image: cleaningAddOnImage,
    summary: "Site audits, quality checks and evidence reports for cleaning contracts.",
    includes: [
      "Site audit and inspection report packs",
      "Cleaning specification and sign-off records",
      "Before-and-after evidence reports",
      "Consumables, COSHH and quality-control checklists",
    ],
  },
  {
    title: "Landscaping",
    status: "Coming soon",
    gradient: "from-green-700 via-lime-500 to-yellow-300",
    image: landscapingAddOnImage,
    summary: "Visit records, site checks and practical tools for landscaping and grounds care.",
    includes: [
      "Grounds maintenance and site visit report packs",
      "Planting, turfing and materials calculators",
      "Before-and-after evidence reports",
      "Risk checks, site notes and recurring visit sign-offs",
    ],
  },
  {
    title: "Building & Maintenance",
    status: "Coming soon",
    gradient: "from-slate-700 via-stone-500 to-orange-300",
    image: buildingMaintenanceAddOnImage,
    summary: "Snagging, defect reports and handover records for building and maintenance work.",
    includes: [
      "Snagging, defect and remedial report packs",
      "RAMS-style job safety and site check records",
      "Measurement and materials calculators",
      "Completion, evidence and customer handover packs",
    ],
  },
  {
    title: "Painting & Decorating",
    status: "Coming soon",
    gradient: "from-rose-400 via-fuchsia-500 to-indigo-600",
    image: paintingDecoratingAddOnImage,
    summary: "Room surveys, surface checks and handover records for decorating work.",
    includes: [
      "Room survey and surface preparation records",
      "Paint, coverage and materials calculators",
      "Snagging and finish quality checklists",
      "Customer handover and evidence report packs",
    ],
  },
]

const integrations = [
  { title: "Stripe", status: "Available", icon: stripeIcon, text: "Customer payments and subscription billing support." },
  { title: "Tap to Pay on iPhone", status: "Coming soon", tapToPay: true, text: "Take contactless card payments in person from a compatible iPhone." },
  { title: "Xero", status: "Coming soon", icon: "https://www.xero.com/content/dam/xero/pilot-images/admin/icons/favicon/apple-touch-icon.png", text: "Sync customers, invoices and payment status with Xero." },
  { title: "QuickBooks", status: "Coming soon", icon: "https://quickbooks.intuit.com/cas/dam/IMAGE/A7mjJ5rpg/apple-touch-icon-196x196.png", text: "Push invoices and customer accounts into QuickBooks." },
  { title: "Sage", status: "Coming soon", icon: sageLogo, largeIcon: true, text: "Accounting export and invoice sync for Sage users." },
  { title: "FreeAgent", status: "Coming soon", icon: "https://www.freeagent.com/apple-touch-icon.png", text: "Accounting sync for FreeAgent users, including invoices and customer records." },
  { title: "Google Calendar", status: "Coming soon", icon: "https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png", text: "Calendar sync for diary appointments and reminders." },
  { title: "Outlook Calendar", status: "Coming soon", icon: outlookLogo, wideIcon: true, text: "Calendar sync for Microsoft 365 users." },
  { title: "Google Drive", status: "Coming soon", icon: "https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png", text: "Export invoices, quotes, reports and checklist documents into Drive folders." },
  { title: "Zapier", status: "Coming soon", icon: "https://zapier.com/l/favicon-180.png", text: "Send TradeDesk events into other apps without building every integration one-by-one." },
]

function PlanTick({ active }) {
  return (
    <span
      className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-sm font-black ${
        active ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-white/25"
      }`}
      aria-label={active ? "Included" : "Not included"}
    >
      {active ? "✓" : "—"}
    </span>
  )
}

function StatusPill({ status }) {
  const isAvailable = status === "Available"
  return (
    <span
      className={`rounded-full px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] ${
        isAvailable ? "bg-cyan-300 text-slate-950" : "bg-white/85 text-slate-700"
      }`}
    >
      {status}
    </span>
  )
}

function AddOnCard({ addOn, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(addOn)}
      className="group flex min-h-[21rem] w-[18.5rem] shrink-0 flex-col overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:w-[21rem]"
    >
      <div className={`relative h-36 bg-gradient-to-br ${addOn.gradient}`}>
        {addOn.image ? (
          <img
            src={addOn.image}
            alt={`${addOn.title} add-on`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.12),rgba(2,6,23,0.58))]" />
        <div className="absolute left-4 top-4">
          <StatusPill status={addOn.status} />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-2xl font-black tracking-[-0.04em] text-white">
            {addOn.title}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-bold leading-6 text-slate-600">
          {addOn.summary}
        </p>
        <div className="mt-auto pt-5">
          <div className="grid grid-cols-2 gap-2 text-[0.68rem] font-black uppercase tracking-[0.1em] text-slate-600">
            <span className="rounded-xl bg-slate-100 px-3 py-2">Free £15</span>
            <span className="rounded-xl bg-slate-100 px-3 py-2">Starter £10</span>
            <span className="rounded-xl bg-slate-100 px-3 py-2">Pro £5</span>
            <span className="rounded-xl bg-slate-950 px-3 py-2 text-white">Premium free</span>
          </div>
          <span className="mt-5 block text-sm font-black text-sky-700">
            View what is included
          </span>
        </div>
      </div>
    </button>
  )
}

function IntegrationCard({ integration }) {
  return (
    <div className="flex w-[16rem] shrink-0 flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-20 w-24 items-center justify-start">
          {integration.tapToPay ? (
            <div className="relative ml-2 flex h-16 w-16 items-center justify-center">
              <div className="-rotate-12 rounded-[1rem] border-[3px] border-slate-950 bg-white px-2 py-3 shadow-lg">
                <div className="mx-auto mb-2 h-1 w-5 rounded-full bg-slate-950" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50">
                  <span className="text-[0.48rem] font-black tracking-[-0.04em] text-[#635bff]">
                    stripe
                  </span>
                  <span className="absolute -right-4 top-1 h-5 w-5 rounded-full border-r-[3px] border-[#635bff]" />
                  <span className="absolute -right-6 -top-1 h-8 w-8 rounded-full border-r-[3px] border-[#635bff]/45" />
                </div>
              </div>
            </div>
          ) : (
            <img
              src={integration.icon}
              alt={`${integration.title} logo`}
              className={`${
                integration.wideIcon
                  ? "h-14 w-24"
                  : integration.largeIcon
                    ? "h-20 w-20"
                    : "h-16 w-16"
              } object-contain`}
            />
          )}
        </div>
        <StatusPill status={integration.status} />
      </div>
      <p className="mt-5 text-lg font-black tracking-[-0.03em] text-slate-950">
        {integration.title}
      </p>
      <p className="mt-2 text-sm font-bold leading-6 text-slate-600">
        {integration.text}
      </p>
    </div>
  )
}

function AddOnsAndIntegrations() {
  const [selectedAddOn, setSelectedAddOn] = useState(null)

  return (
    <section id="addons" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="td-reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
              Add-ons & integrations
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Add the specialist tools your trade actually needs.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            Keep the core app clean for every trade. Add a trade pack when you
            need specialist records, calculators, handover templates and
            trade-specific smart tools. Free and Starter packs include a
            smaller allowance for pack-specific smart tools.
          </p>
        </div>

        <div className="-mx-4 mt-9 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
          <div className="flex gap-4">
            {addOns.map((addOn) => (
              <AddOnCard key={addOn.title} addOn={addOn} onSelect={setSelectedAddOn} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-700">
                Integrations
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950">
                Connect the tools you already use.
              </h3>
            </div>
          </div>

          <div className="-mx-4 mt-5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
            <div className="flex gap-4">
              {integrations.map((integration) => (
                <IntegrationCard key={integration.title} integration={integration} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedAddOn ? (
        <div className="fixed inset-0 z-50 flex items-end bg-slate-950/60 p-3 backdrop-blur-sm sm:items-center sm:justify-center">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-5 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <StatusPill status={selectedAddOn.status} />
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950">
                  {selectedAddOn.title} Pack
                </h3>
                <p className="mt-3 text-sm font-bold leading-7 text-slate-600">
                  {selectedAddOn.summary}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAddOn(null)}
                className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-black text-slate-700"
              >
                Close
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-sky-700">
                What is included
              </p>
              <ul className="mt-4 grid gap-3">
                {selectedAddOn.includes.map((item) => (
                  <li key={item} className="rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-slate-700 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 grid gap-2 text-sm font-black text-slate-700 sm:grid-cols-4">
              <span className="rounded-2xl bg-slate-100 p-3">Free £15/mo</span>
              <span className="rounded-2xl bg-slate-100 p-3">Starter £10/mo</span>
              <span className="rounded-2xl bg-slate-100 p-3">Pro £5/mo</span>
              <span className="rounded-2xl bg-slate-950 p-3 text-white">Premium included</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

function DevicePair({
  tabletImage,
  phoneImage,
  title,
  phonePosition = "-bottom-2 right-2 sm:right-6",
  rawPhone = false,
  rawTablet = false,
  tabletScaleClass = "",
}) {
  return (
    <div className="relative mx-auto w-full max-w-[38rem] pb-10 lg:max-w-none">
      <div
        className={
          rawTablet
            ? tabletScaleClass
            : "rounded-[2rem] border border-slate-200 bg-slate-950 p-2 shadow-2xl shadow-slate-900/20"
        }
      >
        <div className={rawTablet ? "" : "overflow-hidden rounded-[1.45rem] bg-white"}>
          <img
            src={tabletImage}
            alt={`${title} tablet screenshot`}
            className={rawTablet ? "w-full" : "aspect-[4/3] w-full object-cover object-top"}
          />
        </div>
      </div>

      <div
        className={`absolute ${phonePosition} w-[34%] min-w-[8.5rem] max-w-[12rem] ${
          rawPhone
            ? ""
            : "rounded-[2rem] border border-slate-800 bg-black p-1.5 shadow-2xl shadow-slate-950/30"
        }`}
      >
        <div className={rawPhone ? "" : "overflow-hidden rounded-[1.55rem] bg-white"}>
          <img
            src={phoneImage}
            alt={`${title} mobile screenshot`}
            className={rawPhone ? "w-full" : "aspect-[9/16] w-full object-cover object-top"}
          />
        </div>
      </div>
    </div>
  )
}

function FeatureSection({ section, index }) {
  const visual = (
    <DevicePair
      tabletImage={section.tabletImage}
      phoneImage={section.phoneImage}
      title={section.title}
      rawTablet={section.rawTablet}
      rawPhone={section.rawPhone}
      tabletScaleClass={section.tabletScaleClass}
      phonePosition={section.phonePosition}
    />
  )
  const copy = (
    <div className="td-reveal">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
        {section.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">
        {section.title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600">
        {section.text}
      </p>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {section.bullets.map((item) => (
          <div key={`${section.title}-${item.label}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-sky-700">
                {item.label}
              </p>
              <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-slate-600">
                {item.plan}
              </span>
            </div>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className={`${index % 2 ? "bg-slate-50" : "bg-white"} py-14 sm:py-20`}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        {section.reverse ? (
          <>
            <div className="lg:order-1">{copy}</div>
            <div className="td-reveal td-reveal-delay lg:order-2">{visual}</div>
          </>
        ) : (
          <>
            <div>{copy}</div>
            <div className="td-reveal td-reveal-delay">{visual}</div>
          </>
        )}
      </div>
    </section>
  )
}

export default function FeatureCatalogue() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07162f] py-14 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_84%_26%,rgba(14,165,233,0.16),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="td-reveal">
            <h1 className="text-4xl font-black tracking-[-0.055em] sm:text-6xl">
              Everything you need to get the job done.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              TradeDesk offers advanced features to spend less time worrying about paperwork and more time earning money.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#workflow"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
              >
                See the workflow
              </a>
              <a
                href="#availability"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
              >
                View plan access
              </a>
            </div>
          </div>

          <div className="td-reveal td-reveal-delay">
            <DevicePair
              tabletImage={featureHeroTabletScreenshot}
              phoneImage={featureHeroPhoneScreenshot}
              title="TradeDesk workflow"
              phonePosition="-bottom-7 -right-1 sm:-right-4 lg:-right-8"
              rawTablet
              rawPhone
              tabletScaleClass="scale-110 lg:scale-125"
            />
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="td-reveal rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-700">
                  Feature areas
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  Packed with features to make your day easier.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-600">
                From scheduling and customer records to quotes, invoices,
                checklists, supplier tools and reporting, TradeDesk gives you
                practical tools to stay organised without adding more admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {workflowSections.map((section, index) => (
        <FeatureSection key={section.title} section={section} index={index} />
      ))}

      <section id="availability" className="bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="td-reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Plan Access
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                Core job management first. More automation when you need it.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-300">
              Every plan includes the core tools to manage customers, jobs, diary, quotes and invoices. Higher plans add more automation, smarter scheduling, supplier tools, smart features and reporting depth.
            </p>
          </div>

          <div className="mt-9 overflow-x-auto rounded-[1.8rem] border border-white/10 bg-white/[0.06]">
            <div className="min-w-[42rem]">
              <div className="grid grid-cols-[1.6fr_repeat(4,0.7fr)] border-b border-white/10 bg-white/[0.05]">
                <div className="px-4 py-4 text-xs font-black uppercase tracking-[0.16em] text-slate-300 sm:px-5">
                  Feature
                </div>
                {allPlans.map((plan) => (
                  <div
                    key={plan}
                    className="px-3 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white"
                  >
                    {plan}
                  </div>
                ))}
              </div>

              {availability.map((item, index) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-[1.6fr_repeat(4,0.7fr)] items-center ${
                    index ? "border-t border-white/10" : ""
                  }`}
                >
                  <p className="px-4 py-4 text-sm font-black leading-6 text-white sm:px-5">
                    {item.feature}
                  </p>
                  {allPlans.map((plan) => (
                    <div key={plan} className="px-3 py-4 text-center">
                      {item.values ? (
                        <span className="text-xs font-black text-cyan-200">
                          {item.values[plan]}
                        </span>
                      ) : (
                        <PlanTick active={item.plans.includes(plan)} />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AddOnsAndIntegrations />
    </>
  )
}
