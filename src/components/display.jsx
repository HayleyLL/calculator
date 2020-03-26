import React, { Component } from "react";

class Display extends Component {
  render() {
    const { input, output } = this.props;
    return (
      <div id="display">
        <div id="input">{input}</div>
        <div id="output">{output}</div>
      </div>
    );
  }
}

export default Display;
