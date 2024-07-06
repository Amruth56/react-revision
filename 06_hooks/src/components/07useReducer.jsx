import React from "react";
import { useReducer } from "react";

function UseReducer() {

    const increment = (state, action) => {
        switch(action.type) {
            case `increase`:{
                return {count:state.count+1}
            }
            case `decrease`:{
                return{count: state.count-1}
            }
            case `reset` :{
                return {count:0}
            }
            default:{
                return state;
            }
        }
        
    }
    const [state, dispatch] = useReducer(increment, {count:0 })

    
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: `increase`})}>Increase</button>
      <button onClick = { () => {dispatch({type:`reset`})}}>Reset</button>
      <button onClick={() => dispatch({type: `decrease`})}>Decrease</button>
      
    </>
  );
}

export default UseReducer;
