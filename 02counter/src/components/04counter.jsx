import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  addNumber() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("callback value :", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  incrementFive() {
    this.setState((prevState) => ({
      count: prevState.count + 5,
    }));
  }

  render() {
    return (
      <div>
        <div>count : {this.state.count}</div>
        <button onClick={() => this.addNumber()}>Increment</button>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          add five
        </button>
      </div>
    );
  }
}

export default Counter;
