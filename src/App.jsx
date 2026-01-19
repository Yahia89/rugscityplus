import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary via-secondary to-primary">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero scrollY={scrollY} />
        <Features />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}

export default App
