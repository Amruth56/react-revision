import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // Uncomment one of the following methods for conditional rendering:

    // 1. If-Else Rendering:
    /*
    if (this.state.isLoggedIn) {
      return <div>Is loggedIn</div>;
    } else {
      return <div>Is LoggedOut</div>;
    }
    */

    // 2. Element Variables:
    /*
    let message;
    if(this.state.isLoggedIn){
        message = <div>Is loggedIN</div>
    } else {
        message = <div>Is LoggedOut</div>
    }
    return <div>{message}</div>;
    */

    // 3. Ternary Conditional Operator:
    /*
    return this.state.isLoggedIn ? <div>Is loggedIn</div> : <div>Is loggedOut</div>;
    */

    // If nothing to render:
    return null;
  }
}

export default ConditionalRendering;
