class Letter {
    constructor (char) {
        this.char = String(char);
        if (this.char === ' ') {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    }

    getChar () {
        if (this.guessed || this.char === ' ') {
            return this.char;
        } else {
            return "_";
        }
    }

    checkChar (char) {
        if (char === this.char) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Letter;
