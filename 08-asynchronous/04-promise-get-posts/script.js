/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

(() => {
    // When you click on the button, call the getPosts function and
    document.getElementById("run").addEventListener("click",() => {

        new Promise ((resolve, reject) => {

            // It returns a Promise that will be resolved,
            resolve(window.lib.getPosts());

        }).then(result => {// after a short delay, with a list of articles.
            console.log(result)})

            .catch(error => { // reject
            console.log(error)})
        })
})();
