import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/general/header/Header'
import Navbar from '../components/general/NavBar/Navbar'


const Layout = () => {

  return (
    <div className='flex flex-col h-full'>
      <Header />
      <div className='flex flex-1 flex-col'>
        <Outlet />
      </div>
      <Navbar />
    </div>
  )
}

export default Layout