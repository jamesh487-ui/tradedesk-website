const workflowItems = [
  {
    title: "Jobs and scheduling",
    text: "Create and edit jobs, assign engineers, plan work with route-aware and working-hours-aware scheduling, and keep linked job detail connected in one place.",
  },
  {
    title: "Customers and properties",
    text: "Store customer records, multiple customer types, multi-property detail, contact information and property-level context with cleaner history across the relationship.",
  },
  {
    title: "Calls and communication",
    text: "Keep call logging, callback tracking, email threads and customer communication tied to the right person, property and job instead of relying on memory.",
  },
  {
    title: "Appliances and servicing",
    text: "Track appliance records per customer and property, keep service history visible and support reminder-driven servicing and booking workflows.",
  },
  {
    title: "Job types and checklists",
    text: "Use job type templates, durations, skills and checklist templates that carry into live work so the business stays more consistent.",
  },
  {
    title: "Forms and completed records",
    text: "Keep certificates, compliance forms, service records, job forms and completed paperwork closer to the wider workflow instead of filing them separately.",
  },
]

export default function BuiltForTrade() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Built for real trade workflow
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            From the first call through to completion, records and payment
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            TradeDesk is designed for the way plumbing, heating, gas,
            renewables and field-service style businesses actually work. It
            connects day-to-day operational detail so the office side and the
            field side stay in sync.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workflowItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
