/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Parameter 1 = error // no error = null
// Parameter 2 = article

(() => {

    //At the click of the button, call the window.lib.getPosts() function
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, article) => { // getPosts = timeout delay (parameter 1, parameter 2)

            //callback parameter
            if (error) {
                console.log(1); // the first contains an error, if there is one,
            } else {
                // and display the items obtained in the console
                console.log(null); // ..., otherwise null),
                console.log(article);
            }
        })
    })
    })
();



