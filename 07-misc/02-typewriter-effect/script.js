/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Exmple https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter

(function () {

    //select target and display new text
    let target = document.getElementById("target");
    let text = target.innerHTML = "Let's see if something is happening in the typewriter ..............";

    console.log(text)

    // each letter appear one after the other
    let i = 0;

    // Use a random delay between each letter appearing
    let speed = Math.floor(Math.random() * 100);

    function typeWriter(){
    if (i < text.length) {
        target.innerHTML += text.charAt[i];
        i++;
        setTimeout(typeWriter, speed);
    }}
    typeWriter(); //otherwise nothings going to happen :)
})
();
// The charAt() method returns the character at the specified index in a string. The index of the first character is 0, the second character is 1, and so on.
