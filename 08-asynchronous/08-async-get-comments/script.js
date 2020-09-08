/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    run = document.getElementById("run")
    run.addEventListener("click", getPosts)

        async function getPosts() {
            const posts = await window.lib.getPosts()
            posts.forEach(post => {
                async function comment() {
                    const comments = await window.lib.getComments(post.id)
                    post.comment= comments
                    console.log(post);
                }
                comment();

        })

    }


})();
