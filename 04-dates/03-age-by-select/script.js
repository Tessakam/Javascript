/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Example https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

(function () {

    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var inputday = (document.getElementById('dob-day').value);
    var inputmonth = (document.getElementById('dob-month').value);
    var inputyear = (document.getElementById('dob-year').value); // parseInt(document...) not necessary?

    var age = year - inputyear;

    run.addEventListener('click', function () {
        alert("Your birthday is on " + inputday + "/" + inputmonth + "/" + inputyear + " ." + "\nCongratulations, you are " + age + " years young this year!"
        )
    })
})
();

