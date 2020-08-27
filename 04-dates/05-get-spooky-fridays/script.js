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
    var year = 2020 ;
    //To do: modify - now only for 2020

    for (var month = 0; month < 12; month++) {
        var date = new Date(year, month, 13);
        if (date.getDay() === 5) ;
        {
            alert(date.toLocaleString('default', {month: 'long';}));
                }
    }
})
();

