import React from 'react'
import { images } from '../../utils/Images'
import { Link } from 'react-router-dom'

const Step1 = ({setStep}) => {
  return (
    <div className='mx-5'>
        <div className='flex justify-end'>
            <Link to='/sign-up'><p className='text-blue-500 underline'>Skip</p></Link>
        </div>
        <img src={images.step1Img} alt='runner' className='mt-[30px] mx-auto w-[282px] h-[282px]'/>

        <h4 className='font-bold mt-12 text-xl mb-4'>Track Your Goal</h4>
        <p className='text-lg text-[#787878]'>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>

        <button onClick={()=>setStep(2)}>
            <img src={images.step1Btn} alt='next' className='absolute bottom-5 right-3'/>
        </button>
    </div>
  )
}

export default Step1