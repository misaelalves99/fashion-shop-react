import { BsFillLightningChargeFill } from "react-icons/bs";
import CardSale from "./CardSale";
import Fade from 'react-reveal';

const Sale = () => {
    return (
      <section className='m-auto pt-20 pb-20 bg-gray-200'>
        <Fade bottom duration={2000} distance="40px">
          <div className="max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pr-10 pl-10">
            <div className="flex w-full">
              <BsFillLightningChargeFill className="text-5xl text-cyan-700" />
              <h1 className='max-md:text-4xl text-5xl pb-10 text-cyan-700'>Ofertas Relâmpago</h1>
            </div>
            <div className="w-full">
              <CardSale/>
            </div>
          </div>
        </Fade>
      </section>
    );
  };
  
export default Sale;
  