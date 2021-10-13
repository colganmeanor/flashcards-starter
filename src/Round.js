const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
    this.currentTurn = null;
    this.percentCorrect = null;
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess, card) {
    this.turns++;
    this.deck.cards.shift();
    this.deck.cards.push(card);
    var turn = new Turn(guess, card);
    this.currentTurn = turn;
    switch (turn.evaluateGuess()) {
      case true:
        this.correctGuesses.push(card.id)
        return turn.giveFeedback();
        break;
      case false:
        this.incorrectGuesses.push(card.id);
        return turn.giveFeedback();
        break
    }
  }

  calculatePercentCorrect() {
    this.percentCorrect = (this.correctGuesses.length / this.deck.cards.length) * 100;
    return `${this.percentCorrect}%`
  }

  endRound(){
    return `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`
  }

}

module.exports = Round
