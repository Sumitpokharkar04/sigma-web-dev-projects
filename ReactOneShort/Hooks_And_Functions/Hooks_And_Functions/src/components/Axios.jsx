import React from 'react'
import axios from 'axios'
const Axios = () => {
    const data = async ()=>{
     const response = await axios.get('https://dummyjson.com/users')
    console.log(await JSON.stringify(response));
    }

  return (
    <div>
        <button onClick={data}>click me</button>
    </div>
  )
}

export default Axios
