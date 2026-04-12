const outcomes = [
  {
    title: "Less chasing",
    text: "Quotes, reminders and invoices stay visible.",
  },
  {
    title: "Less re-entry",
    text: "Customer, property and job details carry through.",
  },
  {
    title: "Better records",
    text: "Jobs, documents, photos and history stay together.",
  },
  {
    title: "More control",
    text: "See work, costs and customer updates clearly.",
  },
]

export default function Problem() {
  return (
    <section className="bg-slate-50 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Why it matters
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Stop running the business from five different places
              </h2>
            </div>

            <p className="text-base leading-7 text-slate-600 sm:text-lg">
              TradeDesk brings the daily workflow together so jobs, customers,
              quotes, invoices, suppliers and reminders are not scattered across
              paper notes, spreadsheets, messages and separate apps.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="text-base font-semibold text-slate-950">
                  {outcome.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {outcome.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
