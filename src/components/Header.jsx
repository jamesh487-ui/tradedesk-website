import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const navItems = [
    { label: "Features", to: "/features" },
    { label: "How it works", to: "/how-it-works" },
    { label: "Pricing", to: "/pricing" },
    { label: "Why TradeDesk", to: "/about" },
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
      className="h-10 w-auto shrink-0 object-contain sm:h-11"
    />
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07162f]/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {isHomePage ? (
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="rounded-2xl bg-white px-3 py-1.5 shadow-sm"
          >
            {logo}
          </button>
        ) : (
          <Link to="/" className="rounded-2xl bg-white px-3 py-1.5 shadow-sm">
            {logo}
          </Link>
        )}

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-sm font-medium transition hover:text-sky-200 ${
                location.pathname === item.to ? "text-white" : "text-slate-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isHomePage ? (
            <button
              type="button"
              onClick={() => scrollToId("register")}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#07162f] transition hover:-translate-y-0.5 hover:bg-sky-50"
            >
              Register interest
            </button>
          ) : (
            <Link
              to="/#register"
              onClick={handleNavClick}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#07162f] transition hover:-translate-y-0.5 hover:bg-sky-50"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white md:hidden"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#07162f] md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={handleNavClick}
                  className={`rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-white/10 hover:text-white ${
                    location.pathname === item.to
                      ? "bg-white/10 text-white"
                      : "text-slate-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
              {isHomePage ? (
                <button
                  type="button"
                  onClick={() => scrollToId("register")}
                  className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#07162f]"
                >
                  Register interest
                </button>
              ) : (
                <Link
                  to="/#register"
                  onClick={handleNavClick}
                  className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#07162f]"
                >
                  Register interest
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
