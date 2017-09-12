import React, { Component } from 'react';

class Output extends Component {
  render() {
    return (
      <div>
        <label>Output</label>
        <p>{this.props.output}</p>
      </div>
    );
  }

}

export default Output;
