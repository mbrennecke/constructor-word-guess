var Word = require("./word.js");
var inquirer = require("inquirer");

var wordArr = ["above","able","ability","about","across","account","accept","according","address","activity","administration","admit","action","actually","affect","after","again","agency","agent","against","adult","agreement","agree","almost","alone","already","along","allow","although","also","ahead","American","always","analysis","amount","another","animal","answer","anything","anyone","apply","appear","among","approach","area","argue","article","arrive","assume","artist","attention","attack","audience","around","attorney","available","author","authority","away","avoid","baby","ball","back","base","beautiful","beat","because","bank","become","behavior","before","believe","behind","benefit","best","begin","beyond","between","billion","black","blood","blue","board","body","book","born","both","break","bill","bring","brother","budget","building","business","better","campaign","cancer","camera","candidate","call","build","career","capital","card","carry","case","cause","catch","care","center","central","certain","cell","certainly","chair","century","challenge","chance","character","charge","child","change","check","choose","choice","citizen","city","civil","claim","clear","class","church","close","coach","collection","cold","clearly","color","college","commercial","common","community","compare","company","computer","conference","condition","concern","Congress","contain","consumer","control","continue","consider","cost","could","couple","country","create","court","course","crime","cultural","current","cover","culture","customer","data","come","daughter","deal","death","decade","dead","debate","dark","decision","decide","deep","degree","defense","describe","design","Democrat","determine","despite","develop","democratic","development","difference","different","dinner","direction","director","difficult","discussion","discover","disease","doctor","discuss","door","detail","down","dream","draw","drive","drop","during","each","early","economic","east","economy","edge","easy","education","effect","eight","effort","drug","election","employee","either","enjoy","energy","enough","environment","else","especially","environmental","enter","establish","event","entire","evening","every","ever","everybody","everyone","everything","example","evidence","executive","exist","exactly","experience","expect","explain","expert","fact","face","factor","fall","family","fail","father","fear","fast","federal","field","feel","feeling","figure","fight","final","film","finally","financial","find","fine","finger","fill","finish","fire","first","fish","focus","floor","five","follow","food","force","foot","foreign","firm","forget","form","former","forward","four","friend","even","front","full","free","future","fund","garden","game","general","generation","give","girl","glass","goal","from","government","green","great","ground","grow","group","growth","hair","guess","hand","half","happen","happy","hang","have","good","health","head","heart","hear","hard","heavy","heat","high","herself","himself","here","history","help","hold","home","hope","hospital","house","hotel","however","human","hundred","husband","huge","identify","hour","image","imagine","important","impact","improve","include","increase","including","indicate","indeed","individual","information","inside","industry","interesting","instead","institution","interest","interview","international","investment","involve","into","issue","itself","join","item","kill","idea","kind","keep","kitchen","knowledge","language","land","large","last","laugh","know","later","just","lawyer","lead","leader","learn","least","late","leave","less","legal","letter","level","life","light","like","likely","line","listen","left","little","list","local","look","live","long","love","machine","magazine","maintain","main","major","majority","loss","manage","management","lose","manager","market","marriage","many","make","matter","material","mean","maybe","measure","media","meeting","meet","member","mention","message","memory","medical","might","method","military","mind","middle","million","miss","minute","mission","money","moment","model","more","month","morning","most","mother","move","mouth","movement","much","movie","music","modern","name","myself","national","nation","natural","nearly","must","nature","need","near","necessary","news","never","newspaper","next","network","none","night","notice","note","nothing","number","north","nice","offer","office","official","often","officer","onto","occur","only","operation","once","opportunity","order","option","organization","other","others","outside","owner","open","page","over","painting","parent","pain","paper","participant","particularly","particular","party","partner","past","pass","patient","people","pattern","perform","peace","performance","person","perhaps","phone","period","personal","part","physical","piece","pick","plan","picture","play","place","player","police","plant","policy","political","poor","politics","position","popular","positive","population","point","possible","prepare","practice","power","present","prevent","president","price","pressure","probably","private","problem","process","product","production","professor","professional","produce","program","property","project","protect","provide","prove","pretty","pull","purpose","push","public","question","quite","quality","radio","quickly","race","raise","reach","range","rather","read","ready","reality","realize","really","reason","receive","recently","real","recent","reduce","rate","reflect","region","relate","relationship","religious","remain","remember","remove","represent","Republican","research","recognize","record","resource","responsibility","response","respond","result","require","rich","reveal","rise","right","return","road","report","role","room","rest","risk","same","scene","safe","school","science","scientist","score","rock","season","rule","seat","save","security","seek","section","sell","send","senior","seem","sense","series","serious","service","second","several","seven","sexual","share","shake","serve","should","short","shoulder","shoot","shot","side","show","similar","sign","significant","since","simple","single","simply","sister","site","situation","skill","skin","small","smile","social","society","some","soldier","somebody","someone","something","sometimes","song","sing","soon","sort","source","south","southern","speak","special","size","space","speech","specific","sport","spring","staff","stand","stage","standard","star","start","state","sound","statement","station","step","stay","still","stock","store","story","strategy","street","strong","structure","student","study","stuff","style","subject","stop","successful","success","such","suddenly","suffer","suggest","summer","support","surface","sure","system","table","talk","take","task","teacher","technology","teach","television","tell","team","tend","test","thank","that","their","term","than","them","themselves","theory","these","there","then","thing","think","third","this","those","though","thought","thousand","threat","three","through","throughout","throw","thus","time","today","together","tonight","total","tough","toward","town","trade","traditional","training","travel","treatment","treat","trial","tree","trip","trouble","TRUE","truth","turn","type","understand","under","unit","until","usually","upon","value","various","very","victim","violence","view","visit","voice","vote","wait","walk","wall","want","watch","water","weapon","week","wear","weight","well","western","west","whatever","what","when","where","whether","which","while","white","whole","whom","whose","wide","wife","will","window","with","wind","wish","within","without","woman","wonder","worker","work","world","worry","write","would","writer","yard","wrong","yeah","year","young","they","spend","your","yourself","word"];

