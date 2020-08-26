/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {
        const length = 10
        const randomArray = []
        for (let i = 0; i < length; i++) {
            randomArray.push(Math.floor(Math.random() * 101))
        }
        var x = document.getElementsByTagName("td");
        for (let i = 0; i < length; i++) {
            x[i].innerHTML = randomArray[i];
        }
        var min = Math.min(...randomArray)
        document.getElementById("min").innerHTML = min
        var max = Math.max(...randomArray)
        document.getElementById("max").innerHTML = max
        var sum = randomArray.reduce(function(a, b){
            return a + b;
        }, 0);
        document.getElementById("sum").innerHTML = sum
        const avg =randomArray.reduce(function(a,b){return(a+b)/ randomArray.length} , 0);
        document.getElementById("average").innerHTML = avg
    });

})();