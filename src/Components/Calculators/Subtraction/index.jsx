import React, { Component } from 'react';
import Output from '../../Output';

class Subtraction extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  calc(a, b) {
    return +a - +b;
  }
  updateInput(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    const children = this.props.children.slice();
    const Child = children.shift();
    const { input } = this.props;
    const { value } = this.state;
    const output = this.calc(input, value);
    return (
      <div>
        <div className="calculator">
          <p>{input}</p>
          <p>-</p>
          <input type="text" value={value} onChange={e => this.updateInput(e)} />
        </div>
        { Child ? (
          <Child input={output} children={children} />
        ) : (
          <Output output={output} />
        )}
      </div>
    );
  }
}

export default Subtraction;
