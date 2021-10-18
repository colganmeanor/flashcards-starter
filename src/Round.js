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
    this.currentCard = this.deck.cards[0]
    this.percentCorrect = null;
  }



  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.currentCard);
    this.currentTurn = turn;
    switch (turn.evaluateGuess()) {
    case true:
      this.correctGuesses.push(this.currentCard.id)
      this.updateCard();
      return turn.giveFeedback();
      break;
    case false:
      this.incorrectGuesses.push(this.currentCard.id);
      this.updateCard();
      return turn.giveFeedback();
      break
    }

  }

  calculatePercentCorrect() {
    this.percentCorrect = (this.correctGuesses.length / 30) * 100;
    return `${this.percentCorrect}%`
  }

  endRound() {
    this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`
  }

  updateCard() {
    this.deck.cards.shift();
    this.currentCard = this.deck.cards[0];
    this.turns++;
  }

}

module.exports = Round
