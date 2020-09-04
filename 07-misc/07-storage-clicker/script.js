/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");
    let increment = document.getElementById("increment");

    function counter() {

        if (typeof Storage === "error") {

        } else {
            if (localStorage.click) {
                localStorage.click = Number(localStorage.click) + 1;
            } else {
                localStorage.click = 1;
            }
            target.innerHTML = `Click ${localStorage.click}`;
        }
    }
    increment.addEventListener("click", counter);
})
();
