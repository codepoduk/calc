import React, { Component } from 'react';
import styled from 'styled-components';

const FieldStyle = styled.input`
    
`;

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      fieldContent: {}, // why is this an object?
    }
  }
  
  setValue(property, event) {
    var value = event.target.value;
    this.setState(({fieldContent}) => {
      fieldContent[property] = value;
      return { fieldContent: fieldContent};
    });
    console.log(this.state.fieldContent.fieldContent);
  }

  // keySubmit(event) { /* trigger add button via enter key */
  //   if (event.keyCode == 13) {
  //   document.getElementById('add').click()
  //   };
  // }


  render() {
    return(
      <div class="form-group">
        <input type="text" 
          id="message-field"
          onChange={this.setValue.bind(this, "fieldContent")}
          class="form-control" />
      </div>
    )
  }
}

export default InputField;
