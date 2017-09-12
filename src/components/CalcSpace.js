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
      input: '',
      output: '',
    }
  }

  // getInput() {
  //   this.setState(
  //     ({ input }) => {
  //       input = value;
  //       return { fieldContent };
  // }


  render() {
    return(
      <Area>
        <InputField />
        <StyledBlock />
      </ Area>  
    )
  }
}

export default CalcSpace;
