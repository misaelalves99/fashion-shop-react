// src/pages/Contact.tsx

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2, ease: 'easeOut' },
};

const ContactPage: React.FC = () => {
  return (
    <div className="m-auto">
      <motion.div {...fadeUpProps}>
        <div className="max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pt-20 pb-20">
          <h1 className="text-3xl font-bold text-center text-cyan-700 pb-10">
            Contate-nos
          </h1>
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
