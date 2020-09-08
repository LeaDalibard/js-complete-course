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
    let run = document.getElementById("run");

    run.addEventListener("click", getPosts)

    function getPosts() {
        let promisePost = Promise.resolve(window.lib.getPosts())
            promisePost.then(posts =>  {
                posts.forEach(post => {
                    let promiseComments = Promise.resolve(window.lib.getComments(post.id))
                    promiseComments.then(promiseComment=>{
                        post.comment=promiseComment;
                        console.log(post);

                    })
                })


            })

    }

})();
/*faireQqc()
.then(result => faireAutreChose(result))
.then(newResult => faireUnTroisiemeTruc(newResult))
.then(finalResult => {
  console.log('Résultat final : ' + finalResult);
})

*/
