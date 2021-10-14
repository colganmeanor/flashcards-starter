const Card = require('../src/Card');

class Turn{
  constructor(guess, card){
    this.guess = guess;
    this.card = card;
  }

  returnGuess(){
    return this.guess;
  }

  returnCard(){
    return this.card;
  }

  evaluateGuess(){
    if (this.guess === this.card.correctAnswer){
      return true
    } else {
      // console.log('should be wrong')
      return false;
    }
  }

  giveFeedback(){
    console.log(this.card.correctAnswer)
    if (this.guess === this.card.correctAnswer){
      console.log(this.guess)
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }

}



module.exports = Turn;
