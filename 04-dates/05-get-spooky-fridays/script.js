/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString


(function () {

    run.addEventListener('click', function () {

        let year = document.getElementById("year").value;

        for (i = 0; i < 12; i++) {
            let date = new Date(year, i, 13);
            if (date.getDay () === 5) ; // ma tem vrijdag
            {
                console.log(date.getMonth);
                alert (date.toLocaleString('default', {month: 'long'}))
            }
        }
    })
})
();

