import React from 'react'
import Button from '../utils/Button'
import { useNavigate} from 'react-router-dom'


const Goals = () => {

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate('/workout')
    }

    let testData = [
        'Weight Loss',
        'Muscle Gain',
        'Flexibility and Mobility',
        'General Fitness',
        'Event - specific training',
        'Mindfulness and Mental Health',
    ]

  return (
    <div className='p-5'>
        
        <h4 className='font-bold text-xl mb-8 text-center'>What are your goals?</h4>
        <div className=''>
        {testData?.map((item, index)=>(
        <div className='flex justify-between items-center p-3 w-full rounded-lg bg-gray-200 mb-5' key={index}>
        <p className='text-sm'>{item}</p>
        <input type='checkbox' className='scale-150 border border-blue-500'/>
        </div>
        ))}

        </div>
        <div className='mt-20 mb-5'>
            <Button text="Confirm" action={handleSubmit}/>
        </div>
        
    </div>
  )
}

export default Goals