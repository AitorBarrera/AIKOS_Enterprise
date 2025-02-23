import React from 'react'
import "@fontsource/outfit";
import ThemeToggle from '~/componentes/ThemeToggle';

function contact() {
  return (
    <div className='bg-p_ruby h-200 dark:bg-yellow-500 '>
      <ThemeToggle/>
      <h1>
        Contact
      </h1>
    </div>
  )
}

export default contact