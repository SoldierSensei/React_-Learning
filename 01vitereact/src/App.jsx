
import Chai from "./chai"
// function App() {
//   return (
//    <h1>React with vite | Akshay</h1>
//   )
// }
function App() {
  const username = "Akshay"
  return (
    <><Chai/> 
    <h1>chai for {username}</h1>
  <h3>testing multiple element return</h3> </>
  
)
}

export default App
//jsx rule is to return one element so we can wrap 
//elements in div or return fragment(<> </>)
//we cannot write for loop or if/else in {}