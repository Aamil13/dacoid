import React from 'react'
import { images } from '../utils/Images'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-[44px] px-5 sticky top-0 bg-white z-50'>
      <p className='font-bold'>9:41</p>
      <div className='flex items-center gap-2'>
        <img src={images.cellular} alt='network' className=''/>
        <img src={images.wifi} alt='network' className=''/>
        <img src={images.battery} alt='network' className=''/>
      </div>
    </div>
  )
}

export default Header