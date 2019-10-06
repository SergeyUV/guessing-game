class GuessingGame {
    
    constructor() {

        this.min=undefined;
        this.max=undefined;
        this.candidate=undefined;

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        
        this.candidate = Math.round((this.max + this.min)/2);

        return this.candidate;
    }

    lower() {
        this.max = this.candidate;
    }

    greater() {
        this.min = this.candidate;
    }
}

module.exports = GuessingGame;
