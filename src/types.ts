export type View = 'home' | 'wishlist' | 'bag' | 'product-detail';

export interface CartItem {
  id: number;
  quantity: number;
}
