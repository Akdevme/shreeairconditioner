import { ArrowUpRight, PhoneCall } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="px-3 pb-5 pt-4 sm:px-5 lg:px-8">
      <div
        className="
          relative mx-auto max-w-7xl overflow-hidden
          rounded-[20px] sm:rounded-[26px]
          border border-slate-200/80
          bg-white/60
          px-4 py-5 sm:px-7 lg:px-8
          shadow-[0_12px_40px_rgba(80,110,150,0.08)]
          backdrop-blur-xl
        "
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-32 w-32 rounded-full bg-[#7498ce]/10 blur-3xl sm:h-40 sm:w-40" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-28 w-28 rounded-full bg-cyan-200/20 blur-3xl sm:h-32 sm:w-32" />

        <div className="relative flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">

          <NavLink
            to="/"
            className="flex w-fit items-center gap-2 sm:gap-3"
          >
            <img
              src="./shreeac.png"
              alt="Shree Air Conditioner"
              className="h-10 w-10 rounded-xl object-cover sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            />

            <div>
              <p className="text-[8px] uppercase tracking-[0.3em] text-[#d0a755] sm:text-[9px] lg:text-[10px]">
                Shree
              </p>

              <p className="text-sm font-bold tracking-tight text-[#7498ce] lg:text-base">
                Air Conditioner
              </p>
            </div>
          </NavLink>

          <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-5 lg:gap-x-6" style={{ fontFamily: "'Bruno Ace SC', sans-serif" }}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-[#7498ce]'
                      : 'text-slate-500 hover:text-[#7498ce]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a
            href="tel:+918092768415"
            className="
              group inline-flex w-fit items-center gap-2
              rounded-full
              border border-slate-200
              bg-white/80
              px-3 py-2 text-xs font-semibold text-slate-700
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#7498ce]/40
              hover:text-[#7498ce]
              sm:px-4 sm:py-2 sm:text-sm
            "
          >
            <PhoneCall
              size={13}
              className="text-[#7498ce] sm:size-[14px]"
            />

            Call Now

            <span
              className="
                flex h-5 w-5 items-center justify-center
                rounded-full bg-[#7498ce]/10
                transition-transform duration-300
                group-hover:rotate-45
              "
            >
              <ArrowUpRight size={10} className="sm:size-[11px]" />
            </span>
          </a>
        </div>

        <div
          className="
            relative mt-4 flex flex-col gap-2
            border-t border-slate-200/70
            pt-3
            text-[9px] text-slate-400
            sm:flex-row sm:items-center sm:justify-between
            sm:text-[10px] lg:text-xs
          "
        >
          <p>
            © 2026 Shree Air Conditioner. All rights reserved.
          </p>

          <p className="hidden sm:block">
            Professional appliance services
          </p>
        </div>
      </div>
    </footer>
  )
}
