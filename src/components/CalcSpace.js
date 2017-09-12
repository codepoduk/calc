import React, { Component } from 'react';
import styled from 'styled-components';
import StyledBlock from './StyledBlock.js';
import InputField from './InputField.js';
import OutputField from './OutputField.js';
const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #333;
`;

class CalcSpace extends Component {
  constructor() {
    super();
    this.state = {
      input: null,
      output: null,
      block: [
        { name: '*10',
          operation: function(input){ return input *10 }},
        { name: '-5',
          operation: function(input){ return input -5 }},
        { name: '/2',
          operation: function(input){ return input /2 }}
      ],
    }
  }

  getInput(userInput) {
    console.log(this.state.input);
    this.setState(
      {input: userInput,
        output: this.state.block[0].operation(userInput)}
    )
  }


  render() {
    return(
      <Area>
        <InputField submit={this.getInput.bind(this)} />
        <StyledBlock name={this.state.block[0].name} />
        <OutputField content={this.state.output} />
      </ Area>  
    )
  }
}

export default CalcSpace;
