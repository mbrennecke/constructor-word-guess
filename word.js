var Letter = require("./letter.js");

var Word = function() {
	this.dispWord = [];
	this.theWord = function(newWord) {
		var check = [];
		this.dispWord = newWord.split("");
		this.dispWord.forEach(function(item){
			var l = new Letter(item);
			check.push(l + '');
		});
		this.dispWord = check;
	}
}

var w = new Word;

w.theWord("test");
console.log(w.dispWord.join(""));
