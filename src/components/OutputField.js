import React, { Component } from 'react';
import styled from 'styled-components';

const Display = styled.div`
  background: #FFF;
  font-size: 2em;
  padding: 10px;
  border-radius: 10px;
  color: black;
`;

const Label = styled.div`
  color: white;
  `;

export default class OutputField extends Component {
  render(props) {
    return(
      <Label>
        Result:
      <Display> {this.props.content}</Display>  
    </Label>
    )
  }
}

