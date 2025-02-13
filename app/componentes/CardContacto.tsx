import React from 'react'

interface CardContactoProps {
    icono: string;
    texto: string;
}

function CardContacto({icono, texto}: CardContactoProps) {
  return (
    <div className='flex flex-col items-center border-4 bg-white text-black py-4 gap-4'>
        <img src={icono} alt="" className='w-[12.5%]'/>
        <p className='text-3xl'>{texto}</p>
    </div>
  )
}

export default CardContacto