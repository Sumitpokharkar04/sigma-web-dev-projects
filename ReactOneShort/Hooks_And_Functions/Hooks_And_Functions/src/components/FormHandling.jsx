import React from 'react'

const FormHandling = () => {
    const FormSubmit=(e)=>{
        console.log('form submitted');
        e.preventDefault();
    }
  return (
    <form>
        <input type="text" placeholder='write your name'/>
        <button onClick={(e)=>{
            FormSubmit(e)
        }}>Submit</button>
    </form>
  )
}

export default FormHandling
