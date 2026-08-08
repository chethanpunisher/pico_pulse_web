import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    n: '01',
    title: 'Discovery Call',
    body: "We start with a focused technical deep-dive — your hardware, software constraints, timeline, and success criteria. No sales fluff, straight to the engineering.",
  },
  {
    n: '02',
    title: 'Proposal & Scoping',
    body: 'A detailed statement of work with clear deliverables, milestones, risk identification, and a fixed or T&M pricing model — your choice.',
  },
  {
    n: '03',
    title: 'Embedded Execution',
    body: 'Bi-weekly sprint cycles with demo builds, shared version-controlled repositories, and async updates so you always know where things stand.',
  },
  {
    n: '04',
    title: 'Handoff & Knowledge Transfer',
    body: 'Full documentation, onboarding sessions for your team, and optional retainer support to ensure a smooth long-term handoff.',
  },
]

export default function Process() {
  const headerRef = useScrollReveal()

  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section__header reveal" ref={headerRef}>
          <p className="section__label">How We Work</p>
          <h2 className="section__title">Our Engagement Process</h2>
          <p className="section__desc">A structured, transparent approach that keeps your project on time and on budget.</p>
        </div>

        <div className="process__steps">
          {STEPS.map((step, i) => (
            <>
              <ProcessStep key={step.n} step={step} index={i} />
              {i < STEPS.length - 1 && (
                <div key={`conn-${i}`} className="process-step__connector" aria-hidden="true" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }) {
  const ref = useScrollReveal()
  return (
    <div className="process-step reveal" ref={ref} style={{ transitionDelay: `${index * 0.15}s` }}>
      <div className="process-step__number">{step.n}</div>
      <div className="process-step__content">
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </div>
    </div>
  )
}
