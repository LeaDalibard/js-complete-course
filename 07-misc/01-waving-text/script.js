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
    for (let i = 0; i < txt.length; i++) {
        var y = txt.charAt(i).fontsize(j);
        document.getElementById("target").innerHTML += y;
        if (i % 7 === 0) {
            n++;
        }
        if (n % 2 === 0) {
            j++
        } else {
            j--
        }
    }


    /*let wawe=[];
     var font=1;
     var str = Array.from("Wouhouuuuu waaaawe");
     for (let i = 0; i <= 5; i++) {
         var y =str[i].fontsize(font);
         font++;
         wawe.push(y);
     }
     for (let i = 6; i <= 11; i++) {
         var y =str[i].fontsize(font);
         font--;
         wawe.push(y);
     }
     for (let i = 12; i <= 17; i++) {
         var y =str[i].fontsize(font);
         font--;
         wawe.push(y);
     }
     document.getElementById("target").innerHTML = wawe.join('');*/

})();
