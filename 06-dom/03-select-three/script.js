/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Example https://stackoverflow.com/questions/7184562/how-to-get-elements-with-multiple-classes
// Example https://stackoverflow.com/questions/21813122/changing-content-of-class-using-javascript/21813259

(function () {
    let message = document.querySelectorAll(".target"); // add . for multiple classes!
    for (i = 0; i < message.length; i++) {
        message[i].innerHTML = "owned";
    }
})
();
