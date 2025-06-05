// src/context/FavoritesContext.tsx

import { createContext } from 'react';
import { Product } from '../types/product';

export type FavoritesContextType = {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
