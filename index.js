
$(function(){

	var newGame = new Game();

$('#player').on('click', function(){
	startGame();
})


//when letter is clicked the letter shows on screen or guess is counted wrong

$('.letters').on('click', function(){
	letterGuessed();
	checkIfWon();
	});

//guess whole word
 $('#solve').on('click', function(){
 	prompt('enter guess');
 	if (answer === checkIfWon()){
 		checkIfWon();
 	} else {
 		subMoney();
 		alert('incorrect, you lose $200')
 	}
 })


//if they win fade in 
// <img src="img/winner.jpg" alt="">


//buy a vowel should pop up a modal with list of vowels to buy

class Game {
	constructor(){
		this.abcArray = [];
		this.phrases = ['Happy', 'Disney', 'monkey'];
		this.correctLetter = [];
	}

//this pushes letters to the abc array when clicked
	abcArray(){
		this.abcArray = $('letters');
	}

	startGame(phrases){
		this.background = $('#innerText_top').css("background", "white");
		wordSelector();
	}
//randomly selects words and changes background in innerText div
	wordSelector(phrases){
		this.phrases = phrases[(int) (Math.random() * phrases.length)];
		
// 		private static String[] names = { "Terminator", "Slicer","Ninja", "cow", "Robot", "littlegirl" };
// name = names[(int) (Math.random() * names.length)];
// System.out.println(name);
	}

	letterGuessed(){
		
		this.correctLetter.push([]);
		// var correct = $('.letters');
		if('.letters' === this.phrases){
			$('#innerText_top').html( 'phrases' + addMoney());
		} else {
			alert('incorrect');
			subMoney();
		}

	}

	solvePuzzle(){
		this.wordSelector;

	}

	checkIfWon(){
		$('#win_lose').html('you won' + '$500 bonus' + addMoney());
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