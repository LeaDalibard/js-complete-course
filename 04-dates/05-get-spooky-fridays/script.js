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
        for (i=0; i<12; i++) {
            switch (fridayMonth[i]) {
                case 0:
                    fridayMonth[i] = 'january';
                    break;
                case 1:
                    fridayMonth[i] = 'february';
                    break;
                case 2:
                    fridayMonth[i] = 'march';
                    break;
                case 3:
                    fridayMonth[i] = 'april';
                    break;
                case 4:
                    fridayMonth[i] = 'may';
                    break;
                case 5:
                    fridayMonth[i] = 'june';
                    break;
                case 6:
                    fridayMonth[i] = 'july';
                    break;
                case 7:
                    fridayMonth[i] = 'august';
                    break;
                case 8:
                    fridayMonth[i] = 'september';
                    break;
                case 9:
                    fridayMonth[i] = 'october';
                    break;
                case 10:
                    fridayMonth[i] = 'november';
                    break;
                case 11:
                    fridayMonth[i] = 'december';
                    break;
            }
        }
        alert ('Months with a friday 13 : ' + fridayMonth );
    });

})();