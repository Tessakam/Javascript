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
    let buttonThree = document.getElementById("part-tree")
    let buttonFour = document.getElementById("part-four")

    function plus() {

        //if you click on button 1, then + is replaced by 0
        let target = document.getElementById("target");
        target.innerHTML = "0" + buttonOne.innerHTML
    }

    buttonOne.addEventListener("click", function () { // tip from Felix: use if (value < buttonOne.dataset.max)

            value = buttonOne.innerHTML

            if (value < buttonOne.dataset.max) {
                value++;
                buttonOne.innerHTML = value;
            } else {
                buttonOne.innerHTML = buttonOne.dataset.min;
            }
            plus()
        }
    )
})();
