// src/pages/products/index.tsx

import React, { useState, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import SearchInput from '../../components/SearchInput';
import ProductList from '../../components/ProductList';
import CategoryFilter from '../../components/CategoryFilter';

const fadeInProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2, ease: 'easeOut' },
};

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="bg-white">
      <div className="max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pb-20 px-10">
        <motion.div {...fadeInProps}>
          <SearchInput />
          <CategoryFilter
            selectedCategory={selectedCategory}
            handleChange={handleChange}
          />
        </motion.div>
        <motion.div {...fadeInProps}>
          <ProductList selectedCategory={selectedCategory} />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
