import React, { Component } from 'react';
import styled from 'styled-components';

const FieldStyle = styled.input`
  border-radius: 15px;
  border: none;
  font-size: 2em;
  padding: 10px;
`;

const Label = styled.div`
  color: white;
  `;

export default class InputField extends Component {
  constructor() {
    super();
    this.state = {
      fieldContent: '',
    }
  }

  setValue(property, event) {
    var value = event.target.value;
    this.setState(
      ({ fieldContent }) => {
        fieldContent = parseInt(value, 10);
        return { fieldContent };
      });
  }

  keySubmit(event) { /* trigger add button via enter key */
    if (event.keyCode === 13) {
      this.props.submit(this.state.fieldContent);
      console.log(this.state.fieldContent);
    };
  }


  render() {
    return(
      <Label>
        Input:
        <div>
          <FieldStyle type="text"
            id="message-field"
            onChange={this.setValue.bind(this, "fieldContent")}
            onKeyDown={this.keySubmit.bind(this)}
            className="form-control" />
        </div>
      </ Label>
    )
  }
}

