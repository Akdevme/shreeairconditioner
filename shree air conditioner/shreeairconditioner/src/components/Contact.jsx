import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { submitContactForm } from '../services/sheetServiceContact'

const initialContact = { name: '', email: '', phone: '', message: '' }

const isValidPhone = (value) => /^\+?91\d{10}$/.test(String(value).replace(/\s+/g, ''))

export default function ContactView() {
  const [contactForm, setContactForm] = useState(initialContact)
  const [contactStatus, setContactStatus] = useState('')

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()

    const normalizedPhone = String(contactForm.phone).replace(/\s+/g, '')
    if (!isValidPhone(normalizedPhone)) {
      setContactStatus('Phone number must be in the format +91XXXXXXXXXX.')
      return
    }

    setContactStatus('Sending...')
    try {
      const response = await submitContactForm({
        ...contactForm,
        phone: normalizedPhone,
      })
      setContactStatus(response.message)
      setContactForm(initialContact)
    } catch (error) {
      setContactStatus(error.message || 'Something went wrong while submitting the form.')
    }
  }

  return (
    <div className="space-y-8 pb-8 pt-20 sm:pb-10 sm:pt-24">
      <section className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700" style={{ fontFamily: "'Bruno Ace SC', sans-serif" }}>
          Contact us
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#658BC8] sm:text-5xl" style={{ fontFamily: "'trotes', sans-serif" }}>
          Talk to our support team
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Reach out for service booking, repairs, AC installation, or technician enquiries.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><Mail size={18} /></div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Email</p>
                <a href="mailto:shreeair.supaul@gmail.com" className="text-base font-semibold text-slate-900">shreeair.supaul@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><Phone size={18} /></div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Phone</p>
                <a href="tel:+918092768415" className="text-base font-semibold text-slate-900">+91 80927 68415</a>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><MapPin size={18} /></div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Location</p>
                <p className="text-base font-semibold text-slate-900">Supaul, Bihar, station road, near sbi branch... <br/> pin: 852131</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleContactSubmit} className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2 text-sky-700">
            <Send size={18} />
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">Contact form</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-700">
              Name
              <input name="name" value={contactForm.name} onChange={handleContactChange} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400" placeholder="Your name" required />
            </label>

            <label className="text-sm text-slate-700">
              Email
              <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400" placeholder="you@example.com" required />
            </label>
          </div>

          <label className="mt-4 block text-sm text-slate-700">
            Phone
            <input name="phone" value={contactForm.phone} onChange={handleContactChange} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400" placeholder="+91XXXXXXXXXX" required />
          </label>

          <label className="mt-4 block text-sm text-slate-700">
            Message
            <textarea name="message" value={contactForm.message} onChange={handleContactChange} rows="4" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400" placeholder="Describe your appliance issue" required />
          </label>

          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Submit request</button>
          {contactStatus && <p className="mt-3 text-sm text-sky-700">{contactStatus}</p>}
        </form>
      </div>
    </div>
  )
}
