
(function(){



	let tres;
	let gameBoard = document.getElementById('board');
	gameBoard.style.display = "none";
	let body = document.body;
	let startScreen = document.createElement("div");
	startScreen.innerHTML = '<div class="screen screen-start" id="start"><header> <h1>Tic Tac Toe</h1><a href="#" class="button">Start game </a> </header></div>';
	body.appendChild(startScreen);
	let startButton = document.getElementsByClassName('button');
	let boxArray =  document.getElementsByClassName('box');
	let checkForWin = [];
	let playsFor0 = [];
	let playsForX = [];
	let player0 = true;
	let player0Div = document.getElementById('player1');
	let playerX = false;
	let playerXDiv = document.getElementById('player2');
	let stopper = false;

	// Possible wins
	let win1 = '012';
	let win2 = '345';
	let win3 = '678';
	let win4 = '036';
	let win5 = '147';
	let win6 = '258';
	let win7 = '048';
	let win8 = '246';

	// this Event listener hides the welcome screen and starts the game
	startButton[0].addEventListener("click", function(){
		startScreen.style.display = 'none';
		gameBoard.style.display = 'block';
	});


	// Functions


	function winnerScreenDiv(whow) {
		gameBoard.style.display = "none";
		let winnerScreen = document.createElement("div");
		winnerScreen.innerHTML = '<div class="screen screen-win ' + whow +'" id="finish"><header> <h1>Tic Tac Toe</h1><p class="message">Winner</p><a href="#" class="button">New game</a></header></div>';
		body.appendChild(winnerScreen);



		startButton[1].addEventListener("click", function(){
			let finishDiv = document.getElementById('finish');
			finishDiv.style.display = 'none';
			console.log('s');
			startScreen.style.display = 'none';
			gameBoard.style.display = 'block';
			playsFor0 = [];
			playsForX = [];



			finishDiv.innerHTML = '';
			player0 = true;
			player0Div.classList.add('active');
			playerX = false;
			playerXDiv.classList.remove('active');
			stopper = false;
			body.removeChild(winnerScreen);

			for (iofArrayBox = 0; iofArrayBox < boxArray.length; iofArrayBox++){
			boxArray[iofArrayBox].classList.remove("box-filled-1");
			boxArray[iofArrayBox].classList.remove("box-filled-2");

		}

		});
	}

	// this function checks if the class exist and it it does it return true
	function hasClass(el, cls) {
	  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
	}


	if (player0 === true){
		player0Div.classList.add('active');
	} else{
		playerXDiv.classList.add('active');
	}


	// this function checks plays conbination for each player 

	function isWinnerCheck(winNumber, whoWin, winScreen) {
		let a= whoWin[0];
		let b= whoWin[1];
		let c= whoWin[2];
		let d= whoWin[3];
		let e= whoWin[4];
		let towin3 = 0;

		if( winNumber.includes(a) === true){
					towin3+=1;
			console.log('includes a')
				}
		if( winNumber.includes(b) === true){
					towin3+=1;		
			console.log('includes b')
				}
		if( winNumber.includes(c) === true){
					towin3+=1;
			console.log('includes c')
				}
		if( winNumber.includes(d) === true){
					towin3+=1;
			console.log('includes d')
				}
		if( winNumber.includes(e) === true){
					towin3+=1;
			console.log('includes e')
				}

		if (towin3 >= 3){
			stopper = true;
			let towin3 = 0;
			let winner12 = winScreen;
			winnerScreenDiv(winner12);



				}
	}


	// this for loops adds a backgroung img on hover to each square on the board

	for (iofArrayBox = 0; iofArrayBox < boxArray.length; iofArrayBox++){
		boxArray[iofArrayBox].addEventListener("mouseover", function(){

			if (player0 === true && hasClass(this, "box-filled-1") === false && hasClass(this, "box-filled-2") === false ) {
				this.style.backgroundImage = "url('img/o.svg')";
			} else if (playerX === true && hasClass(this, "box-filled-1") === false && hasClass(this, "box-filled-2") === false){
				this.style.backgroundImage = "url('img/x.svg')";
				} else{}
		});

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
				playerXDiv.classList.add('active');
				player0Div.classList.remove('active');
				this.classList.add('box-filled-1');
				playsFor0.push(num);
				playsFor0.sort();
				let winner = playsFor0.join('');
				let checkOneOnly = false;

				if (playsFor0.length >=3){


						isWinnerCheck(win1, playsFor0, 'screen-win-one');
					if(stopper == true){return;}
						isWinnerCheck(win2, playsFor0,'screen-win-one');
					if(stopper == true){return;}
						isWinnerCheck(win3, playsFor0, 'screen-win-one');
					if(stopper == true){return;}
						isWinnerCheck(win4, playsFor0, 'screen-win-one');
					if(stopper == true){return;}
						isWinnerCheck(win5, playsFor0, 'screen-win-one');
					if(stopper == true){return;}
						isWinnerCheck(win6, playsFor0, 'screen-win-one');
					if(stopper == true){return;}
						isWinnerCheck(win7, playsFor0, 'screen-win-one');
					if(stopper == true){return;}
						isWinnerCheck(win8, playsFor0, 'screen-win-one');
					if(stopper == true){;return;}
				}
			} 

			if (playerX === true && hasClass(this, "box-filled-1") === false && hasClass(this, "box-filled-2")===false){
				playerX = false;
				player0 = true;
				player0Div.classList.add('active');
				playerXDiv.classList.remove('active');
				//this.classList.add('box-filled-2');
					if (hasClass(this, "box-filled-1") || hasClass(this, "box-filled-2")) {

					} else {
							this.classList.add('box-filled-2');
							playsForX.push(num);
							playsForX.sort();
							let winner = playsForX.join('');

								if (playsForX.length >=3){
										isWinnerCheck(win1, playsForX,'screen-win-two');
									if(stopper == true){return;}
										isWinnerCheck(win2, playsForX,'screen-win-two');
									if(stopper == true){return;}
										isWinnerCheck(win3, playsForX,'screen-win-two');
									if(stopper == true){return;}
										isWinnerCheck(win4, playsForX,'screen-win-two');
									if(stopper == true){return;}
										isWinnerCheck(win5, playsForX,'screen-win-two');
									if(stopper == true){;return;}
										isWinnerCheck(win6, playsForX,'screen-win-two');
									if(stopper == true){return;}
										isWinnerCheck(win7, playsForX,'screen-win-two');
									if(stopper == true){return;}
										isWinnerCheck(win8, playsForX,'screen-win-two');
									if(stopper == true){return;}
									}			
							}

			} 

			if (playsFor0.length === 5){
					 console.log('last one was triggeres')
					gameBoard.style.display = "none";
					let winnerScreen = document.createElement("div");
					winnerScreen.innerHTML = '<div class="screen screen-win screen-win-tie" id="finish"><header> <h1>Tic Tac Toe</h1><p class="message">It\'s a Draw</p><a href="#" class="button">New game</a></header></div>';
					body.appendChild(winnerScreen);

						for (iofArrayBox = 0; iofArrayBox < boxArray.length; iofArrayBox++){
						boxArray[iofArrayBox].classList.remove("box-filled-1");
						boxArray[iofArrayBox].classList.remove("box-filled-2");

						}						


						startButton[1].addEventListener("click", function(){



						let finishDiv = document.getElementById('finish');
						finishDiv.style.display = 'none';
						console.log('s');
						startScreen.style.display = 'none';
						gameBoard.style.display = 'block';
						playsFor0 = [];
						playsForX = [];
						winnerScreen.innerHTML = '';


						finishDiv.innerHTML = '';
						player0 = true;
						player0Div.classList.add('active');
						playerX = false;
						playerXDiv.classList.remove('active');


					});
			}


			});


	}

	}());

