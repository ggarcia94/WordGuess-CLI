class Letter {
    constructor (char) {
        this.char = String(char);
        if (this.char === ' ') {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
        //this.guessed = false;
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
            return true;
            //console.log("You guessed the letter")
        } else {
            return false;
        }
    }
}


module.exports = Letter;
//var newChar = new Letter("a");
//newChar.getChar();
//newChar.checkChar("b");
//newChar.getChar();