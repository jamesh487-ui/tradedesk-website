const steps = [
  {
    number: "01",
    title: "Capture the enquiry properly",
    text: "Add the customer, property, contact detail, job notes and context once so the work starts in a connected record instead of scattered notes.",
  },
  {
    number: "02",
    title: "Price the job with better cost visibility",
    text: "Request supplier pricing, compare responses, use inventory context and build the quote with clearer cost and margin awareness.",
  },
  {
    number: "03",
    title: "Send the quote and convert it into live work",
    text: "Use professional quote pages, cleaner wording and customer accept or decline flow, then convert accepted work without rebuilding everything twice.",
  },
  {
    number: "04",
    title: "Plan the diary and complete the job",
    text: "Schedule engineers, route the day more clearly, carry job checklists and keep customer, property and appliance detail connected during the work.",
  },
  {
    number: "05",
    title: "Invoice, remind and keep the record",
    text: "Send invoices, follow up payments, keep completed records and maintain the history for future work, servicing and repeat business.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A connected workflow from first enquiry to final payment
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            TradeDesk is built so the business can move through the full job
            lifecycle without losing detail between systems. That means less
            re-entry, fewer missed steps and a workflow that feels easier to
            control as work builds up.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-0 right-0 top-11 hidden lg:block">
            <div className="mx-16 border-t border-slate-300" />
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number} className="relative h-full">
                <div className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700 ring-1 ring-cyan-100">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[24ch] text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
