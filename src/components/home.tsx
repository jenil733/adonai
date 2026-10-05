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
  const heroVideoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const videoTransitionTimerRef = useRef<number | null>(null)
  const isVideoTransitioningRef = useRef(false)
  const [activeVideo, setActiveVideo] = useState(0)
  const [incomingVideo, setIncomingVideo] = useState<number | null>(null)
  const [displayedStats, setDisplayedStats] = useState(() =>
    stats.map((stat) => formatStat(0, stat.decimals, stat.suffix)),
  )
  const [isCounting, setIsCounting] = useState(false)

  const startVideoTransition = (videoIndex: number) => {
    if (videoIndex !== activeVideo || isVideoTransitioningRef.current) return

    const nextVideoIndex = videoIndex === 0 ? 1 : 0
    const currentVideo = heroVideoRefs.current[videoIndex]
    const nextVideo = heroVideoRefs.current[nextVideoIndex]
    if (!currentVideo || !nextVideo) return

    isVideoTransitioningRef.current = true
    nextVideo.currentTime = 0
    void nextVideo.play().catch(() => undefined)
    setIncomingVideo(nextVideoIndex)

    videoTransitionTimerRef.current = window.setTimeout(() => {
      currentVideo.pause()
      currentVideo.currentTime = 0
      setActiveVideo(nextVideoIndex)
      setIncomingVideo(null)
      isVideoTransitioningRef.current = false
      videoTransitionTimerRef.current = null
    }, 1200)
  }

  const handleHeroVideoTimeUpdate = (videoIndex: number) => {
    const video = heroVideoRefs.current[videoIndex]
    if (!video || !Number.isFinite(video.duration)) return

    if (video.duration - video.currentTime <= 1.25) {
      startVideoTransition(videoIndex)
    }
  }

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

  useEffect(() => () => {
    if (videoTransitionTimerRef.current !== null) {
      window.clearTimeout(videoTransitionTimerRef.current)
    }
  }, [])

  return (
    <main className="home" id="home">
      <Navbar />

      <section className="hero-section" aria-labelledby="hero-title">
        {[0, 1].map((videoIndex) => (
          <video
            className={`hero-background hero-video${videoIndex === activeVideo ? ' is-active' : ''}${videoIndex === incomingVideo ? ' is-entering' : ''}`}
            ref={(video) => { heroVideoRefs.current[videoIndex] = video }}
            autoPlay={videoIndex === 0}
            muted
            playsInline
            preload="auto"
            poster={videoIndex === 0 ? heroImage : undefined}
            aria-hidden="true"
            onTimeUpdate={() => handleHeroVideoTimeUpdate(videoIndex)}
            onEnded={() => startVideoTransition(videoIndex)}
            key={videoIndex}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        ))}
        <div className="hero-shade" />

        <div className="hero-content">
          <h1 className="hero-rise-in hero-rise-delay-1" id="hero-title">
            Your <span>Trusted Partner</span>
            <br />
            for Group Travel &amp; Touring Needs
          </h1>

          <p className="hero-rise-in hero-rise-delay-2">
            At Adonai Holidays, we make your journeys comfortable, convenient and
            <br className="desktop-break" /> memorable with our premium fleet of buses and customized travel
            <br className="desktop-break" /> solutions.
          </p>

          <div className="hero-actions hero-rise-in hero-rise-delay-3">
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
