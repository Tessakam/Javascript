/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

(function () {

    let i = 1
    let gallery = [
        "../../_shared/img/bell.svg",  //[0] niet vergeten om te nummeren, anders draait de carousel niet :)
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    document.getElementById("next").addEventListener("click", function () {
        document.querySelectorAll("img")[0].src = gallery[i]; // define source
        i++;

        if (i >= gallery.length) {
            i = 0;
        }
    })
})
();
