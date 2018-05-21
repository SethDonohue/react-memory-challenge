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

  // componentDidMount() {
  //   console.log('Grid Mounted');
  //   // Run createGrid() here so it only happens once, not everytme state is updated..
  //   // const grid = this.createGrid();
  //   this.setState({ //eslint-disable-line
  //     colorArr: this.randomColorArr(),
  //   });
  // }


  randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  randomColorArr = () => {
    // create 8 random colors in a map with keys
    const map = {};
    while (Object.keys(map).length < 8) {
      const randomIndex = this.randomInt(this.state.colorSet.length);
      map[(this.state.colorSet[randomIndex])] = 2;
    }
    // add arr oh keys onto self to double array length
    const mapKeys = Object.keys(map);
    const allColorsArr = mapKeys.concat(mapKeys);

    // loop through arr for length and randomly insert elements from that arr into a new tempArr
    const tempArr = [];
    while (allColorsArr.length > 0) {
      const randomIndex = this.randomInt(allColorsArr.length);
      tempArr.push(allColorsArr[randomIndex]);
      allColorsArr.splice(randomIndex, 1);
    }
    return tempArr;
  }

  render() {
    const colorArr = this.randomColorArr();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Memory</h1>
        </header>
        <Grid
          cardAmount={this.state.cardAmount}
          colorArr={colorArr}
        />
      </div>
    );
  }
}

export default App;
