/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let number = prompt("Please enter a number between 1 and 100, and check your console");
    var rem3 = number % 3
    var rem5 = number % 5
    if (0 <= number && number <= 100) {
        if (rem3 === 0 && rem5 === 0) {
            console.log(fizzbuzz);
        } else if (rem3 === 0) {
            console.log(buzz);
        } else if (rem5 === 0) {
            console.log(fizz);
        } else {
            console.log(number);
        }
    }
    else {alert ('Please refresh and enter a number between 0 and 100')
    }

})();
