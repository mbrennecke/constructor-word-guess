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
	for(var i = 0; i<this.dispWord.length; i++){
		var correct = this.dispWord[i].checkLetter(character);
	}
}

module.exports = Word;

var w = new Word;
