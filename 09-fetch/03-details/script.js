/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    run.addEventListener("click", getHeroes)

    function getHeroes() {
        var heroId = document.getElementById("hero-id").value
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(heroes=>{
                heroes.forEach((heroe)=>{
                    if(heroe.id==heroId){
                        var tmpl = document.getElementById('tpl-hero').content.cloneNode(true);
                        tmpl.querySelector('.name').innerText = heroe.name;
                        tmpl.querySelector('.alter-ego').innerText = heroe.alterEgo;
                        tmpl.querySelector('.powers').innerText = heroe.abilities;
                        document.getElementById('target').appendChild(tmpl);
                    }
                })
            })
    }
})();

/*
function getHeroes() {
        var heroId = document.getElementById("hero-id").value
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(function (heroes) {
                for (var i = 0; i < heroes.length; i++){
                    if(heroes[i].id==heroId){
                        var tmpl = document.getElementById('tpl-hero').content.cloneNode(true);
                        tmpl.querySelector('.name').innerText = heroes[i].name;
                        tmpl.querySelector('.alter-ego').innerText = heroes[i].alterEgo;
                        tmpl.querySelector('.powers').innerText = heroes[i].abilities;
                        document.getElementById('target').appendChild(tmpl);
                    }
                }
            })
    }
 */