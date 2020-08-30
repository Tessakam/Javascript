/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Example: https://stackoverflow.com/questions/13845437/from-1-to-100-print-ping-if-multiple-of-3-pong-if-multiple-of-5-or-else-p//
(function() {

    for (var x = 1; x <= 100; x++) {

        // The modulus operator (%) returns the division remainder.
        if ((x % 3 === 0) && (x % 5 === 0)) {
            console.log("fizzbuzz");

        } else if (x % 3 === 0) {
            console.log("fizz = multiple of 3");

        } else if (x % 5 === 0) {
            console.log("buzz = multiple of 5");

        } else {
            console.log(x);
        }
    }
})();
