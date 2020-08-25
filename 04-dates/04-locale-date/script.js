/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var d = new Date();
    var dy =d.getDay();
    switch (dy) {
        case 1:
            var day = 'monday';
            break;
        case 2:
            var day = 'tuesday';
            break;
        case 3:
            var day = 'wednesday';
            break;
        case 4:
            var day = 'thursday';
            break;
        case 5:
            var day = 'friday';
            break;
        case 6:
            var day = 'saturday';
            break;
        case 7:
            var day = 'sunday';
            break;
    }
    switch (d.getMonth()) {
        case 0:
            var month = 'january';
            break;
        case 1:
            var month = 'february';
            break;
        case 2:
            var month = 'mart';
            break;
        case 3:
            var month = 'april';
            break;
        case 4:
            var month = 'may';
            break;
        case 5:
            var month = 'june';
            break;
        case 6:
            var month = 'july';
            break;
        case 7:
            var month = 'august';
            break;
        case 8:
            var month = 'september';
            break;
        case 9:
            var month = 'october';
            break;
        case 10:
            var month = 'november';
            break;
        case 11:
            var month = 'december';
            break;
    }
    var year=d.getFullYear();
    var date=d.getDate();
    var h=d.getHours();
    var m=d.getMinutes();

    document.getElementById("target").innerHTML = 'Today is '+ day+' '+ date +' '+month +' '+ year + '. It is '+ h +'h'+ m +'.';


})();



