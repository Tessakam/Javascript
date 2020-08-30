/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
        // to get the value of an input: document.getElementById("element-id").value

        let performOperation = function (operation) {
            let x = document.getElementById("op-one").value;
            let y = document.getElementById("op-two").value;


            switch (operation) {

                case "addition":
                    let addition = +x + +y;
                    alert("Your result is " + addition)
                    ;
                    break;
                case "substraction":
                    let substraction = x - y;
                    alert("Your result is " + substraction)
                    ;
                    break;
                case "multiplication":
                    let multiplication = x * y;
                    alert("Your result is " + multiplication)
                    ;
                    break;
                case "division":
                    var division = x / y;
                    alert("Your result is " + division)
                    ;
            }
        };

        Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
            $btn.addEventListener("click", function () {
                performOperation($btn.id);
            });
        });
    }
)
();
