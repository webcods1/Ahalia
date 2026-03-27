import './ProductGrid.css';

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
  category: string;
}

const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "Classic Party Gown", 
    price: "₹4,599", 
    images: ["/dress3.png", "/dress2.png"], // First card with multi-side view
    category: "New Arrival" 
  },
  { 
    id: 2, 
    name: "Premium Maroon Dress", 
    price: "₹2,499", 
    images: ["/dress1.png"], 
    category: "Best Seller" 
  },
  { 
    id: 3, 
    name: "Summer Floral Collection", 
    price: "₹1,899", 
    images: ["/dress4.png"], 
    category: "Offer" 
  },
];

export default function ProductGrid() {
  return (
    <section className="product-section">
      <div className="section-header">
        <h2 className="section-title">Ahalia Collections</h2>
        <p className="section-subtitle">Discover our premium range of contemporary dresses</p>
      </div>
      <div className="product-grid">
        {PRODUCTS.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.images[0]} alt={product.name} className="product-image primary" />
              {product.images.length > 1 && (
                <img src={product.images[1]} alt={`${product.name} side view`} className="product-image secondary" />
              )}
              {product.category && <span className="product-tag">{product.category}</span>}
              {product.images.length > 1 && <span className="view-more-tag">Hover for side view</span>}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn">Add to Bag</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
