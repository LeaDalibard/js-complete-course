/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    run.onclick = function () {
        var passOne = document.getElementById("pass-one").value;
        var passTwo = document.getElementById("pass-two").value;
        if (passOne !== passTwo) {
            var x = document.querySelectorAll("input");
            for (i = 0; i < x.length; i++) {
                x[i].classList.add("error");
            }
        }
    }

})();