import React, { Component } from 'react';
import styled from 'styled-components';
import StyledBlock from './StyledBlock.js';
import InputField from './InputField.js';

const Area = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333;
`;

class CalcSpace extends Component {
  constructor() {
    super();
    this.state = {
      input: 'placeholder',
    }
  }

  getInput(userInput) {
    console.log(this.state.input);
    this.setState(
      {input: userInput}
    )
  }


  render() {
    return(
      <Area>
        <InputField submit={this.getInput.bind(this)} />
        <StyledBlock />
      </ Area>  
    )
  }
}

export default CalcSpace;
