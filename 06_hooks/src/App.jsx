import { useReducer, useState } from 'react'
import ClassComponent from './components/01ClassComponent'
import UseState from './components/02UseState'
import useStateObject from './components/03useStateObject'
import UseStatePrevState from './components/04useStatePrevState'
import UseStateArray from './components/05UseStateArray'
import UseEffect from './components/06useEffect'
import UseReducer from './components/07useReducer'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
    {/* <ClassComponent></ClassComponent> */}
    {/* <UseState></UseState> */}
    {/* <useStateObject></useStateObject> */}
    {/* <UseStatePrevState></UseStatePrevState> */}
    {/* <UseStateArray></UseStateArray> */}
    {/* <UseEffect></UseEffect> */}
    <UseReducer></UseReducer>

    
    </>
  )
}

export default App
