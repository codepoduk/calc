import React, { Component } from 'react';
import styled from 'styled-components';

const CrossBox = styled.div`
  font-size: .3em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: red;
  color: white;
  border-radius: 50%;
  position: absolute; 
  top: 5%;
  left: 83%;
  opacity: .3;
  &:hover {
    opacity: 1;
  };
  cursor: pointer;
  transition: all .5s linear;
`;

class RemoveComponent extends Component {
  render() {
    return(
      <CrossBox onClick={function(){console.log(this)}}> X </CrossBox>
    )
  }
}

export default RemoveComponent;
