import React from 'react';


function AppLayout()  {
    const title = (
        <a className="anchor " href="/">
          <h1 id="title" key="h1">
            Food Villa
          </h1>
        </a>
      );
  return (
    <div>
    <div className="header">
        {title}
        <div className="nav-items">
          <ul className="navbar-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default AppLayout