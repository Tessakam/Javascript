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

    // Using HTML templates - create a copy of the content
    let tmpl = document.getElementById('comment-template');
    document.body.appendChild(tmpl.content.cloneNode(true));
    //console.log(template)

    // Get a reference to the Xmen list in the main DOM.
    let commentsList = document.getElementById('comment');

    // Loop through each of the comments and add them to the comments list.
    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        var tmpl = document.getElementById('template').content.cloneNode(true);
        tmpl.querySelector('.comment-author').innerText = comment.author;
        tmpl.querySelector('.comment-body').innerText = comment.body;
        commentsList.appendChild(tmpl);

    document.getElementById("run").addEventListener("click", () => {

        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => console.log(data))
    })
    //document.getElementById("target").innerHTML = "heroes"
}})
();


