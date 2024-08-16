import Fade from 'react-reveal';

const ForgotPassword = () => {
    return (
      <div className="m-auto">
        <Fade bottom duration={2000} distance="40px">
          <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pt-20 pb-20'>
            <div>
              <h1 className="text-3xl font-bold text-center pb-10 text-cyan-700">Redefinição de senha</h1>
            </div>
            <div className="w-full max-w-96 bg-gray-200 m-auto rounded-xl">
              <div className='p-10'>
                <form className="flex flex-col justify-center items-center">
                  <div className="w-full pb-3">
                    <p className="text-sm text-center">informe o email da sua conta para enviarmos 
                    um link de redefinição de senha.</p>
                  </div>
                  <div className="w-full flex flex-col m-auto">
                    <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>email</label>
                    <input type="email" className="p-2 rounded-full"/>
                  </div>
                </form>
                <div className="pt-10">
                  <div className="w-full">
                    <button className="w-full p-2 bg-cyan-500 rounded-full text-xl">enviar link de recuperação</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  };
  
export default ForgotPassword;
  