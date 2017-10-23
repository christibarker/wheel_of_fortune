
$(function(){

// if (Cookies.get('addMoney') === undefined) {
// 		Cookies.set('addMoney', 0);
// 	}

// if (Cookies.get('subMoney') === undefined) {
// 		Cookies.set('subMoney', 0);
// 	}

	// var newGame = new Game();


//click on and new word is generated, background to display word changes color
$('#player').on('click', function(){
	// $('.col').css({"background": "white"});
	// alert('it works');
	startGame();
})

$('#player_t').on('click', function(){
	// $('.col').css({"background": "white"});
	// alert('it works');
	startGame();
})


//when letter is clicked the letter shows on screen or guess is counted wrong
$('.letters').on('click', function(){
	// var letter = $(this).data('letter');
	// $('#A').fadeOut('slow'); use letter id
		 //loop through id's
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



// class Game {
// 	constructor(){
// 		this.phraseArr = phraseArr;
// 		this.phrases = ['Happy', 'Disney', 'monkey'];
//     	this.phrase = this.phraseArr[0].split('');
// 		this.correctLetter = [];
// 		this.letter = $(this).data('letter');//get data name;
// 		this.letterBox = $(this).data('box');//get data name
// 	}

// //this pushes letters to the correctLetter array when clicked
// 	correctLetter(){
// 		this.letterGuessed = this.correctLetter.push([]);
// 	}

// //randomly selects words and changes background in innerText div
// 	startGame(){
// 		// var wordSelector = this.phrases
// 		var background = $('.col').css({"background": "white"});

// 		this.phrases = phrases[(int) (Math.random() * phrases.length)];
// 	// [Math.floor(Math.random() * phrases.length)] opt 2	
// 		return this.phrase;
// 		console.log(phrases);

// //this need to display white boxes for the amount on letters in word
// 		$(this.letterBox).html(background + this.phrase[i]);
		
// 	}


// 	letterGuessed(){
// 		if(this.phrase includes(this.letter)){
// 			$(this.letterBox).html(this.correctLetter);
// 			addMoney();
// 		} else {
// 			alert('incorrect');
// 			subMoney();
// 		}
// 		$('.letters').click(function(){
// 		  $('.letters').fadeOut();
// 		});
		// var letter = $(this).data('letter');
		//  $('#' === letter).fadeOut(3000);
		//  //loop through id's
		
// 	}

// 	solvePuzzle(){
		

// 	}

// 	checkIfWon(){
// 		if (this.correctLetter.length == this.wordSelector.length) {
//       		$('#win_lose').html('you won' + '$500 bonus' + addMoney());
//     	} else {
// 	      this.letterGuessed();
// 	      alert('incorrect');
// 			subMoney();
//    		 }	
//    		 //if they win fade in 
// 		// <img src="img/winner.jpg" alt="">
// 	}

// 	//add money to their total
// 	addMoney(){
// 		var addMoney = ('letter' * parseInt(300));
// 		this.phrases + addMoney;
		
// 	}

// //subtract money from their total
// 	subMoney(){
// 		var subMoney = ('letter' - parseInt(200));
// 		this.phrases - subMoney;	
// 		// minus that money from them

// 	}


// 	function updateTotals() {
	
// 		var add = parseInt(Cookies.get('addMoney'));
// 		var subtract = parseInt(Cookies.get('subtract'));

// 		var totalMoney = add + totalSugar + totalLemon;

// 		$('.money').html(totalMoney + '$');
		
// 		return totalMoney;
// 	};




// }
























});