const plans = [
  {
    name: "Free",
    price: "£0",
    suffix: "/mo",
    badge: "Best for trying it",
    limits: [
      "1 user",
      "Up to 20 jobs per calendar month",
      "20 AI drafts per month",
      "Core jobs, quotes, invoices and diary",
      "Deposits and staged invoices",
      "Manual scheduling",
    ],
    features: [
      "Customer management",
      "Job management",
      "Quote management",
      "Invoice management",
      "Deposits and staged invoices",
      "Basic diary",
      "Basic checklists",
      "Secure quote and invoice links",
      "Inventory management",
    ],
  },
  {
    name: "Starter",
    price: "£24",
    suffix: "/mo",
    badge: "Best for sole traders",
    limits: [
      "Up to 3 users",
      "Up to 50 jobs per calendar month",
      "50 AI drafts per month",
      "Inbox, reminders and supplier tools",
    ],
    features: [
      "Everything in Free",
      "TradeDesk inbox and customer messages",
      "Customer portal",
      "Online booking",
      "Asset and appliance records",
      "Supplier management and purchase orders",
      "Diary slot finder",
      "Advanced checklists and checklist reports",
      "Service and follow-up reminders",
      "Branded paperwork",
    ],
  },
  {
    name: "Pro",
    price: "£49",
    suffix: "/mo",
    badge: "Best value",
    limits: [
      "Unlimited users",
      "Up to 150 jobs per calendar month",
      "250 AI drafts per month",
      "40 smart AI functions and 10 route planner runs",
    ],
    features: [
      "Everything in Starter",
      "Advanced records and documents",
      "Smart Diagnostics",
      "Supplier AI price import",
      "Video transcription",
      "Smart auto scheduler",
      "Job profit tracking",
      "Advanced reporting and KPIs",
      "Customer job tracking links",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "£89",
    suffix: "/mo",
    badge: "Built for higher volume",
    limits: [
      "Unlimited users",
      "Up to 350 jobs per calendar month",
      "Unlimited AI drafts per month",
      "75 smart AI functions and 25 route planner runs",
    ],
    features: [
      "Everything in Pro",
      "Higher monthly caps",
      "Advanced route planner",
      "Priority setup and support",
      "Designed for higher-volume businesses",
    ],
  },
]

export default function HomePlans() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="td-reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
              Plans at launch
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Choose a plan that best fits your business.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600">
            Start with the core tools, then move up when you need more jobs,
            more automation, more team access or a more advanced setup.
          </p>
        </div>

        <div className="-mx-4 mt-8 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6">
          <div className="flex min-w-max gap-4">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`td-reveal flex w-[18.5rem] shrink-0 flex-col rounded-[1.7rem] border p-5 shadow-sm transition hover:-translate-y-1 sm:w-[20rem] sm:p-6 ${
                  plan.featured
                    ? "border-sky-300 bg-sky-50 shadow-sky-100"
                    : "border-slate-200 bg-slate-50"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-700">
                      {plan.badge}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-slate-950">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-3xl font-black tracking-tight text-slate-950">
                      {plan.price}
                    </span>
                    <span className="text-sm font-bold text-slate-500">
                      {plan.suffix}
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  {plan.limits.map((limit) => (
                    <div
                      key={limit}
                      className="rounded-2xl border border-white bg-white/80 px-3 py-2 text-sm font-bold leading-5 text-slate-700"
                    >
                      {limit}
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Includes
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
