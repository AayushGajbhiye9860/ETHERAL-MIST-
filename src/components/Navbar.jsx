import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isLoginPage ? 'is-login-page' : ''}`}>
      {/* Logo */}
      <Link to="/" className="nav__brand" aria-label="Ethereal Mist">
        <div className="nav__icon">
          <svg viewBox="0 0 24 24">
            <line x1="4" y1="20" x2="20" y2="4" />
          </svg>
        </div>
        <span className="nav__brand-name">Ethereal Mist</span>
      </Link>

      {/* Nav Links */}
      <ul className="nav__links bg-transparent hidden md:flex">
        {['journeys', 'gallery', 'story', 'booking', 'contact'].map((route) => (
          <li key={route}>
            <NavLink
              to={`/${route}`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {route}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav__right">
        {/* Sign In */}
        <Link to="/login" className="nav__signin">
          Sign In
        </Link>
        {/* Explore CTA */}
        <Link to="/journeys" className="nav__cta">
          Explore
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
