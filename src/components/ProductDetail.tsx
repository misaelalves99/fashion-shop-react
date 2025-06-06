// src/components/ProductDetail.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api/products';
import type { Product } from '../types/product';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { FaTruck, FaClipboardList } from 'react-icons/fa';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>('');

  useEffect(() => {
    const fetchProduct = async () => {
      const allProducts = await getProducts();
      const found = allProducts.find((p) => p.id === productId);
      setProduct(found || null);
      if (found) {
        setMainImage(found.img); // Define imagem principal como padrão
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div className="p-8 text-center text-red-500">Produto não encontrado.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      
      {/* Galeria */}
      <div>
        <img
          src={mainImage}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded-2xl border"
        />
        <div className="flex gap-4 mt-4">
          {[product.img, ...product.images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 object-cover rounded-xl border cursor-pointer hover:opacity-80 transition ${
                mainImage === img ? 'ring-2 ring-blue-500' : ''
              }`}
            />
          ))}
        </div>
      </div>

      {/* Informações */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

        <div className="text-yellow-500 text-lg">
          ⭐⭐⭐⭐⭐ {product.rating}
        </div>

        <div className="flex gap-4 items-center text-gray-500">
          <span className="line-through">
            {product.priceOld.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span className="text-green-600 font-medium">
            {product.discount}
          </span>
        </div>

        <div className="text-3xl font-bold text-cyan-600">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>

        {/* Botões de ação */}
        <div className="flex gap-4 mt-6 flex-wrap">
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
            <PiShoppingCartSimpleBold className="text-xl" />
            Comprar agora
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full flex items-center gap-2 transition">
            <FaTruck />
            Calcular frete
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-full flex items-center gap-2 transition">
            <FaClipboardList />
            Ver características
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
