import { Link } from "react-router-dom"
import {
  ANDROID_APP_URL,
  IOS_APP_URL,
  SUPPORT_EMAIL,
  WEB_APP_SIGNIN_URL,
} from "../lib/siteLinks"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">Roscoe</h3>

            <p className="text-sm leading-relaxed text-slate-400">
              Roscoe is the polished workspace for trade businesses that want
              cleaner scheduling, better paperwork and stronger day-to-day
              control.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={WEB_APP_SIGNIN_URL}
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900"
              >
                Log in
              </a>
              <Link
                to="/desktop"
                className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Desktop workspace
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-medium text-white">Product</h4>

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

              <Link to="/desktop" className="transition hover:text-white">
                Desktop
              </Link>

              <a href={WEB_APP_SIGNIN_URL} className="transition hover:text-white">
                Web app login
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-medium text-white">Resources</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>

              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>

              <a href={IOS_APP_URL} className="transition hover:text-white">
                iPhone app
              </a>

              {ANDROID_APP_URL ? (
                <a href={ANDROID_APP_URL} className="transition hover:text-white">
                  Android app
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-medium text-white">Legal & support</h4>

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

              <Link to="/account-deletion" className="transition hover:text-white">
                Account Deletion
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-sky-400 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Roscoe Software Ltd, 2 Station Road, Nafferton, Driffield,
              England, YO25 4LT, United Kingdom
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Roscoe Software Ltd. All rights
            reserved.
          </p>

          <p>Built for trade and field-service businesses.</p>
        </div>
      </div>
    </footer>
  )
}
