import React, { useState } from 'react'

const BatchUpdate = () => {

    const [num, setNum] = useState(10)
    function btnClicked()
    {
        setNum(num+1)
        setNum(num+1)
        setNum(num+1)
    }

    const [num1, setNum1] = useState(10)
    function Batch()
    {
        setNum1(prev=>(prev+1))
        setNum1(prev=>(prev+1))
        setNum1(prev=>(prev+1))
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
      <h2>{num1}</h2>
      <button onClick={Batch}>Click for batch update</button>
    </div>
  )
}

export default BatchUpdate
