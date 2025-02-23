import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

function HeaderAndFooter() {
  return (
    <div className='relative bg-p_ruby dark:bg-negro'>
      <header className='fixed top-26 px-8 md:px-26 w-full'>
        <Header/>
      </header>

      <main className='min-h-screen pb-32 '>
        <Outlet/>
      </main>

      <footer className=' w-full'>
        <Footer/>
      </footer>
    </div>
  )
}

export default HeaderAndFooter