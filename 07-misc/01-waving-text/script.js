/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var txt = document.getElementById("target").textContent;
    document.getElementById("target").innerHTML = "";
        var j = 1;
        var n = 1;
        for (let i = 0; i < txt.length; i++) {
            var id = setInterval(frame, 1000);
            function frame() {
                if (i==txt.length) {
                    clearInterval(id);
                } else {
                var y = txt.charAt(i).fontsize(j);
                document.getElementById("target").innerHTML += y}
                if (i % 7 === 0) {
                    n++;
                }
                if (n % 2 === 0) {
                    j++
                } else {
                    j--
                }
            }
        }
})();

/* document.getElementById("target").substr(10).animate([
     // keyframes
     { transform: 'translateY(0px)' },
     { transform: 'translateY(100px)' }
 ], {
     // timing options
     duration: 1000,
     iterations: "10"
 });*/

/*
 var txt = document.getElementById("target").textContent;
    document.getElementById("target").innerHTML = "";
    let j = 1;
    let n = 1;
    let i = 0;
    for (let i = 0;i < txt.length; i++) {
        var y = txt.charAt(i).fontsize(j);
        document.getElementById("target").innerHTML += y;
        if (i % 7 === 0) {
            n++;
        };
        if (n % 2 === 0) {
            j++
        } else {
            j--
        }
    }
 */

