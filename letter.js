
//Letter constructor

var Letter = function(guessLetter) {
	//The letter the user has guessed
	this.guessLetter = guessLetter;
	//Has the letter been guessed correctly or not
	this.guessed = false;
}

//Returns the word to be displayed as the user guesses letters or the game begins
Letter.prototype.toString = function() {
	//If letter is correct, it is returned
		if (this.guessed) {
			return this.guessLetter + " ";
			//if letter is incorrect, an underscore is returned for display
		} else {
			return "_ ";
		}
	};
	
	//function to return letter guessed correctly
Letter.prototype.checkLetter = function(toCheck) {
	if (toCheck == this.guessLetter) {
		this.guessed = true;
		return this.guessLetter;
	}
};
	
module.exports = Letter;
