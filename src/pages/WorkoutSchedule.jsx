import React, {useState} from 'react'
import BottomNav from '../components/BottomNav'
import { images } from '../utils/Images'
const WorkoutSchedule = () => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu"]
    const time = [
        '06:00 AM',
        '07:00 AM',
        '08:00 AM',
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 AM',
        '01:00 AM',
        '02:00 AM',
        '03:00 AM',
        '04:00 AM',
        '05:00 AM',
    ]
    const [active, setActive] = useState('Mon')
  return (
    <div>
        <div className='p-5'>
        <div className='flex items-center w-full'>
            <button className='bg-gray-200 rounded-lg p-2'><img src={images.back} alt='back' className=''/></button>
            <h4 className='font-bold text-xl text-center mx-auto mt-1'>Workout Schedule</h4>
        </div>
        <div className='flex justify-center items-center gap-2 fw-bold my-3'><img src={images.back}/> <p>Feb 2024</p> <img src={images.right}/></div>
       
       <div className='flex justify-between items-center mb-4'>
        {days.map((item, index)=>(
            <div
            onClick={()=>setActive(item)}
            className={`p-4 rounded-lg text-center cursor-pointer ${active === item && 'text-white bg-gradient-to-r to-[#8DA4FF] from-[#D1DBFF]'}`} key={index}>
                <p>{item}</p>
                <h4 className='text-2xl'>{index+5}</h4>
            </div>
        ))}
       </div>
       <div className=''>
        {time.map((item, index)=>(
            <h6 className='border-b-2 font-bold mb-2' key={index}>{item}</h6>
        ))}
       </div>

        </div>
        <BottomNav/>
    </div>
  )
}

export default WorkoutSchedule