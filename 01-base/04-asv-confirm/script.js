/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var age = prompt("What is your age?");
    var gender = prompt("What is your gender?","Female, male or other");
    var town = prompt ("Where do you live?");
    answer = confirm ("Your are " + age + " years old, gender " + gender + " and live in " + town +".\nIs that correct?");

    if (answer === true) {
        alert ("Thank you for confirming");
    }
    while (answer === false) { // you can add 2th statement - not possible with if/else
        var age = prompt("What is your age?");
        var gender = prompt("What is your gender?","Female, male or other");
        var town = prompt ("Where do you live?");
        answer = confirm ("Your are " + age + " years old, gender " + gender + " and live in " + town +".\nIs that correct?");
        alert("Thank you for re-confirming")
    }
    })
();
