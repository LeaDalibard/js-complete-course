/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let x=Math.floor(Math.random()*101);
    let count=1;
    var guess = prompt("Please guess the number between 1 and 100");

    while (guess !=x) {
        count++;
    if (guess < x) {
        var guess = prompt("Higher!");
    }
    if (guess > x) {
        var guess = prompt("Lower!");
    }
    }

    alert("That's it! You needed "+count+" guesses.");




})();
