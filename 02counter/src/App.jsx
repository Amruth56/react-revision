import {useState} from 'react';
import "./App.css";
import Hello from './components/reactJSX';
import Greet from './components/02Greet'
import Message from './components/03Message';

function App() {

const [count, setCount] = useState(0);



  const addValue = () => {
    setCount (count + 1)
  };

  const removeValue = () => {
    setCount((prevCounter)=> prevCounter-2)
  };

  return (
    <>
      <h1>React course {count}</h1>
      <h2>counter value {count}</h2>
      <button onClick={addValue}> add value</button>{" "}
      <button onClick={removeValue}> remove value</button>
      <p>footer: {count}</p>

      <Hello></Hello>
      <Greet name ="qwerty "></Greet>
      <Message></Message>
    </>
  );
}

export default App;