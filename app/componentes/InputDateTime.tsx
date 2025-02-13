import React from 'react'

function InputDateTime() {
  return (
    <div className='flex justify-between w-full bg-p_ruby p-2 rounded-2xl'>
        <input type="date" />
        <input type="time" />
    </div>
  )
}

export default InputDateTime