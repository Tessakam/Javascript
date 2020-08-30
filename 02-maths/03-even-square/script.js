/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// display the square numbers between 1 and 21
(function () {
    document.getElementById("run").addEventListener("click", function () {
        for (let x = 1; x * x <= 21; x++) { // als je x*x niet aanvult, gaat de vierkantswortel verder dan 21
            alert(x * x)
        }
    })
})
();

/* Original Code =  list of all square results until 21*21

    document.getElementById("run").addEventListener("click", function() {
        var msg = "";
        var sum = 0;

        for (var x = 1; x <= 21; x++) {
            var square = x * x;
            var msg  = msg + square + "\n";
        }
        alert(msg);
    });
})();
 */