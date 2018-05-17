import React, { Component } from 'react';

import logo from '../assets/logo.svg';
import Grid from '../grid/grid';
import './App.css';

class App extends Component {
  state = {
    cardAmount: 16,
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid cardAmount={this.state.cardAmount} />
      </div>
    );
  }
}

export default App;
