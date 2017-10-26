
$(function(){

// if (Cookies.get('addMoney') === undefined) {
// 		Cookies.set('addMoney', 0);
// 	}

// if (Cookies.get('subMoney') === undefined) {
// 		Cookies.set('subMoney', 0);
// 	}

	var newGame = new Game();
	var secondGame = new Game();

	//click on and new word is generated, background to display word changes color
		
//purple player
		$('#player').on('click', function(){
			newGame.startGame();
		});

	//when letter is clicked the letter shows on screen or guess is counted wrong
		$('.letters').on('click', function(){
			var letter = $(this).data('letter');
			$('#' + letter.toUpperCase()).fadeOut('slow');
			// console.log(letter);
			newGame.letterGuessed(letter);
			newGame.checkIfWon();
			});

		// //guess whole word/phrase
		 $('#solve').on('click', function(){
		 		newGame.solvePuzzle();
		 });

		 $('#next_round').on('click', function(){
			newGame.newRound()
		});

//blue player
		 	$('#player_t').on('click', function(){
			secondGame.startGame();
		});

		 $('.letters').on('click', function(){
			var letter = $(this).data('letter');
			$('#' + letter.toUpperCase()).fadeOut('slow');
			// console.log(letter);
			secondGame.letterGuessed(letter);
			secondGame.checkIfWon();
			});

		  $('#solve_t').on('click', function(){
		 		secondGame.solvePuzzle();
		 });

		  $('#player_t').on('click', function(){
		  	secondGame.startGame();
			// secondGame.newRound()
		});

});

//buy a vowel should pop up a modal with list of vowels to buy


class Game {
	constructor(){
		this.phrases = ['happy', 'disney', 'sneezy', 'daisy', 'mouse'];
		this.boardWidth = 8;
		this.guessedLetters = this.splitPhrase;	
		this.offset = 0;
	}

//randomly selects words and changes background in innerText div
		startGame(){
			// console.log('startGame!')
			this.phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
			this.splitPhrase = this.phrase.split('');//splits words into letters
			this.offset = Math.floor((this.boardWidth - this.phrase.length) / 2);


			for (var i = 0; i < this.boardWidth; i++) {
				$('#t_' + i).css({"background": "lightgreen"}).attr('data-letter', '');
			};
			//this need to display white boxes for the amount of letters in word
			for (var i = this.offset; i < (this.offset + this.splitPhrase.length); i++) {
				// console.log('#t_' + i)
				$('#t_' + i).css({"background": "white"}).attr('data-letter', this.splitPhrase[i - 1]);
				// .text(this.splitPhrase[i - 1]);
			};
		}

		letterGuessed(letter){
			// // guess letter if correct/ else alert incorrect
			//adds letter to board
			for (var i = 0; i < (this.splitPhrase.length); i++) {
				if (this.splitPhrase[i].toUpperCase() === letter.toUpperCase()) {
					this.guessedLetters[i] = '';
				  $('#t_' + (i + this.offset)).text(letter);
				};
			};
		};

		checkIfWon(){
			var hasWon = true;
			for (var i = 0; i < this.guessedLetters.length; i ++) {
				if (this.guessedLetters[i] != '') {
					hasWon = false;
					return;
				};
			};

			if(hasWon === true){
				$('#win_lose').html(`<img src="img/winner.jpg"></img>`);

			};
		};

		solvePuzzle(){
			var guess = prompt('enter guess', '');
			if (guess != '') {
				if (guess.toUpperCase() === this.phrase.toUpperCase()) {
					$('#win_lose').html(`<img src="img/winner.jpg"></img>`);
				} else {
					alert('you lost');
				}
			};
	}

		newRound(){
				this.startGame()
		}

}//ends Game

		


///add money features

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




