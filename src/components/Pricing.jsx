import plumbingHeatingAddOnImage from "../assets/addons/plumbing-heating.png"
import electricalAddOnImage from "../assets/addons/electrical.png"
import renewablesAddOnImage from "../assets/addons/renewables.png"
import hvacRefrigerationAddOnImage from "../assets/addons/hvac-refrigeration.jpg"
import fireSecurityAddOnImage from "../assets/addons/fire-security.jpg"
import cleaningAddOnImage from "../assets/addons/cleaning.jpeg"
import landscapingAddOnImage from "../assets/addons/landscaping.jpg"
import buildingMaintenanceAddOnImage from "../assets/addons/building-maintenance.jpg"
import paintingDecoratingAddOnImage from "../assets/addons/painting-decorating.avif"

const plans = [
  {
    name: "Free",
    code: "free",
    subtitle: "Best for trying it",
    price: "£0",
    cadence: "/mo",
    costPerJob: "£0 per included job",
    summary:
      "A simple starting point for managing a small amount of work without paying monthly.",
    includes: [
      "1 user",
      "Up to 20 jobs per month",
      "Core jobs, quotes, invoices and diary",
      "Manual scheduling",
      "Trade packs available at £15/mo",
    ],
    features: [
      "Customers and properties",
      "Jobs and notes",
      "Quotes",
      "Invoices",
      "Basic diary",
      "Basic checklists",
      "Secure quote and invoice links",
      "Inventory management",
      "Basic reporting",
    ],
    accent: "slate",
    cta: "Register interest",
  },
  {
    name: "Starter",
    code: "starter",
    subtitle: "Best for small teams",
    price: "£24",
    cadence: "/mo",
    costPerJob: "48p per included job",
    summary:
      "For businesses that want more structure, reminders, supplier tools and better customer-facing paperwork.",
    includes: [
      "Up to 3 users",
      "Up to 50 jobs per month",
      "50 AI drafts per month",
      "Supplier tools and advanced checklists",
      "Trade packs discounted to £10/mo",
    ],
    features: [
      "Everything in Free",
      "Inbox and customer communications",
      "Customer portal",
      "Supplier quotes and purchase orders",
      "Advanced checklists and checklist reports",
      "Diary slot finder",
      "Recurring jobs",
      "Branded paperwork",
    ],
    accent: "white",
    cta: "Register interest",
  },
  {
    name: "Pro",
    code: "pro",
    subtitle: "Best value",
    price: "£49",
    cadence: "/mo",
    costPerJob: "33p per included job",
    summary:
      "For growing teams that want smarter scheduling, AI-assisted tools, reporting and deeper operational control.",
    includes: [
      "Unlimited users",
      "Up to 150 jobs per month",
      "250 AI drafts per month",
      "Smart scheduling, route planner and profit tracking",
      "Trade packs discounted to £5/mo",
    ],
    features: [
      "Everything in Starter",
      "Supplier AI price import",
      "Video transcription",
      "Smart auto scheduler",
      "Job profit tracking",
      "Advanced reporting",
      "Public team tracking",
    ],
    accent: "cyan",
    cta: "Register interest",
  },
  {
    name: "Premium",
    code: "premium",
    subtitle: "Everything included",
    price: "£89",
    cadence: "/mo",
    costPerJob: "25p per included job",
    summary:
      "Built for busier teams that want higher monthly caps, advanced routing, included trade packs and priority help.",
    includes: [
      "Unlimited users",
      "Up to 350 jobs per month",
      "Unlimited AI drafts per month",
      "75 smart AI functions and 25 route planner runs",
      "Trade packs included",
    ],
    features: [
      "Everything in Pro",
      "Higher monthly caps",
      "Advanced route planner",
      "Priority setup and support",
      "Trade packs included",
      "Designed for higher-volume businesses",
    ],
    accent: "dark",
    cta: "Register interest",
  },
]

