import './ProductGrid.css';

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
  category: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Classic Party Gown", price: "₹4,599", images: ["/dress3.png", "/dress2.png"], category: "New Arrival" },
  { id: 2, name: "Premium Maroon Dress", price: "₹2,499", images: ["/dress1.png", "/dress5.png", "/dress6.png"], category: "Best Seller" },
];

interface ProductGridProps {
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  onAddToBag: (id: number) => void;
  onProductClick: (id: number) => void;
}

export default function ProductGrid({ wishlist, onToggleWishlist, onAddToBag, onProductClick }: ProductGridProps) {
  return (
    <section className="product-section">
      <div className="section-header">
        <h2 className="section-title">Ahalia Collections</h2>
        <p className="section-subtitle">Discover our premium range of contemporary dresses</p>
      </div>
      <div className="product-grid">
        {PRODUCTS.map(product => {
          const isWishlisted = wishlist.includes(product.id);
          
          return (
            <div key={product.id} className="product-card" onClick={() => onProductClick(product.id)}>
              <div className="product-image-wrapper">
                <img src={product.images[0]} alt={product.name} className="product-image primary" />
                {product.images.length > 1 && (
                  <img src={product.images[1]} alt={`${product.name} side view`} className="product-image secondary" />
                )}
                
                <button 
                  className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product.id);
                  }}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>

                {product.category && <span className="product-tag">{product.category}</span>}
                {product.images.length > 1 && <span className="view-more-tag">Hover for side view</span>}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button 
                  className="add-to-cart-btn" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToBag(product.id);
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
