import { useEffect, useRef } from 'react'

function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W, H, particles = [], animId

    const COLORS = ['rgba(0,212,255,', 'rgba(124,58,237,']
    const N = 55
    const rand = (a, b) => Math.random() * (b - a) + a

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const make = () => ({
      x: rand(0, W), y: rand(0, H),
      r: rand(1, 2.5),
      vx: rand(-0.3, 0.3), vy: rand(-0.3, 0.3),
      alpha: rand(0.15, 0.55),
      color: COLORS[Math.random() > 0.7 ? 1 : 0],
    })

    const drawLines = () => {
      const MAX = 120
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,212,255,${(1 - d / MAX) * 0.12})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, W, H)
      drawLines()
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10
        if (p.y > H + 10) p.y = -10
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(loop)
    }

    resize()
    particles = Array.from({ length: N }, make)
    loop()

    const onResize = () => { resize(); particles = Array.from({ length: N }, make) }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [canvasRef])
}

function useCounter(ref, target) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const easeOut = t => 1 - Math.pow(1 - t, 3)
    const duration = 1800
    let start = null, animId

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      start = null
      const tick = (now) => {
        if (!start) start = now
        const p = Math.min((now - start) / duration, 1)
        el.textContent = Math.round(easeOut(p) * target)
        if (p < 1) animId = requestAnimationFrame(tick)
      }
      animId = requestAnimationFrame(tick)
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => { observer.disconnect(); cancelAnimationFrame(animId) }
  }, [target])
}

const STATS = [
  { target: 120, unit: '+', label: 'Projects Shipped' },
  { target: 15,  unit: '+', label: 'Years Experience' },
  { target: 40,  unit: '+', label: 'Platforms Supported' },
  { target: 98,  unit: '%', label: 'Client Satisfaction' },
]

function StatItem({ target, unit, label }) {
  const ref = useRef(null)
  useCounter(ref, target)
  return (
    <div className="stat">
      <div>
        <span className="stat__value" ref={ref}>0</span>
        <span className="stat__unit">{unit}</span>
      </div>
      <span className="stat__label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)
  useParticles(canvasRef)

  return (
    <section className="hero" id="home">
      <div className="hero__grid-bg" aria-hidden="true" />
      <canvas className="hero__particles" ref={canvasRef} aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="badge__dot" />
          Embedded Systems Experts
        </div>

        <h1 className="hero__headline">
          Full-Stack Embedded<br />
          <span className="text-accent">Hardware & Software</span><br />
          Under One Roof
        </h1>

        <p className="hero__sub">
          PicoPulse delivers the complete embedded stack — from schematic review and PCB
          bring-up to firmware architecture, RTOS integration, and production-ready
          software. One partner, zero gaps.
        </p>

        <div className="hero__actions">
          <a href="#services" className="btn btn--accent btn--lg">Explore Services</a>
          <a href="#contact"  className="btn btn--outline btn--lg">Talk to an Engineer</a>
        </div>

        <div className="hero__stats">
          {STATS.map((s, i) => (
            <>
              <StatItem key={s.label} {...s} />
              {i < STATS.length - 1 && <div key={`div-${i}`} className="stat__divider" />}
            </>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
