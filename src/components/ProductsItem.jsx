import React from 'react';
import { CardProducts } from '../../src/data/data';
import Fade from 'react-reveal';
import Card from './Card';

const ProductsItem = ({ selectedCategory }) => {
    const filteredProducts = selectedCategory === 'Todos'
      ? CardProducts
      : CardProducts.filter(product => product.category === selectedCategory);

    return (
      <div className='m-auto'>
        <div className='max-lg:flex max-lg:flex-col flex justify-between items-center pt-16 pb-16'>
          <div className='max-lg:mb-5'>
            <h1 className="text-4xl font-bold text-cyan-500">Produtos</h1>
          </div>
          <div className='max-lg:flex-col flex justify-center items-center'>
            <label className='max-lg:mb-5 mr-3 text-lg'>Classificar por:</label>
            <div>
              <button className='mr-3 text-lg p-2 rounded-full bg-cyan-500 hover:text-red-800'>Menor preço</button>
              <button className='text-lg p-2 rounded-full bg-cyan-500 hover:text-red-800'>Maior preço</button>
            </div>
          </div>
        </div>
        <div className='max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 grid grid-cols-4 gap-5'>
          <Fade bottom duration={2000} distance="40px">
            {filteredProducts.map(product => (
              <Card product={product}/>
            ))}
          </Fade>
        </div>
      </div>
    );
  };
  
export default ProductsItem;
  