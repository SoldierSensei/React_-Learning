import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "Akshay",
    age : 27,
  }
  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind test</h1>
    <Card userName = "chaiaurcode" btntxt="visit Me"/>
    <Card userName = "Akshay"/>
    </>

  )
}

export default App
//we can add same componet multiple time but if we want to change 
//some details on the each card
//We do it with the help of PROPS
//Each function like app, card has access of props