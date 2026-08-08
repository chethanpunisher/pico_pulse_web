import { useScrollReveal } from '../hooks/useScrollReveal'

const INDUSTRIES = [
  { icon: '🏭', label: 'Industrial Automation' },
  { icon: '📱', label: 'Consumer Electronics' },
  { icon: '🔋', label: 'Energy & Smart Grid' },
  { icon: '🏡', label: 'Smart Home / IoT' },
  { icon: '🤖', label: 'Robotics' },
]

export default function Industries() {
  const headerRef = useScrollReveal()

  return (
    <section className="section industries">
      <div className="container">
        <div className="section__header reveal" ref={headerRef}>
          <p className="section__label">Industries Served</p>
          <h2 className="section__title">We've Shipped Across<br />Every Vertical</h2>
        </div>
        <div className="industries__grid">
          {INDUSTRIES.map(({ icon, label }) => (
            <IndustryCard key={label} icon={icon} label={label} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ icon, label }) {
  const ref = useScrollReveal()
  return (
    <div className="industry-card reveal" ref={ref}>
      <span className="industry-card__icon">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
