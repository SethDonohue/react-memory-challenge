import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  handleClick = (event) => {
    if (!this.props.flipped) {
      this.props.matchCheck(this.props.color, this.props.id);
    }
  }

  render() {
    return (
      <div
        className="card"
        id={this.props.cardId}
        type="button"
        style={{ backgroundColor: this.props.bgColor }}
        onClick={this.handleClick}
      >
      </div>
    );
  }
}

export default Card;
