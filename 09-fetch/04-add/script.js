/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    run.addEventListener("click", getHeroes)
    function getHeroes() {
        var Hname=document.getElementById("hero-name").value
        var HalterEgo=document.getElementById("hero-alter-ego").value
        var Hpower=document.getElementById("hero-powers").value
        var Habilities = Hpower.split(",");

        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(function (heroes) {
                if (Hname ==""||HalterEgo== ""||Hpower== ""){
                    alert("Please fill all the fields")
                }
                else{
                    var newHeroe={id:heroes.length, name:Hname,alterEgo:HalterEgo, abilities:Habilities}
                    heroes.push(newHeroe);
                    console.log(heroes)
                }

            })
    }

})();
