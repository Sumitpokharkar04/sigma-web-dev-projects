import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-between bg-cyan-800 p-4'>
      <h1 className='font-bold text-6xl'>Voyager</h1>
      <div className='flex gap-10 '>
        {
          //Link tag does not reload or re-renders website it is used to make single-page-applications
          //like youtube.
        }
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Products">Products</Link>
      </div>

    </div>
  )
}

export default Navbar
