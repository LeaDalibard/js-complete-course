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
    let j = 1;
    let n = 1;
    let i = 0;
    let font = [];
    for (let i = 0; i < txt.length; i++) {
        var y = txt.charAt(i).fontsize(j);
        font.push(j);
        document.getElementById("target").innerHTML += y;
        if (i % 6 === 0) {
            n++;
        }
        ;
        if (n % 2 === 0) {
            j++
        } else {
            j--
        }
    }

    var txtFont = document.getElementById("target").textContent;


    function frame() {
        var newTxt = txtFont;
        if (i >= txt.length) {
            var partOne="";
            var partTwo="";
            i = 0;
            var newTxt = txtFont;
            var z = newTxt.charAt(i).fontsize(font[i + 1]);
            for (l = 1; l < i; l++) {
                partOne=partOne+newTxt.charAt(l).fontsize(font[l]);
            }
            for (l = i + 1; l < txt.length; l++) {
                partTwo =partTwo+ newTxt.charAt(l).fontsize(font[l]);
            }
            document.getElementById("target").innerHTML = partOne + z + partTwo;
            newTxt = document.getElementById("target").textContent;
        } else {
            var z = newTxt.charAt(i).fontsize(font[i + 1]);
            for (l = 1; l < i; l++) {
                partOne =partOne+newTxt.charAt(l).fontsize(font[l]);
            }
            for (l = i + 1; l < txt.length; l++) {
               partTwo =partTwo+newTxt.charAt(l).fontsize(font[l]);
            }
            document.getElementById("target").innerHTML = partOne + z + partTwo;
            newTxt = document.getElementById("target").textContent;
            i++;
        }
    }

    var id = setInterval(frame, 300);

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

