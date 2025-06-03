// src/pages/Login.tsx

import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <LoginForm />
    </main>
  );
};

export default LoginPage;
