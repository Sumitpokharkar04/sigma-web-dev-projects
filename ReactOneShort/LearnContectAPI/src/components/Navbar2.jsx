import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar2 = () => {

   const useTheme =  useContext(ThemeDataContext)
  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Products</h4>
      <h4>{useTheme}</h4>
    </div>
  )
}

export default Navbar2
