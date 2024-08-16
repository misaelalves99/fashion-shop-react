import Fade from 'react-reveal';

const Contact = () => {
    return (
      <div className="m-auto">
        <Fade bottom duration={2000} distance="40px">
          <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pt-20 pb-20'>
            <div className='pb-10'>
              <h1 className="text-3xl font-bold text-center text-cyan-700">Contate-nos</h1>
            </div>
            <div className="w-full max-w-96 bg-gray-200 m-auto rounded-xl">
              <form className="p-5">
                <div className="flex flex-col m-auto">
                  <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>nome</label>
                  <input type="text" className="w-full rounded-full p-2"/>
                </div>
                <div className="flex flex-col m-auto">
                  <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>email</label>
                  <input type="email" className="w-full rounded-full p-2"/>
                </div>
                <div className="flex flex-col m-auto">
                  <label className="w-full text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>mensagem</label>
                  <textarea name="mensage" id="mensage" className='p-2 rounded-xl'></textarea>
                </div>
                <div className="flex flex-col m-auto pt-5 pb-5">
                  <button className="w-full bg-cyan-500 rounded-full text-xl p-2">enviar</button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    );
  };
  
export default Contact;
  