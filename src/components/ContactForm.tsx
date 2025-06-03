// src/components/ContactForm.tsx

import React, { FormEvent } from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulário enviado!');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 m-auto">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-base font-semibold block mb-1">
            <strong className="text-red-500">*</strong> Nome
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div>
          <label className="text-base font-semibold block mb-1">
            <strong className="text-red-500">*</strong> Email
          </label>
          <input
            type="email"
            placeholder="Digite seu email"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div>
          <label className="text-base font-semibold block mb-1">
            <strong className="text-red-500">*</strong> Mensagem
          </label>
          <textarea
            placeholder="Digite sua mensagem"
            rows={5}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-full transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
