/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    run.addEventListener("click", deleteHeroe)

    function deleteHeroe(){
        var heroId=document.getElementById("hero-id").value
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(function (heroes) {
                heroes.forEach((heroe,index)=>{
                    if (heroe.id==heroId){heroes.splice(index,1)}
                })
                console.log(heroes)
            })
    }

})();

/*function deleteHeroe(){
        var heroId=document.getElementById("hero-id").value
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(function (heroes) {
                for (i=0; i<heroes.length; i++){
                    if (heroes[i].id==heroId){heroes.splice(i,1)}
                }
                console.log(heroes)
            })
    }
*/