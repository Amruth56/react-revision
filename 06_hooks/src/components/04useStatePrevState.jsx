import React, {useState} from 'react'

function UseStatePrevState() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
  return (
    <div>count = {count}
    <button onClick={()=>setCount(prevCount => prevCount+1)}>Increment</button>
    <button onClick={()=> {setCount(initialCount)}}>Reset</button>
    <button onClick={()=>setCount(prevCnt => prevCnt-1)}>Decrement</button>
    </div>
  )
}

export default UseStatePrevState