/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {
    let target = document.getElementById("target");
    // Separate all the words to create the "wave effect"
    let characters = target.innerText.split(" "); // empty target to fill it with letters

        wave = []; // empty array for span , numbers of letters)
    for (let i = 0; i < characters.length; i++) {
        let span = '<span>' + characters[i] + '</span>';
        wave.push(span)
    }

    // using at least 5 different font sizes.
    let fontsize = [1, 3, 5, 2, 4];
    document.getElementById("target").innerHTML = wave;

    characters = document.getElementsByTagName("span");
    for (let i = 0; i < characters.length; i++) {
        let x = i + 1;
        characters[i].style.fontSize = fontsize[i % fontsize.length] + "1px";
    }
})
();
