/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//   before 18h: Hello
//   after 18h: Good evening
//Example: https://www.w3schools.com/jsref/jsref_gethours.asp
// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

(function() {
    var date = new Date();
    var hours = date.getHours();

    var message;
    if (hours < 18)
        message = "Hello there!";
    else
        message = "Good evening! It's after 18h, time to relax!";
    document.getElementById("target").innerHTML = message
    })
();
