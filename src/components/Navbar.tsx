import { useState } from 'react';
import './Navbar.css';
import { View } from '../App';

interface NavbarProps {
  wishlistCount?: number;
  bagCount?: number;
  onNavigate: (view: View) => void;
  currentView: View;
}

export default function Navbar({ wishlistCount = 0, bagCount = 0, onNavigate, currentView }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (view: View, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* 1. Mobile Toggle */}
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
      <a href="/" className="navbar-logo" onClick={(e) => handleNavClick('home', e)}>
        <img src="/logo.png" alt="Ahalia Logo" />
      </a>
      
      {/* 3. Desktop Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <li>
          <a href="#home" className={currentView === 'home' ? 'active-nav' : ''} onClick={(e) => handleNavClick('home', e)}>Home</a>
        </li>
        <li><a href="#new-arrivals">New Arrivals</a></li>
        <li><a href="#offer">Offer</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      {/* 4. Action Icons (Wishlist, Cart) */}
      <div className="navbar-actions">
        <button 
          className={`navbar-icon-btn wishlist-link ${currentView === 'wishlist' ? 'active-icon' : ''}`} 
          aria-label="Wishlist" 
          title="Wishlist"
          onClick={(e) => handleNavClick('wishlist', e)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={currentView === 'wishlist' ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span className="wishlist-count">{wishlistCount}</span>
        </button>
        <button 
          className={`navbar-icon-btn cart-link ${currentView === 'bag' ? 'active-icon' : ''}`} 
          aria-label="Cart"
          onClick={(e) => handleNavClick('bag', e)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={currentView === 'bag' ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className="cart-count">{bagCount}</span>
        </button>
      </div>
    </nav>
  );
}
