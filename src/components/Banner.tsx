import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Banner.css';

const banners = [
  {
    image: '/banner1.png',
    title: 'TIMELESS ELEGANCE',
    subtitle: 'Redefining modern luxury with handcrafted textiles',
    cta: 'Shop Collection'
  },
  {
    image: '/banner2.png',
    title: 'THE SPRING EDIT',
    subtitle: 'Lighter fabrics, vibrant colors, eternal style',
    cta: 'Explore New'
  },
  {
    image: '/banner3.png',
    title: 'AHALIA SIGNATURE',
    subtitle: 'Crafted for the modern woman who values tradition',
    cta: 'View Series'
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 6000); // Slightly longer for reading text
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner-container">
      <div className="banner-slide-wrapper">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            className="banner-slide"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src={banners[currentIndex].image} 
              alt={banners[currentIndex].title} 
              className="banner-image" 
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
            <div className="banner-content-overlay">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="banner-text-box"
              >
                <motion.h2 className="banner-title">
                  {banners[currentIndex].title}
                </motion.h2>
                <motion.p className="banner-subtitle">
                  {banners[currentIndex].subtitle}
                </motion.p>
                <motion.button 
                  className="banner-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {banners[currentIndex].cta}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hidden pre-render for subsequent images to ensure they show immediately when switching */}
        <div style={{ display: 'none', visibility: 'hidden', position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
          {banners.map((banner, i) => (
            <img key={i} src={banner.image} aria-hidden="true" loading="eager" />
          ))}
        </div>
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
