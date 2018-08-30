
var Word = function() {
	this.dispWord = [];
	this.theWord = function(newWord) {
		var check = [];
		var i = 0;
		var wordArr = this.dispWord;
		//var wordArr = [];
		check = newWord.split("");
		check.forEach(function(item){
		//	var l = new Letter(item);
		//	wordArr.push(l);
			this.wordArr[i] = new Letter(item);
			i++;
		});
		//this.dispWord = wordArr;
		console.log(this.dispWord);
	}
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
	