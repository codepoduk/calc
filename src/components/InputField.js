import React, { Component } from 'react';
import styled from 'styled-components';

const FieldStyle = styled.input`
  border-radius: 15px;
  border: none;
  font-size: 2em;
  padding: 10px;
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
        fieldContent = value;
        return { fieldContent };
      });
  }

  keySubmit(event) { /* trigger add button via enter key */
    if (event.keyCode == 13) {
      this.props.submit(this.state.fieldContent);
      console.log(this.state.fieldContent);
    };
  }


  render() {
    return(
      <div className="form-group">
        <FieldStyle type="text"
          id="message-field"
          onChange={this.setValue.bind(this, "fieldContent")}
          onKeyDown={this.keySubmit.bind(this)}
          className="form-control" />
      </div>
    )
  }
}

