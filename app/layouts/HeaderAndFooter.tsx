import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

function HeaderAndFooter() {
  return (
    <div className='relative transition duration-300 bg-p_ruby dark:bg-negro'>
      <header className='fixed w-full px-8 top-26 md:px-26'>
        <Header/>
      </header>

      <main className='min-h-screen pb-32 '>
        <Outlet/>
      </main>

      <footer className='w-full '>
        <Footer/>
      </footer>
    </div>
  )
}

export default HeaderAndFooter