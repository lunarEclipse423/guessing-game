class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.candidate = this.min + Math.ceil((this.max - this.min) / 2);
        console.log(this.candidate);
    }

    guess() {
        return this.candidate;
    }

    lower() {
        this.setRange(this.min, this.candidate);
    }

    greater() {
        this.setRange(this.candidate, this.max);
    }
}

module.exports = GuessingGame;
