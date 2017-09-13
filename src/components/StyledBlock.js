import React, { Component } from 'react';
import styled from 'styled-components';
import RemoveComponent from './RemoveComponent.js';

const GenericBlock = styled.div`
  width: 100px;
  height: 100px;
  background-color: coral;
  padding: 20px;
  border-radius: 25px;
  position: relative;
  font-size: 3em;
`;

class StyledBlock extends Component {
  render(){
    return (
      <div>
        <GenericBlock>
          {this.props.name}
          <RemoveComponent />
        </ GenericBlock>
      </div>
    )
  }
}

export default StyledBlock;
