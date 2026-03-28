import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './HeroScroll.css';

const FRAME_COUNT = 240;

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameStr = i.toString().padStart(3, '0');
      img.src = `/banner/ezgif-frame-${frameStr}.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Draw frame on canvas when frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.floor(latest) - 1;
    if (images[index] && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        const img = images[index];
        const canvasAspectRatio = canvas.width / canvas.height;
        const imgAspectRatio = img.width / img.height;

        // Dynamic Pan-Cover strategy: Fill the screen and reveal top-to-bottom
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (imgAspectRatio > canvasAspectRatio) {
          // Wider than screen: Fill height, pan horizontally (optional, centering is usually best)
          drawHeight = canvas.height;
          drawWidth = drawHeight * imgAspectRatio;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        } else {
          // Taller than screen (Portrait): Fill width, PAN vertically
          drawWidth = canvas.width;
          drawHeight = drawWidth / imgAspectRatio;
          offsetX = 0;
          
          // Calculate pan: Start at top (0), end at bottom (negative overflow)
          const scrollFraction = scrollYProgress.get();
          const maxOverflow = canvas.height - drawHeight;
          offsetY = maxOverflow * scrollFraction; // Smoothly slide from top to bottom
        }

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    }
  });

  // Handle canvas resize with devicePixelRatio for maximum quality
  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        
        // Initial static draw (top aligned)
        if (images[0]) {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          if (context) {
            const img = images[0];
            const cw = canvas.width;
            const ch = canvas.height;
            const ia = img.width / img.height;
            const ca = cw / ch;

            let dw, dh, ox, oy;
            if (ia > ca) {
              dh = ch; dw = dh * ia; ox = (cw - dw) / 2; oy = 0;
            } else {
              dw = cw; dh = dw / ia; ox = 0; oy = 0; // Start at top
            }
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            context.drawImage(img, ox, oy, dw, dh);
          }
        }
      }
    };
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [images]);

  return (
    <div className="hero-scroll-container" ref={containerRef} style={{ position: 'relative' }}>
      <div className="sticky-canvas-wrapper" style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', overflow: 'hidden' }}>
        <canvas 
          ref={canvasRef} 
          className="hero-canvas" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
        <div className="canvas-overlay" />
        
      </div>
    </div>
  );
}
