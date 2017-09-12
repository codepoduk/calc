import React, { Component } from 'react';
import Input from '../Input';
import calculators from '../../helpers/calculators';

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = { children: [] };
  }
  addCalculator(e) {
    const name = e.target.dataset.name
    const children = this.state.children.slice();
    children.push(calculators[name]);
    this.setState({ children })
  }
  render() {
    return (
      <div>
        <button onClick={e => this.addCalculator(e)} data-name="addition">Addition</button>
        <button onClick={e => this.addCalculator(e)} data-name="subtraction">Subtraction</button>
        <Input children={this.state.children} />
      </div>
    );
  }
}

export default Calc;
