import { Product } from './product';

export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
}
