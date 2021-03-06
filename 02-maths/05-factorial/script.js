/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value
    var input = parseInt(document.getElementById("number").value);

    document.getElementById("run").addEventListener("click", function () {

        function factorial(input) {
            var result = input;

            // If num = 0 OR num = 1, the factorial will return 1
            if (input === 0 || input === 1)
                return 1;

            // Create while loop
            while (input > 1) {
                input--; // decrementation by 1 at each iteration
                result *= input; // or result (x = x * y) num;
            }
            return result;
        }

        alert(factorial(input));
    });
})();
