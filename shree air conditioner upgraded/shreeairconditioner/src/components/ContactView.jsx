import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { submitContactForm } from '../services/sheetServiceContact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const initialContact = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const isValidPhone = (value) => /^\d{10}$/.test(String(value))

export default function ContactView() {
  const [contactForm, setContactForm] = useState(initialContact)
  const [contactStatus, setContactStatus] = useState('')

  const heroRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero > *', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.contact-grid > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
        },
      })

      gsap.from('.info-card', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.info-card',
          start: 'top 85%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const handleContactChange = (event) => {
    const { name, value } = event.target

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)

      setContactForm((prev) => ({
        ...prev,
        phone: digitsOnly,
      }))

      return
    }

    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()

    const phone = String(contactForm.phone)

    if (!isValidPhone(phone)) {
      setContactStatus('Phone number must contain exactly 10 digits.')
      return
    }

    setContactStatus('Sending...')

    try {
      const response = await submitContactForm({
        ...contactForm,
        phone,
      })

      setContactStatus(response.message)
      setContactForm(initialContact)
    } catch (error) {
      setContactStatus(
        error.message ||
          'Something went wrong while submitting the form.'
      )
    }
  }

  return (
    <div className="space-y-6 pb-8 pt-20 sm:space-y-8 sm:pb-10 sm:pt-24 lg:pt-28">
      <section
        ref={heroRef}
        className="contact-hero rounded-2xl border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7 lg:p-10"
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700 sm:text-xs"
          style={{ fontFamily: "'Bruno Ace SC', sans-serif" }}
        >
          Contact us
        </p>

        <h1
          className="mt-2.5 text-3xl font-black tracking-[-0.06em] text-[#658BC8] sm:mt-3 sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'trotes', sans-serif" }}
        >
          Talk to our support team
        </h1>

        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Reach out for service booking, repairs, AC installation, or technician enquiries.
        </p>
      </section>

      <div
        ref={gridRef}
        className="contact-grid grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-sm sm:rounded-[1.75rem] sm:p-6">
          <div className="space-y-4">
            <div className="info-card flex items-center gap-3 rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-3.5 sm:rounded-2xl sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 sm:h-11 sm:w-11">
                <Mail size={16} className="sm:size-[18px]" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                  Email
                </p>

                <a
                  href="mailto:shreeair.supaul@gmail.com"
                  className="text-sm font-semibold text-slate-900 sm:text-base"
                >
                  shreeair.supaul@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card flex items-center gap-3 rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-3.5 sm:rounded-2xl sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 sm:h-11 sm:w-11">
                <Phone size={16} className="sm:size-[18px]" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                  Phone
                </p>

                <a
                  href="tel:+918092768415"
                  className="text-sm font-semibold text-slate-900 sm:text-base"
                >
                  +91 80927 68415
                </a>
              </div>
            </div>

            <div className="info-card flex items-center gap-3 rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-3.5 sm:rounded-2xl sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 sm:h-11 sm:w-11">
                <MapPin size={16} className="sm:size-[18px]" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                  Location
                </p>

                <p className="text-sm font-semibold text-slate-900 sm:text-base">
                  Supaul, Bihar, station road, near sbi branch...
                  <br className="hidden sm:block" />
                  pin: 852131
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleContactSubmit}
          className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-6 shadow-sm"
        >
          <div className="mb-5 flex items-center gap-2 text-sky-700">
            <Send size={18} />
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              Contact form
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-700">
              Name

              <input
                name="name"
                value={contactForm.name}
                onChange={handleContactChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400"
                placeholder="Your name"
                required
              />
            </label>

            <label className="text-sm text-slate-700">
              Email
              <span className="ml-1 text-xs text-slate-400">(optional)</span>

              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm text-slate-700">
            Phone

            <div className="mt-2 flex overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition focus-within:border-sky-400">
              <div className="flex items-center border-r border-slate-200 bg-slate-100 px-4 font-semibold text-slate-700">
                +91
              </div>

              <input
                type="tel"
                name="phone"
                value={contactForm.phone}
                onChange={handleContactChange}
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]{10}"
                className="w-full bg-transparent px-3 py-3 text-slate-900 outline-none"
                placeholder="Enter 10 digit number"
                required
              />
            </div>
          </label>

          <label className="mt-4 block text-sm text-slate-700">
            Message

            <textarea
              name="message"
              value={contactForm.message}
              onChange={handleContactChange}
              rows="4"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400"
              placeholder="Describe your appliance issue"
              required
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Submit request
          </button>

          {contactStatus && (
            <p className="mt-3 text-sm text-sky-700">
              {contactStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

