import '../App.css'
import tourIcon from '../assets/icons/Background.svg'
import groupIcon from '../assets/icons/SVG (4).svg'
import rentalIcon from '../assets/icons/SVG (5).svg'
import customIcon from '../assets/icons/SVG (6).svg'


const services = [
  {
    icon: tourIcon,
    title: 'Tour & Travel Solutions',
    summary: 'Planned travel solutions for memorable destinations.',
    description:
      'Day-wise itineraries, stay coordination and on-road support for hill stations, heritage circuits and coastal routes.',
  },
  {
    icon: groupIcon,
    title: 'Group Trip Solutions',
    summary: 'Reliable transport for schools, colleges, corporate groups and families.',
    description:
      'Multi-bus convoys, coordinator on call, verified drivers and a single point of contact for the whole group.',
  },
  {
    icon: rentalIcon,
    title: 'Bus Rental Services',
    summary: 'Flexible bus rental options for different travel requirements.',
    description:
      'Hourly, daily, weekly and monthly rentals with transparent kilometre and driver allowances.',
  },
  {
    icon: customIcon,
    title: 'Custom Travel Solutions',
    summary: 'Customized travel solutions based on customer requirements.',
    description:
      'Weddings, events, pilgrimages and staff shuttles planned exactly around your schedule.',
  },
]

function LearnMoreArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12">
      <path d="M3.25 8.75 8.75 3.25M4.25 3.25h4.5v4.5" />
    </svg>
  )
}

export default function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-container">
        <p className="section-kicker">
          Our Services <span aria-hidden="true" />
        </p>

        <h2 id="services-title">
          Travel Solutions for <span>Every Need</span>
        </h2>
        <p className="services-intro">
          Whether it is a single day out or a nine-day tour across four states, the planning,
          the coach and the crew come from one place.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className={`service-icon${index === 0 ? ' service-icon-map' : ''}`}>
                <img src={service.icon} alt="" aria-hidden="true" />
              </span>

              <h3>{service.title}</h3>
              <p className="service-summary">{service.summary}</p>
              <p className="service-description">{service.description}</p>

              <a className="service-link" href="#enquiry">
                Learn more <LearnMoreArrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
