
var Letter = function(guessLetter) {
	this.guessLetter = guessLetter;
	this.guessed = false;
}

Letter.prototype.toString = function() {
		if (this.guessed) {
			return this.guessLetter;
		} else {
			return "_ ";
		}
	};
	
Letter.prototype.checkLetter = function(toCheck) {
	if (toCheck == this.guessLetter) {
		this.guessed = true;
	}
};
	
module.exports = Letter;
