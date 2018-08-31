var Letter = require("./letter.js");

var Word = function() {
	this.dispWord = [];
}

Word.prototype.theWord = function(newWord) {
	var wordArr = newWord.split("");
	for (var i = 0; i<wordArr.length; i++) {
		this.dispWord.push(new Letter(wordArr[i]));
	}
}
	
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

