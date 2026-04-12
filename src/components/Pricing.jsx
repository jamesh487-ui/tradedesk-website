const plans = [
  {
    name: "Free",
    subtitle: "Best for trying it",
    price: "£0",
    cadence: "/mo",
    summary:
      "A simple starting point for seeing how the core workflow fits your business.",
    includes: [
      "1 user",
      "Up to 20 jobs per month",
      "Core jobs, quotes, invoices and diary",
      "Manual scheduling only",
    ],
    features: [
      "Customers and properties",
      "Jobs and notes",
      "Quotes",
      "Invoices",
      "Basic diary",
      "Manual parts and scheduling",
    ],
    accent: "slate",
    cta: "Register interest",
  },
  {
    name: "Starter",
    subtitle: "Best for sole traders",
    price: "£19",
    cadence: "/mo",
    summary:
      "A stronger day-to-day setup for businesses that want quoting, scheduling and supplier workflow in one place.",
    includes: [
      "Up to 3 users",
      "Up to 75 jobs per month",
      "50 AI drafts per month",
      "Route planner, checklists and supplier workflow",
    ],
    features: [
      "Everything in Free",
      "Inbox and customer communications",
      "Supplier quotes and purchase orders",
      "Job checklists",
      "Route planner and auto scheduling",
      "Recurring jobs",
    ],
    accent: "white",
    cta: "Join waitlist",
  },
  {
    name: "Pro",
    subtitle: "Best value",
    price: "£39",
    cadence: "/mo",
    summary:
      "The plan for businesses that want deeper operational workflow, forms and smarter tools in the same system.",
    includes: [
      "Up to 5 users",
      "Up to 250 jobs per month",
      "250 AI drafts per month",
      "Full forms library, Smart Diagnostics and AI tools",
    ],
    features: [
      "Everything in Starter",
      "All forms and certificates",
      "Smart Diagnostics",
      "Supplier AI price import",
      "Video transcription",
      "Advanced reporting",
    ],
    accent: "cyan",
    badge: "Most popular",
    cta: "Join waitlist",
  },
  {
    name: "Premium",
    subtitle: "Everything included",
    price: "£69",
    cadence: "/mo",
    summary:
      "Built for busier teams that want more users, more automation and fewer platform limits as the workload grows.",
    includes: [
      "Up to 10 users",
      "Unlimited jobs per month",
      "Unlimited AI drafts per month",
      "Automation included",
    ],
    features: [
      "Everything in Pro",
      "Premium automation",
      "Unlimited usage",
      "Built for larger teams",
      "Priority access to new features",
    ],
    accent: "dark",
    cta: "Contact us",
  },
]

const planHighlights = [
  {
    title: "Scale without switching systems",
    text: "Start with the core workflow, then unlock more users, more automation and more advanced tools as the business grows.",
  },
  {
    title: "Pay for operational value",
    text: "The pricing is designed around how trade businesses actually use the product day to day, not around vague enterprise packaging.",
  },
  {
    title: "Built for cleaner workflow",
    text: "Every plan is aimed at reducing admin, improving control and keeping work, records and money better connected.",
  },
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
  return (
    <section id="pricing" className="bg-slate-50 py-20 text-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Pricing
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Pick the plan that fits how your business runs today
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Start with the core workflow, then step up as the workload grows.
            Every plan is designed around connected trade workflow rather than
            disconnected point features.
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
                  className={`mt-8 rounded-2xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${styles.button}`}
                >
                  {plan.cta}
                </button>
              </article>
            )
          })}
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
            more jobs, more AI usage or more automation. Final commercial terms
            and launch pricing may evolve as the product moves through early
            access.
          </p>
        </div>
      </div>
    </section>
  )
}
