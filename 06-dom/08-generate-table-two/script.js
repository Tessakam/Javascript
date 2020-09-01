/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Example: https://stackoverflow.com/questions/41465569/multiplication-table-in-javascript

(function () {
    function createTable() { // part 1

        let target = document.getElementById("target");
        let table = document.createElement("table");// create table
        let totalrows = 11 // x rows
        let totalcolumns = 11 // y columns

        let table2 = document.getElementById("table"); // refer to created table
        let maketable = table2[0].childNodes; // add childNodes, tip from Victoria

        for (let x = 0; x < totalrows; x++) {
            let rows = document.createElement("tr")

            for (let y = 0; y < totalcolumns; y++) {
                let columns = document.createElement("tc");

                createTable(); // part 2 - otherwise table = null
                maketable[x].childNodes[y].innerHTML = (x * y);

                rows.appendChild(totalcolumns);
            }
            table.appendChild(totalrows);
        }
        target.appendChild(table);
    }
})
();

