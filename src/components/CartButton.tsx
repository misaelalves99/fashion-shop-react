import React from 'react';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { useCart } from '../hooks/useCart';
import type { Product } from '../types/product';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white text-cyan-600 hover:bg-cyan-100 p-2 rounded-full transition duration-300 cursor-pointer"
      title="Adicionar ao carrinho"
    >
      <PiShoppingCartSimpleBold className="text-xl" />
    </button>
  );
};

export default AddToCartButton;
