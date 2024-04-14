import React from 'react'
import { images } from '../../utils/Images'
import { Link } from 'react-router-dom'

const Step2 = () => {
  return (
    <div className='mx-5'>
        <div className='flex justify-end'>
            <Link to='/sign-up'><p className='text-blue-500 underline'>Skip</p></Link>
        </div>
        <img src={images.step2Img} alt='runner' className='mt-[30px] mx-auto w-[352px] h-[234px]'/>

        <h4 className='font-bold mt-12 text-xl mb-4'>Get Burn</h4>
        <p className='text-lg text-[#787878]'>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>

        <Link to='/sign-up'>
            <img src={images.step2Btn} alt='next' className='absolute bottom-5 right-3'/>
        </Link>
    </div>
  )
}

export default Step2