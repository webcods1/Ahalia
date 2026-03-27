import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/logo1.png" alt="Ahalia Logo" className="footer-logo" />
          <p className="footer-tagline">Premium dresses for the modern woman.</p>
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
