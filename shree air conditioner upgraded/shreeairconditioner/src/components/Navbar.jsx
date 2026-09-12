import { Equal, Home, Info, Mail, PhoneCall, Wrench, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'

const navItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Services', to: '/services', icon: Wrench },
  { label: 'About Us', to: '/about', icon: Info },
  { label: 'Contact Us', to: '/contact', icon: Mail },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      })
    }, navRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (open && mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        maxHeight: 500,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    } else if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        maxHeight: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        ref={navRef}
        className="
          mx-auto max-w-7xl
          rounded-2xl border border-[#7498ce]/25
          bg-[#7498ce6f] backdrop-blur-xl
          shadow-[0_12px_40px_rgba(30,64,175,0.10)]
        "
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 lg:px-6">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 sm:gap-3"
          >
            <img
              className="h-12 w-12 rounded-xl object-cover sm:h-14 sm:w-14 lg:h-16 lg:w-16"
              alt="Shree Air Conditioner"
              src="../shreeac.png"
            />

            <div className="leading-none">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d0a755] sm:text-sm">
                Shree
              </p>

              <p className="mt-0.5 text-sm font-bold tracking-tight text-[#7498ce] sm:text-base">
                Air Conditioner
              </p>
            </div>
          </NavLink>

          <div className="hidden items-center gap-4 xl:gap-7 md:flex" style={{ fontFamily: "'Bruno Ace SC', sans-serif" }}>
            {navItems.map((item, index) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1.5 py-2 text-xs font-medium transition-colors duration-200 lg:text-sm ${
                      isActive
                        ? 'text-[#7498ce]'
                        : 'text-slate-600 hover:text-[#7498ce]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={14} className="lg:size-[15px]" />
                      <span>{item.label}</span>

                      <span
                        className={`
                          absolute -bottom-0.5 left-1/2 h-0.5
                          -translate-x-1/2 rounded-full
                          bg-[#d0a755]
                          transition-all duration-300
                          ${isActive ? 'w-5' : 'w-0'}
                        `}
                      />
                    </>
                  )}
                </NavLink>
              )
            })}
          </div>

          <a
            href="tel:+918092768415"
            className="hidden items-center gap-2 rounded-full border border-[#7498ce]/25 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6389c2] hover:text-white md:inline-flex lg:px-4 lg:py-2 lg:text-sm"
          >
            <PhoneCall size={14} />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#7498ce]/25 bg-[#7498ce]/10 text-[#7498ce] transition-all duration-200 hover:bg-[#7498ce]/15 md:hidden"
          >
            {open ? <X size={19} /> : <Equal size={19} />}
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className="overflow-hidden opacity-0 max-h-0 md:hidden"
        >
          <div className="mx-3 mb-3 rounded-xl border border-[#7498ce]/15 bg-[#7498ce]/[0.06] p-2">
            {navItems.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#7498ce]/12 text-[#7498ce]'
                        : 'text-slate-600 hover:bg-[#7498ce]/8 hover:text-[#7498ce]'
                    }`
                  }
                >
                  <Icon size={16} />
                  {item.label}
                </NavLink>
              )
            })}

            <div className="my-2 h-px bg-[#7498ce]/10" />

            <a
              href="tel:+918092768415"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] px-4 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-[#6389c2] hover:text-white"
            >
              <PhoneCall size={16} />
              Call Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
