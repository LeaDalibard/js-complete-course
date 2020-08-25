/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById("run").addEventListener("click", function () {
        var day = +document.getElementById("dob-day").value;
        var monthbd = +document.getElementById("dob-month").value;
        var year = +document.getElementById("dob-year").value;
        var today = new Date();
        var age = today.getFullYear()- year;
        var month = today.getMonth()-monthbd;
        if (month < 0 || (month === 0 && today.getDate() < day)) {
            age = age - 1;
        }
        alert( 'You are '+age+' years old.' );

    });

})();
