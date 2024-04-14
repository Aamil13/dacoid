import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Goals from './pages/Goals'
import Workout from './pages/Workout'
import WorkoutSchedule from './pages/WorkoutSchedule'
import { NotFound } from './pages/NotFound'


function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/goals' element={<Goals/>}/>      
      <Route path='/workout' element={<Workout/>}/>    
      <Route path='schedule' element={<WorkoutSchedule/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
