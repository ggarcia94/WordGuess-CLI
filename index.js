var Word = require("./Word");
var inquirer = require("inquirer");

//Variables
var wrongGuessCount = 10;
var keepPlaying = true;
var newWord;
var movieArray = ["THE MATRIX", "SHREK", "ROCKY", "THE BREAKFAST CLUB", "SIXTEEN CANDLES", "INFINITY WAR", "COCO", "RESEVOIR DOGS", "PULP FICTION", ];
var randomNumber = Math.floor(Math.random() * movieArray.length);

function promptForLetter() {
    if (keepPlaying) {
        inquirer
            .prompt([
                // Here we create a basic text prompt.
                {
                    type: "input",
                    message: "Guess a letter!",
                    name: "char"
                }
            ])
            .then(function (input) {
                //if the charGuessed function returns false then you have guessed an incorrect letter
                var inputChar = input.char.toUpperCase();
                if (!newWord.charGuessed(inputChar)) {
                    wrongGuessCount--;
                    console.log("You guessed wrong!");
                    console.log("Incorrect guesses left:", wrongGuessCount);
                    if (wrongGuessCount === 0) {
                        console.log("YOU LOSE!")
                        keepPlaying = false;
                    }
                }
                //if printWord is true then I have guessed the word correctly
                if (newWord.printWord()) {
                    console.log("YOU WON!")
                    keepPlaying = false;
                }
                promptForLetter();
            });

    }

}

function startGame() {
    wrongGuessCount = 10;
    newWord = new Word(movieArray[randomNumber]);
    newWord.printWord();
    promptForLetter();
}


startGame();
