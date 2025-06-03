// src/components/CategoryFilter.tsx

import React from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import { GiShorts, GiArmoredPants, GiSkirt, GiConverseShoe, GiDress, } from 'react-icons/gi';
import { FaSwimmer, FaSnowboarding, FaGripLines, FaTshirt, } from 'react-icons/fa';
import { products } from '../api/products';
import { motion } from 'framer-motion';

type Props = {
  selectedCategory: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const categoryIcons: Record<string, React.ReactNode> = {
  Todos: <FaGripLines className="text-3xl text-cyan-600" />,
  Bermuda: <GiShorts className="text-3xl text-cyan-600" />,
  Biquini: <FaSwimmer className="text-3xl text-cyan-600" />,
  Calça: <GiArmoredPants className="text-3xl text-cyan-600" />,
  Camiseta: <FaTshirt className="text-3xl text-cyan-600" />,
  Jaqueta: <FaSnowboarding className="text-3xl text-cyan-600" />,
  Saia: <GiSkirt className="text-3xl text-cyan-600" />,
  Sapato: <GiConverseShoe className="text-3xl text-cyan-600" />,
  Vestido: <GiDress className="text-3xl text-cyan-600" />,
};

const CategoryFilter: React.FC<Props> = ({ selectedCategory, handleChange }) => {
  const categories = ['Todos', ...Array.from(new Set(products.map((p) => p.category)))];

  return (
    <section className="m-auto pt-10 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="max-w-7xl m-auto px-10 max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl"
      >
        <div className="flex items-center gap-4 mb-6">
          <BiSolidCategory className="text-4xl text-cyan-600" />
          <h1 className="text-3xl font-bold text-cyan-700">Filtrar por categoria</h1>
        </div>

        {/* Dropdown para mobile */}
        <div className="block md:hidden mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Escolha uma categoria:
          </label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleChange}
            className="block w-full max-w-xs p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Grid de ícones para desktop */}
        <div className="hidden md:grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((cat) => (
            <motion.div
              key={cat}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center justify-center p-5 border rounded-lg cursor-pointer transition ${
                selectedCategory === cat ? 'bg-cyan-100 border-cyan-500' : 'bg-white border-gray-200'
              }`}
              onClick={() =>
                handleChange({ target: { value: cat } } as React.ChangeEvent<HTMLSelectElement>)
              }
            >
              {categoryIcons[cat] || <FaGripLines className="text-3xl text-cyan-600" />}
              <span className="mt-2 text-sm font-semibold text-gray-700">{cat}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CategoryFilter;
