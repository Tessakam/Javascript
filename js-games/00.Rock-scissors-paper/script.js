// Requirements
// [x] Have three buttons that the player can press to change their pick
// [x] Have another button to let the computer pick one and show the winner
// [x] Let the player know they won (no alert box)
// [x] Have a reset button

// Nice-to-have
// [ ] Nice graphics
// [x] Let the player input using a text field
// [x] Show what the player picked by highlighting the correct button
// [ ] Add more options (spock, ...)
// [ ] Add even more options (but avoid using 100 if statements)
// [ ] Add complex rules

(() => {

    let playerSelection = "";
    let result = "";
    let playerScore = "";
    let computerScore = "";

    // Selection player via buttons
    document.getElementById("rock").addEventListener("click", () => {
        playerSelection = "rock";
        playGame()
    });
    document.getElementById("paper").addEventListener("click", () => {
        playerSelection = "paper";
        playGame()
    });
    document.getElementById("scissors").addEventListener("click", () => {
        playerSelection = "scissors";
        playGame()
    });
    // Input from player via textfield
    document.getElementById("play").addEventListener("click", () => {
        let userInput = playerSelection = document.getElementById("input").value;
        playGame();

        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            return userInput;
        } else {
            document.getElementById("input").value = ""; // make textfield empty again
            return alert("ERROR!\nPlease complete the field and use only 'rock, paper or scissors'");
        }
    });

    function playGame() {
        //setup a random number by computer
        let computerSelection = Math.floor(Math.random() * 3);

        if (computerSelection < 0.34) {
            computerSelection = "rock";

        } else if (computerSelection <= 0.67) {
            computerSelection = "paper";
        } else {
            computerSelection = "scissors";
        }
        console.log("computerSelection: ", computerSelection);

        //setup a function to compare winners and return result
        if (checkWinner() === "player") {
            result = " wins!";
            return playerScore++; //update score
        } else if (checkWinner() === "computer") {
            result = " wins!";
            return computerScore++;
        } else {
            result = "It's a draw, try again!!"
        }
        console.log("who is the winner?", result)
        checkWinner();

        //output player and computer's selections
        let score = document.getElementById("score");
        score.innerHTML = "PLAYER: [ " + playerSelection + " ]  COMPUTER: [ " + computerSelection + " ]"
        let compare = document.getElementById("compare");
        compare.innerHTML = "Who is the winner?" + " " + (checkWinner(playerSelection, computerSelection));

        //let scoreboard = document.getElementById("scoreboard");
        //scoreboard.innerHTML = "Scoreboard: Player: [ " + computerScore + " ] Computer: [ " + computerScore + " ]";
    }

    //Determine the winner
    function checkWinner(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a draw, try again!!"

        } else if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                return "YOU WIN"
            } else if (computerSelection === "paper") {
                return "Too bad, you lose";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                return "YOU WIN!"
            } else if (computerSelection === "rock") {
                return "YOU WIN";
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                return "YOU WIN!"
            } else if (computerSelection === "rock") {
                return "Too bad, you lose";
            }
        }
    }

    // refresh page = reset
    const refreshButton = document.querySelector(".reset");
    const refreshPage = () => {
        location.reload();
        document.getElementById("input").value = ""; // make textfield empty again
    }
    refreshButton.addEventListener('click', refreshPage);

})
();


/* original code, got stock and reshuffled the code (see above)

(() => {
    //user clicks on the button + shows in text description
    document.getElementById("rock").addEventListener("click", () => {
        document.getElementById("input").innerText = "rock"
    });

    document.getElementById("paper").addEventListener("click", () => {
        document.getElementById("input").innerText = "paper";
    });

    document.getElementById("scissors").addEventListener("click", () => {
        document.getElementById("input").innerText = "scissors";
    });

    function getUserChoice() {
        let userInput = document.getElementById("input").innerHTML

        //cover rock and Rock
        userInput = userInput.toLowerCase();

        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            return userInput;
        } else {
            return prompt("Error!\nPlease use only 'rock, paper or scissors'");
        }
        //console.log(getUserChoice("test"))
    }

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case "0":
                return "rock";
            case "1":
                return "paper";
            case "2":
                return "scissors";
            default:
                console.log("invalid")
        }

        //Determine the winner
        function compare(getUserChoice, getComputerChoice) {
            if (getUserChoice === getComputerChoice) {
                return "It's a draw, play again!"

            } else if (getUserChoice === "rock") {
                if (getComputerChoice === "scissors") {
                    return "Congrats, you win!"
                } else if (getComputerChoice === "paper") {
                    return "Too bad, you lose!";
                }
            } else if (getUserChoice === "paper") {
                if (getComputerChoice === "scissors") {
                    return "Congrats, you win!"
                } else if (getComputerChoice === "rock") {
                    return "Congrats, you win!";
                }
            } else if (getUserChoice === "scissors") {
                if (getComputerChoice === "paper") {
                    return "Congrats, you win!"
                } else if (getComputerChoice === "rock") {
                    return "Too bad, you lose!";
                }
            }
        }
    }
 */
