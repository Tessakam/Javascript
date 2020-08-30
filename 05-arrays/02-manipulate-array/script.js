/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    run.addEventListener('click', function () {

        let fruits = [
            "pomme", //0
            "poire", //1
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise", //9
        ];

        fruits[0] = "banana" // add an element "banana" at the start of the array
        fruits[9] = "kiwi" // add an element "kiwi" at the end = replace cerise

       alert(fruits)
        //console.log(fruits)
    })
})
();
