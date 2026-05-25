import React from 'react'
import './index.css'
import  { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Page404 from './pages/Page404'
import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
const App = () => {
  return (
    <div>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Products' element={<Products/>}>
          <Route path='Men' element={Men}/>
          <Route path='Women' element={Women}/>
      </Route>
      <Route path='*' element={Page404}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
