/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var txt = document.getElementById('target').textContent;
    document.getElementById("target").innerHTML = "";
    var i = 0;
    var speed=50;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            speed=Math.floor(Math.random() * 500);
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

})();
/*   function typeWriter() {
    for (var i = 0; i < txt.length; i++) {
        setTimeout(function () {
            document.getElementById("target").innerHTML += txt.charAt(i);
        }, 3000);
    }
}
typeWriter();

var speed = 50*/