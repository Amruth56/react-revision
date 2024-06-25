import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './components/01ClassComponent'
import UseState from './components/02UseState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ClassComponent></ClassComponent>
    <UseState></UseState>
    </>
  )
}

export default App
