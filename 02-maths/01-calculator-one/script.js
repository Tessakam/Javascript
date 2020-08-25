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
        input()
        alert(numberone + numbertwo);
    });

    document.getElementById("substraction").addEventListener("click", function () {
        input()
        alert(numberone - numbertwo);
    });

    document.getElementById("multiplication").addEventListener("click", function () {
        input()
        alert(numberone * numbertwo);
    });

    document.getElementById("division").addEventListener("click", function () {
        input()
        alert(numberone / numbertwo);
    });

    function input(){
        numberone = parseInt(document.getElementById("op-one").value);
        numbertwo = parseInt(document.getElementById("op-two").value);
    }
})();
