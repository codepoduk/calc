import React, { Component } from 'react';
import styled from 'styled-components';
import RemoveComponent from './RemoveComponent.js';

const GenericBlock = styled.div`
  width: 200px;
  height: 200px;
  background-color: coral;
  padding: 20px;
  border-radius: 25px;
  position: absolute;
  top: 40%;
  right: 40%;
`;


class StyledBlock extends Component {
  render(){
    return (
      <div>
        <GenericBlock>
          This is a block!
          <RemoveComponent />
        </ GenericBlock>
      </div>
    )
  }
}

export default StyledBlock;
