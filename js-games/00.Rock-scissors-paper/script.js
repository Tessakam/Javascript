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

    /*reset bottom
    document.getElementById("reset").reset();*/

    //you win: popup congrats
    $(document).ready(function () {
        $('.image-link').magnificPopup({type: 'image'});
    });

})
();

