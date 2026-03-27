import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/logo.png" alt="Ahalia Logo" className="footer-logo" />
          <p className="footer-tagline">Premium dresses for the modern woman.</p>
          <div className="footer-social-links">
            <a href="#instagram" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#whatsapp" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-links-group">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#offer">Offer</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
        <div className="footer-links-group">
          <h4 className="footer-heading">Customer Service</h4>
          <ul className="footer-links">
            <li><a href="#shipping">Shipping & Returns</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-links-group">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="footer-newsletter-text">Stay updated with our latest collections and offers.</p>
          <div className="footer-newsletter-input-group">
            <input type="email" placeholder="Your email address" className="newsletter-input" />
            <button className="newsletter-btn">Join</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; {new Date().getFullYear()} Ahalia. All rights reserved.</p>
      </div>
    </footer>
  );
}
