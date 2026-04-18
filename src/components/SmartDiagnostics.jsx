import badgeScreenshot from "../assets/screenshots/smart-diagnostics-badge.png"
import checksScreenshot from "../assets/screenshots/smart-diagnostics-checks.png"
import confirmScreenshot from "../assets/screenshots/smart-diagnostics-confirm.png"
import summaryScreenshot from "../assets/screenshots/smart-diagnostics-summary.png"

const steps = [
  {
    title: "Add the fault detail",
    text: "Start with a fault code, symptom notes or a photo of the badge or display. Engineers can capture the detail while the job is still fresh.",
    image: badgeScreenshot,
    alt: "Smart Diagnostics screen for adding a boiler badge photo, fault code and symptom notes",
  },
  {
    title: "Confirm the appliance",
    text: "TradeDesk can pull through useful appliance details where available, including manufacturer, model, GC number and output.",
    image: confirmScreenshot,
    alt: "Smart Diagnostics screen for confirming detected appliance details",
  },
  {
    title: "Review the likely fault",
    text: "The diagnosis view gives a clearer starting point with likely causes, confidence signals and practical repair direction.",
    image: summaryScreenshot,
    alt: "Smart Diagnostics screen showing likely boiler fault and appliance summary",
  },
  {
    title: "Work through the next checks",
    text: "Use suggested checks and repair options before quoting, ordering parts or beginning the repair on site.",
    image: checksScreenshot,
    alt: "Smart Diagnostics screen showing practical checks and repair guidance",
  },
]

const benefits = [
  "Identify likely boiler faults in seconds",
  "Use fault codes, symptoms or badge and display photos",
  "Recognise appliance details where available",
  "Suggest likely causes and next checks",
  "Support faster quoting and parts decisions",
  "Give engineers a stronger starting point on real jobs",
]

export default function SmartDiagnostics() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Smart Diagnostics
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A faster starting point for boiler fault finding
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Smart Diagnostics helps engineers identify likely boiler faults in
            seconds using a fault code, symptom notes, or even a photo of the
            badge or display.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-500">
            It combines the details you enter with appliance recognition and
            Smart analysis to suggest the most likely cause, the checks to
            carry out next and practical repair options. Where available, it
            can also pull through key appliance details like manufacturer,
            model, GC number and output.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Built for speed on real jobs, it gives engineers a clearer starting
            point before they quote, order parts or begin a repair.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700"
            >
              {benefit}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <img
                  src={step.image}
                  alt={step.alt}
                  className="mx-auto h-auto w-full max-w-[15rem] rounded-[1.25rem] object-contain drop-shadow-[0_18px_30px_rgba(15,23,42,0.18)]"
                />

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
