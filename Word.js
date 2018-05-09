var Letter = require("./Letter");

class Word {
    constructor (word) {
        this.word = word.split('');
        this.letterArray = [];
        for (var i = 0; i < this.word.length; i++) {
            this.letterArray.push(new Letter(this.word[i]));    
        }

        //console.log(this.letterArray);
    }

    printWord () {
        //console.log(this.word);
        var wordString = "";
        for (var i = 0; i < this.letterArray.length; i++) {
            var wordString = wordString + " " + this.letterArray[i].getChar();
        }
        console.log(wordString);
        return wordString;
    }

    charGuessed (char) {
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].checkChar(char);
        }
    }
}

module.exports = Word;

