import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    return (
      <button
        className="card"
        style={{ backgroundColor: this.props.cardColor }}
      >
        Card
      </button>
    );
  }
}

export default Card;
