import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { hasAnalyticsConfig, loadGoogleAnalytics, loadMetaPixel, trackPageView } from "../lib/analytics"

const STORAGE_KEY = "roscoe_cookie_consent"

function readConsent() {
  if (typeof window === "undefined") {
    return null
  }

  return window.localStorage.getItem(STORAGE_KEY)
}

export default function CookieConsentBanner() {
  const location = useLocation()
  const [consent, setConsent] = useState(() => readConsent())

  useEffect(() => {
    if (consent === "accepted") {
      loadGoogleAnalytics()
      loadMetaPixel()
      trackPageView(`${location.pathname}${location.search}${location.hash}`)
    }
  }, [consent, location.hash, location.pathname, location.search])

  if (!hasAnalyticsConfig() || consent) {
    return null
  }

  function saveConsent(value) {
    window.localStorage.setItem(STORAGE_KEY, value)
    setConsent(value)
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-4xl rounded-[1.4rem] border border-white/15 bg-slate-950 p-4 text-white shadow-2xl shadow-slate-950/30 sm:bottom-5 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:p-5">
      <div>
        <p className="text-sm font-black tracking-[-0.02em]">Analytics cookies</p>
        <p className="mt-1 max-w-2xl text-xs font-semibold leading-5 text-slate-300 sm:text-sm">
          We use analytics tools to understand which pages people use and measure marketing performance. You can accept analytics cookies or keep them off.
          Read more in our{" "}
          <Link to="/cookies" className="font-black text-cyan-200 underline underline-offset-4">
            Cookies Policy
          </Link>
          .
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-0 sm:flex sm:shrink-0">
        <button
          type="button"
          onClick={() => saveConsent("declined")}
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-slate-200 transition hover:bg-white/10"
        >
          Keep off
        </button>
        <button
          type="button"
          onClick={() => saveConsent("accepted")}
          className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-slate-950 transition hover:bg-cyan-200"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
