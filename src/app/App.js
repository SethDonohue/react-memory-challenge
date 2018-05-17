import React, { Component } from 'react';

import logo from '../assets/logo.svg';
import Grid from '../grid/grid';
import './App.css';

class App extends Component {
  state = {
    cardAmount: 16,
    colorSet: ['rgb(100, 0, 0)', 'rgb(0, 100, 0)', 'rgb(0, 0, 100)',
      'rgb(100, 100, 0)', 'rgb(0, 100, 100)', 'rgb(100, 0, 100)',
      'rgb(200, 0, 0)', 'rgb(0, 200, 0)', 'rgb(0, 0, 200)',
      'rgb(200, 200, 0)', 'rgb(0, 200, 200)', 'rgb(200, 0, 200)',
      'rgb(300, 0, 0)', 'rgb(0, 300, 0)', 'rgb(0, 0, 300)',
      'rgb(300, 300, 0)',
    ],

    // 'rgb(0, 300, 300)', 'rgb(300, 0, 300)',
    // 'rgb(100, 100, 100)', 'rgb(0, 0, 0)', 'rgb(200, 200, 200)',
    // 'rgb(256, 256, 256)'
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Memory</h1>
        </header>
        <Grid
          cardAmount={this.state.cardAmount}
          colorSet={this.state.colorSet}
        />
      </div>
    );
  }
}

export default App;
