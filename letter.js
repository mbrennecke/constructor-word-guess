
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
	console.log(toCheck);
	console.log(this.guessLetter);
	if (toCheck == this.guessLetter) {
		this.guessed = true;
		console.log("true");
	}
};
	
module.exports = Letter;
