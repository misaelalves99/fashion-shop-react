'use client';

import { GiShorts, GiArmoredPants, GiSkirt, GiConverseShoe, GiDress } from 'react-icons/gi';
import { FaSwimmer, FaSnowboarding, FaTshirt } from 'react-icons/fa';
import { BiSolidCategory } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getCategories } from '../api/categories';
import { Category } from '../types/category';

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  bermuda: GiShorts,
  biquini: FaSwimmer,
  calca: GiArmoredPants,
  camiseta: FaTshirt,
  jaqueta: FaSnowboarding,
  saia: GiSkirt,
  sapato: GiConverseShoe,
  vestido: GiDress,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const cats = await getCategories();
        setCategories(cats);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-center pt-20">Carregando categorias...</p>;
  }

  return (
    <section className="w-full py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 sm:px-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex w-full items-center gap-4 pb-10"
        >
          <BiSolidCategory className="text-6xl text-cyan-600" />
          <h1 className="max-md:text-4xl text-5xl text-cyan-700">Categorias</h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-4 gap-10 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          {categories.map((category) => {
            const normalizedKey = category.id.toLowerCase();
            const Icon = categoryIcons[normalizedKey] || BiSolidCategory;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="relative overflow-hidden rounded-3xl shadow-md bg-gray-100 text-cyan-700 flex flex-col items-center justify-center p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg group aspect-square"
              >
                <Icon className="text-cyan-600 mb-2" size={96} />
                <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-gradient-to-t from-cyan-700 to-transparent bg-opacity-75 flex items-end justify-center p-3 opacity-25 group-hover:opacity-90 text-center">
                  <h2 className="text-xl font-semibold capitalize text-white">
                    {category.title}
                  </h2>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Categories;
