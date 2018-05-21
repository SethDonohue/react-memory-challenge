import React, { Component } from 'react';
import './grid.css';
import Card from '../card/card';

class Grid extends Component {
  handleclick = (event) => {
    const card = event.target;

    if(card.style.backgroundColor === 'gray'){

    }
  }
  render() {
    return (
      <table id="grid">
        <tbody>
          <tr>
            <td><Card key={11} onClick={this.handleclick} cardColor={this.props.colorArr[0]} /></td><td><Card key={12} cardColor={this.props.colorArr[1]} /></td>
            <td><Card key={13} cardColor={this.props.colorArr[2]} /></td><td><Card key={14} cardColor={this.props.colorArr[3]} /></td>
          </tr>
          <tr>
            <td><Card cardColor={this.props.colorArr[4]} /></td><td><Card cardColor={this.props.colorArr[5]} /></td>
            <td><Card cardColor={this.props.colorArr[6]} /></td><td><Card cardColor={this.props.colorArr[7]} /></td>
          </tr>
          <tr>
            <td><Card cardColor={this.props.colorArr[8]} /></td><td><Card cardColor={this.props.colorArr[9]} /></td>
            <td><Card cardColor={this.props.colorArr[10]} /></td><td><Card cardColor={this.props.colorArr[11]} /></td>
          </tr>
          <tr>
            <td><Card cardColor={this.props.colorArr[12]} /></td><td><Card cardColor={this.props.colorArr[13]} /></td>
            <td><Card cardColor={this.props.colorArr[14]} /></td><td><Card cardColor={this.props.colorArr[15]} /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Grid;
