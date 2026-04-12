const plans = [
  {
    name: "Early access",
    detail: "For trades who want launch updates and first access when TradeDesk opens.",
    points: ["Product updates", "Early access invite", "No commitment"],
  },
  {
    name: "Tester programme",
    detail: "For businesses happy to test the app and give practical feedback.",
    points: ["Free setup", "Free support", "Help shape features"],
    featured: true,
  },
  {
    name: "Paid plans",
    detail: "Simple plans will follow once the app is ready for wider release.",
    points: ["Sole trader plan", "Small team plan", "Clear monthly pricing"],
  },
]

export default function HomePlans() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Early access
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Start by registering interest
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            TradeDesk is pre-launch. We are looking for tradespeople who want to
            test it properly before wider release.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[1.5rem] border p-5 shadow-sm ${
                plan.featured
                  ? "border-sky-300 bg-sky-50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {plan.detail}
              </p>

              <ul className="mt-4 space-y-2">
                {plan.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm font-semibold text-slate-700"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
