const femalePlayerList = require("./femalePlayerList");

module.exports = class Game {
  constructor() {
    this.guessedPlayers = [];
    this.score = 0;
    this.reset();
  }

  reset() {
    this.guessesLeft = 10;
    this.currentPlayer = this.randomPlayer();
  }

  randomPlayer() {
    //. generate random number

    function generateRandomNumber() {
      return Math.trunc(Math.random() * 20);
    }

    let randomNumber = generateRandomNumber();

    // while loop which means a player won't be repeated
    while (this.guessedPlayers.includes(randomNumber + 1)) {
      randomNumber = generateRandomNumber();
    }

    // return the profile of the player with index of random number.
    return femalePlayerList[randomNumber];
  }

  guess(number) {
    if (number === this.currentPlayer.ranking) {
      this.guessedPlayers.push(number);
      this.score += this.guessesLeft;
      this.reset();
      return "correct";
    } else {
      if (this.guessesLeft - 1 === 0) {
        return "game over";
      } else {
        this.guessesLeft--;
        return "incorrect";
      }
    }

    // if (number !== this.currentPlayer.ranking) {
    //   if (this.guessesLeft - 1 === 0) {
    //     this.reset();
    //     return "game over";
    //   } else {
    //     this.guessesLeft--;
    //     return "incorrect";
    //   }
    // } else {
    //   this.guessedPlayers.push(number);
    //   this.score += this.guessesLeft;
    //   this.guessesLeft = 10;
    //   this.currentPlayer = this.randomPlayer();
    //   return "correct";
    // }
  }

  endGame() {
    if (this.guessedPlayers.length === 20) {
      return true;
    }
  }

  skip() {
    this.currentPlayer = this.randomPlayer();
  }
};
