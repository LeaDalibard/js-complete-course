/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target");
    var table = document.createElement("TABLE");
    table.setAttribute("id", "myTable");
    target.appendChild(table);

    for (var i = 0; i <= 10; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j <= 10; j++){
        var cell = document.createElement("td");
        var cellText = document.createTextNode(i+"x"+j+"="+ i*j);
        cell.appendChild(cellText);
        row.appendChild(cell);}
        table.appendChild(row);
    }

})();
