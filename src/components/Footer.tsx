import React from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { TbLocation } from 'react-icons/tb';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { PiGithubLogoFill } from 'react-icons/pi';
import { motion } from 'framer-motion';

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2, ease: 'easeOut' },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-black to-black pt-20 pb-8 text-white select-none">
      {/* Seção principal */}
      <motion.div {...fadeUpProps}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-3 gap-14 max-xl:grid-cols-2 max-md:grid-cols-1">
          {/* Logo e descrição */}
          <div className="max-w-xs flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-6 hover:opacity-80 transition-opacity duration-300">
              <FaShopify className="text-cyan-400 text-3xl mr-3" />
              <h1 className="text-2xl font-extrabold tracking-wide">Fashion Shop</h1>
            </Link>
            <p className="text-gray-300 leading-relaxed text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aque reiciendis investe ratione ex alias quis.
            </p>
          </div>

          {/* Contato */}
          <motion.div {...fadeUpProps}>
            <div className="max-w-xs flex flex-col items-center md:items-start">
              <h2 className="text-xl mb-6 font-semibold text-cyan-400">Encontre-nos</h2>
              <div className="flex items-center mb-4 space-x-4">
                <BsTelephone className="text-cyan-400 text-xl" />
                <p className="text-gray-300 text-sm">(33) 99941-6186</p>
              </div>
              <div className="flex items-center mb-4 space-x-4">
                <MdOutlineMail className="text-cyan-400 text-xl" />
                <p className="text-gray-300 text-sm">contate@email.com</p>
              </div>
              <div className="flex items-center mb-4 space-x-4">
                <TbLocation className="text-cyan-400 text-xl" />
                <p className="text-gray-300 text-sm">Teófilo Otoni-MG</p>
              </div>
            </div>
          </motion.div>

          {/* Links de atendimento */}
          <motion.div {...fadeUpProps}>
            <div className="max-w-xs flex flex-col items-center md:items-start">
              <h2 className="text-xl mb-6 font-semibold text-cyan-400">Atendimento</h2>
              {[
                { label: 'Central de ajuda', href: '#' },
                { label: 'Como comprar', href: '#' },
                { label: 'Acompanhe seu pedido', href: '#' },
                { label: 'Devoluções', href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-300 text-sm mb-3 hover:text-cyan-400 transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Redes Sociais */}
      <motion.div {...fadeUpProps} className="mt-12">
        <div className="max-w-7xl mx-auto flex justify-center gap-6 px-6 sm:px-10">
          {[
            {
              href: 'https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/',
              icon: <FaLinkedinIn />,
              label: 'LinkedIn',
            },
            {
              href: 'https://github.com/misaelalves99',
              icon: <PiGithubLogoFill />,
              label: 'GitHub',
            },
            {
              href: 'https://www.instagram.com/misael_alves_99/',
              icon: <FaInstagram />,
              label: 'Instagram',
            },
            {
              href: 'https://www.facebook.com/misael.alves.92317/',
              icon: <FaFacebookF />,
              label: 'Facebook',
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.15, backgroundColor: 'rgb(14, 165, 233)' }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center items-center w-12 h-12 rounded-full bg-white text-black shadow-md cursor-pointer transition-colors duration-300"
              >
                {icon}
              </motion.div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div {...fadeUpProps} className="mt-14 border-t border-gray-800 pt-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center text-gray-400 text-sm select-text">
          <p>&copy; 2024 Fashion Shop. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://misael-alves-portfolio-next.vercel.app/"
              target="_blank"
              className="underline hover:text-cyan-400 transition-colors duration-300"
              rel="noopener noreferrer"
            >
              Misael Alves
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
