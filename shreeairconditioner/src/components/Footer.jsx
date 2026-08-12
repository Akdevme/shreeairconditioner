import { ArrowUpRight, PhoneCall } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="px-4 pb-5 pt-4 sm:px-6 lg:px-8">
      <div
        className="
          relative mx-auto max-w-7xl overflow-hidden
          rounded-[26px]
          border border-slate-200/80
          bg-white/60
          px-5 py-5
          shadow-[0_12px_40px_rgba(80,110,150,0.08)]
          backdrop-blur-xl
          sm:px-7
        "
      >
        {/* Soft ambient glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7498ce]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Brand */}
          <NavLink
            to="/"
            className="flex w-fit items-center gap-3"
          >
            <img
              src="./shreeac.png"
              alt="Shree Air Conditioner"
              className="h-11 w-11 rounded-xl object-cover"
            />

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#d0a755]">
                Shree
              </p>

              <p className="text-sm font-bold tracking-tight text-[#7498ce]">
                Air Conditioner
              </p>
            </div>
          </NavLink>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
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

          {/* Call */}
          <a
            href="tel:+918092768415"
            className="
              group inline-flex w-fit items-center gap-2
              rounded-full
              border border-slate-200
              bg-white/80
              px-4 py-2
              text-xs font-semibold text-slate-700
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#7498ce]/40
              hover:text-[#7498ce]
            "
          >
            <PhoneCall
              size={14}
              className="text-[#7498ce]"
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
              <ArrowUpRight size={11} />
            </span>
          </a>
        </div>

        {/* Tiny bottom line */}
        <div
          className="
            relative mt-5 flex flex-col gap-2
            border-t border-slate-200/70
            pt-3
            text-[10px] text-slate-400
            sm:flex-row sm:items-center sm:justify-between
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