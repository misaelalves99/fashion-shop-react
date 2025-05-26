import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: 'easeOut' },
};

const RegisterForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-cyan-50 to-white px-4">
      <motion.div {...fadeUpProps} className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-extrabold text-center text-cyan-700 mb-2">Crie sua conta</h1>
        <p className="text-center text-gray-600 mb-8">
          <strong className="text-red-500">*</strong> campos obrigatórios
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              <strong className="text-red-500">*</strong> Nome completo
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              <strong className="text-red-500">*</strong> Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              <strong className="text-red-500">*</strong> Gênero
            </label>
            <div className="flex space-x-6 text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" className="accent-cyan-600" required />
                <span>Masculino</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" className="accent-cyan-600" required />
                <span>Feminino</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" className="accent-cyan-600" required />
                <span>Outro</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              <strong className="text-red-500">*</strong> CPF
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              <strong className="text-red-500">*</strong> Data de nascimento
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              <strong className="text-red-500">*</strong> Telefone
            </label>
            <input
              type="tel"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              <strong className="text-red-500">*</strong> Senha
            </label>
            <p className="text-sm text-gray-500 mb-1">Deve conter entre 6 e 20 caracteres</p>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full gap-2 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-medium py-2 px-4 rounded-lg transition"
          >
            <FaUserPlus /> Cadastrar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-cyan-600 font-semibold hover:underline">
            Entrar
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
