// Rock paper scissors is a 2 player game.
// Rules: player chooses the most powerful item wins.

// The possible outcomes are:
// 1) Rock destroys scissors.
// 2) Scissors cut paper.
// 3) Paper covers rock.
// If there’s a tie, then the game ends in a draw.

// Structure:
// 1) Get users choice
// 2) Get computers choice
// 3) Compare the 2 choices and determine the winner
// 4) Start program and dispay results

// Requirements
// [x] Have three buttons that the player can press to change their pick
// [x] Have another button to let the computer pick one and show the winner
// [ ] Let the player know they won (no alert box)
// [x] Have a reset button

// Nice-to-have
// [x] Nice graphics
// [x] Let the player input using a text field
// [ ] Show what the player picked by highlighting the correct button
// [ ] Add more options (spock, ...)
// [ ] Add even more options (but avoid using 100 if statements)
// [ ] Add complex rules

(() => {
    //assign all buttons
    document.getElementById("rock")
    let myChoiceButton = document.getElementById('rock').innerHTML
    let myChoiceInput = document.getElementById('rock').innerHTML
    

    function getUserChoice(userInput) {

        //cover rock and Rock
        userInput = userInput.toLowerCase();

        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            return userInput;
        } else {
            return console.log("Error!\nPlease use only 'rock, paper or scissors'");
        }
    }
    //console.log(getUserChoice("test"))

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
    /*reset bottom
    document.getElementById("reset").reset();*/

})
();

