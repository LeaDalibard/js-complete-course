/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var txt = document.getElementById("target").textContent;
    document.getElementById("target").innerHTML = "";
    let j = 1;
    let n = 1;
    var i = 0;
    var speed = 50;

    function wave() {
        if (i < txt.length) {
            var y = txt.charAt(i).fontsize(j);
            document.getElementById("target").innerHTML += y;
            i++;
            if (i % 7 === 0) {
                n++;
            }
            if (n % 2 === 0) {
                j++
            } else {
                j--
            }
            setTimeout(typeWriter, speed);
    }

    wave();


    /* document.getElementById("target").substr(10).animate([
         // keyframes
         { transform: 'translateY(0px)' },
         { transform: 'translateY(100px)' }
     ], {
         // timing options
         duration: 1000,
         iterations: "10"
     });*/

    /* var startTime = new Date().getTime();
     var target = document.getElementById("target");
     function run() {
         var letter=document.getElementById("target").textContent.charAt(i)
         for (let i = 0; i < txt.length; i++) {
             letter.classList.add("letter");
             var posx = (pos + 50 * index) % width;
             var posy = 200 + Math.sin(posx / 50) * 50;
             $('letter').css('left', posx + 'px');
             $('letter').css('top', posy + 'px');
         }
     }*/

    /*let wawe=[];
     var font=1;
     var str = Array.from("Wouhouuuuu waaaawe");
     for (let i = 0; i <= 5; i++) {
         var y =str[i].fontsize(font);
         font++;
         wawe.push(y);
     }
     for (let i = 6; i <= 11; i++) {
         var y =str[i].fontsize(font);
         font--;
         wawe.push(y);
     }
     for (let i = 12; i <= 17; i++) {
         var y =str[i].fontsize(font);
         font--;
         wawe.push(y);
     }
     document.getElementById("target").innerHTML = wawe.join('');*/

})();
