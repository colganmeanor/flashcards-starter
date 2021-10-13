const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round{
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentTurn = null;
  }

  returnCurrentCard(){
    return this.deck.cards[0]
  }

  takeTurn(guess, card){
    this.turns++;
    this.deck.cards.shift()
    var turn = new Turn(guess, card);
    this.currentTurn = turn;
    return turn.giveFeedback();
  }
}


module.exports = Round
