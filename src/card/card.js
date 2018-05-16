import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  state = {
    flipped: false,
    cardColor: this.props.color,
  }

  handleClick = event => {
    const { id } = event.target;

    if (!this.state.flipped) {
      // set the div bg color attr to the color
      this.style.backgroundColor = this.state.cardColor;
    } else {
      // set the div bg color attr to the gray
    }
  }

  
  render() {
    return (
      <li>
        <div
          onClick={this.handleClick}
          cardColor={this.state.cardColor}
        >
          <span>Card</span>
        </div>
      </li>
    );
  }
}

export default Card;
