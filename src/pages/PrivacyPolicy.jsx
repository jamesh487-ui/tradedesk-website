const sections = [
  {
    title: "1. Scope",
    paragraphs: [<>This Privacy Policy applies to:</>],
    bullets: [
      "visitors to our website",
      "people who create or use a TradeDesk account",
      "team members invited into a TradeDesk workspace",
      "customers, tenants, landlords, occupiers, suppliers and other contacts whose details are entered into TradeDesk by a workspace user",
      "people who receive messages, quotes, invoices, reminders or other communications generated through TradeDesk",
    ],
    closing: [
      <>
        TradeDesk is primarily a business-to-business software platform. In
        many cases, the TradeDesk account holder decides what customer or
        operational data is entered into the Service and how that data is used.
      </>,
    ],
  },
  {
    title: "2. Controller and processor roles",
    paragraphs: [
      <>
        For account, website, billing, support, product analytics and service
        administration data, TradeDesk acts as a data controller.
      </>,
      <>
        For customer, property, job, form, communication, financial and media
        data entered into a workspace by a user of the Service, TradeDesk
        generally acts as a data processor on behalf of that workspace.
      </>,
      <>
        If you are an end-customer of one of our users, that user or business
        is usually your primary point of contact for data protection requests
        relating to their workspace records.
      </>,
    ],
  },
  {
    title: "3. The personal data we collect",
    paragraphs: [<>We may collect and process the following categories of personal data.</>],
    subsections: [
      {
        title: "3.1 Account and identity data",
        bullets: [
          "full name",
          "email address",
          "phone number",
          "password and authentication data",
          "social sign-in identifiers for services such as Google or Apple",
          "profile image, role and team membership",
        ],
      },
      {
        title: "3.2 Workspace and business data",
        bullets: [
          "company or trading name",
          "business contact details",
          "engineer, technician or operative profile details",
          "trade type and setup preferences",
          "diary settings, pricing defaults and invoice settings",
          "subscription, plan and billing records",
        ],
      },
      {
        title: "3.3 Customer and operational data",
        bullets: [
          "customer names and contact details",
          "customer addresses and property records",
          "appliance or asset records",
          "jobs, visits, schedules, route details and notes",
          "call logs, reminders, checklists, forms and surveys",
          "quotes, invoices, payments, purchase orders and other commercial records",
          "linked emails, messages and customer communication history",
        ],
      },
      {
        title: "3.4 Media and document data",
        bullets: [
          "uploaded photos",
          "uploaded videos",
          "document files and attachments",
          "transcript text",
          "AI-generated summaries, drafts and extraction output",
        ],
      },
      {
        title: "3.5 Technical and usage data",
        bullets: [
          "IP address",
          "browser and device details",
          "app version and operating system",
          "crash reports and logs",
          "audit trail data",
          "feature usage and interaction data",
          "approximate or precise location data where location-enabled features are used",
        ],
      },
      {
        title: "3.6 Payment and financial data",
        bullets: [
          "subscription status",
          "billing history",
          "payment references",
          "limited payment-related metadata",
          "connected payout or payment account status where payment services are enabled",
        ],
        closing: [
          <>
            We do not intentionally store full payment card numbers ourselves.
            Card payments and subscription billing are generally handled by
            third-party payment processors such as Stripe.
          </>,
        ],
      },
    ],
  },
  {
    title: "4. How we collect personal data",
    paragraphs: [<>We collect personal data:</>],
    bullets: [
      "directly from you when you register, sign in, complete setup, contact us, upload files or use the Service",
      "from authorised users in your workspace",
      "from records created in TradeDesk by workspace users",
      "from third-party identity providers when you use Google or Apple sign-in",
      "from processors and integrations used to support Service features",
      "automatically through logs, cookies, app events and device or browser signals",
    ],
  },
  {
    title: "5. How we use personal data",
    paragraphs: [<>We use personal data to:</>],
    bullets: [
      "create and manage accounts, workspaces and team access",
      "provide the website, web app, mobile app and core product features",
      "create and manage customer, property, appliance, job, quote and invoice records",
      "power scheduling, routing, address validation and map-based workflows",
      "send transactional messages, emails, reminders, notices and payment links through the Service",
      "process subscriptions, billing and payment-related workflows",
      "provide support, onboarding and account communications",
      "maintain security, investigate misuse and prevent fraud",
      "improve reliability, usability, performance and product design",
      "operate AI-supported features such as extraction, drafting, summarisation, diagnostics-style assistance and transcription",
      "comply with legal, tax, accounting and regulatory obligations",
      "enforce our Terms of Service and protect the Service, our users and third parties",
    ],
  },
  {
    title: "6. Lawful bases",
    paragraphs: [
      <>
        Where UK GDPR applies, we rely on one or more of the following lawful
        bases:
      </>,
    ],
    bullets: [
      "performance of a contract",
      "legitimate interests",
      "legal obligation",
      "consent, where required",
    ],
    closing: [
      <>
        Where a workspace user enters customer data into the Service, that
        workspace user is responsible for ensuring they have a valid lawful
        basis for that processing.
      </>,
    ],
  },
  {
    title: "7. Communications sent through TradeDesk",
    paragraphs: [
      <>
        TradeDesk may be used to send operational or customer-facing
        communications such as:
      </>,
    ],
    bullets: [
      "appointment confirmations",
      "booking reminders",
      "service reminders",
      "quote emails",
      "invoice emails",
      "payment reminders",
      "customer updates",
      "SMS or similar notifications where enabled",
    ],
    closing: [
      <>
        These communications are sent on behalf of the relevant workspace or
        business. That business is responsible for the content of those
        communications and for ensuring it has the right legal basis to send
        them.
      </>,
    ],
  },
  {
    title: "8. AI, transcription and automation features",
    paragraphs: [
      <>TradeDesk may offer AI-assisted features, including:</>,
    ],
    bullets: [
      "document extraction",
      "supplier or invoice parsing",
      "quote or message drafting",
      "summarisation",
      "video transcription",
      "assistant-style or diagnostic suggestions",
    ],
    closing: [
      <>
        To provide these features, we may process prompts, notes, uploaded
        files, media, transcript text and related metadata using AI service
        providers.
      </>,
      <>
        AI-generated output may be incomplete, inaccurate or unsuitable for the
        intended purpose. Users must review any AI-assisted output before
        relying on it commercially, legally or operationally.
      </>,
    ],
  },
  {
    title: "9. Location, maps and address data",
    paragraphs: [
      <>
        If you use map, routing, postcode or address lookup features, TradeDesk
        may process:
      </>,
    ],
    bullets: [
      "postcodes and addresses entered by users",
      "route or navigation destinations",
      "approximate or precise device location where permission is granted",
    ],
    closing: [
      <>
        You can usually control location permissions through your device
        settings. Some route, map or location-enabled features may not function
        properly if location access is denied.
      </>,
    ],
  },
  {
    title: "10. Cookies and similar technologies",
    paragraphs: [
      <>
        Our website and web app may use cookies and similar technologies for:
      </>,
    ],
    bullets: [
      "authentication",
      "session management",
      "performance and reliability",
      "analytics",
      "security",
      "remembering user preferences",
    ],
    closing: [
      <>
        You can usually control cookies through your browser settings, but some
        essential Service features may not work correctly if core cookies are
        disabled.
      </>,
    ],
  },
  {
    title: "11. Sharing personal data",
    paragraphs: [
      <>
        We may share personal data with service providers who help us operate
        TradeDesk, including providers for:
      </>,
    ],
    bullets: [
      "hosting and database infrastructure",
      "authentication",
      "email delivery",
      "SMS delivery",
      "payment processing",
      "maps, geocoding and routing",
      "AI processing and transcription",
      "crash reporting, analytics and operational monitoring",
    ],
    closing: [
      <>
        Based on the current TradeDesk product and codebase, this may include
        services such as:
      </>,
    ],
    secondaryBullets: [
      "Supabase",
      "Stripe",
      "Resend",
      "Twilio or other messaging providers",
      "Google Maps Platform or postcode and geocoding providers",
      "OpenAI",
      "Apple and Google authentication services",
    ],
    finalParagraphs: [
      <>We may also share personal data:</>,
    ],
    tertiaryBullets: [
      "where required by law, regulation, court order or lawful request",
      "to establish, exercise or defend legal claims",
      "to investigate fraud, misuse or security incidents",
      "in connection with investment, financing, merger, sale or business reorganisation",
    ],
    tail: [
      <>We do not sell personal data in the ordinary meaning of that phrase.</>,
    ],
  },
  {
    title: "12. International transfers",
    paragraphs: [
      <>
        Some of our processors may store or process personal data outside the
        UK. Where required by law, we will use appropriate safeguards for
        international transfers.
      </>,
    ],
  },
  {
    title: "13. Retention",
    paragraphs: [
      <>
        We retain personal data for as long as reasonably necessary to:
      </>,
    ],
    bullets: [
      "provide the Service",
      "maintain workspace records",
      "comply with legal, tax, accounting and regulatory requirements",
      "resolve disputes",
      "enforce contractual rights",
    ],
    closing: [
      <>
        Retention periods may differ depending on the type of data. For
        example, billing records, audit logs, job histories and
        compliance-related records may be retained longer than temporary
        session or cache data.
      </>,
    ],
  },
  {
    title: "14. Security",
    paragraphs: [
      <>
        We use reasonable technical and organisational measures designed to
        protect personal data from unauthorised access, loss, misuse,
        disclosure or alteration.
      </>,
      <>No online service is completely secure, and we cannot guarantee absolute security.</>,
      <>Users are responsible for:</>,
    ],
    bullets: [
      "keeping credentials confidential",
      "using strong passwords",
      "enabling device-level security where available",
      "managing access permissions appropriately within their workspace",
      "reporting suspected unauthorised access promptly",
    ],
  },
  {
    title: "15. Your rights",
    paragraphs: [
      <>
        Depending on your location and the laws that apply, you may have rights
        to:
      </>,
    ],
    bullets: [
      "request access to personal data",
      "request correction of inaccurate data",
      "request deletion of personal data",
      "object to or restrict certain processing",
      "request portability of certain personal data",
      "withdraw consent where processing relies on consent",
      "complain to the Information Commissioner's Office or another relevant supervisory authority",
    ],
    closing: [
      <>
        If you are an end-customer whose data has been entered by a TradeDesk
        user, you should usually contact that business first.
      </>,
    ],
  },
  {
    title: "16. Children",
    paragraphs: [
      <>TradeDesk is intended for business use and is not directed to children.</>,
    ],
  },
  {
    title: "17. Third-party services",
    paragraphs: [
      <>
        The Service may contain links to or integrations with third-party
        products and services. Those third parties operate under their own
        terms and privacy policies, and we are not responsible for their
        independent practices.
      </>,
    ],
  },
  {
    title: "18. Changes to this Privacy Policy",
    paragraphs: [
      <>
        We may update this Privacy Policy from time to time. If we make
        material changes, we may notify users through the Service, by email, or
        by updating the date at the top of this document.
      </>,
    ],
  },
  {
    title: "19. Contact details",
    paragraphs: [
      <>Questions, complaints or requests about this Privacy Policy can be sent to:</>,
    ],
    contact: [
      "James Harrison trading as TradeDesk UK",
      "2 Station Road, Nafferton, East Yorkshire, YO25 4LT",
      "admin@tradedeskuk.com",
    ],
  },
  {
    title: "20. Practical publication notes",
    paragraphs: [
      <>
        Before publishing this policy, update it again if your legal trading
        identity changes, for example if you later incorporate and begin
        trading through <code>TradeDesk UK Ltd</code>.
      </>,
      <>You should also make sure the published version is linked from:</>,
    ],
    bullets: [
      "the website footer",
      "public quote and invoice pages",
      "mobile app sign-up or subscription acceptance screens",
      "any customer-facing booking or request forms",
    ],
    closing: [<>For privacy questions or requests, contact:</>],
    contact: [
      "James Harrison trading as TradeDesk UK",
      "2 Station Road, Nafferton, East Yorkshire, YO25 4LT",
      "admin@tradedeskuk.com",
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-slate-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">Last updated: 2 April 2026</p>

        <p className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-700">
          This Privacy Policy explains how{" "}
          <code>James Harrison trading as TradeDesk UK</code> (
          <code>TradeDesk</code>, <code>we</code>, <code>us</code>,{" "}
          <code>our</code>) collects, uses, stores and shares personal data
          when you use the TradeDesk website, mobile applications and related
          services (together, the <code>Service</code>).
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

              {section.finalParagraphs?.map((paragraph, index) => (
                <p key={index} className="mt-3">
                  {paragraph}
                </p>
              ))}

              {section.tertiaryBullets ? (
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  {section.tertiaryBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {section.tail?.map((paragraph, index) => (
                <p key={index} className="mt-3">
                  {paragraph}
                </p>
              ))}

              {section.subsections?.map((subsection) => (
                <div key={subsection.title} className="mt-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {subsection.title}
                  </h3>

                  {subsection.bullets ? (
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      {subsection.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {subsection.closing?.map((paragraph, index) => (
                    <p key={index} className="mt-3">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

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