const planHighlights = [
  {
    title: "Core tools first",
    text: "Every plan includes customers, jobs, diary, quotes, invoices, customer links, basic checklists, inventory and basic reporting.",
  },
  {
    title: "Add trade packs when needed",
    text: "Trade packs add specialist records, forms and trade-specific tools without forcing every business onto the same setup.",
  },
  {
    title: "Better plan, lower pack cost",
    text: "Packs are £15/mo on Free, £10/mo on Starter, £5/mo on Pro and included with Premium.",
  },
]

const addOns = [
  {
    title: "Plumbing & Heating",
    status: "Available first",
    image: plumbingHeatingAddOnImage,
    text: "Gas, heating and service record tools for businesses that need specialist paperwork and diagnostics.",
  },
  {
    title: "Electrical",
    status: "Coming soon",
    image: electricalAddOnImage,
    text: "Electrical records, certificates and installation-specific tools planned after launch.",
  },
  {
    title: "Renewables",
    status: "Coming soon",
    image: renewablesAddOnImage,
    text: "Solar, battery and heat-pump focused tools planned for renewables installers.",
  },
  {
    title: "HVAC & Refrigeration",
    status: "Coming soon",
    image: hvacRefrigerationAddOnImage,
    text: "Commissioning, maintenance and equipment-focused records for HVAC and refrigeration work.",
  },
  {
    title: "Fire & Security",
    status: "Coming soon",
    image: fireSecurityAddOnImage,
    text: "Service, inspection and asset records for alarms, CCTV and fire safety businesses.",
  },
  {
    title: "Cleaning",
    status: "Coming soon",
    image: cleaningAddOnImage,
    text: "Site, visit and quality-check tools for cleaning and facilities teams.",
  },
  {
    title: "Landscaping",
    status: "Coming soon",
    image: landscapingAddOnImage,
    text: "Grounds maintenance, site visits and recurring outdoor work records.",
  },
  {
    title: "Building & Maintenance",
    status: "Coming soon",
    image: buildingMaintenanceAddOnImage,
    text: "Snagging, defects, remedials and project handover records.",
  },
  {
    title: "Painting & Decorating",
    status: "Coming soon",
    image: paintingDecoratingAddOnImage,
    text: "Room, finish, snagging and handover records for decorating work.",
  },
]

const packPricing = [
  ["Free", "£15/mo"],
  ["Starter", "£10/mo"],
  ["Pro", "£5/mo"],
  ["Premium", "Included"],
]

function planClasses(accent) {
  if (accent === "cyan") {
    return {
      card: "border-cyan-200 bg-cyan-50/70 text-slate-900 shadow-lg shadow-cyan-100/70",
      subtitle: "text-cyan-700",
      priceMeta: "text-slate-500",
      summary: "text-slate-600",
      sectionLabel: "text-slate-500",
      includesBox: "border-cyan-200 bg-white",
      featureText: "text-slate-700",
      bullet: "text-cyan-700",
      button: "bg-slate-900 text-white",
      badge: "border border-cyan-300 bg-white text-cyan-700",
    }
  }

  if (accent === "dark") {
    return {
      card: "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-300/20",
      subtitle: "text-cyan-300",
      priceMeta: "text-slate-300",
      summary: "text-slate-300",
      sectionLabel: "text-slate-400",
      includesBox: "border-slate-700 bg-slate-950",
      featureText: "text-slate-200",
      bullet: "text-cyan-300",
      button: "bg-white text-slate-900",
      badge: "border border-slate-600 bg-slate-800 text-cyan-300",
    }
  }

  return {
    card: "border-slate-200 bg-white text-slate-900 shadow-sm",
    subtitle: "text-cyan-700",
    priceMeta: "text-slate-500",
    summary: "text-slate-600",
    sectionLabel: "text-slate-500",
    includesBox: "border-slate-200 bg-slate-50",
    featureText: "text-slate-700",
    bullet: "text-cyan-700",
    button: "bg-slate-900 text-white",
    badge: "border border-slate-200 bg-slate-50 text-slate-700",
  }
}

