import React, { Component } from 'react';
import './grid.css';
import Card from '../card/card';

class Grid extends Component {
  createGrid = () => {
    const grid = [];

    // Outerloop for tr
    for (let i = 0; i <= 4; i++) {
      const rows = [];
      // Inner for td
      for (let j = 0; j <= 4; j++) {
        rows.push(<td><Card key={(j * 10) + i} cardColor="blue" /></td>);
      }
      grid.push(<tr>{rows}</tr>);
    }
    return grid;
  }
  render() {
    return (
      <table>
        {this.createGrid()}
      </table>
      // <div className="grid">
      //   <h1>Play the memory game here!</h1>
      //   <ul>
      //     {(function (rows, length) {
      //       for (let i = 0; i <= length; i++) {
      //         rows.push(<Card cardColor="blue" />);
      //       }
      //       return rows;
      //     }([], this.props.cardAmount))}
      //   </ul>
      // </div>
    );
  }
}

export default Grid;
