// src/components/Sale.tsx

import React, { useEffect, useState } from 'react';
import { BsFillLightningChargeFill, BsChevronLeft, BsChevronRight, } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { getProducts } from '../api/products';
import { Product } from '../types/product';
import ProductCard from '../components/ProductCard';

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2, ease: 'easeOut' },
};

const slideVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    transition: { duration: 0.5 },
  }),
};

const Sale: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  const next = () => {
    if (startIndex + itemsPerPage < products.length) {
      setDirection(1);
      setStartIndex((prev) =>
        Math.min(prev + itemsPerPage, products.length - itemsPerPage)
      );
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="m-auto pt-24 pb-24 bg-gray-200 relative overflow-hidden">
      <motion.div {...fadeUpProps}>
        <div className="max-w-[1440px] m-auto px-10 relative">
          <div className="flex items-center gap-4 pb-12">
            <BsFillLightningChargeFill className="text-5xl text-cyan-700" />
            <h1 className="max-md:text-4xl text-5xl text-cyan-700">
              Ofertas Relâmpago
            </h1>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow hover:bg-white transition disabled:opacity-30"
          >
            <BsChevronLeft className="text-2xl text-cyan-700" />
          </button>

          <button
            onClick={next}
            disabled={startIndex + itemsPerPage >= products.length}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow hover:bg-white transition disabled:opacity-30"
          >
            <BsChevronRight className="text-2xl text-cyan-700" />
          </button>

          {/* Lista com animação */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={startIndex}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            >
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Sale;
