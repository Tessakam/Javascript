/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// Example: https://stackoverflow.com/questions/1484506/random-color-generator
(function randomcolor () {

    run.addEventListener('click', function () {
        document.body.style.background = document.getElementById("randomcolor").value;
    })

        function randomcolor() {
            var hex = Math.floor(Math.random()*256).toString(16);
            return ("0"+String(hex)).substr(-2);
    })
();
