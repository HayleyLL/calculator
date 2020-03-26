import React, { Component } from "react";

class clickPad extends Component {
  render() {
    const data = [
      { name: "AC", id: "clear" },
      { name: "/", id: "divide" },
      { name: "X", id: "multiply" },
      { name: 7, id: "seven" },
      { name: 8, id: "eight" },
      { name: 9, id: "nine" },
      { name: "-", id: "subtract" },
      { name: 4, id: "four" },
      { name: 5, id: "five" },
      { name: 6, id: "six" },
      { name: "+", id: "add" },
      { name: 1, id: "one" },
      { name: 2, id: "two" },
      { name: 3, id: "three" },
      { name: "=", id: "equal" },
      { name: 0, id: "zero" },
      { name: ".", id: "decimal" }
    ];

    return (
      <div className="pad" onClick={this.props.click}>
        {data.map(c => (
          <span id={c.id} key={c.id}>
            {c.name}
          </span>
        ))}
      </div>
    );
  }
}

export default clickPad;
