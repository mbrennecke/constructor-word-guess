//Import of letter constructor
var Letter = require("./letter.js");

//Word constructor
var Word = function() {
	this.dispWord = [];
}

//function to create array to hold the word selected
Word.prototype.theWord = function(newWord) {
	var wordArr = newWord.split("");
	for (var i = 0; i<wordArr.length; i++) {
		this.dispWord.push(new Letter(wordArr[i]));
	}
}

//function to check if the letter selected is in the word	
Word.prototype.theChar = function(character) {
	var correctReturn = false;
	for(var i = 0; i<this.dispWord.length; i++){
		var correct = this.dispWord[i].checkLetter(character);
		if(correct == character) {
			correctReturn = true;
		}
	}
	return correctReturn;
}

module.exports = Word;

