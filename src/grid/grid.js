import React, { Component } from 'react';
import './grid.css';
import Card from '../card/card';

class Grid extends Component {
  randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  randomColorArr = () => {
    // create 8 random colors in a map with keys
    const map = {};
    while (Object.keys(map).length < 8) {
      const randomIndex = this.randomInt(this.props.colorSet.length);
      map[(this.props.colorSet[randomIndex])] = 2;
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

  // createGrid = () => {
  //   const colorArr = this.randomColorArr();

  //   const pickColor = () => {
  //     return colorArr.pop();
  //   };

  //   const grid = [];

  //   // Outerloop for tr
  //   for (let i = 0; i < 4; i++) {
  //     const rows = [];
  //     // Inner for td
  //     for (let j = 0; j < 4; j++) {
  //       rows.push(<td key={(j * 10) + i}><Card cardColor={pickColor()} /></td>);
  //     }
  //     grid.push(<tr key={(i * 5)} >{rows}</tr>);
  //   }
  //   return grid;
  // }

  render() {
    return (
      <table id="grid">
        <tbody>
          <tr><td><Card cardColor={this.} /></td><td>Card 1</td><td>Card 1</td><td>Card 1</td></tr>
        </tbody>
      </table>
    );
  }
}

export default Grid;
