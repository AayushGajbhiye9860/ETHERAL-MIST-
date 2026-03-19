import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full h-[72px] z-[100] flex items-center justify-between px-8 md:px-12 transition-all duration-700 ease-in-out ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group cursor-pointer">
        <div className="relative w-7 h-7 border border-gold rounded-full flex items-center justify-center overflow-hidden">
          <div className="absolute w-[140%] h-[1px] bg-gold rotate-45 transform"></div>
        </div>
        <span className="font-jost font-light text-[14px] tracking-[0.18em] uppercase text-white">
          Ethereal Mist
        </span>
      </Link>

      {/* Nav Links - Desktop */}
      <div className="hidden md:flex items-center gap-12">
        <NavLink to="/journeys" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-label="View our journeys">Journeys</NavLink>
        <NavLink to="/story" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-label="Read our story">Story</NavLink>
        <NavLink to="/booking" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-label="Book an expedition">Booking</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-label="Contact us">Contact</NavLink>
      </div>

      <div className="flex items-center gap-6">
        <Link 
          to="/login" 
          className="font-jost text-[11px] tracking-widest uppercase text-white/60 hover:text-white transition-colors"
          aria-label="Sign in to your account"
        >
          Sign In
        </Link>
        {/* CTA Button */}
        <Link 
          to="/journeys"
          className="relative px-6 py-2 border border-gold text-gold font-jost text-[11px] tracking-btn uppercase group overflow-hidden transition-colors flex items-center justify-center"
          aria-label="Explore expeditions"
        >
          <span className="relative z-10 transition-colors duration-1000 group-hover:text-dark">Explore</span>
          <div className="absolute inset-0 bg-gold scale-x-0 origin-left transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 -z-0"></div>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
