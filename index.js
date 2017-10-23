
$(function(){

// if (Cookies.get('addMoney') === undefined) {
// 		Cookies.set('addMoney', 0);
// 	}

// if (Cookies.get('subMoney') === undefined) {
// 		Cookies.set('subMoney', 0);
// 	}

	var newGame = new Game();


//click on and new word is generated, background to display word changes color
$('#player').on('click', function(){
	alert('it works');
	// startGame();
})


//when letter is clicked the letter shows on screen or guess is counted wrong
$('.letters').on('click', function(){
	var letter = $(this).data('letter');
	// alert('working');
	// letterGuessed();
	// checkIfWon();
	});

// //guess whole word/phrase
 $('#solve').on('click', function(){
 	prompt('enter guess');
 	if (guess === solvePuzzle()){
 		checkIfWon();
 	} else {
 		subMoney();
 		alert('incorrect, you lose $200')
 	}
 })





//buy a vowel should pop up a modal with list of vowels to buy

class Game {
	constructor(){
		this.phraseArr = phraseArr;
		this.phrases = ['Happy', 'Disney', 'monkey'];
    	this.phrase = this.phraseArr[0].split('');
		this.correctLetter = [];
		// this.letter = data-letter;
		// this.box = data-box;
	}

//this pushes letters to the abc array when clicked
	// abcArray(){
	// 	this.abcArray = $('letters');
	// }

	startGame(phrases){
		var letterBox = $(this).data('box');//get data name
		this.background = $('letterBox').css("background", "white");
		wordSelector();
	}
//randomly selects words and changes background in innerText div
	wordSelector(phrases){
		this.phrases = phrases[(int) (Math.random() * phrases.length)];
		return this.phrases;
		private static String[] names = { "Terminator", "Slicer","Ninja", "cow", "Robot", "littlegirl" };
name = names[(int) (Math.random() * names.length)];
System.out.println(name);
	}

	letterGuessed(){
		var letter = $(this).data('letter');//get data name
		var letterBox = $(this).data('box');//get data name
		if(this.phrases includes(letter)){
			$(this.letterBox).html( this.correctLetter + addMoney());
		} else {
			alert('incorrect');
			subMoney();
		}
		$('.letters').click(function(){
		  $('.letters').fadeOut();
		});
		
	}

	solvePuzzle(){
		this.wordSelector + abcArray;

	}

	checkIfWon(){
		if (this.correctLetter.length == this.wordSelector.length) {
      		$('#win_lose').html('you won' + '$500 bonus' + addMoney());
    	} else {
	      this.letterGuessed();
	      alert('incorrect');
			subMoney();
   		 }	
   		 //if they win fade in 
		// <img src="img/winner.jpg" alt="">
	}

	//add money to their total
	addMoney(){
		var addMoney = ('letter' * parseInt(300));
		this.phrases + addMoney;
		// letter fades
	}

//subtract money from their total
	subMoney(){
		var subMoney = ('letter' - parseInt(200));
		this.phrases - subMoney;	
		// minus that money from them

	}
































});