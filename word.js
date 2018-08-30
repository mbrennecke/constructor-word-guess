var Letter = require("./letter.js");

var Word = function() {
	this.dispWord = [];
	this.dispArr = [];
}

Word.prototype.theWord = function(newWord) {
	wordArr = newWord.split("");
	for (var i = 0; i<wordArr.length; i++) {
		this.dispArr.push(new Letter(wordArr[i]));
		this.dispWord.push(this.dispArr[i] + '');
	}
}
	
Word.prototype.theChar = function(character) {
	this.dispArr.forEach(function(item.guessedLetter){
		
	})
	var sendLetter = new Letter(character);
	console.log(sendLetter);
	console.log(sendLetter.checkLetter(character));
}

var w = new Word;


w.theWord("test");
// console.log(w.dispWord.join(""));
 w.theChar("t");
// console.log(w.dispWord.join(""));
console.log(w.dispWord.join(""));
console.log(w.dispArr);
