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

  // returnCurrentCard() {
  //   return this.deck.cards[0]
  // }

  returnCurrentCard() {
    return this.currentCard;
  }

  // takeTurn(guess, card) {
  //   this.turns++;
  //   this.deck.cards.shift();
  //   this.deck.cards.push(card);
  //   var turn = new Turn(guess, card);
  //   this.currentTurn = turn;
  //   switch (turn.evaluateGuess()) {
  //     case true:
  //       this.correctGuesses.push(card.id)
  //       return turn.giveFeedback();
  //       break;
  //     case false:
  //       this.incorrectGuesses.push(card.id);
  //       return turn.giveFeedback();
  //       break
  //   }
  // }

  takeTurn(guess){
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
    this.percentCorrect = (this.correctGuesses.length / this.deck.cards.length) * 100;
    return `${this.percentCorrect}%`
  }

  endRound(){
    return `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`
  }

  updateCard(){
    this.deck.cards.shift();
    this.currentCard = this.deck.cards[0];
    // this.deck.cards.push(this.currentCard);
    this.turns++;
  }

}

module.exports = Round
