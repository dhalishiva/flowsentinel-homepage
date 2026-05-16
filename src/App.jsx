import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Problem from './sections/Problem.jsx'
import Features from './sections/Features.jsx'
import Pricing from './sections/Pricing.jsx'
import Contact from './sections/Contact.jsx'
import Screenshots from './sections/Screenshots.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Screenshots />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
