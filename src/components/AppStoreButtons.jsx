import { ANDROID_APP_URL, IOS_APP_URL } from "../lib/siteLinks"

function AppleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
      <path d="M16.7 12.6c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.2-1.6 2.7-.4 6.7 1.1 8.8.7 1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7s1.9.7 3 .7c1.2 0 2-1.1 2.8-2.1.8-1.2 1.2-2.3 1.2-2.4 0 0-2.4-.9-2.4-3.6Zm-2.1-6.4c.6-.7 1-1.8.9-2.8-.9 0-2 .6-2.7 1.3-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.5 2.8-1.3Z" />
    </svg>
  )
}

function GooglePlayMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
      <path d="M4.5 3.3c-.3.3-.5.8-.5 1.4v14.6c0 .6.2 1.1.5 1.4l.1.1 8.2-8.2v-.2L4.6 3.2l-.1.1Z" fill="#34a853" />
      <path d="m15.5 15.4-2.7-2.8v-.2l2.7-2.8.1.1 3.2 1.8c.9.5.9 1.3 0 1.8l-3.2 1.8-.1.3Z" fill="#fbbc04" />
      <path d="m15.6 15.1-2.8-2.8-8.3 8.4c.5.4 1.1.4 1.8 0l9.3-5.6Z" fill="#ea4335" />
      <path d="m15.6 9.9-9.3-5.6c-.7-.4-1.3-.4-1.8 0l8.3 8.3 2.8-2.7Z" fill="#4285f4" />
    </svg>
  )
}

function StoreButton({ href, eyebrow, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-[58px] min-w-[178px] items-center gap-3 rounded-2xl border border-white/15 bg-black px-4 py-3 text-left text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#07162f]"
      aria-label={`${label} ${eyebrow}`}
    >
      {icon()}
      <span className="leading-none">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-300">
          {eyebrow}
        </span>
        <span className="mt-1 block text-[17px] font-black tracking-[-0.02em]">
          {label}
        </span>
      </span>
    </a>
  )
}

export default function AppStoreButtons({ className = "" }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <StoreButton
        href={IOS_APP_URL}
        eyebrow="Download on the"
        label="App Store"
        icon={AppleMark}
      />
      {ANDROID_APP_URL ? (
        <StoreButton
          href={ANDROID_APP_URL}
          eyebrow="Get it on"
          label="Google Play"
          icon={GooglePlayMark}
        />
      ) : null}
    </div>
  )
}
