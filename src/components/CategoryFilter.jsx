import React from 'react';
import { SelectCategories } from '../data/data';

const CategoryFilter = ({ selectedCategory, handleChange }) => {
    return (
      <div className='w-full bg-gray-200 rounded-xl m-auto'>
        <div className='flex justify-center flex-wrap m-auto'>
          {SelectCategories.map((category) => (
            <label className='flex justify-center items-center m-2' key={category.id}>
              <input 
                type="radio" 
                name="category"
                value={category.title}
                checked={selectedCategory === category.title}
                onChange={handleChange}
                className='bg-gray-300 cursor-pointer m-1'
              />
              <p className='text-lg'>{category.title}</p>
            </label>
          ))}
        </div>
      </div>
    );
  };
  
export default CategoryFilter;
  