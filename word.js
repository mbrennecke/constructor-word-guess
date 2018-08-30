var Letter = require("./letter.js");

var Word = function() {
	this.dispWord = [];
}

Word.prototype.theWord = function(newWord) {
		var check = [];
		this.dispWord = newWord.split("");
		this.dispWord.forEach(function(item){
			var l = new Letter(item);
			check.push(l + '');
		});
		this.dispWord = check;
	}
	
Word.prototype.theChar = function(character) {
	var sendLetter = new Letter(character);
	console.log(sendLetter);
	console.log(sendLetter.checkLetter(character));
}

var w = new Word;

w.theWord("test");
console.log(w.dispWord.join(""));
w.theChar("t");
console.log(w.dispWord.join(""));
