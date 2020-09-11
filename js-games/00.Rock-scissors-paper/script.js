// Requirements
// [x] Have three buttons that the player can press to change their pick
// [x] Have another button to let the computer pick one and show the winner
// [x] Let the player know they won (no alert box)
// [x] Have a reset button

// Nice-to-have
// [ ] Nice graphics
// [ ] Let the player input using a text field
// [ ] Show what the player picked by highlighting the correct button
// [ ] Add more options (spock, ...)
// [ ] Add even more options (but avoid using 100 if statements)
// [ ] Add complex rules

(() => {

    let playerSelection = "";
    let result = "";
    let playerScore = "";
    let computerScore = "";

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

    //score appears after pressing buttons
    let score = document.getElementById("score");
    let scoreboard = document.getElementById("scoreboard");

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
        console.log("computerSelection", computerSelection);
        checkWinner();
        //setup a function to compare winners and return result

        console.log(checkWinner);
        if (checkWinner() === "player") {
            result += " wins!";
            playerScore++; //update score
        } else if (checkWinner() === "computer") {
            result += " wins!";
            computerScore++;
        } else {
            result = "It's a draw!"
        }

        //output score into div score and scoreboard
        score.innerHTML = "Player: [ " + computerScore + " ] Computer: [ " + computerScore + " ]";

        //output player and computer's selections
        scoreboard.innerHTML = "Player: [ " + playerSelection + " ] Computer: [ " + computerSelection + " ]"
    }

    //Determine the winner
    function checkWinner(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "draw!"

        } else if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                return "player"
            } else if (computerSelection === "paper") {
                return "computer";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                return "player!"
            } else if (computerSelection === "rock") {
                return "player";
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                return "player!"
            } else if (computerSelection === "rock") {
                return "computer";
            }
            console.log(checkWinner)
        }
    }
})
();

/*//input textfield
let userInput = document.getElementById("input").innerText

function getUserInput() {

    //cover rock and Rock
    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        return prompt("Error!\nPlease use only 'rock, paper or scissors'");
    }
    //console.log(getUserInput("test"))
}*/

/*reset bottom
document.getElementById("reset").reset();*/

/* original code, where I got stuck

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
