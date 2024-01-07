import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15)
  //let counter = 15
  
  const addvalue = () => {
    //console.log("clicked", counter);
 // counter = counter + 1
  setCounter(counter + 1)
  }
  const removevalue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter Value: {counter}</h2>

      
      <button
       onClick={addvalue}      
      >Add value{counter}</button>
      <br />
      <button
      onClick={removevalue}
      >Remove Value{counter}</button>
    </>
  )
}

export default App
