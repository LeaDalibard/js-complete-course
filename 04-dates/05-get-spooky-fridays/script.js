/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {

    document.getElementById("run").addEventListener("click", function () {
        var d = new Date();
        var fridayMonth = [];
        var year = +document.getElementById("year").value;
        var month;
        for (month = 0; month < 12; month++) {
            d.setFullYear(year, month, 13);
            if (d.getDay() == 5) {
                fridayMonth.push(month);
            }
        }
        alert (fridayMonth[0])
    });

})();