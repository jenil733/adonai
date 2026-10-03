import '../App.css'
import groupJourney from '../assets/images/ListItem.svg'
import hotelArrival from '../assets/images/Background (2).svg'
import coachInterior from '../assets/images/Image (11).svg'
import mountainRoad from '../assets/images/Image (10).svg'
import familyJourney from '../assets/images/Background (3).svg'
import templeJourney from '../assets/images/Background (5).svg'
import coastalRoad from '../assets/images/Background (1).svg'
import premiumSeat from '../assets/images/Background (4).svg'
import cityPickup from '../assets/images/Background (6).svg'

const galleryImages = [
  { src: groupJourney, alt: 'Adonai travellers gathered beside their coach in the mountains' },
  { src: hotelArrival, alt: 'Travellers arriving at a hotel aboard an Adonai coach' },
  { src: coachInterior, alt: 'Comfortable premium coach interior' },
  { src: mountainRoad, alt: 'Coach travelling along a winding mountain road' },
  { src: familyJourney, alt: 'Family enjoying the mountain view from an Adonai coach' },
  { src: templeJourney, alt: 'Temple visited on an Adonai tour' },
  { src: coastalRoad, alt: 'Coach travelling along a scenic coastal road at sunset' },
  { src: premiumSeat, alt: 'Premium reclining seat inside an Adonai coach' },
  { src: cityPickup, alt: 'Travellers boarding their coach during a city tour' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" />
    </svg>
  )
}

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery-container">
        <p className="section-kicker">
          Gallery <span aria-hidden="true" />
        </p>

        <div className="gallery-heading-row">
          <div>
            <h2 id="gallery-title">
              Moments from Our <span>Journeys</span>
            </h2>
            <p>
              Coaches, interiors, mountain roads and the groups who filled them — photographed
              on real Adonai trips.
            </p>
          </div>

          <a className="gallery-button" href="#gallery-grid">
            View Full Gallery <ArrowIcon />
          </a>
        </div>

        <div className="gallery-grid" id="gallery-grid">
          {galleryImages.map((image) => (
            <figure className="gallery-item" key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
