import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/calculate';
import './Calculator.css';
import { pictures } from "../Links/assets";

class Calculator extends React.Component {
  /** Calculator constructor */
  /** Takes in props */
  constructor(props) {
    /** Inherit the react component properties */
    super(props);
    /** Define state variables for the component */
    /** These are initially null */
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    /** Call on the calculate function */
    /** Enter the state object and the buttonName as parameters */
    /** calculate returns an object to setState of react component */
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div>
        <a href="https://www.wolframalpha.com/">
          <img src={pictures.wolfram} alt="" className="wolf"/>
        </a>
        <div className="col-md-1"></div>
        <div className="component-app col-md-9" className="calcComp">
          <Display
            value={this.state.next || this.state.total || '0'}
          />
          <ButtonPanel
            clickHandler={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
