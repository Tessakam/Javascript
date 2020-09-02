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
    // Display some text inside the target element = replace text
    let target = document.getElementById("target");
    // Separate all the words
    let characters = target.innerText.split(" ");

    //create loop for characters by using span
    wave = [];
    for (let i = 0; i < characters.length; i++) {
        let span = '<span>' + characters[i] + '</span>';
        wave.push(span)
    }

    // using at least 5 different font sizes.
    let fontsize = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    document.getElementById("target").innerHTML = wave;

    characters = document.getElementsByTagName("span");
    for (let i = 0; i < characters.length; i++) {
        let x = i + 1;
        characters[x].style.fontSize = fontsize[i % fontsize.length] + "1px";
    }
})
();
//let sentence = characters.join(" ");