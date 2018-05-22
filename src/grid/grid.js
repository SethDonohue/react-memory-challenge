import React, { Fragment, Component } from 'react';
import './grid.css';
import Card from '../card/card';

class Grid extends Component {
  state = {
    cards: this.initializeCards(),
    lastCard: null,
    comparing: false,
    attempts: 0,
    matches: 0,
  }

  initializeCards() {
    const { dataArray } = this.props;

    return [
      {
        color: dataArray[0].color, value: dataArray[0].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[1].color, value: dataArray[1].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[2].color, value: dataArray[2].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[3].color, value: dataArray[3].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[4].color, value: dataArray[4].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[5].color, value: dataArray[5].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[6].color, value: dataArray[6].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[7].color, value: dataArray[7].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[8].color, value: dataArray[8].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[9].color, value: dataArray[9].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[10].color, value: dataArray[10].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[11].color, value: dataArray[11].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[12].color, value: dataArray[12].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[13].color, value: dataArray[13].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[14].color, value: dataArray[14].value, matched: false, flipped: false, 
      },
      {
        color: dataArray[15].color, value: dataArray[15].value, matched: false, flipped: false, 
      },
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
      this.setState({ comparing: true, attempts: this.state.attempts + 1 });
      if (cardColor === lastCard.cardColor) {
        cards[cardId].matched = true;
        cards[lastCard.cardId].matched = true;
        this.setState({
          cards,
          lastCard: null,
          comparing: false,
          matches: this.state.matches + 1,
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

  resetGame() {
    this.setState({
      cards: this.initializeCards(),
      lastCard: null,
      comparing: false,
      attempts: 0,
      matches: 0,
    });
  }

  renderCards(cards) {
    return cards.map((card, index) => (
      <Card
        key={index}
        id={index}
        bgColor={card.flipped ? card.color : 'gray'}
        value={card.flipped ? card.value : ''}
        color={card.color}
        display={card.flipped ? 'block' : 'none'}
        matched={card.matched}
        flipped={card.flipped}
        matchCheck={this.matchCheck}
      />
    ));
  }

  render() {
    let bestScoreJSX = this.props.bestScore;
    
    let winJSX = null;
    if (this.state.matches === 8) {
      winJSX = 'You Win!';
      if (this.props.bestScore > this.state.attempts) {
        localStorage.bestScore = this.state.attempts;
        bestScoreJSX = this.state.attempts.toString();
      }
    } else {
      winJSX = null;
    }

    return (
      <Fragment>
        <h1>{winJSX}</h1>
        <h1>Attempts: {this.state.attempts} Best: {bestScoreJSX}</h1>
        <div id="grid">
          {this.renderCards(this.state.cards)}
        </div>
        <button id="resetButton" onClick={() => this.resetGame()}>Reset Game</button>
      </Fragment>
    );
  }
}

export default Grid;
