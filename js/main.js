var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var score = 0;
function checkForMatch(){
	if(cardsInPlay.length === 2){
			if(cardsInPlay[0] === cardsInPlay[1]){
				alert("You found a match!");
				score += 100;
			}else{
				alert("Sorry, try again.");
			}
			document.getElementById('score').innerHTML = score;
	}
}
function flipCard() {
	var cardID = this.getAttribute('data-id');
	console.log("User flipped over" + " " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src',cards[cardID].cardImage);
	checkForMatch();
}
function createBoard(){
	for(i=0;i<cards.length;i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
function reset(){
	var allImages = document.querySelectorAll('img');
	for(i=0;i<allImages.length;i++){
		allImages[i].removeEventListener('click',flipCard);
		allImages[i].remove();
	}
	cardsInPlay = [];
	shuffle(cards);
	createBoard();
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}//shuffle function courtesy of stackoverflow user 
//CoolAJ86 found here: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

shuffle(cards);
createBoard();
document.getElementById('reset').addEventListener('click',reset);