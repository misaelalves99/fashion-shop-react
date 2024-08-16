import React from 'react';
import Hero from '../../components/Hero';
import Sale from '../../components/Sale';
import Categories from '../../components/Categories';
import RegistrationEmail from '../../components/RegistrationEmail';
import Info from '../../components/Info';

const Home = () => {
  return (
    <div>
      <Hero />
      <Sale />
      <Categories />
      <RegistrationEmail/>
      <Info />
    </div>
  );
};

export default Home;
