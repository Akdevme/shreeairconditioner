import { ArrowRight, BadgeCheck, MapPin, MessageSquareQuote, PhoneCall, ShieldCheck, Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitRating } from '../services/sheetServiceRating'

const ratingCards = [
  { label: 'Top rated', value: '4.9/5', note: 'Customer satisfaction' },
  { label: 'Fast help', value: 'Same day', note: 'Emergency support' },
  { label: 'Service care', value: '500+', note: 'Repair jobs completed' },
]

const initialRating = {
  name: '',
  contact: '',
  review: '',
  rating: 5,
}

export default function HomeView() {
  const [ratingForm, setRatingForm] = useState(initialRating)
  const [ratingStatus, setRatingStatus] = useState('')

  const handleRatingChange = (event) => {
    const { name, value } = event.target
    setRatingForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingSubmit = async (event) => {
    event.preventDefault()
    setRatingStatus('Submitting review...')

    try {
      const response = await submitRating(ratingForm)
      setRatingStatus(response.message)
      setRatingForm(initialRating)
    } catch (error) {
      setRatingStatus('Something went wrong while submitting your review.')
    }
  }

  return (
    <div className="space-y-8 pb-8 pt-20 sm:pb-10 sm:pt-24">
      <section className="overflow-hidden rounded-[2rem] border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              <BadgeCheck size={14} />
              Trusted appliance service
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-[-0.06em] text-[#658BC8] sm:text-5xl lg:text-6xl">
              Cooling comfort. Service you can trust.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Expert support for ACs, refrigerators, and washing machines with honest pricing, quick visits, and professional care for homes and businesses.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700"
              >
                Book a service
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-50 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-300"
              >
                View pricing
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['S', 'A', 'C'].map((item) => (
                    <div key={item} className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-sky-100 text-[10px] font-bold text-sky-700">
                      {item}
                    </div>
                  ))}
                </div>
                <span>4.9 average rating</span>
              </div>
              <div className="flex items-center gap-2 text-amber-500">
                <Star size={16} className="fill-current" />
                <span>Top local service</span>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-sky-100 bg-sky-50 p-6 shadow-inner shadow-sky-100">
            <div className="rounded-[1.5rem] border border-sky-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-sm">
              <div className="flex items-center justify-between rounded-2xl bg-sky-100 p-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-sky-700">Fast response</p>
                  <p className="mt-1 text-xl font-bold text-[#658BC8]">Same-day support</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white">
                  <PhoneCall size={20} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  'Same-day visit support',
                  'Genuine spare parts',
                  'Honest repair guidance',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <ShieldCheck size={16} />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-2xl border border-sky-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] px-3 py-2 text-sm text-sky-800">
                <MapPin size={16} />
                Local service center support available
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {ratingCards.map((card) => (
          <div key={card.label} className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{card.label}</p>
            <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#658BC8]">{card.value}</p>
            <p className="mt-2 text-sm text-slate-600">{card.note}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.75rem] border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6">
          <div className="flex items-center gap-3 text-sky-700">
            <MessageSquareQuote size={18} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">Rate us</p>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#658BC8]">We value your feedback</h2>
          <p className="mt-3 text-slate-600">
            Tell us how we did and help other customers choose trusted appliance care.
          </p>

          <div className="mt-6 flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((value) => {
              const filled = value <= ratingForm.rating

              return (
                <button
                  key={value}
                  type="button"
                  aria-label={`Rate ${value} out of 5`}
                  onClick={() => setRatingForm((prev) => ({ ...prev, rating: value }))}
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <Star
                    size={28}
                    className={filled ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
                  />
                </button>
              )
            })}
          </div>
        </div>

        <form onSubmit={handleRatingSubmit} className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-700">
              Name
              <input
                name="name"
                value={ratingForm.name}
                onChange={handleRatingChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400"
                placeholder="Your name"
                required
              />
            </label>

            <label className="text-sm text-slate-700">
              Email / Phone no.
              <input
                name="contact"
                value={ratingForm.contact}
                onChange={handleRatingChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400"
                placeholder="your@email.com or phone"
                required
              />
            </label>
          </div>

          <label className="mt-4 block text-sm text-slate-700">
            Review
            <textarea
              name="review"
              value={ratingForm.review}
              onChange={handleRatingChange}
              rows="5"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400"
              placeholder="Write your service experience..."
              required
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Submit review
          </button>

          {ratingStatus && <p className="mt-3 text-sm text-sky-700">{ratingStatus}</p>}
        </form>
      </section>

      <section className="grid gap-5 rounded-[2rem] border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Join as technician</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#658BC8]">Want to work with us?</h2>
          <p className="mt-2 text-slate-600">Contact our team to become part of the Shree Air Conditioner service network.</p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-700"
        >
          Contact us
        </Link>
      </section>
    </div>
  )
}
