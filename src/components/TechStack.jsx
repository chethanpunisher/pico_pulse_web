import { useScrollReveal } from '../hooks/useScrollReveal'

const CATEGORIES = [
  {
    title: 'Microcontrollers & SoCs',
    items: ['STM32', 'NXP i.MX RT', 'Nordic nRF52/53', 'ESP32', 'RP2040', 'TI AM62x', 'Renesas RA', 'Microchip PIC32'],
  },
  {
    title: 'RTOS & OS',
    items: ['FreeRTOS', 'Zephyr RTOS', 'ThreadX / Azure RTOS', 'embOS', 'Embedded Linux', 'Yocto Project', 'Buildroot'],
  },
  {
    title: 'Languages & Tools',
    items: ['C (C99/C11)', 'C++17', 'Rust (embedded)', 'Python (test/scripts)', 'CMake', 'GDB / OpenOCD', 'JTAG/SWD'],
  },
  {
    title: 'Protocols & Standards',
    items: ['CAN / CAN-FD', 'Modbus RTU/TCP', 'I²C / SPI / UART', 'USB (CDC, HID, DFU)', 'Ethernet / lwIP', 'MQTT / CoAP', 'MISRA-C 2012'],
  },
]

function TechCat({ cat, index }) {
  const ref = useScrollReveal()
  return (
    <div className="tech-cat reveal" ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      <h4 className="tech-cat__title">{cat.title}</h4>
      <div className="tech-cat__items">
        {cat.items.map(item => (
          <span className="tech-tag" key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const headerRef = useScrollReveal()

  return (
    <section className="section tech" id="tech">
      <div className="container">
        <div className="section__header reveal" ref={headerRef}>
          <p className="section__label">Technology</p>
          <h2 className="section__title">Our Tech Stack</h2>
          <p className="section__desc">We work with the tools that matter in production embedded engineering.</p>
        </div>
        <div className="tech__categories">
          {CATEGORIES.map((cat, i) => (
            <TechCat key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
