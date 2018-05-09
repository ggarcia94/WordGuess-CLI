var Word = require("./Word");
var inquirer = require("inquirer");

//Variables
var wrongGuessCount = 10;
var keepPlaying = true;
var newWord = new Word("foo");

function checkIfWon() {

}

function checkIfLost() {

}

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
                //console.log(inquirerResponse.char);
                //if foo is true then I have guessed letter correctly
                if (!newWord.charGuessed(input.char)) {
                    wrongGuessCount--;
                    console.log("You guessed wrong!");
                    console.log("Incorrect guesses left:", wrongGuessCount);
                    if (wrongGuessCount === 0) {
                        console.log("YOU LOSE!")
                        keepPlaying = false;
                        //startGame();
                    }
                }
                //console.log("Here:",foo);
                //if printWord is true then I have guessed the word correctly
                if (newWord.printWord()) {
                    console.log("YOU WON!")
                    keepPlaying = false;
                    //startGame();
                }
                //count++;
                promptForLetter();
            });

    }

}

function startGame() {
    wrongGuessCount = 10;
    newWord = new Word("the matrix");
    newWord.printWord();
    promptForLetter();
}

startGame();




//var newWord = new Word ("eee ffff gggggggg");
//newWord.printWord();
//newWord.charGuessed("e");
//newWord.printWord();
//newWord.charGuessed("f");
//newWord.printWord();