import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Analytics from './components/Analytics.jsx'
import Achievements from './components/Achievements.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-body">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Analytics />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
