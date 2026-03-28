import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Banner.css';

const banners = [
  '/banner1.png',
  '/banner2.png',
  '/banner3.png',
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner-container">
      <div className="banner-slide-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="banner-slide"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src={banners[currentIndex]} 
              alt={`Ahalia Collection ${currentIndex + 1}`} 
              className="banner-image" 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="banner-controls">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div 
                className="dot-fill"
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
