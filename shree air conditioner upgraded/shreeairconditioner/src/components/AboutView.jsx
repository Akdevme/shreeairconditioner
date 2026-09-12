import { Building2, MapPin, Trophy, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  { name: 'Founder', value: 'Mr. Sudhir Kumar', text: 'The vision behind trusted local appliance care.' },
  { name: 'Team', value: 'Skilled technicians', text: 'Experienced service professionals for every repair.' },
  { name: 'Office', value: 'Service support center', text: 'Dedicated customer support and local assistance.' },
]

export default function AboutView() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero > *', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-hero',
          start: 'top 80%'
        }
      })

      gsap.from('.about-grid > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%'
        }
      })

      gsap.from('.highlight-card', {
        x: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.highlight-card',
          start: 'top 85%'
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="space-y-6 pb-8 pt-20 sm:space-y-8 sm:pb-10 sm:pt-24 lg:pt-28">
      <section ref={sectionRef} className="about-hero rounded-2xl border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7 lg:p-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700 sm:text-xs" style={{ fontFamily: "'Bruno Ace SC', sans-serif" }}>
          About us
        </p>
        <h1 className="mt-2.5 text-3xl font-black tracking-[-0.06em] text-[#658BC8] sm:mt-3 sm:text-4xl lg:text-5xl" style={{ fontFamily: "'trotes', sans-serif" }}>
          Built on trust, service, and long-term care
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          Shree Air Conditioner is a local service-focused brand helping customers with reliable appliance care and honest support. We combine practical expertise with a friendly and transparent approach.
        </p>
      </section>

      <div ref={cardsRef} className="about-grid grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-5 rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-sm sm:rounded-[1.75rem] sm:p-6 lg:p-7">
          <div className="flex items-center gap-2 text-sky-700">
            <Trophy size={16} className="sm:size-[18px]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs">Why choose us</span>
          </div>

          <div className="space-y-4 text-slate-600">
            <p>We focus on solving appliance issues efficiently with clear process and customer-first communication.</p>
            <p>From installation and seasonal servicing to emergency repairs, we aim to keep your household running smoothly.</p>
            <p>Every visit is designed to be simple, practical, and dependable for real-world home needs.</p>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 sm:mt-6 sm:gap-4">
            <div className="rounded-xl border border-slate-200 bg-white/70 p-3 sm:rounded-2xl sm:p-4">
              <Users className="mb-2 text-sky-700 sm:mb-3" size={16} className="sm:size-[18px]" />
              <p className="text-lg font-black text-[#658BC8] sm:text-xl">Expert</p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:mt-2 sm:text-xs">Support</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/70 p-3 sm:rounded-2xl sm:p-4">
              <Building2 className="mb-2 text-sky-700 sm:mb-3" size={16} className="sm:size-[18px]" />
              <p className="text-lg font-black text-[#658BC8] sm:text-xl">Local</p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:mt-2 sm:text-xs">Service</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/70 p-3 sm:rounded-2xl sm:p-4">
              <MapPin className="mb-2 text-sky-700 sm:mb-3" size={16} className="sm:size-[18px]" />
              <p className="text-lg font-black text-[#658BC8] sm:text-xl">On-site</p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:mt-2 sm:text-xs">Care</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-sm sm:rounded-[1.75rem] sm:p-6 lg:p-7">
          {highlights.map((item) => (
            <div key={item.name} className="highlight-card rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-3.5 sm:rounded-2xl sm:p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 sm:text-[11px]">{item.name}</p>
              <h3 className="mt-1.5 text-lg font-bold text-slate-900 sm:mt-2 sm:text-xl">{item.value}</h3>
              <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
