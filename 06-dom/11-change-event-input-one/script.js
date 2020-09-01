/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function password() {

        let input = document.getElementById("pass-one");
        input.maxLength = 10;

        let span = document.getElementById("pass-one").value.length;
         document.getElementById("counter").innerHTML = span + '/10';
        //result.innerHTML = input.value
    }

    document.getElementById("pass-one").addEventListener("onkeypress", password)
    //onkeypress, otherwise nothing happens
    //console.log("Maximum allowed characters in the password is 10.")

})();


