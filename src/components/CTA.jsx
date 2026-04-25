import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../lib/supabaseClient"

const initialForm = {
  fullName: "",
  email: "",
  businessName: "",
  phoneNumber: "",
  devicePlatform: "",
  message: "",
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
    function handlePlanInterest(event) {
      const selectedPlan = String(event.detail?.plan || "").trim()
      if (!selectedPlan) return

      setForm((prev) => ({ ...prev }))
      setIsSuccess(false)
      setAnimateSuccess(false)
      setStatus({ type: "", message: "" })
    }

    window.addEventListener("tradedesk:plan-interest", handlePlanInterest)
    return () => {
      window.removeEventListener("tradedesk:plan-interest", handlePlanInterest)
    }
  }, [])

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
    const phoneNumber = form.phoneNumber.trim()
    const devicePlatform = form.devicePlatform.trim()
    const message = form.message.trim()

    if (!fullName || !email || !devicePlatform) {
      setStatus({
        type: "error",
        message: "Please complete your name, email and phone or operating system.",
      })
      return
    }

    try {
      setIsSubmitting(true)

      const payload = {
        full_name: fullName,
        email,
        business_name: businessName || null,
        phone_number: phoneNumber || null,
        device_platform: devicePlatform,
        message: message || null,
      }

      const { data, error } = await supabase.functions.invoke(
        "interest-registration",
        { body: payload },
      )

      if (error) {
        let functionErrorMessage = error.message || "Could not register your interest."
        if (error.context && typeof error.context.json === "function") {
          try {
            const errorBody = await error.context.clone().json()
            functionErrorMessage =
              errorBody?.error ||
              errorBody?.message ||
              functionErrorMessage
          } catch {
            // Keep the Supabase error message if the response body is not JSON.
          }
        }

        const message = String(functionErrorMessage || "").toLowerCase()
        const functionMissing =
          message.includes("failed to send a request") ||
          message.includes("not found") ||
          message.includes("404")

        if (!functionMissing) {
          throw new Error(functionErrorMessage)
        }

        const { error: insertError } = await supabase
          .from("interest_registrations")
          .insert({
            full_name: fullName,
            email,
            business_name: businessName || null,
            phone_number: phoneNumber || null,
            device_platform: devicePlatform,
            message: message || null,
          })

        if (insertError) throw insertError
      } else if (data && data.ok === false) {
        throw new Error(data.error || "Could not register your interest.")
      }

      setForm(initialForm)
      setIsSuccess(true)
      setStatus({
        type: "success",
        message:
          "Thanks - your interest has been registered. We will be in touch soon.",
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
            "You're already on the list. We will be in touch soon.",
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
    <section id="register" className="scroll-mt-24 bg-slate-50 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#07162f] px-5 py-8 text-white shadow-2xl shadow-slate-300/30 sm:rounded-[2.2rem] sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Register your interest
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Be one of the first to try TradeDesk
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Register your interest to get early access to TradeDesk and hear
              when it is ready to use in your business.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
              {[
                "Early access to the app",
                "Simple setup support",
                "Launch updates",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-4 font-semibold"
                >
                  {benefit}
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              TradeDesk is built for trade businesses that want a more
              organised way to manage jobs, customers, quotes and invoices.
            </p>
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
                  We will contact you when TradeDesk is ready and use your
                  device details to send the right invite link.
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
                    htmlFor="phoneNumber"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Phone number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={form.phoneNumber}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
                    placeholder="07..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="devicePlatform"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Phone / operating system
                  </label>
                  <select
                    id="devicePlatform"
                    name="devicePlatform"
                    value={form.devicePlatform}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  >
                    <option value="">Select your device</option>
                    <option value="iphone_ios">iPhone (iOS)</option>
                    <option value="ipad_ipados">iPad (iPadOS)</option>
                    <option value="android_phone">Android phone</option>
                    <option value="android_tablet">Android tablet</option>
                    <option value="other">Other</option>
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
                    placeholder="Anything useful for us to know?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Register interest"}
                </button>

                <p className="text-xs leading-relaxed text-slate-400">
                  By registering, you agree to be contacted about TradeDesk
                  and launch updates. You can unsubscribe at any time. See our{" "}
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
