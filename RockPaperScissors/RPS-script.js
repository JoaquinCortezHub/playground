//Project Date: 08/26/23

//The user should imput a choice (Rock, paper or scissors)
//There should be a function that gets a choice form the computer
//there should be a function that evaluates who wins the round
//the result should be displayed to the user

function getComputerChoice() {
	const choice = ["rock", "paper", "scissors"];
	const indexRandom = Math.floor(Math.random() * choice.length);
	return choice[indexRandom];
}
//here I'm adding event listeners to the buttons and saving the values
//in 'playerChoice' which is outside the eventlisteners for a bigger scope.
let playerChoice;
let playerScore = 0;
let computerScore = 0;
// Event listeners for the buttons
let rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
	playerChoice = "rock"; // Assign the value
	console.log(playerChoice);
	playRound(playerChoice, getComputerChoice()); // Call playRound here
});

let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
	playerChoice = "paper"; // Assign the value
	console.log(playerChoice);
	playRound(playerChoice, getComputerChoice()); // Call playRound here
});

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
	playerChoice = "scissors"; // Assign the value
	console.log(playerChoice);
	playRound(playerChoice, getComputerChoice()); // Call playRound here
});

function game() {
	const displayWrapper = document.getElementById("display-wrapper");
	let playerChoice;

	//Here the button's interactions are being set.
	rockButton.addEventListener("click", () => {
		const result = playRound("rock", getComputerChoice());
		displayResult(result);
	});

	paperButton.addEventListener("click", () => {
		const result = playRound("paper", getComputerChoice());
		displayResult(result);
	});

	scissorsButton.addEventListener("click", () => {
		const result = playRound("scissors", getComputerChoice());
		displayResult(result);
	});
	//Display the results in the div-wrapper.
	function displayResult(result) {
		const roundResult = result;
		console.log(roundResult);
	}

	function checkGameResult() {
		if (playerScore === 5) {
			console.log("Congrats! You won!");
			//changing the header
			document.querySelector(".section-heading").textContent =
				"Player wins the game!";
		} else if (computerScore === 5) {
			console.log("aww, computer won :'(");
			//changing the header
			document.querySelector(".section-heading").textContent =
				"Computer wins the game!";
		}
	}

	function playRound(playerSelection, computerSelection) {
		const outcomes = {
			rock: { beats: "scissors", losesTo: "paper" },
			paper: { beats: "rock", losesTo: "scissors" },
			scissors: { beats: "paper", losesTo: "rock" },
		};

		if (outcomes[playerSelection].beats === computerSelection) {
			playerScore++;
		} else if (outcomes[playerSelection].losesTo === computerSelection) {
			computerScore++;
		}

		updateScore();
		checkGameResult();
	}

	function updateScore() {
		const playerScoreElement = document.querySelector(".player-score");
		const computerScoreElement = document.querySelector(".cpu-score");

		playerScoreElement.textContent = playerScore;
		computerScoreElement.textContent = computerScore;
	}
}
game();
