import '../App.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Buses', href: '#buses' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Adonai Holidays home">
        <span className="brand-mark">A</span>
        <span className="brand-copy">
          <span>ADONAI</span>
          <small>Holidays</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        {navLinks.map((link, index) => (
          <a className={index === 0 ? 'active' : ''} href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#enquiry">
        Enquire Now <ArrowIcon />
      </a>
    </header>
  )
}
