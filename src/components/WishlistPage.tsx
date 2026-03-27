import './WishlistPage.css';

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

interface WishlistPageProps {
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  onBackToShop: () => void;
  onProductClick: (id: number) => void;
  onAddToBag: (id: number) => void;
}

export default function WishlistPage({ wishlist, onToggleWishlist, onBackToShop, onProductClick, onAddToBag }: WishlistPageProps) {
  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
        <button className="back-to-shop-btn" onClick={onBackToShop}>
          &larr; Back to Shop
        </button>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="empty-wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="empty-heart">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h2>Your wishlist is empty</h2>
          <p>Save items that you like in your wishlist to review them later.</p>
          <button className="shop-now-btn" onClick={onBackToShop}>Shop Now</button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistedProducts.map(product => (
            <div key={product.id} className="wishlist-card" onClick={() => onProductClick(product.id)}>
              <div className="wishlist-image-wrapper">
                <img src={product.images[0]} alt={product.name} />
                <button 
                  className="remove-wishlist-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product.id);
                  }}
                  title="Remove from wishlist"
                >
                  &times;
                </button>
              </div>
              <div className="wishlist-product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button 
                  className="wishlist-add-to-bag"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToBag(product.id);
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
