
 
let gameBoard = document.getElementById('board');

let body = document.body;
let welcomeMessage = document.createTextNode('<div class="screen screen-start" id="start"> <header> <h1>Tic Tac Toe</h1> <a href="#" class="button">Start game</a> </header> </div>');

gameBoard.style.display = "none";

let startScreen = document.createElement("div");
startScreen.innerHTML = '<div class="screen screen-start" id="start"><header> <h1>Tic Tac Toe</h1><a href="#" class="button">Start game </a> </header></div>';
body.appendChild(startScreen);

//let startButton = document.getElementById('start');
let startButton = document.getElementsByClassName('button');
// hide 
gameBoard.style.display = "none";


startButton[0].addEventListener("click", function(){
	startScreen.style.display = 'none';
	gameBoard.style.display = 'block';
});

let boxArray =  document.getElementsByClassName('box');
console.log(boxArray);



//Array to letters

let checkForWin = [];
let playsFor0 = [];
let playsForX = [];

let win1 = '012';
let win2 = '345';
let win3 = '678';
let win4 = '036';
let win5 = '147';
let win6 = '258';
let win7 = '048';
let win8 = '246';

// creating palyers

let player0 = true;
let player0Div = document.getElementById('player1');
let playerX = false;
let playerXDiv = document.getElementById('player2');

if (player0 === true){
	
	player0Div.classList.add('active');
} 


if (playerX === true){
	playerXDiv.classList.add('active');
}

function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}


for (iofArrayBox = 0; iofArrayBox < boxArray.length; iofArrayBox++){
	
	boxArray[iofArrayBox].addEventListener("mouseover", function(){
		
	if (player0 === true && hasClass(this, "box-filled-1") === false && hasClass(this, "box-filled-2") === false ) {
		this.style.backgroundImage = "url('img/o.svg')";
	} else if (playerX === true && hasClass(this, "box-filled-1") === false && hasClass(this, "box-filled-2") === false){
		this.style.backgroundImage = "url('img/x.svg')";
	}
		
	});
}





for (iofArrayBox = 0; iofArrayBox < boxArray.length; iofArrayBox++){
	
	boxArray[iofArrayBox].addEventListener("mouseout", function(){
		
		this.style.backgroundImage = "";
		
	});


}

for (iofArrayBox = 0; iofArrayBox < boxArray.length; iofArrayBox++){
	let num =iofArrayBox;
	
	boxArray[iofArrayBox].addEventListener("click", function(){
		
		
		if (player0 === true && hasClass(this, "box-filled-1") === false && hasClass(this, "box-filled-2") === false) {
			player0 = false;
			playerX = true;
			console.log('player 0 active');
			playerXDiv.classList.add('active');
			player0Div.classList.remove('active');
			
			console.log(num);
			
			if (hasClass(this, "box-filled-1") || hasClass(this, "box-filled-2")) {
				
				console.log(' has been selected already');
			} else {
				this.classList.add('box-filled-1');
				playsFor0.push(num);
				playsFor0.sort();
				
				let winner = playsFor0.join('');
				
				
				if (playsFor0.length >=3){
					
					
					console.log(winner);
					
					
					if(win1 === winner || win2 === winner ||win3 === winner ||win4 === winner ||win5 === winner ||win6 === winner ||win7 === winner ||win8 === winner){
						console.log('winner winner winner');
					}
				}
				
			}
			
		} 
		
		else if (playerX === true && hasClass(this, "box-filled-1") === false && hasClass(this, "box-filled-2")===false){
			
			playerX = false;
			player0 = true;
			console.log('player 1 active');
			player0Div.classList.add('active');
			playerXDiv.classList.remove('active');
			//this.classList.add('box-filled-2');
			
				if (hasClass(this, "box-filled-1") || hasClass(this, "box-filled-2")) {
				
				console.log(' has been selected already');
			} else {
				this.classList.add('box-filled-2');
				playsForX.push(num);
				playsForX.sort();
				
				let winner = playsForX.join('');
				
				
				if (playsForX.length >=3){
					
					
					console.log(winner);
					
					
					if(win1 === winner || win2 === winner ||win3 === winner ||win4 === winner ||win5 === winner ||win6 === winner ||win7 === winner ||win8 === winner){
						console.log('xxx wiNNER');
					}
				}
				
			}
			
			
			
			
			
		} 
		
		
		else{
			
		}
		
	});


}


// Creaing Arrays

/*let arrayList = [];
for(var i = 0; i < boxArray.length; i++) arrayList.push(boxArray[i]);*/
