/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {

       // to get the value of an input: document.getElementById("element-id").value
       // by splitting it with comma
        let values = document.getElementById("numbers").value;
        let splitvalues = values.split(", ");

        // On click to the button, get the numbers displayed in the input, and display them sorted in ascending order.
        document.getElementById("run").addEventListener("click", function () {

        splitvalues.sort ((a,b) => a - b);
        alert("Numbers displayed in ascending order: " + splitvalues);
    });
});

