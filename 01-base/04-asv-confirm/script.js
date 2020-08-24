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
        var Gender = prompt("What is your gender?", "Male or Female");
        var Town = prompt("Where do you live?");

    if (Confirm ("You are " + Age + "years old" + Gender + "and lives in" + Town) == true) {
        alert("Thank you for confirming");
    }
    else if {
    (Confirm == false)
        alert("Please confirm")
    }
)