/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Inside the element with id "target", create an HTML table with 1 column and 10 rows.
// Example: https://stackoverflow.com/questions/14643617/create-table-using-javascript

(function () {

    let target = document.getElementById("target");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let tr = 10 // x
    let tc = 1 // y

    for (let x = 1; x < tr; x++) {
        let tr = document.createElement('tr');

        for (let y = 1; y < tc; y++) {
            let tc = document.createElement('tc');

            tc.innerHTML=(x * y);

            tc.appendChild(tr); // add tc to the tr = parent
            tbody.appendChild(tc); // add tc to tbody
            table.appendChild(tbody); // add body to table
            target.appendChild(table); // add table to target
        }
    }
})
();

/* Easy way:
create elements <table> and a <tbody>
    document.getElementById("target").innerHTML = "<table><tr>1</tr><tr>2</tr><tr>3</tr>...<tr>10</tr></table>";
})();
 */