import React, { Component } from 'react';
import Output from '../Output';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  updateInput(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    const children = this.props.children.slice();
    const Child = children.shift();
    const { value } = this.state;
    return (
      <div>
        <label>Input</label>
        <input type="text" value={value} onChange={e => this.updateInput(e)} />
        {Child ? (
          <Child input={value} children={children} />
        ) : (
          <Output output={value} />
        )}
      </div>
    )
  }
}

export default Input;
