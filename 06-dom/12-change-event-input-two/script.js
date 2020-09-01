/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Listen for changes in the input field and display "ok" in the validity span
// if the input is at least 8 characters long and contains at least two numbers.

(function () { //did the exercise again with Awet

    let input = document.getElementById("pass-one");
    let validity = document.getElementById("validity");
    let inputcounter = 0
    let numberscounter = 0

    input.addEventListener("keypress", function ($event) {

        if (isNaN($event.key)) { // .key see console.log // isNAN is not a number
            inputcounter++
        } else {
            numberscounter++
            inputcounter++
        }
        if (inputcounter >= 8 && numberscounter >= 2) {
            validity.innerHTML = "OK"
        }
    })
    console.log(typeof ($event))
    console.log(typeof ("abc"))
})
();
/* Original code

     let input = document.getElementById("pass-one").value;
     let validity = document.getElementById("validity).value;

     if(input.length >= 8 && input.match(/[0-9]{2}/)) {
        validity.innerHTML = "OK"
        }
        else {
        validity.innerHTML = "not OK"
        }
        document.getElementById("pass-one").addEventListener("onkeypress",password);
                */