import Header     from './components/Header'
import Hero       from './components/Hero'
import Services   from './components/Services'
import About      from './components/About'
import Process    from './components/Process'
import TechStack  from './components/TechStack'
import Industries from './components/Industries'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <TechStack />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
