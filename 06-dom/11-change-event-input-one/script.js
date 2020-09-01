/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () { // did the exercise again with Awet

    let x = 1;
    let input = document.getElementById("pass-one");
    let counter = document.getElementById("counter");
    input.addEventListener("keypress",  () => { // => same as function // arrow function

        if (x < 11){
        counter.innerHTML = `${x}/10` //add up the input in counter - using text template ``
        x++}

        else {
        input.setAttribute("maxlength", "10");
    }
        console.log("I want to display" + x) // using text template `` is the same but shorter
})
})

    ();

    /*  original code

    function password(event) {

        let input = document.getElementById("pass-one");
        input.maxLength = 10;

        let span = document.getElementById("pass-one").value.length;
        document.getElementById("counter").innerHTML = span + '/10';
        //result.innerHTML = input.value
    }

    document.getElementById("pass-one").addEventListener("onkeypress",password);
    //onkeypress, otherwise nothing happens
    //console.log("Maximum allowed characters in the password is 10.")
*/
