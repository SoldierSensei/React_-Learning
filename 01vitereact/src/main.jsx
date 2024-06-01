import React from 'react'
import ReactDOM from 'react-dom/client'
import  App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1> Custom App !</h1>
    </div>
  )
}
// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target: '_black'
//   },
//   children:'Click me visit google'
// }
const anotherElement =(
  <a href = "http://google.com" target ='_blank'> Visit google </a>
)

const userName = "akshay";
const reactElement =React.createElement(//babel injects automatically
  'a',
  {href:'https://google.com',target: '_black'},
  'Click me visit google',
  userName
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   App />
  // </React.StrictMode>,

  // <React.StrictMode>
  //   <Myapp />
  // </React.StrictMode>,

  // anotherElement 

  reactElement
)
 //If we need React.StrictMode then we use it,
 //we can remove it too 
 //we can write Myapp() as it is a function