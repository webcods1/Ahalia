import { useState } from 'react';
import './ProductDetailPage.css';

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
  category: string;
  color: string;
  material: string;
  description: string;
  sizes: string[];
}

const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "Classic Party Gown", 
    price: "₹4,599", 
    images: ["/dress3.png", "/dress2.png", "/dress4.png"], 
    category: "New Arrival",
    color: "Deep Navy Blue",
    material: "Premium Silk & Tulle",
    description: "An exquisite piece designed for grand occasions. This gown features a hand-stitched bodice and a flowing tulle skirt that captures the light as you move.",
    sizes: ["S", "M", "L", "XL"]
  },
  { 
    id: 2, 
    name: "Premium Maroon Dress", 
    price: "₹2,499", 
    images: ["/dress1.png", "/dress5.png", "/dress6.png"], 
    category: "Best Seller",
    color: "Dark Maroon",
    material: "Pure Cotton Blend",
    description: "A versatile dress that blends comfort with high fashion. Perfect for evening soirées or formal office gatherings. Includes comprehensive front, side, and detail views.",
    sizes: ["XS", "S", "M", "L"]
  },
  { 
    id: 3, 
    name: "Ahalia Boutique Collection", 
    price: "₹10,999", 
    images: ["/dress8.png", "/dress9.png", "/dress7.png"], 
    category: "Exclusive Set",
    color: "Multi-Color Collection",
    material: "Luxury Fabric Mix",
    description: "The ultimate Ahalia experience. This exclusive set features our top three signature pieces: The Midnight Velvet, Summer Breeze, and Golden Hour dresses. Perfect for building a complete premium wardrobe.",
    sizes: ["S", "M", "L"]
  },
];

interface ProductDetailPageProps {
  productId: number;
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  onAddToBag: (id: number) => void;
  onBackToShop: () => void;
}

export default function ProductDetailPage({ productId, wishlist, onToggleWishlist, onAddToBag, onBackToShop }: ProductDetailPageProps) {
  const product = PRODUCTS.find(p => p.id === productId);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <div>Product Not Found</div>;

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="product-detail-page">
      <button className="back-link" onClick={onBackToShop}>&larr; Back to Collections</button>
      
      <div className="product-detail-container">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.images[activeImage]} alt={product.name} />
          </div>
          {product.images.length > 1 && (
            <div className="thumbnail-list">
              {product.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`thumbnail ${activeImage === idx ? 'active' : ''}`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img src={img} alt={`view ${idx + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="product-specs">
          <span className="detail-tag">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-price">{product.price}</p>
          <div className="divider"></div>
          
          <div className="spec-group">
            <h3>Description</h3>
            <p className="description-text">{product.description}</p>
          </div>

          <div className="spec-row-group">
            <div className="spec-item">
              <h4>Color</h4>
              <div className="color-indicator">
                <span className="color-dot" style={{ backgroundColor: product.color.toLowerCase().includes('maroon') ? '#6b0f1a' : '#2a2d3e' }}></span>
                {product.color}
              </div>
            </div>
            <div className="spec-item">
              <h4>Material</h4>
              <p>{product.material}</p>
            </div>
          </div>

          <div className="spec-group">
            <h4>Select Size</h4>
            <div className="size-selector">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="detail-actions">
            <button className="main-bag-btn" onClick={() => onAddToBag(product.id)}>Add to Bag</button>
            <button 
              className={`detail-wishlist-btn ${isWishlisted ? 'active' : ''}`}
              onClick={() => onToggleWishlist(product.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <div className="shipping-info">
            <p><strong>Shipping:</strong> Free delivery on orders above ₹2000. Delivered in 3-5 business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
