
import './App.css'
import BatchUpdate from './components/BatchUpdate';
import FormHandling from './components/FormHandling';
import LearnUseState from './components/learnUseState';
import ObjectState from './components/ObjectState';
import './index.css'

function App() {

  function WhenClicked()
  {
    console.log("button is clicked");
  }
  return (
    <>
     <button className='btn' onClick={WhenClicked}>Click here</button>
    <button className='btn' onClick={function(){
      console.log("I am Function inside event onClick");
    }}>Second Button</button>
    {
      //Now lets see a example where we will pass parameters inside a function 
      //instead of a function lets use a input tag and onChange event to see this 
      //we will console thethings we are inputing inside the field
    }
    <input className='inp' onChange={function(elem){
      console.log(elem.target.value);    
    }} type="text" placeholder='write your name here' />
    <LearnUseState/>
    <ObjectState/>
    <BatchUpdate/>
    <FormHandling/>
    </>
  )
}

export default App
