/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Example: https://javascript.info/async-await

(() => {

    let promise = new Promise((resolve) => {
        console.log(resolve);

        document.getElementById("run").addEventListener("click", () => {
            async function async() {
                let result = await (window.lib.getPosts());
                console.log(result)
            }
        })
    })
})();
