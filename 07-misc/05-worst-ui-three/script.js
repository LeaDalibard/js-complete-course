/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var partOne = 460;
    var partTwo = 0;
    var partThree = 0;
    var partFour = 0;
    var a = "0" + partTwo;
    var b = "0" + partThree;
    var c = "0" + partFour;
    target.innerHTML = "0" + partOne + a + b + c;

    function random(x, y) {
        x = Math.floor(Math.random() * 100);
        if (x < 10) {
           y = "0" + x;
        } else {
           y = x;
        }
    }

    document.getElementById('fix-part-one').onclick = function () {
        partOne = 460 + Math.floor(Math.random() * 40);
        document.getElementById("part-one").value = partOne;
        target.innerHTML = "0" + partOne + a + b + c;
    }

    document.getElementById('fix-part-two').onclick = function () {
        partTwo=Math.floor(Math.random() * 100);
        document.getElementById("part-two").value= partTwo;
        var a = (partTwo < 10) ? "0" + partTwo : partTwo ;
        target.innerHTML = "0" + partOne + a + b + c;
    }


    document.getElementById('fix-part-three').onclick = function () {
        partThree = Math.floor(Math.random() * 100);
        document.getElementById("part-three").value = partThree;
        var b = (partThree < 10) ? "0" + partThree : partThree ;
        target.innerHTML = "0" + partOne + a + b + c;
    }

    document.getElementById('fix-part-four').onclick = function () {
        partFour = Math.floor(Math.random() * 100);
        document.getElementById("part-four").value = partFour;
        var c = (partFour < 10) ? "0" + partFour : partFour ;
        target.innerHTML = "0" + partOne + a + b + c;
    }

})();

/*
(function() {

    var partOne = 460;
    var partTwo = 0;
    var partThree = 0;
    var partFour =0;
    var a = "0" + partTwo;
    var b = "0" + partThree;
    var c = "0" + partFour;
    target.innerHTML = "0" + partOne + a + b + c;

    document.getElementById('fix-part-one').onclick = function () {
        partOne=460+Math.floor(Math.random() * 40);
        document.getElementById("part-one").value=partOne;
        target.innerHTML = "0" + partOne + a + b + c;
    }
    document.getElementById('fix-part-two').onclick = function () {
        partTwo=Math.floor(Math.random() * 100);
        document.getElementById("part-two").value= partTwo;
        if (partTwo < 10) {
            a = "0" + partTwo
        } else {
            a = partTwo
        }
        ;
        target.innerHTML = "0" + partOne + a + b + c;
    }
    document.getElementById('fix-part-three').onclick = function () {
        partThree=Math.floor(Math.random() * 100);
        document.getElementById("part-three").value=  partThree;
        if (partThree < 10) {
            b = "0" + partThree
        } else {
            b = partThree
        }
        ;
        target.innerHTML = "0" + partOne + a + b + c;
    }
    document.getElementById('fix-part-four').onclick = function () {
        partFour=Math.floor(Math.random() * 100);
        document.getElementById("part-four").value=  partFour;
        if (partFour < 10) {
            c = "0" + partFour
        } else {
            c = partFour
        }
        ;
        target.innerHTML = "0" + partOne + a + b + c;
    }

})();
 */