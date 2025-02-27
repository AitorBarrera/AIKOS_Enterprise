import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import { useDarkMode } from '~/hooks/useDarkMode';

function HeaderAndFooter() {
  const { theme, toggleTheme } = useDarkMode();
  
  return (
    <div className='relative transition duration-300 bg-linear-to-b from-pdark_smoke_gradiant dark:from-pdark_smoke via-plight_ruby dark:via-pdark_smoke to-pdark_smoke_gradiant dark:to-pdark_smoke'>
      <header className='fixed w-full px-8 top-26 md:px-26 z-2'>
        <Header theme={theme} darkModeFunction={toggleTheme}/>
      </header>

      <div className='h-screen'>
        <main className='z-1 min-h-[90%]'>
          <Outlet/>
        </main>

        <footer className='w-full z-2'>
          <Footer theme={theme} darkModeFunction={toggleTheme}/>
        </footer>
      </div>
      
    </div>
  )
}

export default HeaderAndFooter