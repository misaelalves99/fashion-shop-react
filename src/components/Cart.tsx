// src/components/Cart.tsx

import React from 'react';
import { useCart } from '../hooks/useCart';
import type { Product } from '../types/product';
import { FaCreditCard } from 'react-icons/fa';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart() as unknown as {
    cartItems: Product[];
    removeFromCart: (id: number) => void;
  };

  const calculateTotal = (): string =>
    cartItems
      .reduce((total, item) => total + (item.price ?? 0), 0)
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-cyan-600 text-center mb-8">
        Meu Carrinho
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-gray-500 text-lg">
            Seu carrinho está vazio. Adicione produtos para continuar!
          </p>
          <img
            src="https://via.placeholder.com/300x200?text=Carrinho+Vazio"
            alt="Carrinho vazio"
            width={300}
            height={200}
            className="mt-6 rounded-lg shadow-md"
          />
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center py-6">
                <img
                  src={typeof item.img === 'string' ? item.img : ''}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-lg shadow-md object-cover"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                </div>
                <p className="text-cyan-600 font-bold mr-4">
                  {(item.price ?? 0).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:bg-red-100 rounded-lg p-2 transition"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-lg font-semibold text-gray-700">
              Total:{' '}
              <span className="text-cyan-600 font-bold">{calculateTotal()}</span>
            </p>
            <button
              aria-label="Finalizar compra"
              className="flex items-center gap-3 bg-cyan-700 hover:bg-cyan-800 text-white text-lg font-bold px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <FaCreditCard className="text-2xl" />
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
