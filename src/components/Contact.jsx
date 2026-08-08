import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SERVICES = [
  'Firmware Architecture & Development',
  'BSP & Silicon Bring-Up',
  'Real-Time & Safety-Critical Systems',
  'IoT & Wireless Connectivity',
  'Embedded Linux & Yocto',
  'Hardware Design & Schematic Review',
  'Architecture Review & Code Audit',
  'Other / Not Sure Yet',
]

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.58 5a2 2 0 0 1 1.99-2H6.5a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

export default function Contact() {
  const infoRef = useScrollReveal()
  const formRef = useScrollReveal()

  const [form, setForm]       = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent]       = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/mnpajlld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', company: '', service: '', message: '' })
      } else {
        alert('Something went wrong. Please try again or email chethanreddy250@gmail.com directly.')
      }
    } catch {
      alert('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__container">
        <div className="contact__info reveal" ref={infoRef}>
          <p className="section__label">Get In Touch</p>
          <h2 className="section__title">Let's Build Something<br />That Lasts</h2>
          <p className="contact__body">
            Whether you need a full-project team, a specialist for a tricky bring-up problem,
            or an independent audit before your next certification review — we're ready to talk.
          </p>
          <div className="contact__details">
            <div className="contact-detail"><MailIcon /><span>chethanreddy250@gmail.com</span></div>
            <div className="contact-detail"><PhoneIcon /><span>+91 74067 27106</span></div>
            <div className="contact-detail"><PinIcon /><span>Vidya Nagar, Peenya, Bangalore — 560075, Karnataka, India</span></div>
          </div>
        </div>

        <form className="contact__form reveal" ref={formRef} onSubmit={onSubmit} noValidate>
          <div className="form__row">
            <div className="form__group">
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input id="name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={onChange} required />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input id="email" name="email" type="email" placeholder="jane@company.com" value={form.email} onChange={onChange} required />
            </div>
          </div>
          <div className="form__group">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Acme Robotics Inc." value={form.company} onChange={onChange} />
          </div>
          <div className="form__group">
            <label htmlFor="service">Service of Interest</label>
            <select id="service" name="service" value={form.service} onChange={onChange}>
              <option value="" disabled>Select a service...</option>
              {SERVICES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="message">Project Brief <span className="required">*</span></label>
            <textarea id="message" name="message" rows={5} placeholder="Describe your project — hardware platform, current status, key challenges, and timeline..." value={form.message} onChange={onChange} required />
          </div>

          <button type="submit" className="btn btn--accent btn--full" disabled={loading}>
            {loading ? 'Sending…' : <><span>Send Inquiry</span><ArrowIcon /></>}
          </button>
          <p className="form__note">We respond within one business day. All inquiries are treated confidentially.</p>

          {sent && (
            <div className="form__success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Message sent! We'll be in touch shortly.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
