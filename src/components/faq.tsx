import { useState } from 'react'
import '../App.css'

const faqs = [
  {
    category: 'Enquiry process',
    question: 'How do I enquire about a bus for my trip?',
    answer:
      'Open the enquiry form, share your travel dates, pickup point, destination and passenger count, then pick the coach you have in mind. You will receive a reference number immediately and our travel desk responds with an itemised quote within four working hours.',
  },
  {
    category: 'Bus booking',
    question: 'How far in advance should I book a bus?',
    answer:
      'For local and one-day trips, booking at least seven days ahead is usually enough. For multi-day tours, wedding travel and peak-season dates, we recommend booking three to four weeks in advance.',
  },
  {
    category: 'Bus availability',
    question: 'How do I know if a particular bus is available on my dates?',
    answer:
      'Send us your dates and preferred coach through the enquiry form. Our travel desk checks the live fleet schedule and confirms availability before you make any payment.',
  },
  {
    category: 'Group trips',
    question: 'Can you handle large groups that need more than one bus?',
    answer:
      'Yes. We regularly coordinate multi-bus movements for schools, companies, weddings and pilgrimages, with one trip coordinator managing the full convoy.',
  },
  {
    category: 'One-day trips',
    question: 'Do you take one-day and local trips?',
    answer:
      'Yes. We provide local transfers, day outings, corporate shuttles, event transport and sightseeing trips in and around Bengaluru.',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" />
    </svg>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-container">
        <div className="faq-heading-row">
          <div>
            <h2 id="faq-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <p>The five things customers ask us most often before they book.</p>
          </div>

          <a className="faq-all-button" href="#faq-list">
            All Questions <ArrowIcon />
          </a>
        </div>

        <div className="faq-list" id="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <article className={`faq-item${isOpen ? ' faq-item-open' : ''}`} key={faq.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>
                    <small>{faq.category}</small>
                    <strong>{faq.question}</strong>
                  </span>
                  <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>

                <div className="faq-answer" id={answerId} hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
