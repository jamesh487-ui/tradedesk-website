import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <section className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold text-slate-900">
          Contact TradeDesk
        </h1>

        <p className="mb-8 leading-relaxed text-slate-600">
          If you have any questions about TradeDesk or the product, feel free
          to get in touch.
        </p>

        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Contact details
          </h2>

          <p className="mb-2 text-slate-600">TradeDesk UK</p>

          <p className="mb-2 text-slate-600">
            Email:{" "}
            <a
              href="mailto:admin@tradedeskuk.com"
              className="text-sky-600 hover:underline"
            >
              admin@tradedeskuk.com
            </a>
          </p>

          <p className="mb-6 text-sm text-slate-500">
            We aim to respond within 1–2 working days.
          </p>

          <Link
            to="/#register"
            className="inline-block rounded-md bg-sky-600 px-6 py-3 font-medium text-white transition hover:bg-sky-700"
          >
            Register your interest
          </Link>
        </div>

        <div className="mt-10 text-sm text-slate-500">
          To hear when TradeDesk is ready, please use the{" "}
          <Link
            to="/#register"
            className="font-medium text-sky-600 hover:underline"
          >
            registration form on the homepage
          </Link>
          .
        </div>
      </section>

      <Footer />
    </main>
  )
}
