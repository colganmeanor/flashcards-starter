const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

// const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
    this.cards = [];
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    var newCards = prototypeQuestions.map(card => new Card(card["id"], card["question"], card["answers"], card["correctAnswer"]))
    var newDeck = new Deck(newCards);
    var newRound = new Round(newDeck);
    this.currentRound = newRound;
    this.printMessage(newDeck, newRound);
    this.printQuestion(newRound);
  }

}



module.exports = Game;
