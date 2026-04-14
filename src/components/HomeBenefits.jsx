import fieldPhoneImage from "../assets/screenshots/field-phone.png"

const bullets = [
  "Quickly raise jobs with auto scheduling",
  "Stay more organised with customer details and job history in one place",
  "Create quotes and invoices with automated tracking and reminders",
  "Manage suppliers, track materials and create purchase orders",
  "Automated reminders so follow-ups are never forgotten",
  "Easily track profitability inside every job",
]

export default function HomeBenefits() {
  return (
    <section className="bg-slate-50 py-12 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="td-reveal overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">
            <img
              src={fieldPhoneImage}
              alt="TradeDesk being used on site by a trade business"
              className="aspect-[4/3] w-full rounded-[1.55rem] object-cover object-center sm:aspect-[16/11]"
            />
          </div>

          <div className="td-reveal td-reveal-delay">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
              Built around your working day
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              From customer enquiry to getting paid, TradeDesk has you covered.
            </h2>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-800 shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#07162f] text-xs text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}
