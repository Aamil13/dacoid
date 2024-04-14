import React, {useState, useEffect} from 'react'
import Step1 from '../components/home/Step1'
import Step2 from '../components/home/Step2'

const Home = () => {

  useEffect(()=>{
    window.alert('Best view on mobile Screens. On Chrome, please inspect and toggle device toolbar and select mobile devices.')
  },[])

    const [step, setStep] = useState(1)
  return (
    <>
    {step === 1 ? <Step1 setStep={setStep}/> : <Step2 setStep={setStep}/>}
    </>
  )
}

export default Home