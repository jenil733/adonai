import '../App.css'
import fleetImage from '../assets/images/about1.svg'
import groupImage from '../assets/images/abot2.svg'
import interiorImage from '../assets/images/about3.svg'
import safetyIcon from '../assets/icons/SVG.svg'
import honestyIcon from '../assets/icons/SVG (1).svg'
import roadsIcon from '../assets/icons/SVG (2).svg'

const values = [
  {
    title: 'Safety is not negotiable',
    description:
      'Fitness certificates, insurance and driver records are current on every vehicle, every day. We would rather cancel than send out a coach we would not put our own family in.',
    icon: safetyIcon,
  },
  {
    title: 'Quote once, honestly',
    description:
      'The number we give you includes driver allowance, tolls, parking and permits. The invoice at the end matches the quote at the start.',
    icon: honestyIcon,
  },
  {
    title: 'We know the roads',
    description:
      'Eighteen years of ghat sections, festival traffic and monsoon diversions means our drivers plan routes on experience, not just a map application.',
    icon: roadsIcon,
  },
]

export default function AboutUs() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-card">
        <div className="about-intro">
          <div className="about-copy">
            <p className="section-kicker">About Us <span aria-hidden="true" /></p>
            <h2 id="about-title">Eighteen years of moving<br />people well</h2>

            <div className="about-text">
              <p>
                We are a family-run tours and travels company operating from Bengaluru, with a fleet we own, drivers we employ directly and a travel desk that answers its own phone.
              </p>
              <p>
                Most transport problems are not mechanical — they are communication problems. A pickup point that moved, a group that grew by six people, a temple that closes earlier than the itinerary assumed. So we built the company around one coordinator per trip who owns your journey from enquiry to drop-off.
              </p>
              <p>
                On the vehicle side, we keep it simple: we own every coach in the fleet, service them at our own yard on a fixed schedule, and inspect each one before it leaves for a trip. When we do need a partner vehicle for a large convoy, we tell you before you pay, not after.
              </p>
            </div>

    
          </div>

          <div className="about-gallery" aria-label="Adonai Holidays fleet and travel experience">
            <img className="about-image about-image-wide" src={fleetImage} alt="Adonai coach fleet parked at the company yard" />
            <img className="about-image" src={groupImage} alt="Travellers gathered beside an Adonai coach" />
            <img className="about-image" src={interiorImage} alt="Premium coach interior with reclining seats" />
          </div>
        </div>

        <div className="values-section">
          <div className="values-heading">
            <p>What we stand for</p>
            <h3>Three things we do not compromise<br />on</h3>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <span className="value-icon">
                  <img src={value.icon} alt="" aria-hidden="true" />
                </span>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
