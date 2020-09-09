/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Example: https://blog.teamtreehouse.com/creating-reusable-markup-with-the-html-template-element

// When you click on the button, use the fetch function,
// retrieve the list of X-Men and display it in the tag whose id is "target".
// Use the template tag to reproduce an html structure for each hero.
// The template tag already exists in the HTML structure, be sure to check the HTML code!


(() => {

    document.getElementById("run").addEventListener("click", () => {

        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(tmpl => showXmen (tmpl))
        console.log(showXmen)
    })

    function showXmen (tmpl) {

    // Loop through each of the heroes and add them to the Xmen list.
    for (let i = 0; i < tmpl.length; i++) {
        let list = tmpl[i];
        let xmen = document.getElementById('tpl-hero').content.cloneNode(true); //  retrieve the list of X-Men see HTML id template
        xmen.querySelector('.name').innerText = list.name;
        xmen.querySelector('.alter-ego').innerText = list.alterEgo; // !don't use alter-ego, see result
        xmen.querySelector('.powers').innerText = list.abilities;
        target.appendChild(xmen); // and display it in the tag whose id is "target"

}}})
();


