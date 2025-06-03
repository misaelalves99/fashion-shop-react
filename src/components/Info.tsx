// src/components/Info.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getInfo } from '../api/info';
import { InfoItem } from '../types/info';

// Ícones do react-icons
import { TbTruckDelivery } from 'react-icons/tb';
import { GiPadlock } from 'react-icons/gi';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { ImCheckboxChecked } from 'react-icons/im';
import { IoCardOutline } from 'react-icons/io5';
import { BsBox2 } from 'react-icons/bs';

// Mapeamento entre nome e componente
const iconMap: Record<string, React.ReactElement> = {
  TbTruckDelivery: <TbTruckDelivery />,
  GiPadlock: <GiPadlock />,
  RiMoneyDollarBoxLine: <RiMoneyDollarBoxLine />,
  ImCheckboxChecked: <ImCheckboxChecked />,
  IoCardOutline: <IoCardOutline />,
  BsBox2: <BsBox2 />,
};

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2, ease: 'easeOut' },
};

const Info: React.FC = () => {
  const [info, setInfo] = useState<InfoItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getInfo();
      setInfo(data);
    }
    fetchData();
  }, []);

  return (
    <section className="w-full py-20 bg-gray-50">
      <motion.div {...fadeUpProps}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-3 gap-12 max-xl:grid-cols-2 max-md:grid-cols-1">
          {info.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-8 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 text-white text-5xl drop-shadow-lg">
                {iconMap[item.icon]}
              </div>
              <h2 className="text-gray-900 text-xl font-semibold mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Info;