var guesses = 9;
var wordCheckArr;
var wordCheck;
var guessedLetters = [];

function wordSelecter() {
	var num = Math.floor(Math.random() * wordArr.length) +1;
	wordCheckArr = wordArr[num].split("");
	wordCheck = wordCheckArr.join(" ") + " ";
	return wordArr[num];
}

function wordGen() {
	var toGuessWord = wordSelecter();
	var letsPlay = new Word;
	letsPlay.theWord(toGuessWord);
	console.log("\nGenerating word\n");
	console.log(letsPlay.dispWord.join(""));
	wordGame(letsPlay);
	
}

function wordGame(letsPlay) {
	inquirer
	.prompt([
	{
	  type: "input",
	  message: "Guess a letter: ",
	  name: "choice"
	}
	])
	.then(function(inquirerResponse) {
		var val = inquirerResponse.choice;
		if(!val.match(/^[a-zA-Z]+$/)){
			console.log("Please enter a letter\n");
			console.log(letsPlay.dispWord.join(""));
			wordGame(letsPlay);
			return;
		}
		
		if (guessedLetters.indexOf(val) != -1){
			console.log("Already guessed that letter\n");
			console.log(letsPlay.dispWord.join(""));
			wordGame(letsPlay);
			return;
		}
		guessedLetters.push(val);
		var truncLetter = val.slice(0,1).toLowerCase();
		var correct = letsPlay.theChar(truncLetter);
		var winCheck = letsPlay.dispWord.join("");
		console.log(winCheck + "\n");
		if (correct) {
			if (winCheck == wordCheck){
				console.log("Congratulations!\n\nHere's the next word\n");
				guesses = 9;
				guessedLetters = [];
				wordGen();
				return;
			}
			console.log("CORRECT\n")
			
		} else {
			guesses--;
			console.log("INCORRECT");
			console.log("Guesses left: " + guesses + "\n");
		}
		if (guesses == 0) {
			return;
		}
		wordGame(letsPlay);
	});
	
}

wordGen();