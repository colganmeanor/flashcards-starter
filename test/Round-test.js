const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  })

  it('should have a current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]

    const deck = new Deck(cards)

    const round = new Round(deck)

    expect(round.deck.cards[0]).to.equal(card1)
  })

  it('should be able to return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.returnCurrentCard()

    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should be able to have new turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter')

    expect(round.turns).to.equal(1)
  })

  it('should instantiate a new Turn when a guess is made', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter')
    expect(round.currentTurn).to.be.an.instanceof(Turn)
  })

  it('should be able to update the current card to the next card in the list', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter')
    expect(round.returnCurrentCard()).to.equal(card2)
  })

  it('should be able to evaluate guesses as true', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    expect(round.takeTurn('sea otter')).to.equal('correct!')
  })

  it('should be able to evaluate guesses as false', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter')
    round.takeTurn('spleen')

    expect(round.takeTurn('spleen')).to.equal('incorrect!')
  })

  it('should be able to calculate the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(19, 'What year was I born?', [1994, 1894, 1995], 1994);

    const cards = [card1, card2, card3, card4]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter')
    round.takeTurn('spleen')
    round.takeTurn('Fitzgerald')
    round.takeTurn(1894)

    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal('6.666666666666667%')
  })

  it('should be able to end the round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(19, 'What year was I born?', [1994, 1894, 1995], 1994);

    const cards = [card1, card2, card3, card4]
    const deck = new Deck(cards)
    const round = new Round(deck)

    round.takeTurn('sea otter')
    round.takeTurn('spleen')
    round.takeTurn('Fitzgerald')
    round.takeTurn(1894)

    round.calculatePercentCorrect();
    round.endRound();

    expect(round.endRound()).to.equal('** Round over! ** You answered 6.666666666666667% of the questions correctly!')
  })
})
