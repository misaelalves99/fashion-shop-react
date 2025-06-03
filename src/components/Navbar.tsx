// src/components/Navbar.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa6';
import { BsCart4 } from 'react-icons/bs';
import { useCart } from '../hooks/useCart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Produtos', href: '/products' },
    { label: 'Contato', href: '/contact' },
  ];

  return (
    <section className="shadow-sm">
      {/* Top navbar */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
          >
            <FaShopify className="text-cyan-600 text-3xl" />
            <h1 className="text-xl font-extrabold tracking-wide text-gray-900">Fashion Shop</h1>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-10">
            {menuItems.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="text-gray-700 font-medium hover:text-cyan-600 hover:underline transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <ul className="flex flex-col gap-5 px-6 py-5 text-gray-700 font-medium">
              {menuItems.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-cyan-600 hover:underline transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-cyan-600">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-6 px-6 py-3 md:px-10">
          <button
            aria-label="Toggle dark mode"
            className="text-3xl hover:text-cyan-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded"
          >
            <MdDarkMode />
          </button>

          <Link
            to="/login"
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-300 transition-colors duration-300 whitespace-nowrap"
          >
            <FaRegUser className="text-xl" />
            <span>
              Entre ou <br /> cadastre-se
            </span>
          </Link>

          <Link
            to="/cart"
            className="relative text-white hover:text-cyan-300 transition-colors duration-300"
          >
            <BsCart4 className="text-3xl cursor-pointer" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
