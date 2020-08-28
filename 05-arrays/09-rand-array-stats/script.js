/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Example random: randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
// Example sort:  newarray.sort((a, b) => a - b);
// Example sum: https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
// Example avg: https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js

(function () {

    run.addEventListener('click', function () { // when you click the button

        var table = document.querySelectorAll('td') // select whole table > Tip from Kayalin: instead of document.getElementById use querySelectorAll

        var numbers = [];
        for (i = 0; i < 10; i++) {
            var random = Math.floor(Math.random() * 100); // display between 1 and 100
            numbers.push(random);
            console.log(table, numbers); // display elements in table, between 1-100
        }

        for (i = 0; i < table.length; i++) { // refer to table > Tip from Kayalin: use innerText
            table[i].innerText = numbers[i];
        }

        numbers.sort((a, b) => a - b); // sort numbers for definition list
        var minimum = document.getElementById("min").innerHTML = numbers[0];
        var maximum = document.getElementById("max").innerHTML = numbers[9];

        var arraysum = numbers.reduce(function (a, b) {
            return a + b;
        }, 0);
        document.getElementById("sum").innerHTML = arraysum

        var arrayaverage = numbers.reduce(function (a, b) {
            return a + b;
        }, 0) / numbers.length;
        document.getElementById("average").innerHTML = arrayaverage
    })
})
();

