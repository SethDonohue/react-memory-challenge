import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  state = {
    // flipped: false,
    cardColor: 'gray',
    cardText: 'Back',
  }

  handleClick = event => {
    if (this.state.cardColor === 'gray') {
      // set the div bg color attr to the color
      this.setState({
        cardColor: this.props.cardColor,
        cardText: 'Front',
      });
    } else {
      // set the div bg color attr to the gray
      this.setState({
        cardColor: 'gray',
        cardText: 'Back',
      });
    }
  }

  
  render() {
    return (
      /* eslint-disable */
      <div
        className="card"
      // key={this.props.key}
      onClick={this.handleClick}
        style={{ backgroundColor: this.state.cardColor }}
      >
        <span>{this.state.cardText}</span>
      </div>
      /* eslint-enable */
    );
  }
}

export default Card;
