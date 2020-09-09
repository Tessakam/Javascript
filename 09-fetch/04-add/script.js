/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", newHeroes)
    // When you click on the button, retrieve the values of the form and create the new hero in the API.

    function newHeroes(input) {
        let name = document.querySelectorAll("#hero-name").value
        let alterEgo = document.querySelectorAll("#hero-alter-ego").value
        let power = document.querySelectorAll("#hero-powers").value
        let addHero = input.length + 1;

        console.log(input)

        /*fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(input => newHeroes(input))
            */
    }
})
();

