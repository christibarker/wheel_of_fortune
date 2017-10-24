
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
			newGame.startGame();
		})

		$('#player_t').on('click', function(){
			newGame.startGame();
		})


	//when letter is clicked the letter shows on screen or guess is counted wrong
		$('.letters').on('click', function(){
			var letter = $(this).data('letter');
			$('letter').fadeOut('slow');
			console.log(letter);
			newGame.letterGuessed(letter);
			newGame.checkIfWon();
			});

		// //guess whole word/phrase
		 $('#solve').on('click', function(){
		 	prompt('enter guess');
		 	if (guess === solvePuzzle()){
		 		checkIfWon();
		 	} 
		 })

});
//buy a vowel should pop up a modal with list of vowels to buy



class Game {
	constructor(){
		this.phrases = ['Happy', 'Disney', 'monkey'];
		this.correctLetter = [''];
		this.boardWidth = 8;
		this.phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
		this.splitPhrase = this.phrase.split('');//splits words into letters
	}

//randomly selects words and changes background in innerText div
	startGame(){
		// console.log('startGame!')
		var offset = Math.floor((this.boardWidth - this.phrase.length) / 2);

		//this need to display white boxes for the amount of letters in word
		for (var i = offset; i < (offset + this.splitPhrase.length); i++) {
			// console.log('#t_' + i)
			$('#t_' + i).css({"background": "white"}).data('box', this.splitPhrase[i - 1]);
			// .text(this.splitPhrase[i - 1]);
		};
	}

	letterGuessed(letter){
		// // guess letter if correct/ else alert incorrect

		//adds letter to board
		// for (var i = this.splitPhrase; i < (this.splitPhrase.length); i++){
		// $('#t_').html(letter);
	// }
		var inWord = false;
		var box = $(this).data('box');
		
		if(this.splitPhrase.includes(letter)){
			$('box').each(function(){
				if(letter === box){
					inWord = true;
					$('box').text(letter);
							console.log(letter)
				}
			});
		};
	}

	checkIfWon(letter){
		if(letter === this.phrase){
			alert('you win');
		}
	}

}//ends Game

		
	// solvePuzzle(){
		

	// }

			// checkIfWon(letter){
			// 	if (this.correctLetter.length == this.wordSelector.length) {
		 //      		$('#win_lose').html('you won' + '$500 bonus' + addMoney());
		 //    	} else {
			//       this.letterGuessed();
			//       alert('incorrect');
			// 		subMoney();
		 //   		 }	
		 //   		 //if they win fade in 
			// 	// <img src="img/winner.jpg" alt="">
			// }

		//add money to their total
		// addMoney(){
		// 	var addMoney = ('letter' * parseInt(300));
		// 	this.phrases + addMoney;
			
		// }

	//subtract money from their total
		// subMoney(){
		// 	var subMoney = ('letter' - parseInt(200));
		// 	this.phrases - subMoney;	
		// 	// minus that money from them

		// }


		// function updateTotals() {
		
		// 	var add = parseInt(Cookies.get('addMoney'));
		// 	var subtract = parseInt(Cookies.get('subtract'));

		// 	var totalMoney = add + totalSugar + totalLemon;

		// 	$('.money').html(totalMoney + '$');
			
		// 	return totalMoney;
		// };




