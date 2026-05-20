import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/buttons/Button'
import Header from './components/header/Header'

function App() {
  const data = [
    {
      name:'Sumit',
      role:'Data Analyst'
    },
    {
      name:'Hari',
      role:'Buisness Analyst'
    }
  ]

  return (
    <>
        <div className='parent'>
    {data.map(function(elem,id){
        return <Card name={elem.name} role={elem.role}/>
      })}
    </div>
    <Header/>
    <Button/>
    </>

  )
}
export default App
