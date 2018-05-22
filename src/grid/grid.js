import React, { Component } from 'react';
import './grid.css';
import Card from '../card/card';

class Grid extends Component {
  state = {
    cards: this.initializeCards(),
    lastCard: null,
    comparing: false,
  }

  initializeCards() {
    return [
      { color: this.props.colorArr[0], matched: false, flipped: false },
      { color: this.props.colorArr[1], matched: false, flipped: false },
      { color: this.props.colorArr[2], matched: false, flipped: false },
      { color: this.props.colorArr[3], matched: false, flipped: false },
      { color: this.props.colorArr[4], matched: false, flipped: false },
      { color: this.props.colorArr[5], matched: false, flipped: false },
      { color: this.props.colorArr[6], matched: false, flipped: false },
      { color: this.props.colorArr[7], matched: false, flipped: false },
      { color: this.props.colorArr[8], matched: false, flipped: false },
      { color: this.props.colorArr[9], matched: false, flipped: false },
      { color: this.props.colorArr[10], matched: false, flipped: false },
      { color: this.props.colorArr[11], matched: false, flipped: false },
      { color: this.props.colorArr[12], matched: false, flipped: false },
      { color: this.props.colorArr[13], matched: false, flipped: false },
      { color: this.props.colorArr[14], matched: false, flipped: false },
      { color: this.props.colorArr[15], matched: false, flipped: false },
    ];
  }

  matchCheck = (cardColor, cardId) => {
    if (this.state.comparing) {
      return;
    }

    const { cards, lastCard } = this.state;

    // Set card to Flipped
    cards[cardId].flipped = true;
    this.setState({ cards });
    if (this.state.lastCard) {
      this.setState({ comparing: true });
      if (cardColor === lastCard.cardColor) {
        cards[cardId].matched = true;
        cards[lastCard.cardId].matched = true;
        this.setState({
          cards,
          lastCard: null,
          comparing: false,
        });
      } else {
        setTimeout(() => {
          cards[cardId].flipped = false;
          cards[lastCard.cardId].flipped = false;
          this.setState({
            cards,
            lastCard: null,
            comparing: false,
          });
        }, 1500);
      }
    } else {
      this.setState({
        lastCard: { cardId, cardColor },
        comparing: false,
      });
    }
  }

  renderCards(cards) {
    return cards.map((card, index) => (
      <Card
        key={index}
        id={index}
        bgColor={card.flipped ? card.color : 'gray'}
        color={card.color}
        matched={card.matched}
        flipped={card.flipped}
        matchCheck={this.matchCheck}
      />
    ));
  }

  render() {
    // Create a map of each card, it's color, text, and if it is disabled or not
    
    return (
      <div id="grid">
        {this.renderCards(this.state.cards)}
      </div>
    );
  }
}

export default Grid;
