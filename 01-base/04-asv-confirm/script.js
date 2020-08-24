/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var age = prompt("How old are you ?");
    var gender = prompt("What is your gender?");
    var town = prompt("In which town do you live ?");
    var verif = confirm("Your are "+ age +", your gender is "+ gender +", and you live in "+ town +". Please confirm.");
    while (verif == false) {
        var age = prompt("How old are you ?");
        var gender = prompt("What is your gender?");
        var town = prompt("In which town do you live ?");
        var verif = confirm("Your are "+ age +", your gender is "+ gender +", and you live in "+ town +". Please confirm.");
    }
})();
