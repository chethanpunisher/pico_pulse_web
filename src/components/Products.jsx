import { useRef, useEffect } from 'react'

const PRODUCTS = [
  {
    image: '/industrial_machine_controller.png',
    alt: 'Industrial Machine Controller PCB',
    badge: 'Industrial',
    title: 'Industrial Machine Controller',
    desc: 'A ruggedised multi-axis machine controller PCB built for harsh factory environments. Supports CAN-FD, Modbus RTU, and real-time motion control with isolated I/O protection.',
    specs: [
      { key: 'MCU',    val: 'STM32H7' },
      { key: 'Comms',  val: 'CAN-FD · Modbus RTU · RS-485' },
      { key: 'I/O',    val: '16 DI · 8 DO · 4 AI' },
      { key: 'Supply', val: '9–36 V DC' },
    ],
  },
  {
    image: '/loadcell_amplifier.png',
    alt: 'Load Cell Amplifier PCB',
    badge: 'Precision',
    title: 'Load Cell Amplifier',
    desc: 'High-accuracy 24-bit instrumentation amplifier for Wheatstone-bridge load cells. Delivers low-noise, temperature-compensated signal conditioning with SPI and I²C output interfaces.',
    specs: [
      { key: 'Resolution', val: '24-bit ADC' },
      { key: 'Interface',  val: 'SPI · I²C' },
      { key: 'Gain',       val: '32× · 64× · 128×' },
      { key: 'Supply',     val: '3.3 V / 5 V' },
    ],
  },
  {
    image: '/Loadcell_data_logger.png',
    alt: 'Load Cell Data Logger PCB',
    badge: 'Data Acquisition',
    title: 'Load Cell Data Logger',
    desc: 'Standalone multi-channel data logger for load cell measurements. Onboard RTC, MicroSD storage, and optional Wi-Fi/BLE for wireless streaming — ideal for test-bench and field deployments.',
    specs: [
      { key: 'Channels', val: '4 × load cell inputs' },
      { key: 'Storage',  val: 'MicroSD (FAT32)' },
      { key: 'Wireless', val: 'Wi-Fi 802.11 b/g/n · BLE 5' },
      { key: 'Supply',   val: 'USB-C · 3.7 V LiPo' },
    ],
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = `${index * 0.12}s`
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div className="product-card reveal" ref={ref}>
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.alt}
          className="product-card__image"
          loading="lazy"
        />
        <span className="product-card__badge">{product.badge}</span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__desc">{product.desc}</p>

        <ul className="product-card__specs">
          {product.specs.map(s => (
            <li key={s.key}>
              <span className="spec__key">{s.key}</span>
              <span className="spec__val">{s.val}</span>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn--outline btn--sm product-card__cta">
          Request Datasheet
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section className="section products" id="products">
      <div className="container">
        <div className="section__header reveal-header">
          <p className="section__label">Our Hardware</p>
          <h2 className="section__title">Production-Ready<br />PCB Products</h2>
          <p className="section__desc">Purpose-built embedded hardware designed for reliability in demanding industrial environments.</p>
        </div>

        <div className="products__grid">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.title} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
