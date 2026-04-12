const benefitCards = [
  {
    title: "Save admin time",
    bullets: [
      "Book jobs without re-entering details",
      "Keep customer and property records together",
      "Use reminders so follow-ups do not live in your head",
    ],
  },
  {
    title: "Win more work",
    bullets: [
      "Send cleaner, professional quotes",
      "Let customers accept or decline online",
      "Keep quote wording and job detail ready to reuse",
    ],
  },
  {
    title: "Control costs and cash",
    bullets: [
      "Import supplier prices from uploads or photos",
      "Raise purchase orders from supplier pricing",
      "Send invoices and keep payment follow-ups visible",
    ],
  },
]

const featureList = [
  "Jobs and diary",
  "Customers and properties",
  "Quotes and invoices",
  "Supplier quote requests",
  "Purchase orders",
  "Inventory pricing",
  "Calls and reminders",
  "Customer portal",
]

export default function HomeBenefits() {
  return (
    <section className="bg-slate-50 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Built for trades
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Less admin. Cleaner records. Better control.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              TradeDesk is for sole traders and small teams that want the day to
              feel less scattered, from first enquiry to final invoice.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {featureList.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {card.title}
                </h3>

                <ul className="mt-4 space-y-2">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
