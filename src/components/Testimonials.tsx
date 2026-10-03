import '../App.css'
import quoteIcon from '../assets/icons/SVG (7).svg'
import starIcon from '../assets/icons/SVG (9).svg'
import rajeshProfile from '../assets/images/Image (12).svg'
import divyaProfile from '../assets/images/Image (13).svg'
import subramaniamProfile from '../assets/images/Image (14).svg'
import ananyaProfile from '../assets/images/Image (15).svg'

const testimonials = [
  {
    quote:
      'We moved 82 people to Coorg across two coaches and not a single thing went wrong. The drivers arrived early, the buses were spotless and the coordinator kept me updated the whole way. This is now our default for offsites.',
    name: 'Rajesh Menon',
    profile: rajeshProfile,
    trip: 'Corporate Offsite',
    details: '3 days • Bengaluru',
  },
  {
    quote:
      'Taking 44 students on a six-day tour is stressful, but Adonai made the travel part easy. The coach was comfortable for long stretches and the driver was genuinely patient with the students.',
    name: 'Divya Krishnan',
    profile: divyaProfile,
    trip: 'College Tour',
    details: '6 days • Mysuru',
  },
  {
    quote:
      'Twenty-six family members, elders included, across nine days of temple travel. They planned rest stops without being asked and the sleeper coach meant we arrived rested each morning.',
    name: 'Subramaniam Iyer',
    profile: subramaniamProfile,
    trip: 'Family Pilgrimage',
    details: '9 days • Chennai',
  },
  {
    quote:
      'Guest shuttles between three venues over two days, all on time. The quote was itemised up front and the final invoice matched it exactly, which almost never happens.',
    name: 'Ananya Rao',
    profile: ananyaProfile,
    trip: 'Wedding Travel',
    details: '2 days • Hyderabad',
  },
]

export default function Testimonials() {
  return (
    <section
      className="testimonials-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="testimonials-container">
        <p className="testimonials-kicker">
          Testimonials <span aria-hidden="true" />
        </p>
        <h2 id="testimonials-title">
          What Our <span>Customers</span> Say
        </h2>
        <p className="testimonials-intro">
          Nine thousand five hundred groups have travelled with us. Here is what a few of them
          had to say.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-card-top">
                <span className="testimonial-stars" aria-label="5 out of 5 stars">
                  <span aria-hidden="true">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <img src={starIcon} alt="" key={starIndex} />
                    ))}
                  </span>
                </span>
                <img className="testimonial-quote-mark" src={quoteIcon} alt="" aria-hidden="true" />
              </div>

              <blockquote>“{testimonial.quote}”</blockquote>

              <footer className="testimonial-customer">
                <img
                  className="testimonial-avatar"
                  src={testimonial.profile}
                  alt={`${testimonial.name} profile`}
                />
                <div>
                  <cite>{testimonial.name}</cite>
                  <p>{testimonial.trip} <span>•</span> {testimonial.details}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
