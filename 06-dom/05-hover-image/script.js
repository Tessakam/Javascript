/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//1. when hovering over the image,
//2. change its source attribute to the value specified in the "data-hover" attribute

(function () {

    let image = document.getElementsByTagName("img");
    let hover = document.getElementsByTagName("img")[0].getAttribute("data-hover");
    let source = image[0].src; // niet vergeten om source te definen !

    image[0].addEventListener("mouseover", function () {
            image[0].setAttribute("src", hover);
        }
    )
    image[0].addEventListener("mouseout", function () {
            image[0].setAttribute("src", source);
        }
    );
})
();
