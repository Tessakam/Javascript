/* becode/javascript
*
* /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
*
* coded by leny@BeCode
* started at 09/05/2019
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, posts) => {
            if (error) {
                console.log(1);
            } else {
                console.log(null);
                posts.forEach(post => {
                    window.lib.getPosts(art.id, (error, table) => {
                        if (error) {
                            console.log(1);
                        } else {
                            console.log(null);
                            art.id = table;
                            console.log(table);
                        }
                    })
                })
            }
        })
    })
})
();
/*
Classical - review
document.getElementById("run").addEventListener("click", () => {
    function getPostsWithComments() {
        window.lib.getPosts(error, posts)
        if (error)
            console.log(error);
        else
            posts.forEach(post => {
                window.lib.getComments(post.id, function (error, comments) {
                    post.comment = comments;
                    console.log(post);
                })
            })
    }
})
})
();
/*
