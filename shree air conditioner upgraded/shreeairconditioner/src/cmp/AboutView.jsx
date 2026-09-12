import { Building2, MapPin, Trophy, Users } from 'lucide-react'

const highlights = [
  { name: 'Founder', value: 'Mr. Sudhir Kumar', text: 'The vision behind trusted local appliance care.' },
  { name: 'Team', value: 'Skilled technicians', text: 'Experienced service professionals for every repair.' },
  { name: 'Office', value: 'Service support center', text: 'Dedicated customer support and local assistance.' },
]

export default function AboutView() {
  return (
    <div className="space-y-8 pb-8 pt-20 sm:pb-10 sm:pt-24">
      <section className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700" style={{ fontFamily: "'Bruno Ace SC', sans-serif" }}>
          About us
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#658BC8] sm:text-5xl" style={{ fontFamily: "'trotes', sans-serif" }}>
          Built on trust, service, and long-term care
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Shree Air Conditioner is a local service-focused brand helping customers with reliable appliance care and honest support. We combine practical expertise with a friendly and transparent approach.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2 text-sky-700">
            <Trophy size={18} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Why choose us</span>
          </div>

          <div className="space-y-4 text-slate-600">
            <p>We focus on solving appliance issues efficiently with clear process and customer-first communication.</p>
            <p>From installation and seasonal servicing to emergency repairs, we aim to keep your household running smoothly.</p>
            <p>Every visit is designed to be simple, practical, and dependable for real-world home needs.</p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              <Users className="mb-3 text-sky-700" size={18} />
              <p className="text-xl font-black text-[#658BC8]">Expert</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">Support</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              <Building2 className="mb-3 text-sky-700" size={18} />
              <p className="text-xl font-black text-[#658BC8]">Local</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">Service</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              <MapPin className="mb-3 text-sky-700" size={18} />
              <p className="text-xl font-black text-[#658BC8]">On-site</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">Care</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6 shadow-sm">
          {highlights.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">{item.name}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{item.value}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
