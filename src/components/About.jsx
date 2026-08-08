import { useScrollReveal } from '../hooks/useScrollReveal'

const PILLARS = [
  { icon: '🔧', title: 'Hardware + Software Together', body: 'Schematic review, PCB bring-up, driver development, and firmware — handled as one integrated discipline.' },
  { icon: '⚡', title: 'Speed Without Shortcuts',      body: 'Rapid iteration cycles backed by rigorous testing and formal review processes.' },
  { icon: '📈', title: 'Scalable Architectures',       body: 'Designs that grow with your product — from prototype breadboard to mass production.' },
]

function ChipDiagram() {
  return (
    <div className="chip-diagram">
      <div className="chip-core"><span className="chip-label">CORE</span></div>
      <div className="chip-pins chip-pins--top">
        {Array(6).fill(0).map((_, i) => <span key={i} />)}
      </div>
      <div className="chip-pins chip-pins--bottom">
        {Array(6).fill(0).map((_, i) => <span key={i} />)}
      </div>
      <div className="chip-pins chip-pins--left">
        {Array(4).fill(0).map((_, i) => <span key={i} />)}
      </div>
      <div className="chip-pins chip-pins--right">
        {Array(4).fill(0).map((_, i) => <span key={i} />)}
      </div>
      <div className="chip-ring chip-ring--1" />
      <div className="chip-ring chip-ring--2" />
      <div className="chip-ring chip-ring--3" />
    </div>
  )
}

export default function About() {
  const visualRef = useScrollReveal()
  const textRef   = useScrollReveal()

  return (
    <section className="section about" id="about">
      <div className="container about__container">
        <div className="about__visual reveal" ref={visualRef}>
          <ChipDiagram />
        </div>

        <div className="about__text reveal" ref={textRef}>
          <p className="section__label">About PicoPulse</p>
          <h2 className="section__title">Built by Engineers<br />Who've Been There</h2>
          <p className="about__body">
            Founded in 2017, PicoPulse is led by <strong>Chethan Reddy V</strong>, an embedded
            systems engineer based in Bangalore with hands-on experience spanning hardware design
            and firmware development — from schematic review and PCB bring-up to RTOS-based
            software on industrial controllers, IoT devices, and automotive ECUs.
          </p>
          <p className="about__body">
            We bridge the hardware–software divide that slows most product teams down. Whether
            you need a complete embedded stack built from scratch or a specialist to crack a
            stubborn bring-up problem, PicoPulse delivers production-ready results — not
            prototypes.
          </p>

          <div className="about__pillars">
            {PILLARS.map(p => (
              <div className="pillar" key={p.title}>
                <span className="pillar__icon">{p.icon}</span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
