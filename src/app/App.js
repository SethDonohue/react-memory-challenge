import React, { Component } from 'react';

import logo from '../assets/logo.svg';
import Grid from '../grid/grid';
import './App.css';

class App extends Component {
  state = {
    colorSet: ['rgb(100, 0, 0)', 'rgb(0, 100, 0)', 'rgb(0, 0, 100)',
      'rgb(100, 100, 0)', 'rgb(0, 100, 100)', 'rgb(100, 0, 100)',
      'rgb(200, 0, 0)', 'rgb(0, 0, 0)', 'rgb(0, 0, 200)',
      'rgb(200, 200, 0)', 'rgb(0, 200, 200)', 'rgb(200, 0, 200)',
      'rgb(300, 0, 0)', 'rgb(0, 300, 0)', 'rgb(0, 0, 300)',
      'rgb(300, 300, 0)',
    ],
    valueSet: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  }

  randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  randomdataArray = () => {
    // create 8 random colors in a map with keys
    const colorMap = {};
    const valueMap = {};
    while (Object.keys(colorMap).length < 8) {
      const randomIndex = this.randomInt(this.state.colorSet.length);
      colorMap[(this.state.colorSet[randomIndex])] = true;
      valueMap[(this.state.valueSet[randomIndex])] = true;
    }
    // add arr of keys onto self to double array length
    const colorMapKeys = Object.keys(colorMap);
    const allColorsArr = colorMapKeys.concat(colorMapKeys);
    const valueMapKeys = Object.keys(valueMap);
    const allValuesArr = valueMapKeys.concat(valueMapKeys);

    // loop through arr for length and randomly insert elements from that arr into a new tempArr
    const tempArr = [];
    while (allColorsArr.length > 0) {
      const randomIndex = this.randomInt(allColorsArr.length);
      tempArr.push({ color: allColorsArr[randomIndex], value: allValuesArr[randomIndex] });
      allColorsArr.splice(randomIndex, 1);
      allValuesArr.splice(randomIndex, 1);
    }
    console.log(tempArr);
    return tempArr;
  }

  render() {
    const dataArray = this.randomdataArray();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Memory</h1>
        </header>
        <Grid
          dataArray={dataArray}
        />
      </div>
    );
  }
}

export default App;
