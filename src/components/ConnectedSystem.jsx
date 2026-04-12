const connectedAreas = [
  "Jobs",
  "Customers",
  "Properties",
  "Quotes",
  "Invoices",
  "Suppliers",
  "Purchase orders",
  "Inventory",
  "Appliances",
  "Forms",
  "Reminders",
  "Communications",
]

const connectionPoints = [
  {
    title: "One source of truth",
    text: "Create a customer once, then carry that context through quotes, jobs, invoices, reminders and records without re-entering the same information.",
  },
  {
    title: "Office and field aligned",
    text: "Keep scheduling, calls, supplier detail, customer communication and job records connected so the office and engineers are working from the same picture.",
  },
  {
    title: "Built to replace patchwork systems",
    text: "Move away from spreadsheets, WhatsApp threads, invoicing apps, paper notes and disconnected customer records with one joined-up workflow.",
  },
]

export default function ConnectedSystem() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Everything connected
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Not just another quoting app. Not just invoicing. Not just CRM.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              TradeDesk connects the core parts of the business so each action
              feeds the next. Quote the work, convert it into a live job, track
              the schedule, manage supplier cost, raise the invoice, send the
              reminder and keep the full history attached to the right customer
              and property.
            </p>

            <div className="mt-8 space-y-4">
              {connectionPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              {connectedAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800"
                >
                  {area}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Each part of the workflow stays linked instead of living in
              separate apps, inboxes and loose notes. That means cleaner admin,
              clearer handover, fewer missed details and a business that feels
              under control.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
