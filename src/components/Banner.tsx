import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        {banners.map((banner, index) => (
          <motion.div
            key={index}
            className="banner-slide"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 10 : 1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: index === currentIndex ? 'auto' : 'none',
              visibility: index === currentIndex ? 'visible' : 'hidden'
            }}
          >
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="banner-image" 
              fetchPriority={index === 0 ? "high" : "auto"}
              loading="eager"
              decoding="sync"
            />
            <div className="banner-content-overlay">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0, 
                  scale: index === currentIndex ? 1 : 0.9 
                }}
                transition={{ 
                  delay: index === currentIndex ? 0.4 : 0, 
                  duration: 0.8, 
                  ease: "easeOut" 
                }}
                className="banner-text-box"
              >
                <motion.button 
                  className="banner-explore-btn"
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                  </svg>
                  Explore
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="banner-controls">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex ? (
              <div className="dot-progress-bg">
                <motion.div 
                  className="dot-progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  key={currentIndex}
                  transition={{ duration: 6, ease: "linear" }}
                />
              </div>
            ) : (
              <div className="dot-inactive" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
