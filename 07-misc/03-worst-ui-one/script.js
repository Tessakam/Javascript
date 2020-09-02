/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// use the value of the slider
// show the phone number (with a leading 0)
//example: https://stackoverflow.com/questions/13896685/html5-slider-with-onchange-function
(function() {

    let input = document.getElementById("slider");
    target = document.getElementById("target");

    target.innerHTML = `${input.value}` //using text template (similar as console.log) tip from Awet

    input.addEventListener("input", function(){
        target.innerHTML = `${input.value}`;},0);
    })
();
