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
    let wawe=[];
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
    document.getElementById("target").innerHTML = wawe.join('');

})();
