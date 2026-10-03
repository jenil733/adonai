import { useEffect, useRef, useState } from 'react'
import '../App.css'
import heroImage from '../assets/images/Image.svg'
import Navbar from './navbar'

const stats = [
  { value: 18, decimals: 0, suffix: '', label: 'Years on the road' },
  { value: 40, decimals: 0, suffix: '', label: 'Coaches in Bus' },
  { value: 9500, decimals: 0, suffix: '+', label: 'Groups travelled' },
  { value: 4.9, decimals: 1, suffix: '', label: 'Average rating' },
]

function formatStat(value: number, decimals: number, suffix: string) {
  const formatted = decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString('en-US')

  return `${formatted}${suffix}`
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" />
    </svg>
  )
}

export default function Home() {
  const statsPanelRef = useRef<HTMLDListElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [displayedStats, setDisplayedStats] = useState(() =>
    stats.map((stat) => formatStat(0, stat.decimals, stat.suffix)),
  )
  const [isCounting, setIsCounting] = useState(false)

  useEffect(() => {
    const panel = statsPanelRef.current
    if (!panel) return

    const showFinalValues = () => {
      setDisplayedStats(stats.map((stat) => formatStat(stat.value, stat.decimals, stat.suffix)))
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showFinalValues()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        observer.unobserve(panel)
        setIsCounting(true)
        const duration = 1900
        let startTime: number | null = null

        const count = (time: number) => {
          if (startTime === null) startTime = time
          const progress = Math.min((time - startTime) / duration, 1)
          const easedProgress = 1 - Math.pow(1 - progress, 4)

          setDisplayedStats(
            stats.map((stat) =>
              formatStat(stat.value * easedProgress, stat.decimals, stat.suffix),
            ),
          )

          if (progress < 1) {
            animationFrameRef.current = window.requestAnimationFrame(count)
          } else {
            showFinalValues()
            setIsCounting(false)
          }
        }

        animationFrameRef.current = window.requestAnimationFrame(count)
      },
      { threshold: 0.35 },
    )

    observer.observe(panel)

    return () => {
      observer.disconnect()
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <main className="home" id="home">
      <Navbar />

      <section className="hero-section" aria-labelledby="hero-title">
        <img className="hero-background" src={heroImage} alt="Luxury coach travelling through coastal mountains at sunset" />
        <div className="hero-shade" />

        <div className="hero-content">
          <h1 id="hero-title">
            Your <span>Trusted Partner</span>
            <br />
            for Group Travel &amp; Touring Needs
          </h1>

          <p>
            At Adonai Holidays, we make your journeys comfortable, convenient and
            <br className="desktop-break" /> memorable with our premium fleet of buses and customized travel
            <br className="desktop-break" /> solutions.
          </p>

          <div className="hero-actions">
            <a className="button button-outline" href="#buses">
              Explore Buses <ArrowIcon />
            </a>
            <a className="button button-primary" href="#enquiry">
              Enquire Now <ArrowIcon />
            </a>
          </div>
        </div>

        <dl
          className={`stats-panel${isCounting ? ' is-counting' : ''}`}
          aria-label="Adonai Holidays statistics"
          ref={statsPanelRef}
        >
          {stats.map((stat, index) => (
            <div className="stat" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd aria-label={formatStat(stat.value, stat.decimals, stat.suffix)}>
                <span aria-hidden="true">{displayedStats[index]}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}
