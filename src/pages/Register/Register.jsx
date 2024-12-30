import React from 'react';
import fondo_sjl_top from '../../assets/backgrounds/fondo_sjl_top.png';
import fondo_sjl_bottom from '../../assets/backgrounds/fondo_sjl_bottom.png';
import logo from '../../assets/logos/logo_sjl.png';
import logo_claro from '../../assets/logos/sjl_logo_claro.png';
import { Container } from '@mui/material';
import RegisterForm from '../../components/auth/register/RegisterForm';
import { Link } from 'react-router-dom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useSelector } from 'react-redux';
import GoogleAuth from '../../components/auth/login/GoogleAuth';

const Register = () => {
    const { darkMode } = useSelector((state) => state.theme)

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative">
            {/* Fondo superior */}
            <div
                className="absolute top-0 left-0 w-2/5 lg:w-96 aspect-square bg-left-top bg-no-repeat bg-cover z-[1]"
                style={{ backgroundImage: `url(${fondo_sjl_top})` }}
            ></div>

            {/* Fondo inferior */}
            <div
                className="absolute bottom-0 right-0 w-2/5 lg:w-96 aspect-square bg-right-bottom bg-no-repeat bg-cover z-[1]"
                style={{ backgroundImage: `url(${fondo_sjl_bottom})` }}
            ></div>

            <Container maxWidth="sm">
                <div className="w-full flex flex-col items-center sm:shadow-lg sm:border bg-transparent sm:bg-white dark:sm:bg-neutral-900 dark:border-neutral-700 rounded-lg p-6 mb-16 z-10">
                    <div className="mb-4 text-xs hidden sm:block w-full">
                        <Link to="/" className='flex items-center gap-1 text-neutral-600 dark:text-neutral-300'>
                            <ArrowBackIosNewRoundedIcon className='!size-3' />
                            Volver
                        </Link>
                    </div>
                    {/* Formulario */}
                    <div className="flex flex-col w-full max-w-sm mx-auto">
                        <div className="flex justify-center items-start mb-6">
                            <img
                                src={darkMode ? logo_claro : logo}
                                alt="logo"
                                className="h-16"
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            Crear una Cuenta
                        </h1>
                        <div className='flex flex-col gap-5'>
                            <GoogleAuth />

                            {/* <div className="flex-1 border-t border-gray-300 dark:border-neutral-500"></div> */}
                            <div className="flex items-center gap-2">
                                <div className="flex-1 border-t border-gray-300 dark:border-neutral-500"></div>
                                <span className="text-gray-500 text-sm dark:text-neutral-300">o</span>
                                <div className="flex-1 border-t border-gray-300 dark:border-neutral-500"></div>
                            </div>

                            <RegisterForm />
                        </div>
                        <div className="mt-6 text-xs text-center">
                            <p className="text-neutral-600 dark:text-neutral-300">
                                ¿Ya tienes una cuenta?{' '}
                                <Link to="/login" className="font-semibold text-sky-600 hover:underline">
                                    Inicia Sesión
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;
