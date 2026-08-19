import { ArrowUpRight, ShieldCheck, Snowflake, Wrench } from 'lucide-react'
import SectionHeader from './SectionHeader'

const serviceIcons = {
  'AC Services': Snowflake,
  'Refrigerator Services': ShieldCheck,
  'Washing Machine Services': Wrench,
}

export default function ServiceSection({ services }) {
  return (
    <section id="services" className="py-20 sm:py-24">
      <SectionHeader
        eyebrow="Services"
        title="Reliable appliance care for every home"
        text="Transparent pricing and expert guidance for ACs, refrigerators, and washing machines."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {services.map((group) => {
          const Icon = serviceIcons[group.category] || Tools

          return (
            <div key={group.category} className="reveal rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={22} />
                </div>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {group.category.split(' ')[0]}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">{group.category}</h3>

              <div className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-4" >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold text-white">{item.name}</p>
                        {item.note && <p className="mt-1 text-xs text-cyan-200">{item.note}</p>}
                      </div>
                      <span className="text-base font-bold text-cyan-300">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="reveal mt-10 flex justify-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Get pricing support
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
