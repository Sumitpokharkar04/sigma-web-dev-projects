import React, { useState } from 'react'

const LearnUseState = () => {

    const [num, setNum] = useState(0)
    function increase(){
        setNum(num+1);
    }
    function decrease()
    {
        setNum(num-1);
    }
  return (
    <div>
        <h1>Num is {num}</h1>
        <button onClick={increase}>increment</button>
        <button onClick={decrease}>decreament</button>
    </div>
  )
}

export default LearnUseState
