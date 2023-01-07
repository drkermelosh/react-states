import React, { Component } from "react";

import AnotherComponent from "./AnotherComponent"

class ClassStateExample extends Component {
  constructor() {
    super();
    this.state = {
      state1: 0,
      state2: "Test",
      state3: 99,
    };
  }

  ReactEvent = () => {
    alert("You clicked me!!");
  };

  render() {
    return (
      <div>
        <h1>This is where you call the state</h1>
        <h2>To call the state: {this.state.state1}</h2>
        <button onClick={this.ReactEvent}> Click me </button>

        <AnotherComponent someproperty={this.state.state2} />
      </div>
    );
  }
}

export default ClassStateExample;
