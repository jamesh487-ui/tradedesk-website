import { useEffect, useRef } from "react"
import setupFlowVideo from "../assets/videos/setup-flow.mp4"
import customersFlowVideo from "../assets/videos/customers-flow.mp4"
import jobsAutoScheduleVideo from "../assets/videos/jobs-auto-schedule.mp4"
import findSlotFlowVideo from "../assets/videos/find-slot-flow.mp4"
import checklistFlowVideo from "../assets/videos/checklist-flow.mp4"
import inventoryLabourQuoteFlowVideo from "../assets/videos/inventory-labour-quote-flow.mp4"
import quoteToInvoiceFlowVideo from "../assets/videos/quote-to-invoice-flow.mp4"
import supplierQuoteImportVideo from "../assets/videos/supplier-quote-import.mp4"

const steps = [
  {
    number: "01",
    label: "Set up",
    title: "Build the workspace around the business.",
    text: "Add business details, working hours, team members, services and the trade setup needed for the way you work.",
    recording: {
      title: "Set up the workspace",
      text: "Enter the business details, choose the trade setup, check working hours and move through the setup screens ready to start using TradeDesk.",
      video: setupFlowVideo,
    },
  },
  {
    number: "02",
    label: "Customers",
    title: "Add customers, sites and job history.",
    text: "Keep contact details, addresses, jobs, quotes, invoices, records and customer communication connected in one place.",
    recording: {
      title: "Create a customer",
      text: "Add the customer, store the main site or address, then open the customer record so jobs and documents stay connected.",
      video: customersFlowVideo,
    },
  },
  {
    number: "03",
    label: "Jobs",
    title: "Raise the job and keep the detail attached.",
    text: "Create jobs with notes, dates, durations, materials, media, checklists and customer updates from the same job record.",
    recording: {
      title: "Raise a job",
      text: "Choose a job type, add the details and open the job record so notes, media, costs and paperwork are ready in one place.",
      video: jobsAutoScheduleVideo,
    },
  },
  {
    number: "04",
    label: "Diary",
    title: "Book the work into the diary.",
    text: "Schedule manually when you want control, or use slot finder and smart scheduling when you want help filling gaps.",
    recording: {
      title: "Find a slot",
      text: "Open the slot finder, choose a suitable day and time, then check the booked work in the diary and map view.",
      video: findSlotFlowVideo,
    },
  },
  {
    number: "05",
    label: "On site",
    title: "Complete the work without losing evidence.",
    text: "Use notes, photos, videos, checklists, materials and records while the work is happening, not after everything has been forgotten.",
    recording: {
      title: "Complete work on site",
      text: "Use a checklist, add evidence and keep job notes or videos attached to the work before leaving site.",
      video: checklistFlowVideo,
    },
  },
  {
    number: "06",
    label: "Get paid",
    title: "Send paperwork and track what is still outstanding.",
    text: "Create quotes and invoices, send customer links, monitor acceptance and keep payment status connected to the job.",
    recording: {
      title: "Turn the quote into an invoice",
      text: "Convert accepted work into an invoice, preview the customer paperwork and send it out without rebuilding the job details again.",
      video: quoteToInvoiceFlowVideo,
    },
  },
]

const supplierImportRecording = {
  title: "Import supplier quotes without typing every line item.",
  text: "Upload a supplier quote, let TradeDesk read the lines, then bring the materials and prices back into the job so quoting and job costing are quicker to finish.",
  video: supplierQuoteImportVideo,
}

const quoteBuildRecording = {
  title: "Add materials, add labour and convert the quote.",
  text: "Add catalogue materials, include labour, then convert the job into a quote without rebuilding the same information twice.",
  video: inventoryLabourQuoteFlowVideo,
}

const workflowRecordings = [
  ...steps.slice(0, 5).map((step) => ({
    number: step.number,
    label: step.label,
    recording: step.recording,
  })),
  {
    number: "06",
    label: "Supplier quotes",
    recording: supplierImportRecording,
  },
  {
    number: "07",
    label: "Quotes",
    recording: quoteBuildRecording,
  },
  {
    number: "08",
    label: "Invoices",
    recording: steps[5].recording,
  },
]

function PhoneDemo({ recording }) {
  const videoRef = useRef(null)
  const isLandscape = recording.orientation === "landscape"

  useEffect(() => {
    const video = videoRef.current

    if (!video || !recording.video) {
      return undefined
    }

    video.playbackRate = recording.playbackRate ?? 1.5

    const playVideo = () => {
      video.play().catch(() => {
        // Some browsers still block autoplay. The video remains visible if that happens.
      })
    }

    if (!("IntersectionObserver" in window)) {
      playVideo()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo()
        } else {
          video.pause()
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [recording.video])

  return (
    <div
      className={`mx-auto w-full rounded-[2.4rem] bg-slate-950 p-2 shadow-2xl ring-1 ring-white/15 ${
        isLandscape ? "max-w-[34rem]" : "max-w-[18rem]"
      }`}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-900">
        <div className={`${isLandscape ? "aspect-[19.5/9]" : "aspect-[9/19.5]"} overflow-hidden bg-slate-100`}>
          {recording.video ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={recording.video}
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center px-8 text-center">
              <span className="rounded-full bg-slate-950 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-white">
                Coming next
              </span>
              <p className="mt-5 text-lg font-black tracking-[-0.04em] text-slate-950">
                Recording placeholder
              </p>
              <p className="mt-3 text-sm font-bold leading-6 text-slate-500">
                Add the iPhone screen recording here once it has been captured.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 pb-14 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="td-reveal max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
            App walkthroughs
          </p>
          <p className="mt-3 text-base font-bold leading-8 text-slate-600 sm:text-lg">
            These short videos show a small part of what TradeDesk can do,
            from setup through to scheduling, site work, supplier pricing and
            invoicing.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid gap-8">
            {workflowRecordings.map((step, index) => (
              <article
                key={step.recording.title}
                className="td-reveal grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_20rem] md:items-center md:p-8"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="relative border-l-2 border-slate-200 pl-6">
                  <span className="absolute -left-[0.72rem] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-sky-700 ring-4 ring-white" />
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-700">
                    Step {step.number} / {step.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
                    {step.recording.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base font-bold leading-8 text-slate-600">
                    {step.recording.text}
                  </p>
                </div>

                <PhoneDemo recording={step.recording} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
