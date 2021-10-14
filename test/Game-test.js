const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

it('should be a function', function(){
  expect(Game).to.be.a('function')
})

it.skip('should keep track of the current round', function(){

})

it.skip('should be able to start the game', function(){

})

it.skip('should be able to instantiate cards', function(){
  var game = new Game;

  game.start();

  expect(game.cards).to.equal()
})

})
