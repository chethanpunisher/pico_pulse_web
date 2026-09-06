const Logo = () => (
  <a href="#home" className="nav__logo">
    <img src="/logo.png" alt="PicoPulse logo" className="logo__img logo__img--footer" />
  </a>
)

const SERVICE_LINKS = [
  'Firmware Development', 'BSP & Bring-Up', 'Safety-Critical Systems',
  'IoT & Connectivity', 'Embedded Linux', 'Hardware Design', 'Code Audit',
]
const COMPANY_LINKS = [
  { href: '#about',     label: 'About Us' },
  { href: '#process',   label: 'Our Process' },
  { href: '#tech',      label: 'Tech Stack' },
  { href: '#products',  label: 'Products' },
  { href: '#contact',   label: 'Contact' },
]
const CONNECT_LINKS = ['LinkedIn', 'GitHub', 'Twitter / X', 'chethanreddy250@gmail.com']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <Logo />
          <p>Complete embedded stack support — hardware design to production firmware.</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h5>Services</h5>
            <ul>{SERVICE_LINKS.map(l => <li key={l}><a href="#services">{l}</a></li>)}</ul>
          </div>
          <div className="footer__col">
            <h5>Company</h5>
            <ul>{COMPANY_LINKS.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>
          <div className="footer__col">
            <h5>Connect</h5>
            <ul>{CONNECT_LINKS.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; 2026 PicoPulse. Est. 2017. All rights reserved.</p>
          <p>Privacy Policy &nbsp;|&nbsp; Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
