/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Example: https://stackoverflow.com/questions/36939562/how-to-count-the-number-of-correct-answers-using-javascript
// Example: https://stackoverflow.com/questions/6120931/how-to-count-certain-elements-in-array

(function () {

    let number = Math.floor(Math.random() * 100)+1;
    let attempts = [];

    // use do while function (tip from Felix and Kayalin)
    do {
        let question = prompt("Guess the number! \nTip: it's a number between 1 - 100");
        attempts.push(question);

        if (question < number) {
            alert("You guessed " + question + "\nToo bad, please try again! \nTip: the number is HIGHER");
            attempts++;
        } else if (question > number) {
            alert("You guessed " + question + "\nToo bad, please try again! \nTip: the number is LOWER");
            attempts++;
        }
    }
        while (number === question)
    alert("Congratulations! You guessed the number! You needed " + attempts.length + "guesses!");

    console.log(number, question)
    })
();






