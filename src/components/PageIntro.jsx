export default function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {text}
          </p>
        </div>
      </div>
    </section>
  )
}
