import React from 'react';
import fondo_sjl_top from '../../assets/backgrounds/fondo_sjl_top.png';
import fondo_sjl_bottom from '../../assets/backgrounds/fondo_sjl_bottom.png';
import logo from '../../assets/logos/logo_sjl.png';
import logo_claro from '../../assets/logos/sjl_logo_claro.png';
import { Container } from '@mui/material';
import RegisterForm from '../../components/auth/register/RegisterForm';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
                <div className="w-full flex flex-row items-center sm:shadow-lg sm:border bg-transparent sm:bg-white dark:sm:bg-neutral-900 dark:border-neutral-700 rounded-lg p-6 mb-16 z-10">
                    {/* Formulario */}
                    <div className="flex flex-col w-full max-w-sm mx-auto">
                        <div className="flex justify-center items-start mb-6">
                            <img
                                src={darkMode ? logo_claro : logo}
                                alt="logo"
                                className="h-16"
                            />
                        </div>
                        <RegisterForm />
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
