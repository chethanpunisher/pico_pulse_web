import { useState, useEffect } from 'react'

const Logo = () => (
  <a href="#home" className="nav__logo">
    <img src="/logo.png" alt="PicoPulse logo" className="logo__img" />
  </a>
)

const NAV_ITEMS = [
  { href: '#services', label: 'Services' },
  { href: '#about',    label: 'About' },
  { href: '#process',  label: 'Process' },
  { href: '#tech',     label: 'Tech Stack' },
  { href: '#contact',  label: 'Contact' },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('')

  // Scrolled shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section highlight
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <nav className="nav container">
        <Logo />

        <ul className={`nav__links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav__link${activeId === href.slice(1) ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn--sm btn--accent nav__cta">Get a Quote</a>

        <button
          className={`nav__hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
