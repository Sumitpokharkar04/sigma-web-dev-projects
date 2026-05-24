//Lets learn useEffect Hook
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
//Now in this case when we try to execute our normal function it executes again and again
//when the state is changed now imagine you are calling a api of nasa for image
//now your image was loaded first time but as states were changing functions was getting called
//again and again so your api was getting hit this is not good and not at all optimises
//that's why we use useEffect hook with the help of this we can control execution of a function
//in react especially in files where we are updating states again and again like a notification 
//button.Also we can control execution or customly call a function based on a specific useState Variable.


    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(10)
    // function Test()
    // {
    //     console.log('Normal Function running...')
    // }
    // Test()


    //Now lets try the useEffect hook for same thing
//syntax => useEffect(function(),[dependency]) 
//if we kept dependency empty the use effect will run only once if we dont give any dependency it will run constantly
//if we passed any state variable whenever the state is changed useEffect will execute the function inside it,
    useEffect(function()
    {
        console.log('useEffect is running...');
        
    },[num])
  return (
    <div>
        <h1>{num}</h1>
        <h2>{num2}</h2>
      <button onMouseEnter={()=>{
                setNum(num+1)
      }
    }
    onMouseLeave={()=>{
        setNum2(num+10)
    }}>Click here</button>
    </div>
  )
}

export default UseEffect




//why this code gives error=>      <button onClick={
    //     setNum(num+1)
    // }>Click here</button>

// You are calling setNum(num + 1) immediately during rendering, not when the button is clicked.

// So React does this:

// Component renders
// setNum(num + 1) runs immediately
// State changes
// Component renders again
// setNum(num + 1) runs again
// Infinite loop
// React throws error like Too many re-renders