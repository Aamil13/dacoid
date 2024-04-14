import React from 'react'
import { images } from '../utils/Images'
import Chart from '../components/workouts/Chart'
import WorkoutCard from '../components/workouts/WorkoutCard'
import BottomNav from '../components/BottomNav'
import { useEffect } from 'react'

const Workout = () => {

  useEffect(()=>{
    window.alert('Click on search button from bottom navigation to open Workout Schedule page.')
  },[])
  
  return (
    <div>
    <div className='p-5 mx-0'>
        <div className='flex items-center w-full'>
            <button className='bg-gray-200 rounded-lg p-2'><img src={images.back} alt='back' className=''/></button>
            <h4 className='font-bold text-xl text-center mx-auto mt-1'>Workout Tracker</h4>
        </div>
        <Chart/>
        <div className='rounded-lg p-3 bg-gradient-to-r from-[#DAE1FD] to-[#fff] flex justify-between items-center gap-2 mt-4'>
          <img src={images.alert} className='w-[30px]'/>
        <div>
          <p>You've burned fewer calories than yesterday. Time to get moving! </p>
        </div>
        </div>

        <div className='flex justify-between mt-10'>
        <h4 className='font-bold text-xl'>Upcoming Workout</h4>
        <p className='text-gray-400'>See more</p>
        </div>
         
         <div className='my-4'>
          <WorkoutCard img={images.workout1} title="Full Body Workout" date="Today 3pm"/>
          <WorkoutCard img={images.workout2} title="Upper Body Workout" date="4 Feb, 3:30 pm"/>
         </div>
         <h4 className='font-bold text-xl mb-4'>What Do You Want to Train</h4>
         <div className='w-100 bg-[#8CB1FF] flex justify-between p-4 rounded-lg relative'>
          <div>
            <p className='text-sm'>Full Body Workout</p>
            <p className='text-sm'>Arms</p>
            <p className='text-sm'>Chest</p>
          </div>
          <img src={images.workout3} className='absolute right-4 top-4'/>
         </div>
    </div>
    <BottomNav/>
    </div>
  )
}

export default Workout