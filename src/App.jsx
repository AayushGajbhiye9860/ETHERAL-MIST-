import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Journeys from './components/Journeys'
import Philosophy from './components/Philosophy'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import Login from './components/Login'
import BookingPage from './components/BookingPage'
import JourneysPage from './pages/JourneysPage'
import StoryPage from './pages/StoryPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'

const Home = () => (
  <>
    <Hero />
    <Stats />
    <Journeys />
    <Philosophy />
    <Testimonials />
    <CTABanner />
  </>
)

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/journeys" element={<JourneysPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
