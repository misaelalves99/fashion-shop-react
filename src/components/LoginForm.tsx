import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: 'easeOut' },
};

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-cyan-50 to-white px-4">
      <motion.div {...fadeUpProps} className="w-full max-w-md bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-3xl font-extrabold text-center text-cyan-700 mb-2">Entrar na sua conta</h1>
        <p className="text-center text-gray-600 mb-8">Acesse com seu email e senha</p>

        <form className="space-y-5">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">Senha</label>
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
            <FaSignInAlt /> Entrar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Não tem conta?{' '}
          <Link to="/register" className="text-cyan-600 font-semibold hover:underline">
            Cadastre-se aqui
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
