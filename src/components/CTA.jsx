import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../lib/supabaseClient"

const initialForm = {
  fullName: "",
  email: "",
  businessName: "",
  interestType: "software",
  message: "",
}

const interestTypeDatabaseValue = {
  software: "software",
  tester: "software",
  updates: "software",
}

const interestTypeLabel = {
  software: "Early access",
  tester: "App testing with free setup and support",
  updates: "Launch updates",
}

export default function CTA() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: "", message: "" })
  const [isSuccess, setIsSuccess] = useState(false)
  const [animateSuccess, setAnimateSuccess] = useState(false)

  function updateField(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (isSuccess) {
      const timeout = setTimeout(() => {
        setAnimateSuccess(true)
      }, 30)

      return () => clearTimeout(timeout)
    }

    setAnimateSuccess(false)
  }, [isSuccess])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ type: "", message: "" })
    setIsSuccess(false)
    setAnimateSuccess(false)

    const fullName = form.fullName.trim()
    const email = form.email.trim()
    const businessName = form.businessName.trim()
    const interestType = form.interestType
    const message = form.message.trim()
    const databaseInterestType =
      interestTypeDatabaseValue[interestType] ?? "software"
    const enrichedMessage =
      interestType === "software"
        ? message || null
        : [`Selected interest: ${interestTypeLabel[interestType]}`, message]
            .filter(Boolean)
            .join("\n\n")

    if (!fullName || !email || !interestType) {
      setStatus({
        type: "error",
        message: "Please complete your name, email and interest type.",
      })
      return
    }

    try {
      setIsSubmitting(true)

      const { error } = await supabase.from("interest_registrations").insert({
        full_name: fullName,
        email,
        business_name: businessName || null,
        interest_type: databaseInterestType,
        message: enrichedMessage,
      })

      if (error) throw error

      setForm(initialForm)
      setIsSuccess(true)
      setStatus({
        type: "success",
        message:
          "Thanks - your interest has been registered. We will be in touch when TradeDesk is ready.",
      })
    } catch (error) {
      console.error("SUBMIT ERROR:", error)

      if (
        error?.message?.toLowerCase().includes("duplicate") ||
        error?.code === "23505"
      ) {
        setIsSuccess(true)
        setStatus({
          type: "success",
          message:
            "You're already on the list. We will contact you when TradeDesk opens early access.",
        })
      } else {
        setIsSuccess(false)
        setStatus({
          type: "error",
          message: error?.message || "Something went wrong. Please try again.",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#07162f] px-5 py-8 text-white shadow-2xl shadow-slate-300/30 sm:rounded-[2.2rem] sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Early access
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Help shape TradeDesk before launch
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Join the early access list if you want a cleaner way to run jobs,
              customers, quotes, invoices and follow-ups from one place.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-4">
                <div className="text-sm font-semibold text-white">
                  For real trade workflow
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-300">
                  Built around jobs, money, suppliers, customers and records.
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-4">
                <div className="text-sm font-semibold text-white">
                  Join the tester list
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-300">
                  Testers get free setup and support while helping shape the app.
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, interestType: "software" }))}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  form.interestType === "software"
                    ? "bg-white text-slate-900"
                    : "border border-slate-600 text-white hover:bg-slate-800"
                }`}
              >
                Join early access
              </button>

              <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, interestType: "tester" }))}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  form.interestType === "tester"
                    ? "bg-cyan-300 text-slate-950"
                    : "border border-slate-600 text-white hover:bg-slate-800"
                }`}
              >
                Join tester list
              </button>
            </div>

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-cyan-300">•</span>
                <p>Be first to hear when early access opens.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-cyan-300">•</span>
                <p>Get updates as the product develops.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-cyan-300">•</span>
                <p>Register as a tester if you want to try TradeDesk before wider release.</p>
              </div>
            </div>
          </div>

          {isSuccess ? (
            <div
              className={`rounded-[1.75rem] border border-emerald-500/30 bg-slate-800 p-6 transition-all duration-500 ease-out ${
                animateSuccess
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <div className="flex h-full flex-col justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl text-white transition-all duration-500 delay-100 ${
                    animateSuccess ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                >
                  ✓
                </div>

                <h3
                  className={`mt-5 text-2xl font-semibold text-white transition-all duration-500 delay-150 ${
                    animateSuccess
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  You're on the list
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 text-slate-300 transition-all duration-500 delay-200 ${
                    animateSuccess
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  {status.message}
                </p>

                <p
                  className={`mt-4 text-sm text-slate-400 transition-all duration-500 delay-300 ${
                    animateSuccess
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  We will email you when TradeDesk is ready for early access,
                  product updates and tester invites.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false)
                    setAnimateSuccess(false)
                    setStatus({ type: "", message: "" })
                  }}
                  className={`mt-6 inline-flex self-center rounded-2xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-500 delay-400 hover:bg-slate-700 ${
                    animateSuccess
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  Submit another response
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-slate-700 bg-slate-800 p-6"
            >
              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Business name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={form.businessName}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                    placeholder="Business name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interestType"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    I want to hear about
                  </label>
                  <select
                    id="interestType"
                    name="interestType"
                    value={form.interestType}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  >
                    <option value="software">Early access</option>
                    <option value="tester">App testing - free setup and support</option>
                    <option value="updates">Launch updates</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                    placeholder="Tell us a bit about your business or what you would want to test."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : form.interestType === "tester"
                      ? "Join tester list"
                      : "Register interest"}
                </button>

                <p className="text-xs leading-relaxed text-slate-400">
                  By registering, you agree to be contacted about TradeDesk
                  early access, tester invites and launch updates. You can
                  unsubscribe at any time. See our{" "}
                  <Link to="/privacy" className="text-cyan-300 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>

                {status.message && status.type === "error" ? (
                  <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    {status.message}
                  </div>
                ) : null}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
