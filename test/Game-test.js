const chai = require('chai');
const expect = chai.expect;
// const Turn = require('../src/Turn');
// const Card = require('../src/Card');
// const Deck = require('../src/Deck');
// const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  })


  it('should be able to instantiate cards', function() {
    var game = new Game;

    game.start();

    expect(game.currentRound.currentCard.id).to.equal(1)
  })

  it('should be able to instantiate a deck', function() {
    var game = new Game;

    game.start();

    expect(game.currentRound.deck.cards[0].id).to.equal(1)
  })

  it('should be able to instantiate a new round', function() {
    var game = new Game;

    game.start();

    expect(game.currentRound.turns).to.equal(0);
  })

  it('should keep track of the current round', function() {
    var game = new Game;

    game.start();

    expect(game.currentRound).to.not.equal(null);
  })
})
