var Word = require("./Word");
var inquirer = require("inquirer");

var newWord = new Word ("eee ffff gggggggg");
newWord.printWord();
newWord.charGuessed("e");
newWord.printWord();
newWord.charGuessed("f");
newWord.printWord();