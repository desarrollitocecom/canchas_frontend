import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../general/header/Header'
import Navbar from '../general/Navbar/Navbar'


const Layout = () => {

  return (
    <div className='flex flex-col h-full'>
      <Header />
      <div className='flex flex-1 flex-col overflow-hidden items-center'>
        <div className='w-full h-full max-w-[2500px] overflow-hidden'>
          <Outlet />
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Layout