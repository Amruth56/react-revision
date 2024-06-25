import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [countTwice, setCountTwice] = useState(0)

  const incrementCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={incrementCount}>02UseState={count}</button>
      <button onClick={()=> {setCountTwice(countTwice+2)}}>count + 2={countTwice}</button>
      <button onClick={()=>{setCountTwice(0)}}> restart{setCountTwice}</button>
    </div>
  );
};

export default UseState;
