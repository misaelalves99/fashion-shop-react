import { CardInfo } from '../data/data';
import Fade from 'react-reveal';

const Info = () => {
    return (
      <section className='w-full pt-20 pb-20 bg-gray-200'>
        <Fade bottom duration={2000} distance="40px">
          <div className="max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1 grid grid-cols-3 gap-10 m-auto pr-10 pl-10">
            {CardInfo.map(data => (
              <div className='bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-10' key={data.id}>
                  <div className='max-w-28 m-auto flex justify-center items-center text-6xl pb-5 rounded-full bg-gray-200 p-6 mb-5'>
                    {data.icon}
                  </div>
                  <h1 className='text-center pb-5 font-bold text-2xl'>{data.title}</h1>
                  <p className='text-center text-base'>{data.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>
    );
  };
  
export default Info;
  