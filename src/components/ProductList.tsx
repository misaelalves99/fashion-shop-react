// src/components/ProductList.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import type { Product } from '../types/product';
import { getProducts } from '../api/products';

interface ProductListProps {
  selectedCategory: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProductList: React.FC<ProductListProps> = ({ selectedCategory }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts(selectedCategory);
        setProducts(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar produtos');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return <div className="text-center p-10">Carregando produtos...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-600">Erro: {error}</div>;
  }

  return (
    <motion.div
      className="grid grid-cols-4 gap-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductList;
