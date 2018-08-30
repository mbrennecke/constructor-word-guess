var Letter = require("./letter.js");

var Word = function() {
	this.dispWord = [];
	//this.dispArr = [];
}

Word.prototype.theWord = function(newWord) {
	wordArr = newWord.split("");
	for (var i = 0; i<wordArr.length; i++) {
		//this.dispArr.push(new Letter(wordArr[i]));
		this.dispWord.push(new Letter(wordArr[i]));
		//this.dispWord.push(this.dispArr[i] + '');
	}
}
	
Word.prototype.theChar = function(character) {
	for(var i = 0; i<this.dispWord.length; i++){
		this.dispWord[i].checkLetter(character);
	}
	var join = '';
	for (var i=0; i<this.dispWord.length; i++){
		join = (this.dispWord[i] + '');
	}
	console.log(join);
}

var w = new Word;


w.theWord("test");
// console.log(w.dispWord.join(""));
 w.theChar("t");
console.log(w.dispWord.join(""));
//console.log(w.dispArr);
