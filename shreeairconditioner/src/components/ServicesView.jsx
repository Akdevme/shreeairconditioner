import { ArrowRight, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'

const icons = {
  'AC Services': ShieldCheck,
  'Refrigerator Services': CheckCircle2,
  'Washing Machine Services': Wrench,
}

export default function ServicesView() {
  return (
    <div className="space-y-8 pb-8 pt-20 sm:pb-10 sm:pt-24">
      <section className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Services</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#658BC8] sm:text-5xl">Appliance care with transparent pricing</h1>
        <p className="mt-4 max-w-2xl text-slate-600">Clear service plans for every household need, from installation and gas refill to repairs and emergency support.</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((group) => {
          const Icon = icons[group.category] || ShieldCheck

          return (
            <div key={group.category} className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon size={22} />
                </div>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                  {group.category.split(' ')[0]}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#658BC8]">{group.category}</h2>

              <div className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-base font-semibold text-slate-900">{item.name}</p>
                        {item.note && <p className="mt-1 text-xs text-sky-700">{item.note}</p>}
                      </div>
                      <span className="whitespace-nowrap text-sm font-black text-sky-700">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 text-center shadow-sm">
        <p className="text-slate-700">Need a custom service quote or technician visit? We’ll guide you quickly.</p>
        <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky-700">
          Ask for support
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
