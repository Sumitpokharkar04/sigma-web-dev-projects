import Card from './Components/Card.jsx'
import './App.css'

function App() {
  return (
    <div className="cardcontainer">
      <Card user='sumit' age={22}/> 
      <Card user='sumit' age={22}/> 
      <Card user='Narayan' age={32}/> 
    </div>
   
    
  )
}

export default App
