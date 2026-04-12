import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">TradeDesk</h3>

            <p className="text-sm leading-relaxed text-slate-400">
              TradeDesk is the connected operating system for modern trade
              businesses, built to keep jobs, customers, quotes, invoices and
              records joined up.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-medium text-white">Platform</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/features" className="transition hover:text-white">
                Features
              </Link>

              <Link to="/how-it-works" className="transition hover:text-white">
                How it works
              </Link>

              <Link to="/pricing" className="transition hover:text-white">
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-medium text-white">Company</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="transition hover:text-white">
                Why TradeDesk
              </Link>

              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-medium text-white">Legal</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>

              <Link to="/terms" className="transition hover:text-white">
                Terms of Service
              </Link>

              <Link to="/cookies" className="transition hover:text-white">
                Cookies Policy
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Email{" "}
              <a
                href="mailto:admin@tradedeskuk.com"
                className="text-sky-400 hover:underline"
              >
                admin@tradedeskuk.com
              </a>
            </p>

            <p className="mt-1 text-sm text-slate-400">United Kingdom</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} TradeDesk. All rights reserved.</p>

          <p>Built for trade businesses, starting with plumbing and heating.</p>
        </div>
      </div>
    </footer>
  )
}
