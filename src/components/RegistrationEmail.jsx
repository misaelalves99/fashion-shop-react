import Fade from 'react-reveal';

const RegistrationEmail = () => {
    return (
      <section className='w-full pt-14 pb-14 bg-cyan-500'>
        <Fade bottom duration={2000} distance="40px">
          <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pr-10 pl-10'>
            <h1 className="max-lg:text-3xl text-center text-4xl mb-8">Receba notificações dos nossos produtos</h1>
            <form className="w-full m-auto text-center">
              <input type="email" name="email" placeholder="Digite seu e-mail" className="w-full max-w-3xl rounded-xl p-5"/>
            </form>
          </div>
        </Fade>
      </section>
    );
  };
  
export default RegistrationEmail;
  