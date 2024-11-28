import React from 'react'
import Header from '../components/general/header/Header'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout