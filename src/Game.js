const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require('../src/Turn');
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

  start(){
    var newCards = prototypeQuestions.map(card => new Card(card["id"], card["question"], card["answers"], card["correctAnswer"]))
    var newDeck = new Deck(newCards);
    var newRound = new Round(newDeck);
    this.printMessage(newDeck, newRound);
    this.printQuestion(newRound);
  }

}



module.exports = Game;

// not doing testing for printMessage or printQuestion
// will need a startGame method
// start method needs to do the following:
// 1. instantiate cards using the prototypeData file
// 2. instantiate a new deck using the cards
// 3. instantiate a round using the deck
// 4. invoke printMessage
// 5. invoke printQuestion
