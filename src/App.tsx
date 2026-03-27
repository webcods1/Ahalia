import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner />
      <main className="content">
        <ProductGrid />
        
        {/* Additional ecommerce sections can be added here */}
        <section className="about-brand">
          <div className="about-content">
            <h2 className="section-title">The Ahalia Legacy</h2>
            <p className="about-text">
              Crafting elegance since our inception. We specialize in premium dresses that 
              personify sophistication and contemporary style. Our collections are 
              meticulously designed with top-tier fabrics to provide an unmatched 
              wearing experience.
            </p>
            <button className="read-more-btn">Our Story</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
