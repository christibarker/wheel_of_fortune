
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
		// $('.col').css({"background": "white"});
		// alert('it works');
		newGame.startGame();
	})

	$('#player_t').on('click', function(){
		// $('.col').css({"background": "white"});
		// alert('it works');
		newGame.startGame();
	})


	//when letter is clicked the letter shows on screen or guess is counted wrong
	$('.letters').on('click', function(){
		// var letter = $(this).data('letter');
		// $('#A').fadeOut('slow'); use letter id
			 //loop through id's
		// alert('working');
		// newGame.letterGuessed();
		// newGame.checkIfWon();
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


});
//buy a vowel should pop up a modal with list of vowels to buy



class Game {
	constructor(){
		this.phrases = ['Happy', 'Disney', 'monkey'];
    	this.phrase = this.phrases[0].split('');//splits words into letters
		this.correctLetter = [];
		this.letter = $(this).data('letter');//get data name;
		this.letterBox = $(this).data('box');//get data name
	}

//this pushes letters to the correctLetter array when clicked
	correctLetter(){
		this.letterGuessed = this.correctLetter.push([]);
	}

//randomly selects words and changes background in innerText div
	startGame(){
		console.log('startGame!')
		// var wordSelector = this.phrases
		var background = $('.col').css({"background": "white"});
		var offset = Math.floor((8 - this.phrase.length) / 2);

		this.phrases = this.phrases[Math.floor(Math.random() * this.phrases.length)]
		// [(int) (Math.random() * this.phrases.length)];
	// [Math.floor(Math.random() * this.phrases.length)] opt 2	

		//this need to display white boxes for the amount of letters in word
		for (var i = offset; i < (offset + this.phrase.length); i++) {
			console.log("box at " + i)
			//function(index, value){
			//$('#t_' + i);
		};

		// {
		// 	$(this.letterBox).html(background + offset);
		// };

	// 	var newHTML = [];
	// $.each(pokemonArray, function(index, value) {
	//     newHTML.push('<div data-name="' + value + '" class="child-pokemon">' + value + '</div>');
	// });
	// $('.pokemon').html(newHTML);
	}

//guess letter if correct one thing else alert incorrect
	// letterGuessed(){
		// var letter = $(this).data('letter');
		// if(this.phrase includes(this.letter)){
		// 	$(this.letterBox).html(this.correctLetter);
		// 	addMoney();
		// } else {
		// 	alert('incorrect');
		// 	subMoney();
		// }
		//  $('#').fadeOut(3000);
		 //loop through id's
		
	// }

	// solvePuzzle(){
		

	// }

	// checkIfWon(){
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




};
