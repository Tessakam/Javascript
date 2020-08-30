/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
// example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

(function () {
        var currentDate = new Date();
        var dayofweek = currentDate.getDate();
        var day = currentDate.getDate();
        var month = currentDate.getMonth();
        var year = currentDate.getFullYear();
        var hour = currentDate.getHours();
        var minutes = currentDate.getMinutes();

        const event = new Date(currentDate);
        const options = {dayofweek: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric'};
        console.log(event.toDateString(('BE-ENG', options)));

        document.getElementById("target").innerHTML = ("What day is it today?\n" + event.toDateString() + ", " + hour + "h" + minutes + ".");
    }
)
();
