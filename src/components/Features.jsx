const features = [
  {
    title: "Dashboard",
    text: "Workload, priorities, quick actions and reminders at a glance.",
    icon: "DB",
  },
  {
    title: "Jobs and scheduling",
    text: "Create jobs, assign engineers and plan work with route context.",
    icon: "JS",
  },
  {
    title: "Customers",
    text: "Customer records, properties, contact details and history together.",
    icon: "CP",
  },
  {
    title: "Quotes and invoices",
    text: "Quote faster, invoice cleanly and keep the customer journey tidy.",
    icon: "QI",
  },
  {
    title: "Suppliers and POs",
    text: "Request prices, import supplier costs and raise purchase orders.",
    icon: "SP",
  },
  {
    title: "Inventory",
    text: "Catalogue parts with supplier pricing and cost history.",
    icon: "IV",
  },
  {
    title: "Calls",
    text: "Log calls, callbacks and customer communication in context.",
    icon: "CC",
  },
  {
    title: "Appliances",
    text: "Store appliance records, service history and reminder workflows.",
    icon: "AS",
  },
  {
    title: "Forms",
    text: "Keep job forms, service records and completed paperwork close.",
    icon: "FR",
  },
  {
    title: "Trade tools",
    text: "Diagnostics, calculators and rapid quote support in the same app.",
    icon: "TT",
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Feature overview
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Everything a trade business needs to keep moving
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            The core tools used every day, joined together instead of scattered
            across separate apps.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-700 ring-1 ring-cyan-100 transition group-hover:bg-cyan-100">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
