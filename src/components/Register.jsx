import { Link } from 'react-router-dom'
import Fade from 'react-reveal';

const Register = () => {
    return (
      <div className="m-auto">
        <Fade bottom duration={2000} distance="40px">
          <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pt-20 pb-20'>
            <div>
              <h1 className="text-3xl font-bold text-center pb-10 text-cyan-700">Cadastre-se</h1>
            </div>
            <div>
              <h1 className="text-base text-center pb-10"><strong className='text-red-500'>*</strong>campos obrigatórios</h1>
            </div>
            <div className="w-full max-w-96 bg-gray-200 m-auto rounded-xl">
              <div className='p-8'>
                <form className="w-full">
                  <div className="flex flex-col m-auto pb-3">
                    <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>nome completo</label>
                    <input type="text" className="w-full rounded-full p-2"/>
                  </div>
                  <div className="flex flex-col m-auto pt-3 pb-3">
                    <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>email</label>
                    <input type="email" className="w-full rounded-full p-2"/>
                  </div>
                  <div className="pt-3 pb-3">
                    <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>gênero</label>
                    <div className=''>
                      <div className='m-2'>
                        <input type="radio" className='mr-2'/>
                        <label className='text-xl'>masculino</label>
                      </div>
                      <div className='m-2'>
                        <input type="radio" className='mr-2'/>
                        <label className='text-xl'>feminino</label>
                      </div>
                      <div className='m-2'>
                        <input type="radio" className='mr-2'/>
                        <label className='text-xl'>outro</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col m-auto pt-3 pb-3">
                    <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>CPF</label>
                    <input type="text" className='w-full rounded-full p-2'/>
                  </div>
                  <div className="flex flex-col m-auto pt-3 pb-3">
                    <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>data de nascimento</label>
                    <input type="date" className='w-full rounded-full p-2' />
                  </div>
                  <div className="flex flex-col m-auto pt-3 pb-3">
                    <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>telefone</label>
                    <input type="tel" className='w-full rounded-full p-2' />
                  </div>
                  <div className="flex flex-col m-auto pt-3 pb-3">
                    <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>senha</label>
                    <div className='mb-2'>
                      <h1 className='text-xs'>precisa ter entre 6 e 20 caracteres</h1>
                    </div>
                    <input type="password" className='w-full rounded-full p-2' />
                  </div>
                </form>
                <div className="pt-10">
                  <div className="flex justify-center">
                    <button className="w-full bg-cyan-500 rounded-full text-xl p-2">cadastrar</button>
                  </div>
                  <div className="m-auto pt-5">
                    <Link to='/login'>
                      <h1 className="text-center text-xl pb-3">já tem cadastro? entrar</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  };
  
export default Register;
  