import { useState } from "react"

const faqs = [
  {
    question: "Who is TradeDesk built for?",
    answer:
      "TradeDesk is designed for UK sole traders and small trade businesses, especially plumbing, heating, gas, renewables and field-service style work where jobs, records, customers and money all need to stay connected.",
  },
  {
    question: "Is TradeDesk just a quoting app or invoicing app?",
    answer:
      "No. TradeDesk is built as a connected operating system for the wider business. Quotes, invoices, customers, properties, supplier pricing, reminders, calls, appliances and job records are designed to work together.",
  },
  {
    question: "Can I move customer data in from older systems?",
    answer:
      "Yes. TradeDesk is being built to support customer CSV import so businesses can migrate customer records more easily instead of starting from scratch.",
  },
  {
    question: "Will it support forms, certificates and digital records?",
    answer:
      "Yes. TradeDesk is being shaped to support real trade paperwork and connected digital records, including certificates, service records, job forms and completed compliance-related records as part of the wider workflow.",
  },
  {
    question: "How do I get access first?",
    answer:
      "Register your interest and we will be in touch when TradeDesk is ready, including the right invite link for your device.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleFaq(index) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Common questions
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            The important questions businesses ask before switching systems
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            TradeDesk is aimed at businesses that want better control, cleaner
            workflow and less reliance on disconnected systems.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-100"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 px-6 py-5">
                      <p className="text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
