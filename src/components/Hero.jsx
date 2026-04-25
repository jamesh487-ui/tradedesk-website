import { Link } from "react-router-dom"
import dashboardScreenshot from "../assets/screenshots/dashboard-phone-generated.png"
import heroTabletScreenshot from "../assets/screenshots/hero-tablet.png"

export default function Hero() {
  function scrollToId(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="top" className="relative overflow-hidden bg-[#07162f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.26),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.2),transparent_30%),linear-gradient(180deg,#07162f_0%,#0b1e3d_100%)]" />
      <DesktopHero scrollToId={scrollToId} />
      <MobileHero scrollToId={scrollToId} />
    </section>
  )
}

function DesktopHero({ scrollToId }) {
  return (
    <div className="relative mx-auto hidden max-w-7xl px-6 pb-20 pt-14 lg:block">
      <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="td-reveal max-w-2xl">
          <p className="inline-flex rounded-full border border-cyan-200/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
            Register your interest
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-[-0.055em] text-white xl:text-7xl">
            More organised jobs. Less admin. Better profit.
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-8 text-slate-200">
            TradeDesk is built for trades that want more free time, more
            control, and a clearer way to manage every job from quote to invoice.
          </p>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => scrollToId("register")}
              className="rounded-2xl bg-white px-6 py-3 text-sm font-black text-[#07162f] shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Register your interest
            </button>

            <Link
              to="/features"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              See what it does
            </Link>
          </div>
        </div>

        <HeroDevices />
      </div>
    </div>
  )
}

function MobileHero({ scrollToId }) {
  return (
    <div className="relative mx-auto px-4 pb-12 pt-7 lg:hidden">
      <div className="td-reveal">
        <p className="inline-flex rounded-full border border-cyan-200/20 bg-white/10 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyan-100">
          Register your interest
        </p>

        <h1 className="mt-5 max-w-[24rem] text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl">
          More organised jobs. Less admin. Better profit.
        </h1>

        <p className="mt-4 max-w-lg text-base leading-7 text-slate-200">
          TradeDesk is built for trades that want more free time, more
          control, and a clearer way to manage every job from quote to invoice.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => scrollToId("register")}
            className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-[#07162f] shadow-xl shadow-slate-950/20"
          >
            Register your interest
          </button>

          <Link
            to="/features"
            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-black text-white"
          >
            Features
          </Link>
        </div>
      </div>

      <div className="td-reveal td-reveal-delay mt-9">
        <HeroDevices compact />
      </div>
    </div>
  )
}

function HeroDevices({ compact = false }) {
  return (
    <div className={`relative ${compact ? "min-h-[19rem]" : "min-h-[35rem]"}`}>
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl" />

      <div
        className={`relative shadow-2xl shadow-slate-950/35 ${
          compact
            ? "mx-auto w-full max-w-[24rem]"
            : "ml-auto mr-0 mt-10 w-[43rem]"
        }`}
      >
        <img
          src={heroTabletScreenshot}
          alt="TradeDesk tablet diary with map route and booked stops"
          className="block h-auto w-full image-render-auto"
        />
      </div>

      <div
        className={`absolute z-10 ${
          compact
            ? "-bottom-7 right-2 w-[8rem]"
            : "bottom-3 -right-2 w-[14rem] xl:-right-4 xl:w-[16rem]"
        }`}
      >
        <img
          src={dashboardScreenshot}
          alt="TradeDesk mobile dashboard"
          className="block h-auto w-full drop-shadow-[0_24px_36px_rgba(2,6,23,0.42)]"
        />
      </div>
    </div>
  )
}
