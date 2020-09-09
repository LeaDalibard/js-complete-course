/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    run.addEventListener("click", getHeroes)

    function getHeroes() {
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(heroes=> {heroes.forEach(heroe=>{
                var tmpl = document.getElementById('tpl-hero').content.cloneNode(true);
                tmpl.querySelector('.name').innerText = heroe.name;
                tmpl.querySelector('.alter-ego').innerText = heroe.alterEgo;
                tmpl.querySelector('.powers').innerText = heroe.abilities;
                document.getElementById('target').appendChild(tmpl);
            })})
    }

})();

/*
  function getHeroes() {
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(function (heroes) {
                for (var i = 0; i < heroes.length; i++) {
                    var heroe = heroes[i];
                    var tmpl = document.getElementById('tpl-hero').content.cloneNode(true);
                    tmpl.querySelector('.name').innerText = heroe.name;
                    tmpl.querySelector('.alter-ego').innerText = heroe.alterEgo;
                    tmpl.querySelector('.powers').innerText = heroe.abilities;
                    document.getElementById('target').appendChild(tmpl);
                }

            })
    }
 */