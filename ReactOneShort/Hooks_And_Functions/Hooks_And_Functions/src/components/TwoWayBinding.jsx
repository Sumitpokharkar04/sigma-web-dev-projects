import React, { useState } from 'react'

const TwoWayBinding = () => {
    const [Name, setName] = useState('')

    function Submit(e)
    {
        e.preventDefault();
        console.log('form submitted by',Name);
        setName('')
    }
  return (
    <form >
        <input type="text" placeholder='write name' value={Name} onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <button onClick={(e)=>{
        Submit(e)
      }} >click me</button>
    </form>  
  )
}

export default TwoWayBinding
