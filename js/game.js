
 
let gameBoard = document.getElementById('board');
gameBoard.style.display = "none";

let body = document.body;

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

// Other screnns

function winnerScreenDiv(whow) {
gameBoard.style.display = "none";
let winnerScreen = document.createElement("div");
winnerScreen.innerHTML = '<div class="screen screen-win ' + whow +'" id="finish"><header> <h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';
body.appendChild(winnerScreen);

	
}




/*let winner0Screen = document.createElement("div");
winner0Screen.innerHTML = '<div class="screen screen-win screen-win-one" id="finish"><header> <h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';
body.appendChild(winner0Screen);
winner0Screen.style.display = 'none';


let winnerXScreen = document.createElement("div");
winnerXScreen .innerHTML = '<div class="screen screen-win screen-win-two" id="finish"><header> <h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';
body.appendChild(winnerXScreen);
winnerXScreen.style.display = 'none';


let winner0Screen = document.createElement("div");
startScreen.innerHTML = '<div class="screen screen-win screen-win-tie" id="finish"><header> <h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';
body.appendChild(winner0Screen);
winner0Screen.style.display = 'none';*/


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




		function isWinnerCheck(winNumber, whoWin) {
  		let a= whoWin[0];
		let b= whoWin[1];
		let c= whoWin[2];
		let d= whoWin[3];
		let towin3 = 0;
			
			
			
			if( winNumber.includes(a) === true){
				towin3+=1;
			}
						if( winNumber.includes(b) === true){
				towin3+=1;
							console.log(towin3);
			}
						if( winNumber.includes(c) === true){
				towin3+=1;console.log(towin3);
			}
						if( winNumber.includes(d) === true){
				towin3+=1;console.log(towin3);
			}
						
						if (towin3 >= 3){
							console.log('ultimate winner');
							let towin3 = 0;
							console.log(towin3);
							
							
							console.log('winner winner winner');
						let winner12 = 'screen-win-one';
						winnerScreenDiv(winner12);
							
						}
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
					isWinnerCheck(win1, playsFor0);
					isWinnerCheck(win2, playsFor0);
					isWinnerCheck(win3, playsFor0);
					isWinnerCheck(win4, playsFor0);
					isWinnerCheck(win5, playsFor0);
					isWinnerCheck(win6, playsFor0);
					isWinnerCheck(win7, playsFor0);
					isWinnerCheck(win8, playsFor0);
					
					
						
					
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
					
					
					isWinnerCheck(win1, playsForX);
					isWinnerCheck(win2, playsForX);
					isWinnerCheck(win3, playsForX);
					isWinnerCheck(win4, playsForX);
					isWinnerCheck(win5, playsForX);
					isWinnerCheck(win6, playsForX);
					isWinnerCheck(win7, playsForX);
					isWinnerCheck(win8, playsForX);
					
					
				
						/*let winner12 = 'screen-win-two';
						winnerScreenDiv(winner12);*/
					
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
