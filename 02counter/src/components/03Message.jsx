import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to React",
    };
  }

  changeMessage() {
    this.setState({
      message: "You have used state in react",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}> BUTTON </button>
      </div>
    );
  }
}

export default Message;
