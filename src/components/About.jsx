export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              About TradeDesk
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Built for trade businesses that have outgrown disconnected systems
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-base leading-8 text-slate-600">
              TradeDesk is being developed around the real operational pressure
              points trade businesses deal with every day: customer detail in
              one place, quotes somewhere else, invoices in another app,
              supplier prices buried in emails, reminders living in your head
              and job history spread across messages, paper notes and old
              systems.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              The goal is simple. Give sole traders and small trade businesses
              a more connected way to run work, money, records and customer
              history without making the software feel bloated or overbuilt.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              TradeDesk is positioned as the connected operating system for
              modern trade businesses, starting with plumbing, heating, gas,
              renewables and field-service style trades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
