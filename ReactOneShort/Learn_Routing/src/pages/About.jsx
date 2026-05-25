import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  let navigate = useNavigate();
  return (
    <div className='flex justify-center m-25 p-25 font-bold text-2xl'>
        <h1>This is About Page</h1>
        <button onClick={()=>{
          navigate('/')
        }} className='bg-emerald-700 rounded'>Return Home</button>
    </div>
  )
}

export default About
