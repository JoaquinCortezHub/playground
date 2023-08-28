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

			function playRound(playerSelection, computerSelection) {
				const outcomes = {
					rock: { beats: "scissors", losesTo: "paper" },
					paper: { beats: "rock", losesTo: "scissors" },
					scissors: { beats: "paper", losesTo: "rock" },
				};

				playerSelection = playerSelection.toLowerCase();

				if (!outcomes[playerSelection]) {
					return "Input invalid. Please select Rock, Paper or Scissors";
				}

				if (outcomes[playerSelection].beats === computerSelection) {
					return `Yay! you won. ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
				} else if (outcomes[playerSelection].losesTo === computerSelection) {
					return `Aww, better luck next time. ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
				} else {
					return "Wow! that's a tie!";
				}
			}

			function game() {
				let playerScore = 0;
				let computerScore = 0;

				for (i = 1; i <= 5; i++) {
					const playerChoice = prompt(
						`Round ${i}: Choose Rock, Paper, or Scissors`
					).toLowerCase();
					const computerChoice = getComputerChoice();
					const result = playRound(playerChoice, computerChoice);

					if (result.includes("won")) {
						playerScore++;
					} else if (result.includes("lost")) {
						computerScore++;
					}

					console.log(`Round ${i}: ${result}`);
				}

				if (playerScore > computerScore) {
					console.log("Congratulations! you won the game!");
				} else if (playerScore < computerScore) {
					console.log("Man... you suck. You lost the game.");
				} else {
					console.log("Boring, it's a tie.");
				}
			}

			game();