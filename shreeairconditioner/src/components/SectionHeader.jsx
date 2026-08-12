export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>}
    </div>
  )
}
