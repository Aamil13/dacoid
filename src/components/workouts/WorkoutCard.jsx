import React, {useState} from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const WorkoutCard = ({img, title, date}) => {
    const [checked, setChecked] = useState(false)
  return (
    <div className='flex justify-between p-3 rounded-lg shadow-lg mb-4'>
        <div className='flex items-center'>
        <img src={img} className='w-[50px] mr-3'/>
        <div>
            <p>{title}</p>
            <p className='text-sm text-gray-400'>{date}</p>
        </div>
        </div>
        <div>
        <label>
  <Toggle
    defaultChecked={checked}
    icons={false}
    onChange={setChecked}
    className='custom-toggle mt-4'
     />
  <span></span>
</label>
        </div>
    </div>
  )
}

export default WorkoutCard