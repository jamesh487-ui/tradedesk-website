const reminderItems = [
  "Service reminders",
  "Appointment reminders",
  "Booking confirmations",
  "Quote reminders",
  "Invoice reminders",
  "Online booking direction",
]

const tools = [
  "Smart Diagnostics / Fault Finder",
  "Heat loss calculator",
  "Pipe sizing",
  "Gas rate calculator",
  "Rapid quote builder",
]

const reasons = [
  "Less admin and less re-entry",
  "Better control of jobs, money and customer history",
  "Cleaner workflow between office and field work",
  "More professional customer-facing documents and pages",
  "Fewer missed reminders, callbacks and follow-ups",
  "Clearer supplier pricing and stronger record keeping",
]

export default function WorkflowBenefits() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Reminders and recurring work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Reduce dropped jobs, forgotten follow-ups and unpaid work
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              A lot of lost revenue is not dramatic. It is the quote that never
              got chased, the service reminder that never went out, the booking
              that was not confirmed, or the invoice that slipped. TradeDesk is
              designed to keep those follow-ups visible and connected.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {reminderItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-4 text-sm font-semibold text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Built-in trade tools
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Practical tools that belong inside the same system
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              TradeDesk includes specialist tools to support real operational
              work, not gimmicks. The goal is to help engineers and office
              workflow move faster without jumping between separate apps.
            </p>

            <div className="mt-8 space-y-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-4 text-sm font-semibold text-slate-100"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Why tradespeople choose it
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for businesses that want better control without the chaos
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-2xl border border-slate-800 bg-slate-950 px-5 py-5 text-sm font-medium text-slate-200"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
