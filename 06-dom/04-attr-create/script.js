/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // 1. Get the value of the "data-image" attribute from the element with id "source".
    // 2. Create a new image element inside the target element that displays the image referred to by the attribute value.
    // 3. Then remove the original element.

    let newimage = document.createElement("img"); //2
    let source = document.getElementById("source").getAttribute("data-image"); //2
    newimage.src = source;

    let target = document.getElementById("target").appendChild(newimage);

    let element = document.getElementById("source").remove();

    console.log(newimage)


})
();
