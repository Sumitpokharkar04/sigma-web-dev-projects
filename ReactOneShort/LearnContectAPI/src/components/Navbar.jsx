import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import {ThemeDataContext} from '../Context/ThemeContext'
const Navbar = () => {

    const data = useContext(ThemeDataContext)
    // console.log(data);
  return (
    <div className='nav'>
      <h1>{data}</h1>
      <Navbar2 />
    </div>
    
  )
}

export default Navbar
