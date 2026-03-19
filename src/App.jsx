import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journeys from './components/Journeys'
import Philosophy from './components/Philosophy'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Journeys />
      <Philosophy />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default App
