import { useState } from 'react';
import './App.css'

function App() {

// variable or state variable for title of notes
  const [Title, setTitle] = useState('')


// variable or state variable for details in notes

  const [details, setDetails] = useState('')

//Make an array

 const [Task, setTask] = useState([])
  const submitHandler=(e)=>
  {
    e.preventDefault();
    console.log('form submitted');
    const copyTask = [...Task]
    copyTask.push({Title,details})
    setTask(copyTask)
    setTitle('');
    setDetails('');
  }

  return (
      <div className='w-full lg:flex not-lg:flex-wrap h-screen flex bg-black text-white m-0 p-0' >
        <form className='flex flex-col w-full gap-10 m-10 p-10 items-start'>
        <h1>Add A New Note</h1>
        <input className='bg-amber-800 px-5 py-2 rounded w-1/2' type="text" placeholder='Enter Title' onChange={(e)=>{
          setTitle(e.target.value)
        }} />
        <textarea className='bg-white px-5 py-2 rounded text-blue-800 w-1/2' placeholder='Enter details' name="" id="" onChange={(e)=>{
          setDetails(e.target.value)
        }}></textarea>
        <button  className='bg-green-900 active:scale-95 px-5 py-2 rounded w-1/2' onClick={(e)=>{
        submitHandler(e)
      }}>Add Note</button>
        </form>
        <div className='bg-gray-600 lg:w-1/2 overflow-auto border-l-2'>
        <h1 className='text-3xl h-5 font-bold text-emerald-300 p-10 flex'>Your Notes</h1>
        {Task.map(function(elem,idx)
        {
            return <div key={idx} className='h-32 w-32 rounded p-10 m-10 bg-white'>
              <h1 className='text-black text-3xl font-bold'>{elem.Title}</h1>
              <p className='text-black'>{elem.details}</p>
            </div>
        })}
                 
        </div>
      </div>
      
  )
}

export default App
