import './App.css'
import {useState} from "react";

function App() {

  // let counter = 15;

  const [counter, setCounter] = useState(15); 
  // counter is a variable and setCounter is a method.
  // inside the useState we write or define the initial value.

  const addValue = () =>{
    // counter = counter +1;
    // console.log(counter);
    // setCounter(counter+1);
    // console.log(setCounter);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
  }

  const removeValue = () =>{
    setCounter(counter-1);
    console.log(setCounter);
  }
  

  return (
    <>
      <h1>React Course with Kunj {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{"  "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
