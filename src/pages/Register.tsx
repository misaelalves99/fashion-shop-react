// src/pages/Register.tsx

import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
