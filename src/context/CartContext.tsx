import { createContext } from 'react';
import { Product } from '../types/product';

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
