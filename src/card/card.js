import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  state = {
    // flipped: false,
    cardColor: 'gray',
    cardText: 'Back',
  }

  handleClick = event => {
    // const { id } = event.target;
    // console.log(this);
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
      <li
      // key={this.props.key}
      onClick={this.handleClick}
        style={{ backgroundColor: this.state.cardColor }}
      >
        <span>{this.state.cardText}</span>
      </li>
      /* eslint-enable */
    );
  }
}

export default Card;
