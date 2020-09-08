/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // When you click on the button, call the getPosts function and
    document.getElementById("run").addEventListener("click",() => {

        new Promise ((resolve) => { // reject is not necessary here

            // It returns a Promise that will be resolved,
            resolve(window.lib.getPosts());

        }).then(result => { // It must receive an article id as a parameter,

            result.forEach (post => {
            new Promise ((resolve) => { // and returns a Promise that will be resolved,
            resolve(window.lib.getComments(post.id))
            })});

        }).then(result2 => {// after a short delay, with the article's comments.
                console.log(result2)

        }).catch(error => { // reject
                console.log(error)})
        })
        })();
