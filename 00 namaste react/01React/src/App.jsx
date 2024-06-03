import { useState } from 'react'
import './index.css'
import './App.css'

const title = (
  <a className="anchor" href='/'>  
  <h1 id ="title" key = "h1">
    Food Villa
  </h1>
  </a>
)
const Title2 = ()=> {
  return <h2 id ="title2" key = "h2">calling a function using curly brackets</h2>
}

function App() {
  

  return (
    
    <div className="header">
      {title}
      <div className="nav-items">
        <ul className ="navbar-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
    
  )
}



export default App;
