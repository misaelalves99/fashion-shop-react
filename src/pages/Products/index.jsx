import SearchInput from '../../components/SearchInput';
import ProductsItem from '../../components/ProductsItem';
import CategoryFilter from '../../components/CategoryFilter';
import React, { useState } from 'react';
import Fade from 'react-reveal';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className='bg-white '>
      <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pb-20 pr-10 pl-10'>
        <Fade bottom duration={2000} distance="40px">
          <SearchInput/>
          <CategoryFilter selectedCategory={selectedCategory} handleChange={handleChange}/>
        </Fade>
        <Fade bottom duration={2000} distance="40px">
          <ProductsItem selectedCategory={selectedCategory}/>
        </Fade>
      </div>
    </div>
  );
};

export default Products;
