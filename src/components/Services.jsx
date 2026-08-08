import { useRef, useEffect } from 'react'

const SERVICES = [
  {
    title: 'Firmware Architecture & Development',
    desc: 'Bare-metal C/C++ and RTOS-based firmware designed for reliability, low-power operation, and long-term maintainability on ARM Cortex, RISC-V, and AVR targets — paired with the hardware context to get it right the first time.',
    tags: ['RTOS', 'C/C++', 'ARM Cortex', 'RISC-V'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
        <rect x="16" y="16" width="16" height="16" rx="2" fill="var(--accent)" opacity="0.2"/>
        <rect x="16" y="16" width="16" height="16" rx="2" stroke="var(--accent)" strokeWidth="2"/>
        <path d="M20 24h8M24 20v8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'BSP & Silicon Bring-Up',
    desc: 'First-pass hardware bring-up, Board Support Package development, peripheral driver authoring, and hardware abstraction layers for new silicon and custom PCB designs.',
    tags: ['BSP', 'HAL', 'Drivers', 'PCB Debug'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="5" fill="var(--accent)" opacity="0.8"/>
      </svg>
    ),
  },
  {
    title: 'Real-Time & Safety-Critical Systems',
    desc: 'Design and implementation of deterministic, safety-critical embedded systems adhering to IEC 61508 and ISO 26262 standards for industrial and automotive applications, covering both hardware safeguards and MISRA-C firmware.',
    tags: ['ISO 26262', 'IEC 61508', 'MISRA-C', 'FreeRTOS'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M12 36L8 40M36 12l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="14" y="14" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 24l3 3 6-6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="39" r="2" fill="var(--accent)"/>
        <circle cx="39" cy="9" r="2" fill="var(--accent)"/>
      </svg>
    ),
  },
  {
    title: 'IoT & Wireless Connectivity',
    desc: 'End-to-end IoT solutions spanning BLE, Zigbee, LoRaWAN, Wi-Fi, LTE-M, and NB-IoT — from RF hardware selection to cloud integration and OTA firmware update pipelines.',
    tags: ['BLE', 'LoRaWAN', 'LTE-M', 'MQTT'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 24c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 24c0 8.837 7.163 16 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 24c0 8.837 3.582 16 8 16" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 24c0-8.837 3.582-16 8-16" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="3" fill="var(--accent)"/>
      </svg>
    ),
  },
  {
    title: 'Embedded Linux & Yocto',
    desc: 'Custom Linux distributions using Yocto Project, kernel porting and configuration, device tree authoring, and application-layer integration for complex SoC platforms.',
    tags: ['Yocto', 'Linux Kernel', 'Device Tree', 'SoC'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="18" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="30" y="18" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 24h12" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12v6M12 30v6M36 12v6M36 30v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Hardware Design & Schematic Review',
    desc: 'Component selection, schematic design, PCB layout guidance, and design-for-manufacture reviews. We catch hardware bugs before they become costly respins.',
    tags: ['Schematic', 'PCB Layout', 'DFM', 'Component Selection'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 24h4M30 24h4M24 14v4M24 30v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" stroke="var(--accent)" strokeWidth="2"/>
        <circle cx="24" cy="24" r="2" fill="var(--accent)"/>
      </svg>
    ),
  },
  {
    title: 'Architecture Review & Code Audit',
    desc: 'Independent technical audits of existing embedded hardware designs and codebases for reliability risks, MISRA-C compliance, security vulnerabilities, and scalability ahead of major milestones.',
    tags: ['Code Audit', 'HW Review', 'MISRA-C', 'Security'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M14 34V22l10-8 10 8v12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="20" y="28" width="8" height="6" rx="1" stroke="var(--accent)" strokeWidth="2"/>
        <path d="M8 34h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 14v-4" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = `${(index % 3) * 0.1}s`
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  const onMouseMove = e => {
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    ref.current.style.transform = `translateY(-4px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`
  }
  const onMouseLeave = () => { ref.current.style.transform = '' }

  return (
    <div className="service-card reveal" ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="service-card__icon">{service.icon}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.desc}</p>
      <ul className="service-card__tags">
        {service.tags.map(t => <li key={t}>{t}</li>)}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section__header reveal-header">
          <p className="section__label">What We Do</p>
          <h2 className="section__title">End-to-End Embedded<br />Consulting Services</h2>
          <p className="section__desc">From schematic design and PCB bring-up to production firmware and cloud connectivity — the complete embedded stack.</p>
        </div>
        <div className="services__grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
