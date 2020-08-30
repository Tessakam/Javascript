/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var cake = prompt("Hello, would you like some cake?\n(Answer with 'yes' or 'no')");

    if (cake === "yes") {
        alert("Congratulations!");
    }
    else { //No need to add "no" statement!
        alert("Too bad, more cake for me then!");
    }
})
();