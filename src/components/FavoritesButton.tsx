// src/components/favorites/FavoritesButton.tsx

import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useFavorites } from '../hooks/useFavorites';
import type { Product } from '../types/product';

interface FavoritesButtonProps {
  product: Product;
}

const FavoritesButton: React.FC<FavoritesButtonProps> = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorited = favorites.some((fav) => fav.id === product.id);

  const handleClick = () => {
    if (isFavorited) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center bg-transparent hover:scale-110 transition-transform duration-200 text-red-500  z-10"
      title={isFavorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      {isFavorited ? <FaHeart className="text-xl" /> : <FaRegHeart className="text-xl" />}
    </button>
  );
};

export default FavoritesButton;
