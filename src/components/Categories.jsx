import React from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { CardCategories } from '../data/data';
import Fade from 'react-reveal';

const Categories = () => {
    return (
      <section className='m-auto pt-20 pb-20'>
        <Fade bottom duration={2000} distance="40px">
          <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pr-10 pl-10'>
            <div className="flex w-full">
              <BiSolidCategory className="text-5xl text-cyan-600" />
              <h1 className='max-md:text-4xl text-5xl pb-10 text-cyan-700'>Categorias</h1>
            </div>
            <div className="max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 grid grid-cols-4 gap-10 max-w-7xl">
              {CardCategories.map((category) => (
                <div className='bg-gray-200 text-white overflow-hidden transform hover:scale-105 relative items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 group' key={category.id}>
                  <div>
                    <img src={category.img} alt={category.img} className='w-full'/>
                  </div>
                  <div className='absolute bottom-0 inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-opacity-75 w-full text-center bg-gradient-to-t from-cyan-700 to-transparent opacity-25 group-hover:opacity-75 flex items-end justify-center p-2'>
                    <h1 className='text-2xl'>{category.title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </section>
    );
  };
  
export default Categories;
  