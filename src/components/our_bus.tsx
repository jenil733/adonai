import '../App.css'
import busOne from '../assets/images/our_bus1.svg'
import busTwo from '../assets/images/our_bus2.svg'
import busThree from '../assets/images/our_bus3.svg'
import busFour from '../assets/images/our_bus4.svg'
import airConditioningIcon from '../assets/icons/SVG (3).svg'
import passengerIcon from '../assets/icons/SVG (4).svg'
import wifiIcon from '../assets/icons/Group.svg'
import musicIcon from '../assets/icons/Group (1).svg'
import seatIcon from '../assets/icons/fluent-emoji-high-contrast_seat.svg'
import chargingIcon from '../assets/icons/material-symbols-light_charger-outline-rounded.svg'

const buses = [
  {
    image: busOne,
    badge: 'Most requested',
    badgeTone: 'navy',
    availability: 'Available',
  },
  {
    image: busTwo,
    badge: 'Limited Availability',
    badgeTone: 'gold',
    availability: '',
  },
  {
    image: busThree,
    badge: 'Corporate favourite',
    badgeTone: 'navy',
    availability: 'Available',
  },
  {
    image: busFour,
    badge: '',
    badgeTone: 'navy',
    availability: 'On Request',
  },
]

const features = [
  { icon: seatIcon, label: 'Pushback Seats' },
  { icon: wifiIcon, label: 'On-board Wi-Fi' },
  { icon: musicIcon, label: 'Music System' },
  { icon: chargingIcon, label: 'Charging Points' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" />
    </svg>
  )
}

export default function OurBus() {
  return (
    <section className="buses-section" id="buses" aria-labelledby="buses-title">
      <div className="buses-container">
        <p className="section-kicker">
          Our Buses <span aria-hidden="true" />
        </p>

        <div className="buses-heading-row">
          <div>
            <h2 id="buses-title">Our <span>Popular</span></h2>
            <p>Premium buses for every journey — from family trips to corporate tours.</p>
          </div>

          <a className="view-buses-button" href="#fleet">
            View All Buses <ArrowIcon />
          </a>
        </div>

        <div className="bus-grid">
          {buses.map((bus, index) => (
            <article className="bus-card" key={bus.image}>
              <div className="bus-image-wrap">
                <img src={bus.image} alt={`Adonai Royale 45 luxury coach ${index + 1}`} />
                {bus.badge && (
                  <span className={`bus-badge bus-badge-${bus.badgeTone}`}>{bus.badge}</span>
                )}
                {bus.availability && (
                  <span className="bus-availability">{bus.availability}</span>
                )}
              </div>

              <div className="bus-card-body">
                <p className="bus-category">Luxury Coach</p>
                <div className="bus-name-row">
                  <h3>Adonai Royale 45</h3>
                  <span className="bus-rating" aria-label="Rated 4.8 out of 5">
                    <span aria-hidden="true">★</span> 4.8
                  </span>
                </div>

                <div className="bus-specs">
                  <span><img src={passengerIcon} alt="" aria-hidden="true" />45 Seater</span>
                  <span><img src={airConditioningIcon} alt="" aria-hidden="true" />Air Conditioned</span>
                </div>

                <p className="bus-description">
                  A 2×2 pushback luxury coach built for long-distance touring in complete comfort.
                </p>

                <div className="bus-features">
                  {features.map((feature) => (
                    <span key={feature.label}>
                      <img src={feature.icon} alt="" aria-hidden="true" />
                      {feature.label}
                    </span>
                  ))}
                </div>

                <div className="bus-actions">
                  <a className="bus-details-button" href="#fleet">View Details</a>
                  <a className="bus-enquire-button" href="#enquiry">
                    Enquire Now <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )



  
}
