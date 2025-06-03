// src/pages/Home.tsx

import React from 'react';
import Hero from '../components/Hero';
import Sale from '../components/Sale';
import Categories from '../components/Categories';
import RegistrationEmail from '../components/RegistrationEmail';
import Info from '../components/Info';

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col gap-16 bg-gray-200">
      <Hero />
      <Sale />
      <Categories />
      <RegistrationEmail />
      <Info />
    </main>
  );
};

export default HomePage;
