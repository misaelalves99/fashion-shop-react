import React, { useState, useMemo, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { products } from '../api/products';
import type { Product } from '../types/product';

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2, ease: 'easeOut' },
};

const SearchInput: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const filteredProducts = useMemo<Product[]>(() => {
    if (!search.trim()) return [];
    return products
      .filter((product: Product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 5); // Limita a 5 resultados
  }, [search]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-8 mb-8 relative max-w-xl mx-auto w-full">
      <motion.div {...fadeUpProps} className="relative w-full">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={search}
          onChange={handleChange}
          className="w-full pt-3 pb-3 pr-12 pl-4 border-2 border-solid border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          autoComplete="off"
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
      </motion.div>

      {search && (
        <div
          className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 z-50 max-h-60 overflow-y-auto"
          style={{ width: '100%' }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition"
              >
                <p className="text-gray-800 font-medium">{product.title}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            ))
          ) : (
            <p className="p-4 text-gray-500">Nenhum produto encontrado.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
