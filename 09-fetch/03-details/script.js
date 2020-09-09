/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {
        // When you click on the button, get the id from the form

        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(tmpl => showXmen(tmpl))
    })

    function showXmen(tmpl) {

        let inputID = document.querySelector("#hero-id").value;

        // Loop through each of the heroes and add them to the Xmen list.
        for (let i = 0; i < tmpl.length; i++) {
            let list = tmpl[i];
            let xmen = document.getElementById('tpl-hero').content.cloneNode(true);

            if (inputID == tmpl[i]) {
                xmen.querySelector('.name').innerText = list.name;
                xmen.querySelector('.alter-ego').innerText = list.alterEgo;
                xmen.querySelector('.powers').innerText = list.abilities;
                target.appendChild(xmen); // and display it in the tag whose id is "target"
                target.innerHTML = " ";
            }
        }
    }
})
();
