import { Link } from "react-router-dom"
import dashboardScreenshot from "../assets/screenshots/dashboard-phone-generated.png"

const benefits = ["Save admin time", "Win work faster", "Get paid sooner"]
const featurePills = [
  "Jobs",
  "Quotes",
  "Invoices",
  "Suppliers",
  "Inventory",
  "Reminders",
]

const mobilePoints = [
  "Jobs & diary",
  "Quotes & invoices",
  "Suppliers & records",
]

export default function Hero() {
  function scrollToId(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#07162f] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(54,130,199,0.34),transparent_30%),radial-gradient(circle_at_78%_10%,rgba(30,64,175,0.24),transparent_28%),linear-gradient(180deg,#07162f_0%,#0a1d3f_66%,#f8fafc_66%,#f8fafc_100%)] sm:bg-[radial-gradient(circle_at_20%_20%,rgba(54,130,199,0.34),transparent_30%),radial-gradient(circle_at_78%_10%,rgba(30,64,175,0.24),transparent_28%),linear-gradient(180deg,#07162f_0%,#0a1d3f_56%,#f8fafc_56%,#f8fafc_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />

      <MobileHero scrollToId={scrollToId} />
      <DesktopHero scrollToId={scrollToId} />
    </section>
  )
}

function MobileHero({ scrollToId }) {
  return (
    <div className="relative mx-auto px-4 pb-8 pt-6 sm:hidden">
      <div className="inline-flex rounded-full border border-sky-300/25 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sky-100 shadow-sm backdrop-blur">
        Connected trade software
      </div>

      <h1 className="mt-4 max-w-[18rem] text-4xl font-semibold leading-[0.98] tracking-tight text-white">
        Run the whole job lifecycle in one system
      </h1>

      <div className="mt-5 grid grid-cols-[minmax(0,1fr)_8.25rem] items-start gap-3">
        <div>
          <p className="text-sm leading-6 text-slate-200">
            Manage jobs, customers, quotes, invoices, suppliers and reminders
            without jumping between separate apps.
          </p>

          <div className="mt-4 space-y-2">
            {mobilePoints.map((point) => (
              <div
                key={point}
                className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold leading-5 text-slate-100"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-1 top-5 h-[75%] rounded-[3rem] bg-sky-400/20 blur-2xl" />
          <PhoneImage className="relative max-w-[8.25rem]" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => scrollToId("register")}
          className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#07162f] shadow-lg shadow-slate-950/20"
        >
          Register
        </button>

        <Link
          to="/features"
          className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Features
        </Link>
      </div>
    </div>
  )
}

function DesktopHero({ scrollToId }) {
  return (
    <div className="relative mx-auto hidden max-w-6xl items-center gap-8 px-4 pb-12 pt-10 sm:grid sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:pb-20 lg:pt-16">
      <div className="min-w-0">
        <div className="inline-flex rounded-full border border-sky-300/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100 shadow-sm backdrop-blur">
          Connected trade business software
        </div>

        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl">
          Run the whole job lifecycle in one connected system
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
          TradeDesk helps sole traders and small businesses manage jobs,
          customers, properties, quotes, invoices, suppliers, inventory,
          reminders and records in one place.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {benefits.map((benefit) => (
            <span
              key={benefit}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white"
            >
              {benefit}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollToId("register")}
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#07162f] shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-sky-50"
          >
            Register interest
          </button>

          <Link
            to="/features"
            className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            See features
          </Link>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-2 sm:max-w-xl sm:grid-cols-3">
          {featurePills.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-slate-100 backdrop-blur"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="min-w-0">
        <div className="relative mx-auto w-full max-w-[25rem] sm:max-w-[30rem]">
          <div className="absolute inset-x-8 top-8 h-[78%] rounded-[3rem] bg-sky-400/18 blur-3xl" />

          <div className="relative flex min-h-[25rem] items-start justify-center sm:min-h-[32rem]">
            <PhoneImage className="max-w-[21rem] sm:max-w-[25rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneImage({ className }) {
  return (
    <div className="group relative z-10">
      <img
        src={dashboardScreenshot}
        alt="TradeDesk mobile dashboard showing workload, reminders and quick actions"
        className={`mx-auto block h-auto w-full drop-shadow-[0_36px_55px_rgba(2,6,23,0.35)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[1.25deg] ${className}`}
      />
    </div>
  )
}
