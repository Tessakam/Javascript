/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {

    document.getElementById("addition").addEventListener("click", function () {
        var x = document.getElementById("op-one").value;
        var y = document.getElementById("op-two").value;
        var addition = parseInt("op-one") + parseInt("op-two");
        alert(addition);
    });

    document.getElementById("substraction").addEventListener("click", function () {
        var x = document.getElementById("op-one").value;
        var y = document.getElementById("op-two").value;
        var substraction = parseInt("op-one") - parseInt("op-two");
        alert(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function () {
        var x = document.getElementById("op-one").value;
        var y = document.getElementById("op-two").value;
        var multiplication = parseInt("op-one") * parseInt("op-two");
        alert(multiplication);
    });

    document.getElementById("division").addEventListener("click", function () {
        var x = document.getElementById("op-one").value;
        var y = document.getElementById("op-two").value;
        var division = parseInt("op-one") / parseInt("op-two");
        alert(division);
    });

})();
