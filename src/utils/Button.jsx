import React from 'react'

const Button = ({text, action}) => {
  return (
    <button
    onClick={action}
    className='mx-auto bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] p-3 w-full rounded-lg text-white'>
    {text}
    </button>
  )
}

export default Button