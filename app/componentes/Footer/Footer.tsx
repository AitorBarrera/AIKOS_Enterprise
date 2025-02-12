import React from 'react'
import Logo from '../Logo'

function Footer() {
  return (
    <div className='w-full py-4 px-4 flex flex-col lg:grid lg:grid-cols-6 gap-8 bg-white text-black'>
      <div className='flex justify-center lg:justify-start items-center col-span-1'>
        <Logo variant="negro" width="5rem"/>
        <div>
          <p className='mx-1'>Enterprise</p>
        </div>
      </div>
      <div className='col-span-4 flex md:flex-row justify-center items-center'>
        <p className='w-[80%] lg:w-[80%] flex-row flex justify-evenly text-sm'>
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
        </p>   
      </div>
      <div className='col-span-1 flex w-full justify-center lg:justify-end'>
        <a href="" className='flex align-middle ms-6'><img src="iconos\RRSS\x.svg" alt="" className='w-4'/></a>
        <a href="" className='flex align-middle ms-6'><img src="iconos\RRSS\youtube.svg" alt="" className='w-4'/></a>
        <a href="" className='flex align-middle ms-6'><img src="iconos\RRSS\instagram.svg" alt="" className='w-4'/></a>   
      </div>
    </div>
  )
}

export default Footer