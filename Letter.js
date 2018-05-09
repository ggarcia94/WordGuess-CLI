class Letter {
    constructor (char) {
        this.char = String(char);
        this.guessed = false;
    }

    getChar () {
        if (this.guessed || this.char === ' ') {
            //console.log("Letter:", this.letter);
            return this.char;
        } else {
            //console.log("Here I am");
            return "_";
        }
    }

    checkChar (char) {
        if (char === this.char) {
            this.guessed = true;
            //console.log("You guessed the letter")
        }
    }
}


module.exports = Letter;
//var newChar = new Letter("a");
//newChar.getChar();
//newChar.checkChar("b");
//newChar.getChar();