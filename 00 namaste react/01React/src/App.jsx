import { useState } from 'react'

import './App.css'

const title = (
  <h1 id ="title" key = "h1">
    Food Villa
  </h1>
)
const Title2 = ()=> {
  return <h2 id ="title2" key = "h2">calling a function using curly brackets</h2>
}

function App() {
  

  return (
    <>
    {title}
    {Title2()}
    <Title2></Title2>
      <h1>hello world</h1>
    </>
  )
}



export default App;
