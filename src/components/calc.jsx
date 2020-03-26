import React, { Component } from "react";
import Display from "../components/display";
import ClickPad from "./clickPad";
import "./calc.scss";

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: 0,
      calculated: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    let value = target.innerHTML;
    let initValue = this.state.input;
    let initOutput = this.state.output;
    let initCondition = this.state.calculated;

    if (!initCondition) {
      //false
      switch (value) {
        case "AC":
          this.setState({ input: "", output: 0 });
          break;
        case "X":
          this.setState(() => {
            return { input: initValue + "*", output: value };
          });
          break;
        case "=":
          initValue === ""
            ? this.setState({ input: "=NAN", output: "NAN", calculated: true })
            : this.setState(() => {
                return {
                  input: initValue + "=" + eval(initValue),
                  output: eval(initValue),
                  calculated: true
                };
              });
          break;
        default:
          this.setState(() => {
            return { input: initValue + value, output: value };
          });
      }
    }
    if (initCondition) {
      //true
      switch (value) {
        case "AC":
          this.setState({ input: "", output: 0, calculated: false });
          break;
        case "X":
          {
            this.setState(() => {
              return {
                input: initOutput + "*",
                output: "X",
                calculated: false
              };
            });
          }
          break;
        case "/":
        case "+":
        case "-":
          this.setState(() => {
            return {
              input: initOutput + value,
              output: value,
              calculated: false
            };
          });
          break;

        case "=":
          break;
        default:
          this.setState({ input: value, output: value, calculated: false });
      }
    }
  }

  render() {
    const { input, output } = this.state;
    return (
      <div id="calcContainer">
        <Display input={input} output={output} />
        <ClickPad click={this.handleClick} />
      </div>
    );
  }
}

export default Calc;

// class Calc extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { input: [], output: 0, calculated: false };
//   }

//   render() {
//     const { input, output } = this.state;
//     return (
//       <div id="calcContainer">
//         <Display input={input} output={output} />
//         <ClickPad click={this.handleClick} />
//       </div>
//     );
//   }
// }
// export default Calc;
