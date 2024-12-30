import React from 'react'
import fondo_sjl_top from '../../assets/backgrounds/fondo_sjl_top.png';
import fondo_sjl_bottom from '../../assets/backgrounds/fondo_sjl_bottom.png';
import logo from '../../assets/logos/logo_sjl.png';
import logo_claro from '../../assets/logos/sjl_logo_claro.png';
import { Button, Container } from '@mui/material';
import LoginForm from '../../components/auth/login/LoginForm';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import GoogleAuth from '../../components/auth/login/GoogleAuth';

const Login = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center relative min-h-[680px]">
      <div className="flex absolute top-0 left-0 w-3/5 sm:w-2/5 md:w-80 lg:w-96 aspect-square bg-left-top bg-no-repeat bg-cover z-[-1]"
        style={{ backgroundImage: `url(${fondo_sjl_top})` }}>
      </div>
      <div className="flex absolute bottom-0 right-0 w-3/5 sm:w-2/5 md:w-80 lg:w-96 aspect-square bg-right-bottom bg-no-repeat bg-cover z-[-1]"
        style={{ backgroundImage: `url(${fondo_sjl_bottom})` }}>
      </div>
      <Container maxWidth="xs">
        <div className='w-full sm:shadow-lg sm:border bg-transparent sm:bg-white dark:sm:bg-neutral-900 dark:border-neutral-700 rounded-lg p-6 mb-16 z-10'>
          <div className="mb-4 text-xs hidden sm:block">
            <Link to="/" className='flex items-center gap-1 text-neutral-600 dark:text-neutral-300'>
              <ArrowBackIosNewRoundedIcon className='!size-3' />
              Volver
            </Link>
          </div>

          <div className='flex justify-center items-start mb-6'>
            <img
              src={darkMode ? logo_claro : logo}
              alt="logo"
              className="flex w-auto h-20"
            />
          </div>
          <div className='flex flex-col gap-5'>
            <GoogleAuth />

            {/* <div className="flex-1 border-t border-gray-300 dark:border-neutral-500"></div> */}
            <div className="flex items-center gap-2">
              <div className="flex-1 border-t border-gray-300 dark:border-neutral-500"></div>
              <span className="text-gray-500 text-sm dark:text-neutral-300">o</span>
              <div className="flex-1 border-t border-gray-300 dark:border-neutral-500"></div>
            </div>

            <LoginForm />
          </div>
          <div className='mt-6 text-xs flex flex-col justify-center items-center gap-3'>
            <p className='flex gap-1 text-neutral-600 dark:text-neutral-300'>
              ¿No tienes una cuenta?
              <Link to="/register" className='font-semibold hover:underline text-sky-600'>Registrate Aqui</Link>
            </p>
            <p>
              <Link to="/forgot-password" className='font-semibold hover:underline text-sky-600'>¿Olvidaste tu contraseña?</Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login