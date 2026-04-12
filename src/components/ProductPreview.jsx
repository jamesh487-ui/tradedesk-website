import newJobScreenshot from "../assets/screenshots/new-job-screen.png"
import quotesScreenshot from "../assets/screenshots/quotes-screen.png"
import supplierQuoteScreenshot from "../assets/screenshots/supplier-quote-request-screen.png"

export default function ProductPreview() {
  const screens = [
    {
      eyebrow: "Jobs",
      title: "Book the job and keep the detail connected",
      text: "Create the job, set the schedule and keep the customer, engineer and job detail in one place.",
      proof:
        "The workflow starts cleanly instead of being rebuilt later from notes and messages.",
      theme: "job",
    },
    {
      eyebrow: "Supplier quote requests",
      title: "Bring supplier prices into the workflow",
      text: "Send requests, track status and import prices from uploads or photos.",
      proof:
        "Pricing, VAT, line items and PO conversion stay in one place.",
      theme: "supplier",
    },
    {
      eyebrow: "Quotes",
      title: "Quote professionally and let customers respond online",
      text: "Build quotes, send them to customers and give them a clear accept or decline flow.",
      proof:
        "Less chasing, fewer loose messages and a cleaner route from quote to live work.",
      theme: "light",
    },
  ]

  return (
    <section className="bg-slate-950 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Product highlights
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three parts of the workflow, joined up
          </h2>
        </div>

        <div className="mt-8 space-y-5 sm:mt-12 sm:space-y-8">
          {screens.map((screen, index) => {
            const textOrder = index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            const mockOrder = index % 2 === 0 ? "lg:order-2" : "lg:order-1"

            return (
              <div
                key={screen.eyebrow}
                className="grid gap-2 overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900 sm:rounded-[2rem] lg:grid-cols-2 lg:gap-6"
              >
                <div
                  className={`order-2 flex flex-col justify-center p-5 sm:p-8 ${textOrder}`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {screen.eyebrow}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:mt-3 sm:text-2xl">
                    {screen.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:text-base sm:leading-7">
                    {screen.text}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4 sm:leading-7">
                    {screen.proof}
                  </p>
                </div>

                <div className={`order-1 p-3 sm:p-5 ${mockOrder}`}>
                  {screen.theme === "job" && <JobImage />}
                  {screen.theme === "supplier" && <SupplierImage />}
                  {screen.theme === "light" && <QuoteImage />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function JobImage() {
  return (
    <div className="rounded-[1.25rem] border border-slate-800 bg-slate-950 p-3 shadow-2xl shadow-slate-950/20 sm:rounded-[1.75rem] sm:p-4">
      <img
        src={newJobScreenshot}
        alt="TradeDesk new job screen showing status, duration, scheduling and auto-schedule options"
        className="mx-auto w-full max-w-[17rem] object-contain drop-shadow-[0_24px_40px_rgba(15,23,42,0.28)] sm:max-w-[22rem]"
      />
    </div>
  )
}

function SupplierImage() {
  return (
    <div className="rounded-[1.25rem] border border-slate-800 bg-slate-950 p-3 shadow-2xl shadow-slate-950/20 sm:rounded-[1.75rem] sm:p-4">
      <img
        src={supplierQuoteScreenshot}
        alt="TradeDesk supplier quote request screen showing supplier status, totals, line items and convert to purchase order action"
        className="mx-auto w-full max-w-[17rem] object-contain drop-shadow-[0_24px_40px_rgba(15,23,42,0.28)] sm:max-w-[22rem]"
      />
    </div>
  )
}

function QuoteImage() {
  return (
    <div className="rounded-[1.25rem] border border-slate-800 bg-slate-950 p-3 shadow-2xl shadow-slate-950/20 sm:rounded-[1.75rem] sm:p-4">
      <img
        src={quotesScreenshot}
        alt="TradeDesk quote screen showing customer details, quote items and totals"
        className="mx-auto w-full max-w-[17rem] object-contain drop-shadow-[0_24px_40px_rgba(15,23,42,0.28)] sm:max-w-[22rem]"
      />
    </div>
  )
}
