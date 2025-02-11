import React from 'react'
import Logo from '../logo'

function Footer() {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex items-center'>
        <Logo variant="negro" />
        <div>
          <p className='mx-4'>Enterprise</p>
        </div>
      </div>
    </div>
  )
}

export default Footer