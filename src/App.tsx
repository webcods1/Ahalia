import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import WishlistPage from './components/WishlistPage';
import BagPage from './components/BagPage';
import ProductDetailPage from './components/ProductDetailPage';

import type { View, CartItem } from './types';

function App() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [bagItems, setBagItems] = useState<CartItem[]>([]);
  const [view, setView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const addToBag = (productId: number) => {
    setBagItems(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const removeFromBag = (productId: number) => {
    setBagItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQty: number) => {
    if (newQty <= 0) {
      removeFromBag(productId);
      return;
    }
    setBagItems(prev => 
      prev.map(item => item.id === productId ? { ...item, quantity: newQty } : item)
    );
  };

  const navigateTo = (newView: View, productId?: number) => {
    setView(newView);
    if (productId) setSelectedProductId(productId);
    window.scrollTo(0, 0);
  };

  const totalBagCount = bagItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      <Navbar 
        wishlistCount={wishlist.length} 
        bagCount={totalBagCount}
        onNavigate={navigateTo} 
        currentView={view} 
      />
      
      {view === 'home' && (
        <>
          <Banner />
          <main className="content">
            <ProductGrid 
              wishlist={wishlist} 
              onToggleWishlist={toggleWishlist} 
              onAddToBag={addToBag}
              onProductClick={(id) => navigateTo('product-detail', id)}
            />
            
            <motion.section 
              className="about-brand"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div className="about-content">
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  The Ahalia Legacy
                </motion.h2>
                <motion.p 
                  className="about-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Crafting elegance since our inception. We specialize in premium dresses that 
                  personify sophistication and contemporary style. Our collections are 
                  meticulously designed with top-tier fabrics to provide an unmatched 
                  wearing experience.
                </motion.p>
                <motion.button 
                  className="read-more-btn"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Our Story
                </motion.button>
              </div>
            </motion.section>
          </main>
        </>
      )}

      {view === 'wishlist' && (
        <WishlistPage 
          wishlist={wishlist} 
          onToggleWishlist={toggleWishlist} 
          onBackToShop={() => navigateTo('home')} 
          onAddToBag={addToBag}
          onProductClick={(id) => navigateTo('product-detail', id)}
        />
      )}

      {view === 'bag' && (
        <BagPage 
          bagItems={bagItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromBag}
          onBackToShop={() => navigateTo('home')}
        />
      )}

      {view === 'product-detail' && selectedProductId && (
        <ProductDetailPage 
          productId={selectedProductId}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onAddToBag={addToBag}
          onBackToShop={() => navigateTo('home')}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
