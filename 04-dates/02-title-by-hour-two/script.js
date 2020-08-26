/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//   before 17.30h: Hello
//   after 17.30h: Good evening
// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
// Example https://www.w3schools.com/jsref/jsref_gethours.asp
// Example && https://sabe.io/classes/javascript/logic-conditionals

(function() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var message;
    if (hours <= 17 && minutes <= 30)
        message = "Hello there!";
    else
        message = "Good evening! It's after 17.30 ... time to relax!";

    document.getElementById("target").innerHTML = message
})
();
