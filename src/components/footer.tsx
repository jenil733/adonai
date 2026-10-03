import '../App.css'
import facebookIcon from '../assets/icons/SVG (10).svg'
import instagramIcon from '../assets/icons/SVG (11).svg'
import youtubeIcon from '../assets/icons/SVG (12).svg'
import linkedinIcon from '../assets/icons/SVG (13).svg'

const socialLinks = [
  { label: 'Facebook', icon: facebookIcon, href: '#facebook' },
  { label: 'Instagram', icon: instagramIcon, href: '#instagram' },
  { label: 'YouTube', icon: youtubeIcon, href: '#youtube' },
  { label: 'LinkedIn', icon: linkedinIcon, href: '#linkedin' },
]

const quickLinks = [
  { label: 'Home', href: '#home' }, { label: 'About Us', href: '#about' },
  { label: 'Our Buses', href: '#buses' }, { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' }, { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' }, { label: 'Contact Us', href: '#contact' },
]

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 18 18"><path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" /></svg>
}

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M6.1 2.5 8 6.7 5.9 8a12.4 12.4 0 0 0 6.1 6.1l1.3-2.1 4.2 1.9-.7 3.1c-.2.7-.8 1.1-1.5 1-7-.8-12.5-6.3-13.3-13.3-.1-.7.3-1.3 1-1.5l3.1-.7Z" /></svg>
}

function MailIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><rect x="2.5" y="4" width="15" height="12" rx="2" /><path d="m3.5 6 6.5 5 6.5-5" /></svg>
}

function LocationIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M10 18s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z" /><circle cx="10" cy="8" r="2" /></svg>
}

function SocialLinks() {
  return <div className="footer-socials">{socialLinks.map((social) => (
    <a href={social.href} aria-label={social.label} key={social.label}><img src={social.icon} alt="" /></a>
  ))}</div>
}

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <div className="footer-cta-inner">
          <div className="footer-cta-copy">
            <p className="footer-eyebrow"><span aria-hidden="true" /> Contact Us</p>
            <h2 id="footer-cta-title">Ready to Plan Your<br /><span>Next Journey?</span></h2>
            <p className="footer-cta-text">Get in touch with us for bookings, enquiries and customized travel solutions. Share your dates and we will come back with an itemised quote within four working hours.</p>
            <div className="footer-actions">
              <a className="footer-enquire-button" href="#enquiry">Enquire Now <ArrowIcon /></a>
              <a className="footer-call-button" href="tel:+919845022110"><PhoneIcon /> Call +91 98450 22110</a>
            </div>
          </div>

          <aside className="footer-contact-card" aria-label="Contact information">
            <a className="footer-contact-row" href="tel:+919845022110"><span><PhoneIcon /></span><div><small>Phone</small><strong>+91 98450 22110</strong></div></a>
            <a className="footer-contact-row" href="mailto:enquiry@adonaiholidays.com"><span><MailIcon /></span><div><small>Email</small><strong>enquiry@adonaiholidays.com</strong></div></a>
            <div className="footer-contact-row"><span><LocationIcon /></span><div><small>Location</small><strong>24, Palace Cross Road, Bengaluru 560020</strong></div></div>
            <div className="footer-card-socials"><small>Follow us</small><SocialLinks /></div>
          </aside>
        </div>
      </section>

      <div className="footer-main">
        <div className="footer-brand-column">
          <a className="footer-brand" href="#home"><span className="footer-brand-mark">A</span><span>ADONAI<small>Holidays</small></span></a>
          <p>Adonai Holidays is a professional tours and travels company specializing in premium fleet of buses for group trips, tours and every travel requirement in between.</p>
          <span className="footer-divider" /><small>Tourist permit holder · GST registered · All-India operations</small>
        </div>
        <nav className="footer-links-column" aria-label="Footer navigation"><h3>Quick Links</h3>{quickLinks.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}</nav>
        <div className="footer-details-column"><h3>Contact</h3><a href="tel:+919845022110"><PhoneIcon /><span>+91 98450 22110<br />+91 80 4123 8890</span></a><a href="mailto:enquiry@adonaiholidays.com"><MailIcon /><span>enquiry@adonaiholidays.com</span></a><div><LocationIcon /><span>24, Palace Cross Road, Bengaluru 560020</span></div></div>
        <div className="footer-follow-column"><h3>Follow Us</h3><SocialLinks /><p>Follow our journeys for route ideas, fleet updates and seasonal offers.</p></div>
      </div>

      <div className="footer-bottom"><p>© 2026 Adonai Holidays. All rights reserved.</p><div><a href="#privacy">Privacy Policy</a><span>|</span><a href="#terms">Terms &amp; Conditions</a></div></div>
    </footer>
  )
}
