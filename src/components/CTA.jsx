import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../lib/supabaseClient"

const initialForm = {
  fullName: "",
  email: "",
  businessName: "",
  selectedPlan: "not_sure",
  interestType: "software",
  message: "",
}

const planOptions = [
  { value: "not_sure", label: "Not sure yet" },
  { value: "free", label: "Free" },
  { value: "starter", label: "Starter" },
  { value: "pro", label: "Pro" },
  { value: "premium", label: "Premium" },
]

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

const planLabel = Object.fromEntries(
  planOptions.map((plan) => [plan.value, plan.label]),
)

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
      if (!planLabel[selectedPlan]) return

      setForm((prev) => ({
        ...prev,
        selectedPlan,
        interestType: "software",
      }))
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
    const selectedPlan = form.selectedPlan
    const interestType = form.interestType
    const message = form.message.trim()
    const databaseInterestType =
      interestTypeDatabaseValue[interestType] ?? "software"
    const selectedPlanLabel = planLabel[selectedPlan] ?? "Not sure yet"
    const enrichedMessage =
      [
        `Selected plan: ${selectedPlanLabel}`,
        interestType === "software"
          ? null
          : `Selected interest: ${interestTypeLabel[interestType]}`,
        message,
      ]
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

      const payload = {
        full_name: fullName,
        email,
        business_name: businessName || null,
        interest_type: databaseInterestType,
        selected_plan: selectedPlan,
        selected_plan_label: selectedPlanLabel,
        message: enrichedMessage || null,
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
            interest_type: databaseInterestType,
            selected_plan: selectedPlan,
            selected_plan_label: selectedPlanLabel,
            message: enrichedMessage || null,
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
              Beta testing
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Test TradeDesk before launch
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We are inviting a small number of trade and field-service
              businesses to try the app, give feedback and help shape the
              launch version.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
              {[
                "Early access to the app",
                "Free setup support",
                "Direct feedback into the roadmap",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-4 font-semibold"
                >
                  {benefit}
                </div>
              ))}
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

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Early testing is open to trade businesses that want to help shape
              a more organised way to manage jobs, customers, quotes and
              invoices.
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
                    htmlFor="selectedPlan"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Plan you are interested in
                  </label>
                  <select
                    id="selectedPlan"
                    name="selectedPlan"
                    value={form.selectedPlan}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  >
                    {planOptions.map((plan) => (
                      <option key={plan.value} value={plan.value}>
                        {plan.label}
                      </option>
                    ))}
                  </select>
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
