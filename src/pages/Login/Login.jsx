import React from 'react'
import fondo_sjl_top from '../../assets/backgrounds/fondo_sjl_top.png';
import fondo_sjl_bottom from '../../assets/backgrounds/fondo_sjl_bottom.png';
import logo from '../../assets/logos/logo_sjl.png';
import { Container } from '@mui/material';
import LoginForm from '../../components/auth/login/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center relative min-h-[680px]">
      <div className="flex absolute top-0 left-0 w-3/5 sm:w-2/5 md:w-80 lg:w-96 aspect-square bg-left-top opacity-70 bg-no-repeat bg-cover z-[-1]"
        style={{ backgroundImage: `url(${fondo_sjl_top})` }}>
      </div>
      <div className="flex absolute bottom-0 right-0 w-3/5 sm:w-2/5 md:w-80 lg:w-96 aspect-square bg-right-bottom opacity-70 bg-no-repeat bg-cover z-[-1]"
        style={{ backgroundImage: `url(${fondo_sjl_bottom})` }}>
      </div>
      <Container maxWidth="xs">
        <div className='w-full sm:shadow-lg sm:border bg-transparent sm:bg-white rounded-lg p-6 mb-16'>
          <div className='flex justify-center items-start mb-6'>
            <img
              src={logo}
              alt="logo"
              className="flex w-auto h-20"
            />
          </div>
          <LoginForm />
          <div className='mt-6 text-xs flex justify-center'>
            <p className='flex gap-1 text-gray-600'>
              ¿No tienes una cuenta?
              <Link to="/register" className='font-semibold hover:underline text-sky-600'>Registrate Aqui</Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login