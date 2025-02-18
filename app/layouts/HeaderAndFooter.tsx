import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

function HeaderAndFooter() {
  return (
    <div className='relative'>
      <div className='fixed top-26 pl-26'>
        <Header/>
      </div>

      <div className='min-h-screen pb-32'>
        <Outlet/>
      </div>

      <div className='absolute bottom-0 w-full'>
        <Footer/>
      </div>
    </div>
  )
}

export default HeaderAndFooter