import React from 'react'
import fondo_sjl_top from '../../assets/backgrounds/fondo_sjl_top.png';
import fondo_sjl_bottom from '../../assets/backgrounds/fondo_sjl_bottom.png';
import logo from '../../assets/logos/logo_sjl.png';
import logo_claro from '../../assets/logos/sjl_logo_claro.png';
import { Container } from '@mui/material';
import ChangePasswordForm from '../../components/auth/changePassword/ChangePasswordForm';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChangePassword = () => {
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
            <ChangePasswordForm />
          </div>
        </Container>
      </div>
    )
  }

export default ChangePassword