const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function(){

  it('should be a function', function(){
    expect(Round).to.be.a('function')
  })

  it('should have a current card', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]

    const deck = new Deck(cards)

    const round = new Round(deck)

    expect(round.deck.cards[0]).to.equal(card1)
  })

  it('should be able to return the current card', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.returnCurrentCard()

    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should be able to have new turns', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter', card1)

    expect(round.turns).to.equal(1)
  })

  it('should instantiate a new Turn when a guess is made', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter', card1)
    expect(round.currentTurn).to.be.an.instanceof(Turn)
  })

  it('should be able to update the current card to the next card in the list', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter', card1)
    expect(round.returnCurrentCard()).to.equal(card2)
  })

  it('should be able to evaluate guesses as true', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter', card1)

    expect(round.takeTurn('sea otter', card1)).to.equal('correct!')
  })

  it('should be able to evaluate guesses as false', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter', card1)
    round.takeTurn('spleen', card2)

    expect(round.takeTurn('spleen', card2)).to.equal('incorrect!')
  })
})
