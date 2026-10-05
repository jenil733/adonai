import { useLayoutEffect } from 'react'

type RevealVariant =
  | 'reveal-up'
  | 'reveal-down'
  | 'reveal-left'
  | 'reveal-right'
  | 'reveal-scale'

type RevealGroup = {
  selector: string
  variant: RevealVariant
  step: number
}

const revealGroups: RevealGroup[] = [
  { selector: '.site-header > *', variant: 'reveal-down', step: 70 },
  { selector: '.stats-panel .stat', variant: 'reveal-scale', step: 90 },
  { selector: '.about-copy', variant: 'reveal-left', step: 0 },
  { selector: '.about-gallery img', variant: 'reveal-scale', step: 100 },
  { selector: '.values-heading', variant: 'reveal-up', step: 0 },
  { selector: '.value-card', variant: 'reveal-up', step: 100 },
  {
    selector: '.buses-container > .section-kicker, .buses-heading-row',
    variant: 'reveal-up',
    step: 90,
  },
  { selector: '.bus-card', variant: 'reveal-up', step: 90 },
  {
    selector: '.services-container > .section-kicker, .services-container > h2, .services-intro',
    variant: 'reveal-up',
    step: 80,
  },
  { selector: '.service-card', variant: 'reveal-up', step: 90 },
  { selector: '.why-visual', variant: 'reveal-left', step: 0 },
  {
    selector: '.why-content > .why-kicker, .why-content > h2, .why-intro',
    variant: 'reveal-right',
    step: 80,
  },
  { selector: '.why-feature', variant: 'reveal-up', step: 80 },
  { selector: '.why-button', variant: 'reveal-scale', step: 0 },
  {
    selector: '.gallery-container > .section-kicker, .gallery-heading-row',
    variant: 'reveal-up',
    step: 90,
  },
  { selector: '.gallery-item', variant: 'reveal-scale', step: 65 },
  {
    selector: '.testimonials-kicker, .testimonials-container > h2, .testimonials-intro',
    variant: 'reveal-up',
    step: 80,
  },
  { selector: '.testimonial-card', variant: 'reveal-up', step: 100 },
  { selector: '.faq-heading-row', variant: 'reveal-up', step: 0 },
  { selector: '.faq-item', variant: 'reveal-up', step: 70 },
  { selector: '.footer-cta-copy', variant: 'reveal-left', step: 0 },
  { selector: '.footer-contact-card', variant: 'reveal-right', step: 0 },
  { selector: '.footer-main > *', variant: 'reveal-up', step: 90 },
  { selector: '.footer-bottom', variant: 'reveal-up', step: 0 },
]

const revealVariants: RevealVariant[] = [
  'reveal-up',
  'reveal-down',
  'reveal-left',
  'reveal-right',
  'reveal-scale',
]

const spotlightSelector = '.bus-card, .service-card, .value-card, .testimonial-card'

export function useScrollAnimation() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements: HTMLElement[] = []

    revealGroups.forEach(({ selector, variant, step }) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.classList.remove(...revealVariants)
        element.classList.add('scroll-reveal', variant)
        element.style.setProperty('--reveal-delay', `${Math.min(index * step, 360)}ms`)
        if (!elements.includes(element)) elements.push(element)
      })
    })

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return () => {
        elements.forEach((element) => element.classList.remove('is-visible'))
      }
    }

    const initiallyVisible = elements.filter((element) => {
      const bounds = element.getBoundingClientRect()
      return bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0
    })

    document.documentElement.classList.add('motion-ready')
    const entranceFrame = window.requestAnimationFrame(() => {
      initiallyVisible.forEach((element) => element.classList.add('is-visible'))
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    const initiallyVisibleSet = new Set(initiallyVisible)
    elements.forEach((element) => {
      if (!initiallyVisibleSet.has(element)) observer.observe(element)
    })

    const spotlightCleanups: Array<() => void> = []
    if (window.matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll<HTMLElement>(spotlightSelector).forEach((card) => {
        const handlePointerMove = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect()
          card.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`)
          card.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`)
        }
        const showSpotlight = () => card.classList.add('spotlight-active')
        const hideSpotlight = () => card.classList.remove('spotlight-active')

        card.classList.add('interactive-spotlight')
        card.addEventListener('pointermove', handlePointerMove)
        card.addEventListener('pointerenter', showSpotlight)
        card.addEventListener('pointerleave', hideSpotlight)

        spotlightCleanups.push(() => {
          card.removeEventListener('pointermove', handlePointerMove)
          card.removeEventListener('pointerenter', showSpotlight)
          card.removeEventListener('pointerleave', hideSpotlight)
          card.classList.remove('interactive-spotlight', 'spotlight-active')
        })
      })
    }

    return () => {
      window.cancelAnimationFrame(entranceFrame)
      observer.disconnect()
      spotlightCleanups.forEach((cleanup) => cleanup())
      elements.forEach((element) => element.classList.remove('is-visible'))
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])
}
