import './BagPage.css';

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
  category: string;
  rawPrice: number;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Classic Party Gown", price: "₹4,599", rawPrice: 4599, images: ["/dress3.png", "/dress2.png"], category: "New Arrival" },
  { id: 2, name: "Premium Maroon Dress", price: "₹2,499", rawPrice: 2499, images: ["/dress1.png", "/dress5.png", "/dress6.png"], category: "Best Seller" },
];

interface BagPageProps {
  bagItems: { id: number; quantity: number }[];
  onUpdateQuantity: (id: number, newQty: number) => void;
  onRemoveItem: (id: number) => void;
  onBackToShop: () => void;
}

export default function BagPage({ bagItems, onUpdateQuantity, onRemoveItem, onBackToShop }: BagPageProps) {
  const cartProducts = bagItems.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return product ? { ...product, quantity: item.quantity } : null;
  }).filter(Boolean) as (Product & { quantity: number })[];

  const subtotal = cartProducts.reduce((acc, p) => acc + (p.rawPrice * p.quantity), 0);
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bag-page">
      <div className="bag-header">
        <h1>Shopping Bag</h1>
        <p className="item-count">{cartProducts.length} {cartProducts.length === 1 ? 'Item' : 'Items'}</p>
      </div>

      {cartProducts.length === 0 ? (
        <div className="empty-bag">
          <div className="empty-bag-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <h2>Your bag is empty</h2>
          <p>Sign in to see your bag and get shopping!</p>
          <button className="bag-shop-now" onClick={onBackToShop}>Shop New Arrivals</button>
        </div>
      ) : (
        <div className="bag-content">
          <div className="bag-items-list">
            {cartProducts.map(product => (
              <div key={product.id} className="bag-item-card">
                <div className="bag-item-image">
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <div className="bag-item-details">
                  <div className="bag-item-header">
                    <h3>{product.name}</h3>
                    <button className="remove-btn" onClick={() => onRemoveItem(product.id)} title="Remove item">
                      &times;
                    </button>
                  </div>
                  <p className="bag-item-category">{product.category}</p>
                  <div className="bag-item-footer">
                    <div className="quantity-controls">
                      <button onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}>+</button>
                    </div>
                    <p className="bag-item-price">₹{(product.rawPrice * product.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bag-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <p>Subtotal</p>
              <p>₹{subtotal.toLocaleString()}</p>
            </div>
            <div className="summary-row">
              <p>Estimated Shipping/Handling</p>
              <p>₹{shipping.toLocaleString()}</p>
            </div>
            <div className="summary-total">
              <p>Total</p>
              <p>₹{total.toLocaleString()}</p>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
