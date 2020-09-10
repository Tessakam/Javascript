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


(() => {
    let getUserChoice(userInput) => {

        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            return userInput;
        } else {
            console.log("Error!\nPlease use only 'rock, paper or scissors'");
        }
    }
    userInput()
})
();

/*cover rock and Rock
userInput = userInput.toLowerCase();*/