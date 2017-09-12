import React, { Component } from 'react';
import styled from 'styled-components';

const CrossBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: red;
  color: white;
  border-radius: 50%;
  position: absolute; 
  top: 0;
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
      <CrossBox><h4>X</h4></ CrossBox>
    )
  }
}

export default RemoveComponent;
