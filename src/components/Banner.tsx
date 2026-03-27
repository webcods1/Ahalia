import { useState, useEffect } from 'react';
import './Banner.css';

const banners = [
  '/banner1.png',
  '/banner2.jpg',
  '/banner3.jpg',
  '/banner4.png',

];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner-container" aria-label="Promotional Banners">
      <div
        className="banner-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((src, index) => (
          <div className="banner-slide" key={index}>
            <img src={src} alt={`Promotional Banner ${index + 1}`} className="banner-image" />
          </div>
        ))}
      </div>

      {/* Small toggle elements below the image (dots) */}
      <div className="banner-controls">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
