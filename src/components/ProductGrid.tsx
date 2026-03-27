interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Maroon Silk Dress", price: "₹2,499", image: "/banner1.png", category: "New Arrival" },
  { id: 2, name: "Cream Floral Gown", price: "₹3,199", image: "/banner2.jpg", category: "Featured" },
  { id: 3, name: "Evening Velvet Dress", price: "₹4,599", image: "/banner3.jpg", category: "New Arrival" },
  { id: 4, name: "Summer Pastel Suit", price: "₹1,899", image: "/banner4.jpg", category: "Offer" },
];

export default function ProductGrid() {
  return (
    <section className="product-section">
      <div className="section-header">
        <h2 className="section-title">New Arrivals</h2>
        <p className="section-subtitle">Discover our latest collection of premium dresses</p>
      </div>
      <div className="product-grid">
        {PRODUCTS.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
              {product.category && <span className="product-tag">{product.category}</span>}
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
