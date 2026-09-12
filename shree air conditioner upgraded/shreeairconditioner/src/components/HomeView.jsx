import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  MessageSquareQuote,
  PhoneCall,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { submitRating } from '../services/sheetServiceRating'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const [isSubmitting, setIsSubmitting] = useState(false)

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const reviewRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      tl.from('.hero-badge', {
        y: -30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-title',
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.hero-text',
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-buttons > *',
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
          },
          '-=0.3'
        )
        .from(
          '.hero-rating',
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.3'
        )
        .from(
          '.hero-card',
          {
            x: 80,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6'
        )

      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      })

      gsap.from('.review-section > *', {
        scrollTrigger: {
          trigger: reviewRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      })

      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const handleRatingChange = (event) => {
    const { name, value } = event.target

    if (name === 'contact') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)

      setRatingForm((prev) => ({
        ...prev,
        contact: digitsOnly,
      }))

      return
    }

    setRatingForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRatingSubmit = async (event) => {
    event.preventDefault()

    const phone = ratingForm.contact.replace(/\D/g, '')

    if (!/^\d{10}$/.test(phone)) {
      setRatingStatus('Please enter a valid 10-digit phone number.')
      return
    }

    if (!ratingForm.name.trim()) {
      setRatingStatus('Please enter your name.')
      return
    }

    if (!ratingForm.review.trim()) {
      setRatingStatus('Please write your review.')
      return
    }

    if (
      !Number.isInteger(Number(ratingForm.rating)) ||
      Number(ratingForm.rating) < 1 ||
      Number(ratingForm.rating) > 5
    ) {
      setRatingStatus('Please select a rating between 1 and 5.')
      return
    }

    setIsSubmitting(true)
    setRatingStatus('Submitting review...')

    try {
      const response = await submitRating({
        ...ratingForm,
        contact: phone,
        rating: Number(ratingForm.rating),
      })

      if (response.ok) {
        setRatingStatus(
          'Your review has been submitted successfully. Thanks for rating us! 😊'
        )

        setRatingForm(initialRating)
      } else {
        setRatingStatus(
          response.message || 'Failed to submit review. Please try again.'
        )
      }
    } catch (error) {
      console.error('Error submitting rating:', error)

      setRatingStatus(
        error?.message || 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6 pb-8 pt-20 sm:space-y-8 sm:pb-10 sm:pt-24 lg:pt-28">
      {/* HERO */}
      <section
        ref={heroRef}
        className="overflow-hidden rounded-2xl border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700 sm:text-[11px]">
              <BadgeCheck size={13} />
              Trusted appliance service
            </div>

            <h1
              className="hero-title mt-5 text-3xl font-black tracking-[-0.06em] text-[#658BC8] sm:text-4xl lg:mt-6 lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "'trotes', sans-serif" }}
            >
              Cooling comfort. Service you can trust.
            </h1>

            <p className="hero-text mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Expert support for ACs, refrigerators, and washing machines with
              honest pricing, quick visits, and professional care for homes and
              businesses.
            </p>

            <div className="hero-buttons mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Book a service
                <ArrowRight size={15} />
              </Link>

              <Link to="/services" className="btn-secondary">
                View pricing
              </Link>
            </div>

            <div className="hero-rating mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600 sm:mt-7 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['S', 'A', 'C'].map((item) => (
                    <div
                      key={item}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-sky-100 text-[9px] font-bold text-sky-700 sm:h-8 sm:w-8 sm:text-[10px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <span className="text-xs sm:text-sm">
                  4.9 average rating
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-amber-500 sm:gap-2">
                <Star
                  size={14}
                  className="fill-current sm:size-[16px]"
                />
                <span className="text-xs sm:text-sm">
                  Top local service
                </span>
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="hero-card rounded-[1.5rem] border border-sky-100 bg-sky-50 p-5 shadow-inner shadow-sky-100 sm:rounded-[1.75rem] sm:p-6">
            <div className="rounded-[1.25rem] border border-sky-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-4 shadow-sm sm:rounded-[1.5rem] sm:p-5">
              <div className="flex items-center justify-between rounded-xl bg-sky-100 p-3 sm:rounded-2xl sm:p-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-sky-700 sm:text-[11px]">
                    Fast response
                  </p>

                  <p
                    className="mt-1 text-lg font-bold text-[#658BC8] sm:text-xl"
                    style={{ fontFamily: "'ketika', sans-serif" }}
                  >
                    Same-day support
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                  <PhoneCall size={18} className="sm:size-[20px]" />
                </div>
              </div>

              <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                {[
                  'Same-day visit support',
                  'Genuine spare parts',
                  'Honest repair guidance',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-2.5 sm:rounded-2xl sm:p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 sm:h-9 sm:w-9 sm:rounded-xl">
                      <ShieldCheck size={14} className="sm:size-[16px]" />
                    </div>

                    <p
                      className="text-xs font-medium text-slate-700 sm:text-sm"
                      style={{ fontFamily: "'ketika', sans-serif" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-sky-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] px-2.5 py-1.5 text-xs text-sky-800 sm:mt-5 sm:rounded-2xl sm:px-3 sm:py-2 sm:text-sm">
                <MapPin size={14} className="sm:size-[16px]" />
                Local service center support available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        ref={statsRef}
        className="grid grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {ratingCards.map((card) => (
          <div
            key={card.label}
            className="stat-card rounded-xl border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-4 shadow-sm sm:rounded-[1.5rem] sm:p-5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 sm:text-xs">
              {card.label}
            </p>

            <p
              className="mt-2 text-2xl font-black tracking-[-0.02em] text-[#658BC8] sm:mt-3 sm:text-3xl"
              style={{ fontFamily: "'ketika', sans-serif" }}
            >
              {card.value}
            </p>

            <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-sm">
              {card.note}
            </p>
          </div>
        ))}
      </section>

      {/* REVIEW */}
      <section
        ref={reviewRef}
        className="review-section grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:grid-cols-[0.95fr_1.05fr] lg:p-6 lg:py-8"
      >
        {/* LEFT */}
        <div className="rounded-[1.5rem] border border-sky-100 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 sm:rounded-[1.75rem] sm:p-6">
          <div className="flex items-center gap-2.5 text-sky-700 sm:gap-3">
            <MessageSquareQuote size={16} className="sm:size-[18px]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
              Rate us
            </p>
          </div>

          <h2
            className="mt-3 text-2xl font-black tracking-[-0.02em] text-[#658BC8] sm:mt-4 sm:text-3xl"
            style={{ fontFamily: "'ketika', sans-serif" }}
          >
            We value your feedback
          </h2>

          <p className="mt-2.5 text-sm text-slate-600 sm:mt-3">
            Tell us how we did and help other customers choose trusted
            appliance care.
          </p>

          {/* STARS */}
          <div className="mt-5 flex items-center gap-1.5 sm:mt-6">
            {[1, 2, 3, 4, 5].map((value) => {
              const filled = value <= Number(ratingForm.rating)

              return (
                <button
                  key={value}
                  type="button"
                  aria-label={`Rate ${value} out of 5`}
                  onClick={() =>
                    setRatingForm((prev) => ({
                      ...prev,
                      rating: value,
                    }))
                  }
                  className="transition-transform duration-200 hover:scale-110"
                  disabled={isSubmitting}
                >
                  <Star
                    size={24}
                    className={`${
                      filled
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300'
                    } sm:size-[28px]`}
                  />
                </button>
              )
            })}
          </div>

          <p className="mt-2 text-xs font-medium text-slate-500">
            {ratingForm.rating} out of 5
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleRatingSubmit}
          className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {/* NAME */}
            <label className="text-sm text-slate-700">
              Name

              <input
                name="name"
                value={ratingForm.name}
                onChange={handleRatingChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400"
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </label>

            {/* PHONE */}
            <label className="text-sm text-slate-700">
              Phone no.

              <div className="mt-2 flex overflow-hidden rounded-xl border border-slate-200 bg-white transition focus-within:border-sky-400">
                <span className="flex items-center border-r border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-600">
                  +91
                </span>

                <input
                  name="contact"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  value={ratingForm.contact}
                  onChange={handleRatingChange}
                  className="min-w-0 flex-1 bg-white px-3 py-3 text-slate-900 outline-none"
                  placeholder="10-digit number"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </label>
          </div>

          {/* REVIEW */}
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
              disabled={isSubmitting}
            />
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Submitting...' : 'Submit review'}
          </button>

          {ratingStatus && (
            <p
              className={`mt-3 text-sm ${
                ratingStatus.includes('successfully') ||
                ratingStatus.includes('Thanks')
                  ? 'text-emerald-600'
                  : ratingStatus.includes('Submitting')
                    ? 'text-sky-700'
                    : 'text-red-500'
              }`}
            >
              {ratingStatus}
            </p>
          )}
        </form>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="grid gap-4 rounded-2xl border border-slate-200 bg-[linear-gradient(-225deg,#FFFEFF_0%,#D7FFFE_100%)] p-5 shadow-sm sm:rounded-[2rem] sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center"
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700 sm:text-xs">
            Join as technician
          </p>

          <h2
            className="mt-2 text-xl font-black tracking-[-0.01em] text-[#658BC8] sm:mt-3 sm:text-2xl"
            style={{ fontFamily: "'ketika', sans-serif" }}
          >
            Want to work with us?
          </h2>

          <p className="mt-1.5 text-sm text-slate-600 sm:mt-2">
            Contact our team to become part of the Shree Air Conditioner
            service network.
          </p>
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