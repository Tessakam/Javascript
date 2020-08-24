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
    var Age = prompt("How old are you?");
    var Gender = prompt("What is you gender?", "Male or Female");
    var Town = prompt("Where do you live");
    result = confirm("You are " + Age + " years old - " + Gender + " and lives in " + Town);
    if (result == true) {
        alert("Thank you for confirming!");
    }
    while (result == false) {
        var Age = prompt("How old are you?");
        var Gender = prompt("What is you gender?", "Male or Female");
        var Town = prompt("Where do you live");
        result = confirm("Please reconfirm: \n you are " + Age + " years old - " + Gender + " and lives in " + Town);
        if (result == true) {
            alert("Thank you for your confirming!");
        }
    }

})
();