export default function Pricing() {
  function registerPlanInterest(planCode) {
    window.dispatchEvent(
      new CustomEvent("tradedesk:plan-interest", {
        detail: { plan: planCode },
      }),
    )
    window.history.replaceState(null, "", "#register")
    requestAnimationFrame(() => {
      document.getElementById("register")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }

  return (
    <section id="pricing" className="bg-slate-50 py-20 text-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Pricing
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Choose a plan that best fits your business
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every plan includes the core tools for customers, jobs, diary,
            quotes and invoices. Move up when you need more jobs, more users,
            more automation, deeper reporting or cheaper trade packs.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {planHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-4">
          {plans.map((plan) => {
            const styles = planClasses(plan.accent)

            return (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-[1.9rem] border p-6 ${styles.card}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>

                    <p
                      className={`mt-2 text-xs font-semibold uppercase tracking-[0.22em] ${styles.subtitle}`}
                    >
                      {plan.subtitle}
                    </p>
                  </div>

                  {plan.badge ? (
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
                    >
                      {plan.badge}
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 flex items-end gap-1.5">
                  <div className="text-5xl font-semibold tracking-tight">
                    {plan.price}
                  </div>
                  <div className={`pb-1 text-sm ${styles.priceMeta}`}>
                    {plan.cadence}
                  </div>
                </div>

                {plan.code !== "free" ? (
                  <div className={`mt-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}>
                    {plan.costPerJob}
                  </div>
                ) : null}

                <p className={`mt-4 text-sm leading-7 ${styles.summary}`}>
                  {plan.summary}
                </p>

                <div className="mt-8">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.22em] ${styles.sectionLabel}`}
                  >
                    Includes
                  </p>

                  <div className={`mt-4 rounded-[1.5rem] border p-4 ${styles.includesBox}`}>
                    {plan.includes.map((item) => (
                      <p key={item} className={`py-1 text-sm leading-7 ${styles.featureText}`}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex-1">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.22em] ${styles.sectionLabel}`}
                  >
                    Core features
                  </p>

                  <div className="mt-4 space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className={`flex items-start gap-3 text-sm leading-6 ${styles.featureText}`}
                      >
                        <span className={`mt-1 text-base leading-none ${styles.bullet}`}>
                          •
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => registerPlanInterest(plan.code)}
                  className={`mt-8 rounded-2xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${styles.button}`}
                >
                  {plan.cta}
                </button>
              </article>
            )
          })}
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Trade packs
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Add specialist tools without bloating the core app
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Trade packs are optional add-ons for forms, records and
                specialist tools. The higher your core plan, the lower the pack
                price.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center text-xs font-semibold text-slate-700 sm:grid-cols-4 lg:min-w-[30rem]">
              {packPricing.map(([plan, price]) => (
                <div key={plan} className="rounded-2xl bg-slate-100 px-5 py-3">
                  <p className="uppercase tracking-[0.14em] text-slate-500">
                    {plan}
                  </p>
                  <p className="mt-1 text-sm text-slate-950">{price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="-mx-6 mt-8 overflow-x-auto px-6 pb-3 sm:-mx-8 sm:px-8">
            <div className="flex min-w-max gap-4">
              {addOns.map((addOn) => (
                <article
                  key={addOn.title}
                  className="w-[18rem] shrink-0 overflow-hidden rounded-[1.6rem] border border-slate-200 bg-slate-50 shadow-sm"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={addOn.image}
                      alt={`${addOn.title} trade pack`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      {addOn.status}
                    </span>
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-slate-950">
                      {addOn.title}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {addOn.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            What all plans are aiming to give you
          </h3>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              "A cleaner workflow from quote to invoice",
              "Better control of jobs, reminders and records",
              "A more professional customer-facing experience",
              "A platform that can grow with the business",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            All plans are billed monthly. Upgrade when you need more users,
            more jobs, more AI usage or more automation. Trade packs are
            optional add-ons unless they are included in your plan.
          </p>
        </div>
      </div>
    </section>
  )
}
