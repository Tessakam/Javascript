/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let buttonOne = document.getElementById("fix-part-one");
    let valueOne = document.getElementById("part-one");

    let buttonTwo = document.getElementById("fix-part-two");
    let valueTwo = document.getElementById("part-two");

    let buttonThree = document.getElementById("fix-part-three");
    let valueThree = document.getElementById("part-three");

    let buttonFour = document.getElementById("fix-part-four");
    let valueFour = document.getElementById("part-four");

    value = ''
    function plus() {
        //if you click on slot 1, then + is replaced by 0
        let target = document.getElementById("target");
        target.innerHTML = "0" + valueOne.value + valueTwo.value + valueThree.value + valueFour.value;
    }

    buttonOne.addEventListener("click", function () {
        let slotOne = (Math.floor(Math.random() * 39) + parseInt(valueOne.dataset.min)); // using parsInt - tip from Felix // 499-460 = 39
        valueOne.value = slotOne // tip from Felix : specify your value!
        plus()
    })

    buttonTwo.addEventListener("click", function () {
        let slotTwo = Math.floor(Math.random() * parseInt(valueTwo.dataset.max));
        valueTwo.value = slotTwo
        plus()
    })

    buttonThree.addEventListener("click", function () {
        let slotThree = Math.floor(Math.random() * parseInt(valueThree.dataset.max));
        valueThree.value = slotThree
        plus()
    })

    buttonFour.addEventListener("click", function () {
        let slotFour = Math.floor(Math.random() * parseInt(valueFour.dataset.max));
        valueFour.value = slotFour
        plus()
    })
})
();
