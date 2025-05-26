import React from 'react';
import { motion } from 'framer-motion';

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2, ease: 'easeOut' },
};

const ForgotPassword: React.FC = () => {
  return (
    <div className="m-auto">
      <motion.div {...fadeUpProps}>
        <div className="max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pt-20 pb-20">
          <h1 className="text-3xl font-bold text-center pb-10 text-cyan-700">
            Redefinição de senha
          </h1>
          <div className="w-full max-w-96 bg-gray-200 m-auto rounded-xl">
            <div className="p-10">
              <form className="flex flex-col justify-center items-center">
                <p className="text-sm text-center w-full pb-3">
                  Informe o email da sua conta para enviarmos 
                  um link de redefinição de senha.
                </p>
                <div className="w-full flex flex-col m-auto">
                  <label className="text-xl pt-3 pb-3">
                    <strong className="text-red-500">*</strong> Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-full"
                    required
                  />
                </div>
                <div className="w-full pt-10">
                  <button
                    type="submit"
                    className="w-full p-2 bg-cyan-500 rounded-full text-xl text-white hover:bg-cyan-600 transition-colors duration-300"
                  >
                    Enviar link de recuperação
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
