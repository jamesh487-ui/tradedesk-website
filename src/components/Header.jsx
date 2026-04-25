import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function PlatformAvailability({ mobile = false }) {
  return (
    <div className={`flex items-center gap-2 ${mobile ? "justify-center" : ""}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white shadow-sm">
        <AppleMark />
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a4c639] text-[#103b00] shadow-sm">
        <AndroidMark />
      </span>
    </div>
  )
}

function AppleMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M16.7 12.6c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.2-1.6 2.7-.4 6.7 1.1 8.8.7 1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7s1.9.7 3 .7c1.2 0 2-1.1 2.8-2.1.8-1.2 1.2-2.3 1.2-2.4 0 0-2.4-.9-2.4-3.6Zm-2.1-6.4c.6-.7 1-1.8.9-2.8-.9 0-2 .6-2.7 1.3-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.5 2.8-1.3Z" />
    </svg>
  )
}

function AndroidMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M7 8.2h10c.9 0 1.7.8 1.7 1.7v6.6c0 1-.8 1.7-1.7 1.7h-.8v2.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-2.1h-4.8v2.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-2.1H7c-1 0-1.7-.8-1.7-1.7V9.9C5.3 9 6 8.2 7 8.2Zm2-4.3c.2-.3.6-.4.8-.2.3.2.4.6.2.8L9.2 5.8c.9-.4 1.8-.6 2.8-.6s1.9.2 2.8.6l-.8-1.3c-.2-.3-.1-.7.2-.8.3-.2.7-.1.8.2l1 1.7c1.1.7 1.9 1.8 2.3 3.1H5.7c.4-1.3 1.2-2.4 2.3-3.1l1-1.7Zm.4 6.8a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Zm5.2 0a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const navItems = [
    { label: "Features", to: "/features" },
    { label: "How it works", to: "/how-it-works" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact", to: "/contact" },
  ]

  function handleNavClick() {
    setMenuOpen(false)
  }

  function scrollToId(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setMenuOpen(false)
  }

  const logo = (
    <img
      src="/tradedesk-header-logo.png"
      alt="TradeDesk"
      className="h-12 w-auto max-w-[13rem] shrink-0 object-contain sm:h-14 sm:max-w-none"
    />
  )

  const logoClassName = "inline-flex items-center"

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur md:sticky">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-10">
          {isHomePage ? (
            <button
              type="button"
              onClick={() => scrollToId("top")}
              className={logoClassName}
            >
              {logo}
            </button>
          ) : (
            <Link to="/" className={logoClassName}>
              {logo}
            </Link>
          )}

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-sm font-semibold transition hover:text-[#0d3b8f] ${
                  location.pathname === item.to ? "text-[#0d3b8f]" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <PlatformAvailability />
          {isHomePage ? (
            <button
              type="button"
              onClick={() => scrollToId("register")}
              className="rounded-xl bg-[#0d3b8f] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(13,59,143,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0b347d]"
            >
              Register interest
            </button>
          ) : (
            <Link
              to="/#register"
              onClick={handleNavClick}
              className="rounded-xl bg-[#0d3b8f] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(13,59,143,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0b347d]"
            >
              Register interest
            </Link>
          )}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm md:hidden"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={handleNavClick}
                  className={`rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-slate-50 hover:text-[#0d3b8f] ${
                    location.pathname === item.to
                      ? "bg-slate-100 text-[#0d3b8f]"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4">
              <PlatformAvailability mobile />
              {isHomePage ? (
                <button
                  type="button"
                  onClick={() => scrollToId("register")}
                  className="rounded-xl bg-[#0d3b8f] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Register interest
                </button>
              ) : (
                <Link
                  to="/#register"
                  onClick={handleNavClick}
                  className="rounded-xl bg-[#0d3b8f] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Register interest
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
    <div aria-hidden="true" className="h-[69px] md:hidden" />
    </>
  )
}
