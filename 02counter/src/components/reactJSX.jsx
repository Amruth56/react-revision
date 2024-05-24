// reactJSX.jsx

/*
import React from 'react'

const Hello = () => {
    // return (
        
            // <div>
            //     <h1>Hello JSX</h1>
            // </div>   
    // )

    return React.createElement(
        'div',
        {id: "hello"},
        React.createElement('h1', {className: "title", 'hello world'})
    )
}

export default Hello

*/


import React from 'react';

const Hello = () => {
  return (
    <div id="hello">
      <h1 className="title">Hello JSX</h1>
    </div>
  );
}

export default Hello;