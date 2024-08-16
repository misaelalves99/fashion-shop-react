import React from 'react';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';

import { FaShopify } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { TbLocation } from "react-icons/tb";

import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black pt-20 pb-3'>
      <Fade bottom duration={2000} distance="40px">
        <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-lg:grid-cols-2 max-md:max-w-xl max-md:grid-cols-1 max-w-7xl grid grid-cols-3 m-auto pr-10 pl-10'>
          <div className='max-w-52 w-full max-md:mb-10 max-md:ml-auto flex flex-col ml-auto mr-auto'>
            <Link to="/">
              <div className='flex items-center'>
                <div><FaShopify className='text-white mb-5 mr-5 text-2xl' /></div>
                <h1 className='text-lg text-white mb-5 font-bold'>Fashion Shop</h1>
              </div>
            </Link>
            <p className='text-sm text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. aque reiciendis investe ratione ex alias quis</p>
          </div>

          <div className='max-w-52 w-full max-md:mb-10 mt-0 flex flex-col ml-auto mr-auto'>
            <div>
              <h1 className='text-lg text-white mb-5 font-bold'>Encontre-nos</h1>
            </div>
            <div className='flex mt-2 mb-2'>
              <BsTelephone className='text-sm text-white mr-4'/>
              <p className='text-sm text-white'>(33) 99941-6186</p>
            </div>
            <div className='flex mt-2 mb-2'>
              <MdOutlineMail className='text-sm text-white mr-4'/>
              <p className='text-sm text-white'>contate@email.com</p>
            </div>
            <div className='flex mt-2 mb-2'>
              <TbLocation className='text-sm text-white mr-4'/>
              <p className='text-sm text-white'>Teófilo Otoni-MG</p>
            </div>
          </div>

          <div className='max-w-52 w-full flex flex-col items-start ml-auto mr-auto'>
            <div>
              <h1 className='text-lg text-white mb-5 font-bold'>Atendimento</h1>
            </div>
            <div className='flex'>
              <Link>
                <p className='text-sm text-white mt-1 mb-1 cursor-pointer hover:text-cyan-500'>Central de ajuda</p>
              </Link>
            </div>
            <div className='flex'>
              <Link>
                <p className='text-sm text-white mt-1 mb-1 cursor-pointer hover:text-cyan-500'>Como comprar</p>
              </Link>
            </div>
            <div className='flex'>
              <Link>
                <p className='text-sm text-white mt-1 mb-1 cursor-pointer hover:text-cyan-500'>Acompanhe seu pedido</p>
              </Link>
            </div>
            <div className='flex'>
              <Link>
                <p className='text-sm text-white mt-1 mb-1 cursor-pointer hover:text-cyan-500'>Devoluções</p>
              </Link>
            </div>
          </div>
        </div>
      </Fade>

      <Fade bottom duration={2000} distance="40px">
        <div className='max-w-7xl flex justify-center items-center m-auto mt-10 pr-10 pl-10'>
          <Link to="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target='_blank'>
            <div className='flex justify-center items-center p-2 rounded-full bg-white text-2xl m-2 hover:bg-cyan-500'>
              <FaLinkedinIn />
            </div>
          </Link>
          <Link to="https://github.com/misaelalves99" target='_blank'>
            <div className='flex justify-center items-center p-2 rounded-full bg-white text-2xl m-2 hover:bg-cyan-500'>
              <PiGithubLogoFill />
            </div>
          </Link>
          <Link to="https://www.instagram.com/misael_alves_99/" target='_blank'>
            <div className='flex justify-center items-center p-2 rounded-full bg-white text-2xl m-2 hover:bg-cyan-500'>
              <FaInstagram />
            </div>
          </Link>
          <Link to="https://www.facebook.com/misael.alves.92317/" target='_blank'>
            <div className='flex justify-center items-center p-2 rounded-full bg-white text-2xl m-2 hover:bg-cyan-500'>
              <FaFacebookF />
            </div>
          </Link>
        </div>
      </Fade>

      <Fade bottom duration={2000} distance="40px">
        <div className='w-full max-w-7xl m-auto mt-10 pr-10 pl-10'>
          <p className='max-md:text-xs text-sm text-white text-center'>&copy; 2024 Fashion Shop. Todos os direitos reservados.</p>
          <p className='max-md:text-xs text-sm text-white text-center'>Desenvolvido por <Link to="https://misael-alves-portfolio.vercel.app/" target='_blank' className='underline hover:text-cyan-500'>Misael Alves</Link></p>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
