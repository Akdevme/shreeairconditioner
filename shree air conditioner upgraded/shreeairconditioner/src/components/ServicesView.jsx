import { ArrowRight, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    category: 'AC Services',
    items: [
      { name: 'AC Installation', price: '₹1,500', note: 'Window/Split AC' },
      { name: 'AC Gas Refill', price: '₹1,200', note: 'R32/R410A' },
      { name: 'AC Service & Cleaning', price: '₹800', note: 'Full service' },
      { name: 'AC Repair', price: '₹500+', note: 'Visit charge' },
    ]
  },
  {
    category: 'Refrigerator Services',
    items: [
      { name: 'Refrigerator Repair', price: '₹400+', note: 'All brands' },
      { name: 'Gas Refill', price: '₹1,000+', note: 'As per type' },
      { name: 'Thermostat Repair', price: '₹350' },
      { name: 'Compressor Repair', price: '₹800+' },
    ]
  },
  {
    category: 'Washing Machine Services',
    items: [
      { name: 'Washing Machine Repair', price: '₹350+' },
      { name: 'Motor Repair', price: '₹600+' },
      { name: 'PCB Repair', price: '₹800+' },
      { name: 'Full Service', price: '₹500' },
    ]
  },
]

const icons = {
  'AC Services': ShieldCheck,
  'Refrigerator Services': CheckCircle2,
  'Washing Machine Services': Wrench,
}

export default function ServicesView() {
  const heroRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-hero > *', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%'
        }
      })

      // gsap.from('.service-card', {
      //   y: 80,
      //   opacity: 0,
      //   duration: 0.8,
      //   stagger: 0.2,
      //   ease: 'power.out',
      //   scrollTrigger: {
      //     trigger: cardsRef.current,
      //     start: 'top 75%'
      //   }
      // })

      gsap.from('.service-item', {
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service-item',
          start: 'top 90%'
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="space-y-6 pb-8 pt-20 sm:space-y-8 sm:pb-10 sm:pt-24 lg:pt-28">
      <section ref={heroRef} className="services-hero rounded-2xl border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7 lg:p-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700 sm:text-xs" style={{ fontFamily: "'Bruno Ace SC', sans-serif" }}>Services</p>
        <h1 className="mt-2.5 text-3xl font-black tracking-[-0.06em] text-[#658BC8] sm:mt-3 sm:text-4xl lg:text-5xl" style={{ fontFamily: "'trotes', sans-serif" }}>Appliance care with transparent pricing</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">Clear service plans for every household need, from installation and gas refill to repairs and emergency support.</p>
      </section>

      <div ref={cardsRef} className="grid gap-5 lg:grid-cols-3">
        {services.map((group) => {
          const Icon = icons[group.category] || ShieldCheck

          return (
            <div key={group.category} className="service-card rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-[1.75rem] sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon size={20} className="sm:size-[22px]" />
                </div>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-sky-700 sm:px-2.5 sm:text-[10px]">
                  {group.category.split(' ')[0]}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold text-[#658BC8] sm:mt-5 sm:text-2xl" style={{ fontFamily: "'ketika', sans-serif" }}>
                {group.category}
              </h2>

              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {group.items.map((item) => (
                  <div key={item.name} className="service-item rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-3 sm:rounded-2xl sm:p-4">
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 sm:text-base" style={{ fontFamily: "'ketika', sans-serif" }}>{item.name}</p>
                        {item.note && <p className="mt-0.5 text-[10px] text-sky-700 sm:mt-1 sm:text-xs">{item.note}</p>}
                      </div>
                      <span className="whitespace-nowrap text-xs font-black text-sky-700 sm:text-sm" style={{ fontFamily: "'Recharge', sans-serif" }}>{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="rounded-2xl border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-4 text-center shadow-sm sm:rounded-[2rem] sm:p-6">
        <p className="text-sm text-slate-700 sm:text-base">Need a custom service quote or technician visit? We'll guide you quickly.</p>
        <Link to="/contact" className="btn-secondary mt-3 inline-flex sm:mt-4">
          Ask for support
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  )
}
