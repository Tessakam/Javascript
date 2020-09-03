/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// Minimum and maximum values are as specified on each button by data-min and data-max attributes.
// Display the number (with a leading 0) in the target paragraph
// Sicco tips  button / event listener / ++ / data-min and max / dataset / if / > /=>

(function () {

    let buttonOne = document.getElementById("part-one")
    let buttonTwo = document.getElementById("part-two")
    let buttonThree = document.getElementById("part-three")
    let buttonFour = document.getElementById("part-four")

    function plus() {

        //if you click on button 1, then + is replaced by 0
        let target = document.getElementById("target");
        target.innerHTML = "0" + buttonOne.innerHTML + (" ") + buttonTwo.innerHTML + (" ") + buttonThree.innerHTML + (" ") + buttonFour.innerHTML
    }

    buttonOne.addEventListener("click", function () { // tip from Felix: use if (value < buttonOne.dataset.max)
        value = buttonOne.innerHTML

        if (value < buttonOne.dataset.max) {
            value++;
            buttonOne.innerHTML = value;
        } else {
            buttonOne.innerHTML = buttonOne.dataset.min; //jumps from 499 back to 460
        }
        plus() // invoking function (reuse)
    })

    buttonTwo.addEventListener("click", function () {
        value = buttonTwo.innerHTML

        if (value < buttonTwo.dataset.max) {
            value++;
            if (value < 10) { //add zero in front of it, otherwise phonenumber isn't complete anymore
                value = "0" + value
            }
            buttonTwo.innerHTML = value;
        } else {
            buttonTwo.innerHTML = buttonTwo.dataset.min;
        }
        plus()
    })

    buttonThree.addEventListener("click", function () {
        value = buttonThree.innerHTML

        if (value < buttonThree.dataset.max) {
            value++;
            if (value < 10) {
                value = "0" + value
            }
            buttonThree.innerHTML = value;
        } else {
            buttonThree.innerHTML = buttonThree.dataset.min;
        }
        plus()
    })

    buttonFour.addEventListener("click", function () {
        value = buttonFour.innerHTML

        if (value < buttonFour.dataset.max) {
            value++;
            if (value < 10) {
                value = "0" + value
            }
            buttonFour.innerHTML = value;
        } else {
            buttonFour.innerHTML = buttonFour.dataset.min;
        }
        plus()
    })
})
();
