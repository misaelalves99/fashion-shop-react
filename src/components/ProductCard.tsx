// src/components/ProductCard.tsx

import React from 'react';
import type { ProductCardProps } from '../types/product';
import AddToCartButton from './CartButton';
import AddToFavoritesButton from './FavoritesButton';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="w-full p-4 relative">

        {/* Botão de favoritos */}
        <AddToFavoritesButton product={product} />

        {/* Imagem do produto */}
        <div className="w-full overflow-hidden rounded-xl">
          <img
            src={product.img}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Título */}
        <h2 className="mt-4 text-lg font-semibold text-center text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Avaliação */}
        <div className="text-center text-yellow-500 text-sm mt-1">
          ⭐⭐⭐⭐⭐ {product.rating}
        </div>

        {/* Preço antigo e desconto */}
        <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
          <span className="line-through">
            {product.priceOld.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span className="text-green-600 font-medium">{product.discount}</span>
        </div>

        {/* Preço atual e botão de adicionar ao carrinho */}
        <div className="mt-4 flex justify-between items-center bg-cyan-500 px-4 py-2 rounded-lg">
          <span className="text-white font-bold text-lg">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
