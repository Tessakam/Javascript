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

      var performOperation = function (operation) {
          var numberone = document.getElementById("op-one").value;
          var numbertwo = document.getElementById("op-two").value;

console.log(operation);

    switch (operation) {

        case "addition":
            var addition = parseInt(numberone) + parseInt(numbertwo);
            alert(addition);
            break;
        case "substraction":
            var substraction = parseInt(numberone) - parseInt(numbertwo);
            alert(substraction);
            break;
        case "multiplication":
            var multiplication = parseInt(numberone) * parseInt(numbertwo);
            alert(multiplication);
            break;
        case "division":
            var division = parseInt(numberone) / parseInt(numbertwo);
            alert(division);
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
