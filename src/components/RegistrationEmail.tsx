import React from 'react';
import { motion } from 'framer-motion';

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2, ease: 'easeOut' },
};

const RegistrationEmail: React.FC = () => {
  return (
    <section className="w-full pt-16 pb-16 bg-cyan-600">
      <motion.div {...fadeUpProps}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-white mb-10 leading-tight max-w-4xl mx-auto">
            Receba notificações dos nossos produtos
          </h1>

          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              className="flex-grow rounded-xl px-6 py-4 text-lg placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg transition"
              required
            />
            <button
              type="submit"
              className="bg-white text-cyan-600 font-semibold rounded-xl px-8 py-4 text-lg hover:bg-cyan-100 active:bg-cyan-200 shadow-md transition"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default RegistrationEmail;
