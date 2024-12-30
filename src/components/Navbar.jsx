import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useCart();

    return (
        <section>
            <div className='w-full bg-white'>
                <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl pl-10 flex justify-between w-full items-center m-auto pt-2 pb-2'>
                    <Link to="/">
                        <div className='flex justify-center items-center'>
                            <div>
                                <FaShopify className='text-black text-2xl'/>
                            </div>
                            <h1 className='text-base font-bold cursor-pointer pl-3'>Fashion Shop</h1>
                        </div>
                    </Link>
                    <ul className='flex justify-center items-center max-md:hidden pr-10'>
                        <li className='text-base m-3 hover:text-red-500 hover:underline'>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className='text-base m-3 hover:text-red-500 hover:underline'>
                            <Link to="/products">
                                Produtos
                            </Link>
                        </li>
                        <li className='text-base m-3 hover:text-red-500 hover:underline'>
                            <Link to="/contact">
                                Contato
                            </Link>
                        </li>
                    </ul>
                    <div className="flex md:hidden pr-10">
                        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                    {isOpen && (
                        <ul className='absolute top-16 right-0 pr-10 z-30 bg-white justify-center items-center md:hidden'>
                            <li className='text-xl m-3 hover:text-red-500 hover:underline'>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className='text-xl m-3 hover:text-red-500 hover:underline'>
                                <Link to="/products">
                                    Produtos
                                </Link>
                            </li>
                            <li className='text-xl m-3 hover:text-red-500 hover:underline'>
                                <Link to="/contact">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <hr className='bg-red-500 w-full h-2'/>
            <div className='w-full bg-cyan-500'>
                <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl flex justify-between w-full h-10 items-center m-auto pt-8 pb-8 pl-10 pr-10'>
                    <div>
                        <MdDarkMode className='text-3xl cursor-pointer hover:text-red-500'/>
                    </div>
                    <div className='flex flex-row items-center'>
                        <FaRegUser className='text-2xl cursor-pointer hover:text-red-500'/>
                        <Link to="/login">
                            <h1 className='text-xs pl-4 pr-4 cursor-pointer hover:text-red-800'>Entre ou <br />cadastre-se</h1>
                        </Link>
                        <Link to="/cart" className="relative">
                            <BsCart4 className="text-3xl cursor-pointer hover:text-red-500" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}