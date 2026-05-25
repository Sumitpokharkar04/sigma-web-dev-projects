import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [userData, setUserData] = useState([])
  let printUserData = 'No user Data Available'
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')

    setUserData(response.data);
  }
  
    useEffect(function () {
    getData()
  }, [])

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-40 overflow-hidden'>
            <img className='h-full w-full object-cover rounded-xl' src={elem.download_url} alt="" />
          </div>
          <div>
            {elem.author}
          </div>
        </a>

      </div>

    })
  }




  return (
    <div className='bg-black min-h-screen text-white m-0 p-0'>
      {/* <button className='bg-green-600 text-white m-4 px-5 py-4 rounded active:scale-95 '
        onClick={getData}>
        get data
      </button> */}
      <div className='m-10  flex flex-wrap gap-4 text-white'>
        {printUserData}
      </div>

    </div>
  )
}

export default App
