import { Link } from 'react-router-dom'
import Fade from 'react-reveal';

const Login = () => {
    return (
      <div className="m-auto">
        <Fade bottom duration={2000} distance="40px">
          <div className='max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-w-7xl m-auto pt-20 pb-20'>
            <div>
              <h1 className="text-3xl font-bold text-center pb-10 text-cyan-700">Login</h1>
            </div>
            <div className="w-full max-w-96 bg-gray-200 m-auto rounded-xl">
              <form className="flex flex-col justify-center">
                <div className="grid col-2 m-auto">
                  <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>email</label>
                  <input type="email" className="w-80 h-10 rounded-full"/>
                </div>
                <div className="grid col-2 m-auto">
                  <label className="text-xl pt-3 pb-3"><strong className='text-red-500'>*</strong>senha</label>
                  <input type="password" className="w-80 h-10 rounded-full"/>
                </div>
              </form>
              <div className="grid col-3 pt-10">
                <div className="m-auto pb-5">
                  <Link to='/redefinir'>
                    <h1 className="text-center text-xl">esqueceu senha</h1>
                  </Link>
                </div>
                <div className="w-full max-w-80 m-auto">
                  <button className="w-full p-2 bg-cyan-500 rounded-full text-xl">entrar</button>
                </div>
                <div className="m-auto pt-5">
                  <Link to='/cadastro'>
                    <h1 className="text-center text-xl pb-3">Não tem cadastro? cadastre-se</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  };
  
export default Login;
  