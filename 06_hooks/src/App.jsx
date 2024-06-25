import { useState } from 'react'
import ClassComponent from './components/01ClassComponent'
import UseState from './components/02UseState'
import useStateObject from './components/03useStateObject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ClassComponent></ClassComponent>
    <UseState></UseState>
    <useStateObject></useStateObject>
    </>
  )
}

export default App
