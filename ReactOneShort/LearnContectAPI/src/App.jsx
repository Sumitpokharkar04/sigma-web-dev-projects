import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [Theme, setTheme] = useState('Light')
  return (
    <div>
      <Navbar Theme={Theme}/>
    </div>
  )
}

export default App
