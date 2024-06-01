import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

function App() {

const [counter, setCounter]=useState(15)
//useState default value can be anything 
//useState take two values at 0th index its the values
//1st index is the method which act upon the oth index value

// let counter = 15;

const addValue = ()=>{
  // console.log("clicked", Math.random());
  console.log("clicked", counter);
  // counter = counter+1;

  // setCounter(()=>{});
  // setCounter((prevCounter)=>{prevCounter+1  });
  // setCounter(counter +1);
  // setCounter(counter +1);
  // setCounter(counter +1);
  


  if(counter<20){
    setCounter(counter +1);
  }
  
}
const removeValue=()=>{
  if(counter>0){
    setCounter(counter -1);
  }
 
}
  return (
    <>
      <h1>Chai ur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
