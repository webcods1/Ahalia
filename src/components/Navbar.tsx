import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      {/* 1. Mobile Toggle (Hidden-ish on desktop) */}
      <button 
        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* 2. Logo */}
      <a href="/" className="navbar-logo">
        <img src="/logo.png" alt="Ahalia Logo" />
      </a>
      
      {/* 3. Desktop Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#new-arrivals" onClick={() => setIsMenuOpen(false)}>New Arrivals</a></li>
        <li><a href="#offer" onClick={() => setIsMenuOpen(false)}>Offer</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#contacts" onClick={() => setIsMenuOpen(false)}>Contacts</a></li>
      </ul>

      {/* 4. Action Icons (Wishlist, Cart) - Always on right for desktop */}
      <div className="navbar-actions">
        <a href="#wishlist" className="navbar-icon-link icon-only" aria-label="Wishlist" title="Wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </a>
        <a href="#cart" className="navbar-icon-link cart-link" aria-label="Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className="cart-count">0</span>
        </a>
      </div>
    </nav>
  );
}
