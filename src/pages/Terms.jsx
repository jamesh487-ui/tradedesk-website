const sections = [
  {
    title: "1. Who we are",
    paragraphs: [
      <>
        TradeDesk is provided by{" "}
        <code>James Harrison trading as TradeDesk UK</code> (
        <code>TradeDesk</code>, <code>we</code>, <code>us</code>,{" "}
        <code>our</code>).
      </>,
    ],
  },
  {
    title: "2. Acceptance and eligibility",
    paragraphs: [
      <>
        By creating an account, subscribing to, accessing or using the Service,
        you agree to these Terms and our Privacy Policy.
      </>,
      <>You confirm that:</>,
    ],
    bullets: [
      "you are using the Service for business purposes",
      "you are legally capable of entering into this agreement",
      "if you act for a company, partnership or other organisation, you have authority to bind that organisation",
    ],
    closing: [
      <>If you do not agree to these Terms, you must not use the Service.</>,
    ],
  },
  {
    title: "3. What TradeDesk is",
    paragraphs: [
      <>
        TradeDesk is software for trade and field-service businesses. Depending
        on the plan and features enabled, it may include tools for:
      </>,
    ],
    bullets: [
      "customers and property records",
      "appliances, assets and site data",
      "jobs, diary scheduling and routing",
      "checklists, forms, surveys and certificates",
      "photos, videos and transcripts",
      "quotes, invoices and payment workflows",
      "supplier requests and document extraction",
      "email, SMS and customer communication workflows",
      "mobile and web access for authorised users",
    ],
    closing: [
      <>
        We may add, change, improve, suspend or remove features from time to
        time.
      </>,
    ],
  },
  {
    title: "4. Business tool only",
    paragraphs: [
      <>
        TradeDesk is a business operations tool. You remain responsible for
        your business decisions, pricing, customer communications, legal
        compliance, record-keeping and professional obligations.
      </>,
    ],
  },
  {
    title: "5. Accounts and workspace security",
    paragraphs: [<>You are responsible for:</>],
    bullets: [
      "keeping credentials secure",
      "ensuring only authorised people access your workspace",
      "assigning permissions appropriately",
      "activity carried out under your account, except to the extent caused by our breach",
    ],
    closing: [
      <>
        You must notify us promptly if you suspect unauthorised access or
        account compromise.
      </>,
    ],
  },
  {
    title: "6. Customer Data",
    paragraphs: [
      <>
        You retain ownership of the data, documents, media, records and content
        that you or your team upload, create or store in the Service (
        <code>Customer Data</code>).
      </>,
      <>
        You grant us a limited, non-exclusive right to host, copy, process,
        transmit, display, back up and otherwise use Customer Data only as
        needed to:
      </>,
    ],
    bullets: [
      "provide the Service",
      "maintain security and operational integrity",
      "support and troubleshoot your workspace",
      "improve the Service using aggregated or de-identified data",
      "comply with law",
    ],
    closing: [
      <>
        You are responsible for ensuring that you have the right to upload,
        store, send and process Customer Data through the Service.
      </>,
    ],
  },
  {
    title: "7. Your responsibilities",
    paragraphs: [<>You must:</>],
    bullets: [
      "use the Service lawfully and responsibly",
      "keep business and customer information reasonably accurate",
      "obtain any permissions, consents or lawful bases you need",
      "comply with privacy, consumer, communications, tax, payment, trade and regulatory laws that apply to your business",
      "review AI-assisted or automated outputs before relying on them",
    ],
    closing: [<>You must not:</>],
    secondaryBullets: [
      "use the Service to break the law",
      "misuse, harass or mislead customers, suppliers or third parties",
      "upload malicious code or interfere with the Service",
      "attempt to access systems, accounts or data without authorisation",
      "use the Service to store or distribute illegal, harmful, fraudulent or deceptive content",
    ],
  },
  {
    title: "8. Trade-specific tools, forms and certificates",
    paragraphs: [
      <>
        TradeDesk may include trade-specific forms, templates, checklists,
        certificates, surveys, reminders, calculators or suggested workflows.
      </>,
      <>
        Unless we expressly state otherwise, these are operational aids only.
        We do not guarantee that any form, certificate, reminder, checklist,
        workflow or suggested process is legally sufficient, insurer-approved,
        regulator-approved or appropriate for every trade, job type, region or
        accreditation scheme.
      </>,
      <>
        You remain responsible for checking that your output is correct and
        suitable for your business and compliance obligations.
      </>,
    ],
  },
  {
    title: "9. AI-assisted features",
    paragraphs: [
      <>TradeDesk may provide AI-assisted features such as:</>,
    ],
    bullets: [
      "drafting",
      "extraction",
      "transcription",
      "summaries",
      "assistant-style suggestions",
      "diagnostics-style prompts",
    ],
    closing: [
      <>
        AI output may be incomplete, inaccurate or unsuitable. You must review
        it before using it in customer communications, quotations, invoices,
        technical decisions, forms, compliance paperwork or job records.
      </>,
      <>
        We may change, limit, suspend or charge separately for AI-backed
        features.
      </>,
    ],
  },
  {
    title: "10. Third-party services and integrations",
    paragraphs: [
      <>
        The Service may depend on or integrate with third-party providers for
        identity, hosting, email, SMS, payments, maps, routing, postcode
        lookup, transcription, AI or support services.
      </>,
      <>
        Your use of those third-party services may also be governed by their
        own terms and privacy policies.
      </>,
      <>
        We are not responsible for third-party services outside our reasonable
        control, including outages, price changes, API changes, account
        restrictions, discontinued features or third-party data handling.
      </>,
    ],
  },
  {
    title: "11. Fees, subscriptions and billing",
    paragraphs: [
      <>
        Some features of the Service are paid on a subscription, seat-based or
        usage-based basis.
      </>,
      <>
        By starting a paid plan, upgrading, renewing or using a chargeable
        feature, you agree to pay the charges, fees and taxes shown to you at
        the relevant time.
      </>,
      <>Unless we expressly state otherwise:</>,
    ],
    bullets: [
      "subscriptions renew automatically until cancelled",
      "plan changes may affect future charges",
      "usage-based or overage features may create additional charges",
      "fees paid for a billing period are generally non-refundable once that period starts, except where required by law",
    ],
    closing: [
      <>
        If billing, checkout, customer card payments or subscription management
        are handled by Stripe or another payment provider, that provider may
        process your payment details subject to its own terms and policies.
      </>,
      <>We may suspend, limit or downgrade access for overdue accounts.</>,
    ],
  },
  {
    title: "12. Free trials, previews and beta features",
    paragraphs: [
      <>
        We may offer free trials, discounted onboarding, preview tools or beta
        features.
      </>,
      <>
        These may be limited, changed or withdrawn at any time and may have
        reduced support, stability or warranty.
      </>,
    ],
  },
  {
    title: "13. Communications sent through TradeDesk",
    paragraphs: [
      <>
        The Service may allow you to send emails, texts, reminders, appointment
        updates, quotes, invoices, payment links and other communications.
      </>,
      <>You are solely responsible for:</>,
    ],
    bullets: [
      "message content",
      "recipient selection",
      "whether you have consent or another lawful basis",
      "compliance with direct marketing and communications rules",
    ],
    closing: [<>We act as a software provider for those communications.</>],
  },
  {
    title: "14. Availability, support and backup",
    paragraphs: [
      <>
        We aim to make the Service available and reliable, but we do not
        guarantee uninterrupted or error-free operation.
      </>,
      <>
        We may perform maintenance, updates, repairs or emergency work from
        time to time.
      </>,
      <>
        You are responsible for exporting or retaining your own records where
        necessary. While we maintain backups and operational safeguards, we do
        not guarantee against every form of loss, corruption or outage.
      </>,
    ],
  },
  {
    title: "15. Intellectual property",
    paragraphs: [
      <>
        We or our licensors own all rights in the Service, including software,
        branding, content structure, design, code, documentation and platform
        features, excluding your Customer Data.
      </>,
      <>These Terms do not transfer any ownership rights in the Service to you.</>,
      <>
        You must not copy, resell, reverse engineer, decompile or exploit the
        Service except where permitted by law or with our written permission.
      </>,
    ],
  },
  {
    title: "16. Suspension and termination",
    paragraphs: [<>We may suspend, restrict or terminate access if:</>],
    bullets: [
      "you materially breach these Terms",
      "fees remain unpaid",
      "your use creates security, legal or operational risk",
      "we are required to do so by law",
      "a third-party provider materially restricts the infrastructure required to continue serving your account",
    ],
    closing: [
      <>
        You may stop using the Service and cancel your subscription in
        accordance with the cancellation terms that apply to your account.
      </>,
      <>
        Termination does not remove rights or obligations that accrued before
        termination, including payment obligations.
      </>,
    ],
  },
  {
    title: "17. Confidentiality",
    paragraphs: [
      <>
        Each party must keep the other party&apos;s confidential information
        confidential and use it only as needed for the relationship under these
        Terms, except where disclosure is required by law or the information is
        already lawfully public.
      </>,
    ],
  },
  {
    title: "18. Warranties and disclaimers",
    paragraphs: [
      <>
        To the maximum extent permitted by law, the Service is provided on an{" "}
        <code>as is</code> and <code>as available</code> basis.
      </>,
      <>We do not warrant that:</>,
    ],
    bullets: [
      "the Service will always be uninterrupted or error-free",
      "every feature will always be available",
      "outputs or generated content will always be accurate",
      "the Service will meet every business, trade, insurance, contractual or legal requirement",
    ],
    closing: [
      <>
        Nothing in these Terms excludes liability that cannot lawfully be
        excluded.
      </>,
    ],
  },
  {
    title: "19. Limitation of liability",
    paragraphs: [
      <>
        To the maximum extent permitted by law, TradeDesk will not be liable
        for:
      </>,
    ],
    bullets: [
      "indirect or consequential loss",
      "loss of profit",
      "loss of revenue",
      "loss of business opportunity",
      "loss of goodwill",
      "loss or corruption of data",
    ],
    closing: [
      <>
        Subject to applicable law, our total liability arising from or in
        connection with the Service will not exceed the greater of:
      </>,
    ],
    secondaryBullets: [
      "the amount paid by you to TradeDesk in the 12 months before the event giving rise to the claim, or",
      "[Insert minimum fallback amount if desired]",
    ],
  },
  {
    title: "20. Indemnity",
    paragraphs: [
      <>
        You agree to indemnify and hold TradeDesk harmless against claims,
        liabilities, losses and costs arising from:
      </>,
    ],
    bullets: [
      "your misuse of the Service",
      "your breach of these Terms",
      "your Customer Data",
      "your communications with customers, tenants, occupiers or suppliers",
      "your breach of law or third-party rights",
    ],
  },
  {
    title: "21. Privacy",
    paragraphs: [
      <>
        Our Privacy Policy explains how we handle personal data and forms part
        of these Terms.
      </>,
    ],
  },
  {
    title: "22. Changes to these Terms",
    paragraphs: [
      <>
        We may update these Terms from time to time. If we make material
        changes, we may notify you in the Service, by email, or by updating the
        date shown at the top of the document.
      </>,
      <>
        Your continued use of the Service after updated Terms take effect means
        you accept the revised Terms.
      </>,
    ],
  },
  {
    title: "23. Governing law and jurisdiction",
    paragraphs: [
      <>
        These Terms are governed by the laws of <code>England and Wales</code>.
      </>,
      <>
        The courts of that jurisdiction will have exclusive jurisdiction unless
        applicable law requires otherwise.
      </>,
    ],
  },
  {
    title: "24. Contact",
    paragraphs: [<>Questions about these Terms can be sent to:</>],
    contact: [
      "James Harrison trading as TradeDesk UK",
      "2 Station Road, Nafferton, East Yorkshire, YO25 4LT",
      "admin@tradedeskuk.com",
    ],
  },
  {
    title: "25. Practical publication notes",
    paragraphs: [
      <>
        Before publishing these Terms, update them again if your legal trading
        identity changes, for example if you later incorporate and begin
        trading through <code>TradeDesk UK Ltd</code>.
      </>,
      <>You should also make sure these Terms are linked from:</>,
    ],
    bullets: [
      "the website footer",
      "native sign-up or subscription screens",
      "public-facing signup, quote or invoice journeys where appropriate",
    ],
  },
]

export default function Terms() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-slate-900">
          Terms of Service
        </h1>

        <p className="mt-4 text-sm text-slate-500">Last updated: 2 April 2026</p>

        <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
          These Terms of Service (<code>Terms</code>) govern your access to and
          use of the TradeDesk website, mobile applications and related services
          (together, the <code>Service</code>).
        </p>

        <div className="mt-10 space-y-8 leading-7 text-slate-600">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-slate-900">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mt-2">
                  {paragraph}
                </p>
              ))}

              {section.bullets ? (
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {section.closing?.map((paragraph, index) => (
                <p key={index} className="mt-3">
                  {paragraph}
                </p>
              ))}

              {section.secondaryBullets ? (
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  {section.secondaryBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {section.contact ? (
                <p className="mt-3 whitespace-pre-line">
                  {section.contact.join("\n")}
                </p>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
