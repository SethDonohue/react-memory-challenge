import React, { Component } from 'react';
import './grid.css';
import Card from '../card/card';

class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <h1>Play the memory game here!</h1>
        <ul>
          <Card cardColor="blue" />       
        </ul>
      </div>
    );
  }
}

export default Grid;
