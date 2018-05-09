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
        var returnValue = true;
        var wordString = "";
        for (var i = 0; i < this.letterArray.length; i++) {
            var wordString = wordString + " " + this.letterArray[i].getChar();
            if (!this.letterArray[i].guessed) {
                returnValue = false;
            }
        }
        console.log("\n\n" + wordString + "\n\n\n\n");
        return returnValue;
    }

    charGuessed (char) {
        var returnValue = false;
        for (var i = 0; i < this.letterArray.length; i++) {
           if (this.letterArray[i].checkChar(char)) {
               returnValue = true;
           }
        }
        //console.log(this.letterArray);
        return returnValue;
        
    }
}

module.exports = Word;

