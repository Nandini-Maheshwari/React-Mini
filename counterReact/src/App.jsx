import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);

  const incVal = () => {
    if(counter == 20) return;
    setCounter(counter+1);
  }

  const decVal = ()=> {
    if(counter == 0) return;
    setCounter(counter-1);
  }
  
  return (
    <>
      <h1>Chai Aur React</h1>
      <p>Counter Value {counter}</p>
      <button onClick = {incVal}>
        Inc Value {counter}
      </button>
      <button onClick = {decVal}>
        Dec Value {counter}
      </button>
    </>
  )
}

export default App
