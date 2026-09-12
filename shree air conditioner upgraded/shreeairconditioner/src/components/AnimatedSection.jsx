import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.2
}) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const ctx = gsap.context(() => {
      let animationProps = {}

      switch (animation) {
        case 'fadeUp':
          animationProps = {
            from: { y: 60, opacity: 0 },
            to: { y: 0, opacity: 1 }
          }
          break
        case 'fadeIn':
          animationProps = {
            from: { opacity: 0 },
            to: { opacity: 1 }
          }
          break
        case 'slideLeft':
          animationProps = {
            from: { x: -80, opacity: 0 },
            to: { x: 0, opacity: 1 }
          }
          break
        case 'slideRight':
          animationProps = {
            from: { x: 80, opacity: 0 },
            to: { x: 0, opacity: 1 }
          }
          break
        case 'scaleIn':
          animationProps = {
            from: { scale: 0.85, opacity: 0 },
            to: { scale: 1, opacity: 1 }
          }
          break
        default:
          animationProps = {
            from: { y: 60, opacity: 0 },
            to: { y: 0, opacity: 1 }
          }
      }

      gsap.set(element, {
        ...animationProps.from,
        transformOrigin: 'center center'
      })

      gsap.to(element, {
        ...animationProps.to,
        duration: duration,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - threshold * 100}%`,
          toggleActions: 'play none none none'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [animation, delay, duration, threshold])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
