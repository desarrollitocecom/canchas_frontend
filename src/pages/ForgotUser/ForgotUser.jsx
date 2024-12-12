import React from 'react';
import fondo_sjl_top from '../../assets/backgrounds/fondo_sjl_top.png';
import fondo_sjl_bottom from '../../assets/backgrounds/fondo_sjl_bottom.png';
import logo from '../../assets/logos/logo_sjl.png';
import logo_claro from '../../assets/logos/sjl_logo_claro.png';
import { Container } from '@mui/material';
import ForgotUserForm from '../../components/auth/forgotUser/ForgotUserForm';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ForgotUser = () => {
    const { darkMode } = useSelector((state) => state.theme);
    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center relative min-h-[680px]">
            <div className="flex absolute top-0 left-0 w-3/5 sm:w-2/5 md:w-80 lg:w-96 aspect-square bg-left-top bg-no-repeat bg-cover z-[1]"
                style={{ backgroundImage: `url(${fondo_sjl_top})` }}>
            </div>
            <div className="flex absolute bottom-0 right-0 w-3/5 sm:w-2/5 md:w-80 lg:w-96 aspect-square bg-right-bottom bg-no-repeat bg-cover z-[1]"
                style={{ backgroundImage: `url(${fondo_sjl_bottom})` }}>
            </div>

            <Container maxWidth="xs">
                <div className='w-full sm:shadow-lg sm:border bg-transparent sm:bg-white dark:sm:bg-neutral-900 dark:border-neutral-700 rounded-lg p-6 mb-16 z-10'>
                    <div className='flex justify-center items-start mb-6'>
                        {darkMode ? (
                            <img
                                src={logo_claro}
                                alt="logo"
                                className="flex w-auto h-20"
                            />
                        ) :
                            (
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="flex w-auto h-20"
                                />
                            )}

                    </div>
                    <ForgotUserForm />
                    <div className='text-xs flex justify-center font-semibold'>
                        <p className='flex gap-1 text-gray-600 dark:text-gray-300'>
                            ¿Recuerdas tu contraseña?
                            <Link to="/login" className='font-semibold hover:underline text-sky-600 dark:text-sky-400'>Inicia Sesion Aqui</Link>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ForgotUser

