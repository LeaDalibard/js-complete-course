/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("pass-one").onchange = function () {
        var pass = document.getElementById("pass-one").value
        var passw = /^(?=.*\d){2,}.{8,}$/;
        if (pass.match(passw)) {
            validity.innerHTML = "Ok"
        }
    }

})();

//[0-9]{2,}.{8,}$/;
