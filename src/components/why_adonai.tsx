import '../App.css'
import whyAdonaiImage from '../assets/images/Image (9).svg'

type FeatureIconName = 'maintenance' | 'driver' | 'support' | 'pricing' | 'comfort' | 'reliable'

const features: Array<{
  icon: FeatureIconName
  title: string
  description: string
}> = [
  {
    icon: 'maintenance',
    title: 'Well-Maintained Fleet',
    description: 'Every coach inspected before dispatch and serviced on a fixed schedule.',
  },
  {
    icon: 'driver',
    title: 'Experienced Drivers',
    description: 'Licensed, route-trained crew with a minimum of eight years behind the wheel.',
  },
  {
    icon: 'support',
    title: '24/7 Support',
    description: 'A real person on the phone at every hour of your journey, not a call queue.',
  },
  {
    icon: 'pricing',
    title: 'Affordable Pricing',
    description: 'Clear, itemised quotes with no fuel, toll or parking surprises later.',
  },
  {
    icon: 'comfort',
    title: 'Comfortable Travel',
    description: 'Pushback seating, climate control and planned rest stops on every route.',
  },
  {
    icon: 'reliable',
    title: 'Reliable Service',
    description: 'On-time pickups backed by GPS tracking shared with your group coordinator.',
  },
]

function FeatureIcon({ name }: { name: FeatureIconName }) {
  const paths: Record<FeatureIconName, React.ReactNode> = {
    maintenance: (
      <>
        <path d="m14.4 6.6 3-3a5 5 0 0 1-6.5 6.5L5.3 15.7a2.1 2.1 0 1 1-3-3l5.6-5.6A5 5 0 0 1 14.4.6l-3 3 3 3Z" />
        <path d="M4 14h.01" />
      </>
    ),
    driver: (
      <>
        <circle cx="10" cy="6" r="3" />
        <path d="M4.5 18v-1.5a5.5 5.5 0 0 1 11 0V18M16 4l1 1 2-2" />
      </>
    ),
    support: (
      <>
        <path d="M3 11v-1a7 7 0 0 1 14 0v1" />
        <path d="M3 10h2v6H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1ZM17 10h-2v6h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM15 16c0 2-2 2-4 2" />
      </>
    ),
    pricing: (
      <>
        <circle cx="10" cy="10" r="8" />
        <path d="M12.5 7.5c-.5-.5-1.2-.8-2.2-.8-1.3 0-2.3.7-2.3 1.7 0 2.7 4.5 1.1 4.5 3.6 0 1-.9 1.8-2.4 1.8-.9 0-1.8-.3-2.6-1M10 5.3v9.4" />
      </>
    ),
    comfort: (
      <>
        <path d="M4 11V8.5a2 2 0 0 1 4 0V11M12 11V8.5a2 2 0 0 1 4 0V11M3 11h14v5H3zM5 16v2M15 16v2" />
      </>
    ),
    reliable: (
      <>
        <path d="M10 2 17 5v5c0 4.3-2.9 7-7 8-4.1-1-7-3.7-7-8V5l7-3Z" />
        <path d="m7 10 2 2 4-4" />
      </>
    ),
  }

  return (
    <span className="why-feature-icon" aria-hidden="true">
      <svg viewBox="0 0 20 20">{paths[name]}</svg>
    </span>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" />
    </svg>
  )
}

export default function WhyAdonai() {
  return (
    <section className="why-section" aria-labelledby="why-title">
      <div className="why-container">
        <div className="why-visual">
          <img
            className="why-image"
            src={whyAdonaiImage}
            alt="Adonai Holidays guests arriving at a hotel beside their coach"
          />

          <aside className="why-promise">
            <p>Our promise</p>
            <strong>Every coach<br />inspected before it<br />leaves the yard.</strong>
            <span aria-hidden="true" />
          </aside>
        </div>

        <div className="why-content">
          <p className="why-kicker">Why Adonai</p>
          <h2 id="why-title">Why Choose Adonai Holidays?</h2>
          <p className="why-intro">
            We are committed to providing safe, comfortable and hassle-free travel experiences
            with our modern fleet and dedicated support.
          </p>

          <div className="why-features">
            {features.map((feature) => (
              <article className="why-feature" key={feature.title}>
                <FeatureIcon name={feature.icon} />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="why-button" href="#about">
            Learn More <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
