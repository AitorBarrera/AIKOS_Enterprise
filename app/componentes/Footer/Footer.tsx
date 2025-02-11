import React from 'react'
import Logo from '../Logo'

function Footer() {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex items-center'>
        <Logo variant="negro" />
        <div>
          <p className='mx-4'>Enterprise</p>
        </div>
      </div>
      <div>
        <p>
          
        </p>
        <a href="">
        Condiciones de uso
        </a> 
        | 
        <a href="">
        Cookies
        </a> 
        |
        <a href="">
        Aviso de privacidad
        </a>    
      </div>
    </div>
  )
}

export default Footer