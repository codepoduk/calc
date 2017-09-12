import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StyledBlock from './components/StyledBlock.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>wakeful-reaction (calc)</h2>
        </div>
        <StyledBlock />
      </div>
    );
  }
}

export default App;
