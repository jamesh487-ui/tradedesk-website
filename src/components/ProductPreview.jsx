import customerDetailScreenshot from "../assets/screenshots/customer-detail-phone.png"
import dashboardScreenshot from "../assets/screenshots/dashboard-home-phone.png"
import diaryMapScreenshot from "../assets/screenshots/diary-map-home-phone.png"
import findSlotScreenshot from "../assets/screenshots/find-slot-phone.png"

const previews = [
  {
    label: "Dashboard",
    title: "Start the day with the important work in front of you",
    text: "See live jobs, customer counts, open quotes, outstanding invoices and quick actions as soon as TradeDesk opens.",
    image: dashboardScreenshot,
  },
  {
    label: "Find slot",
    title: "Find available time without checking every day manually",
    text: "Use slot finder to search availability, then book the job into a suitable day and time with less diary chasing.",
    image: findSlotScreenshot,
  },
  {
    label: "Diary map",
    title: "See the day on a calendar and a map",
    text: "View booked stops by day, check the route visually and open jobs or maps straight from the diary.",
    image: diaryMapScreenshot,
  },
  {
    label: "Customers",
    title: "Keep the full customer picture connected",
    text: "Customer details, properties, assets, communications, jobs, quotes, invoices and records stay tied together.",
    image: customerDetailScreenshot,
  },
]

export default function ProductPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_85%_50%,rgba(59,130,246,0.14),transparent_32%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="td-reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
              Connected workflows
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              One app for the work you do every day.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-300">
            Effortlessly schedule jobs, track profit and keep payment chasing
            under control.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previews.map((preview, index) => (
            <article
              key={preview.title}
              className="td-reveal group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-3 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="-mt-2 aspect-[9/12] overflow-hidden rounded-[1.25rem] bg-slate-900">
                <img
                  src={preview.image}
                  alt={`TradeDesk ${preview.label} screenshot`}
                  className="h-full w-full scale-[1.04] object-cover object-top transition duration-500 group-hover:scale-[1.07]"
                />
              </div>

              <div className="p-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {preview.label}
                </p>
                <h3 className="mt-2 text-lg font-black leading-6 text-white">
                  {preview.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {preview.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
