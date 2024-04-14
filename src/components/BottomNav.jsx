import React from 'react'
import { images } from '../utils/Images'
import { Link } from 'react-router-dom'


const BottomNav = () => {
  return (
    <div className='w-full p-3 sticky bottom-0 bg-white'>
      <div className='flex justify-between items-center w-full'>
      <img src={images.home}/>
      <img src={images.active}/>
      <Link to="/schedule">
      <img src={images.searchBtn} className='-mt-10'/>
      </Link>
      <img src={images.camera}/>
      <img src={images.profile}/>
      </div>
        
    </div>
  )
}

export default BottomNav