import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function SectionHeader({ eyebrow, title, text, centered = true }) {
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = headerRef.current?.children
      if (!children) return

      gsap.from(children, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={headerRef}
      className={`mx-auto max-w-2xl ${centered ? 'text-center' : ''}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
          {text}
        </p>
      )}
    </div>
  )
}
