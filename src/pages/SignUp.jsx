import React, { useState } from 'react'
import Button from '../utils/Button'
import { useNavigate, Link } from 'react-router-dom'
import { images } from '../utils/Images'


const SignUp = () => {

    const navigate = useNavigate()

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password:'',
    })
    const [consent, setConsent] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) =>{
            setState({...state, [e.target.name]: e.target.value})    
    }

    const handleSubmit = ()=>{
        setError('')
        if(Object.values(state).includes('')) return setError('All fields are required.')
        if(consent === false) return setError('Please agree to T&C')
        setState({
            firstName: '',
            lastName: '',
            email: '',
            password:''
        })
        navigate('/sign-in')

    }
  return (
    <div className='p-5'>
        
        <h4 className='font-bold text-xl mb-8'>Create an account</h4>
        <div className='h-[250px]'>
        <input type='text' name='firstName' onChange={handleChange} value={state.firstName} className='p-2 w-full rounded-lg bg-gray-200 mb-5' placeholder='First Name'/>
        <input type='text' name='lastName' onChange={handleChange} value={state.lastName} className='p-2 w-full rounded-lg bg-gray-200 mb-5' placeholder='Last Name'/>
        <input type='email' name='email' onChange={handleChange} value={state.email} className='p-2 w-full rounded-lg bg-gray-200 mb-5' placeholder='Email'/>
        <input type='password' name='password' onChange={handleChange} value={state.password} className='p-2 w-full rounded-lg bg-gray-200 mb-5' placeholder='Password'/>

        <div className='flex'>
            <input type='checkbox' className='mr-3 scale-150' onChange={(e)=>setConsent(e.target.checked)} checked={consent}/>
            <p className='text-[13px]'>By proceeding, I agree to all <span className='text-blue-500 underline'>T&C</span> and <span className='text-blue-500 underline'>Privacy Policy</span></p>
        </div>
        {error && <p className='text-center text-rose-500'>{error}</p>}
        </div>
        <div className='mt-16 mb-5'>
            <Button text="Create an Account" action={handleSubmit}/>
        </div>
        
        <div className='flex justify-center items-center'>
            <div className='border-b-2 w-full'></div>
            <p className='mx-2'>Or</p>
            <div className='border-b-2 w-full'></div>
        </div>
        <div className='flex justify-center gap-5 mt-5'>
            <button className='p-4 rounded-lg border-2'>
                <img src={images.google} alt='google' className='w-[18px] h-[18px] object-contain'/>
            </button>
            <button className='p-4 rounded-lg border-2'>
                <img src={images.facebook} alt='facebook' className='w-[18px] h-[18px] object-contain'/>
            </button>
        </div>
        <p className='text-center mt-5'>Already have an account? <Link to='/sign-in'><span className='text-blue-500 underline'>Login</span></Link></p>
        
    </div>
  )
}

export default SignUp