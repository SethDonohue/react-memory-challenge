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

    const mapKeys = Object.keys(map);
    
    // add arr onto self to double array length
    const allColorsArr = mapKeys.concat(mapKeys);

    // loop through arr for length and randomly insert elements from that arr into a new tempArr
    const tempArr = [];
    while (allColorsArr.length > 0) {
      // if(map[])
      const randomIndex = this.randomInt(allColorsArr.length);
      tempArr.push(allColorsArr[randomIndex]);
      allColorsArr.splice(randomIndex, 1);
      // console.log('Sliced allColorsArr: ', allColorsArr);
    }

    return tempArr;
  }

  // pickRandomColor = (map) => {
  //   const max = Object.keys(map).length - 1;
  //   const randomColor = Object.keys(map)[this.randomInt(max)];
  //   console.log('Random Color: ', randomColor);
  //   return randomColor;
  // }

  createGrid = () => {
    const colorArr = this.randomColorArr();
    console.log('colorArr: ', colorArr);

    // pull 1 color from colorArr to put into 1 Card
    const pickColor = () => {
      const color = colorArr.pop();
      console.log('color Picked: ', color);
      return color;
    };


    const grid = [];

    // Outerloop for tr
    for (let i = 0; i < 4; i++) {
      const rows = [];
      // Inner for td
      for (let j = 0; j < 4; j++) {
        rows.push(<td key={(j * 10) + i}><Card cardColor={pickColor()} /></td>);
      }
      grid.push(<tr key={(i * 5)} >{rows}</tr>);
    }
    return grid;
  }
  render() {
    return (
      <table id="grid">
        <tbody>
          {this.createGrid()}
        </tbody>
      </table>
    );
  }
}

export default Grid;
