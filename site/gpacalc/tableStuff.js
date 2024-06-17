var tableStuff = {
    insert: function (index) {
        var newRow = document
            .getElementById("gradesTable")
            .insertRow(index);
        var newRowCell0 = newRow.insertCell(0);
        newRowCell0.innerHTML = "<input type='text' placeholder='Course Name' />" +
            "<div class='customCombo'>" +
            "  <button class='left selected'>" +
            "    <i class='indicator nf nf-oct-check'></i>" +
            "    Regular" +
            "  </button>" +
            "  <button class='mid'>" +
            "    <i class='indicator nf nf-oct-check'></i>" +
            "    Honors" +
            "  </button>" +
            "  <button class='right'>" +
            "    <i class='indicator nf nf-oct-check'></i>" +
            "    AP" +
            "  </button>" +
            "</div>";
        newRowCell0.children[1].children[0].addEventListener(
            "click",
            function (event) {
                event.target.parentElement.children[0].classList.add("selected");
                event.target.parentElement.children[1].classList.remove("selected");
                event.target.parentElement.children[2].classList.remove("selected");
            }
        );
        newRowCell0.children[1].children[1].addEventListener(
            "click",
            function (event) {
                event.target.parentElement.children[0].classList.remove("selected");
                event.target.parentElement.children[1].classList.add("selected");
                event.target.parentElement.children[2].classList.remove("selected");
            }
        );
        newRowCell0.children[1].children[2].addEventListener(
            "click",
            function (event) {
                event.target.parentElement.children[0].classList.remove("selected");
                event.target.parentElement.children[1].classList.remove("selected");
                event.target.parentElement.children[2].classList.add("selected");
            }
        );
        newRow.insertCell(1).innerHTML = "<input type='text' class='customSmallTxt' placeholder='5.0'>";
        newRow.insertCell(2).innerHTML = "<input type='text' class='customSmallTxt' placeholder='A+'>";
        /*actions.innerHTML =
          "<div class='flex center'><button> <i class='nf nf-cod-arrow_up'></i> Move Up </button><button> <i class='nf nf-cod-arrow_down'></i> Move Down </button><button class='red'> <i class='nf nf-fa-trash_o'></i> Remove </button></div>";
        actions.children[0].children[0].addEventListener("click", function (event) {
          tableStuff.move(
            event.target.parentElement.parentElement.parentElement.rowIndex,
            event.target.parentElement.parentElement.parentElement.rowIndex - 1,
          );
        });
        actions.children[0].children[1].addEventListener("click", function (event) {
          tableStuff.move(
            event.target.parentElement.parentElement.parentElement.rowIndex,
            event.target.parentElement.parentElement.parentElement.rowIndex + 2,
          );
        });
        actions.children[0].children[2].addEventListener("click", function (event) {
          tableStuff.delete(
            event.target.parentElement.parentElement.parentElement.rowIndex,
          );
        });*/
    },
    add: function () {
        tableStuff.insert(
            document.getElementById("gradesTable").rows.length,
        );
    },
    delete: function (index) {
        document.getElementById("gradesTable").deleteRow(index);
    },
    move: function (index, newIndex) {
        if (
            index !== newIndex &&
            ((index > newIndex && index !== 1) || index < newIndex) &&
            ((index < newIndex &&
                index <
                document.getElementById("gradesTable").rows.length -
                1) ||
                index > newIndex)
        ) {
            tableStuff.insert(newIndex);
            var newOldIndex;
            if (index > newIndex) {
                newOldIndex = index + 1;
            } else if (index < newIndex) {
                newOldIndex = index;
            }
            document.getElementById("gradesTable").rows[
                newIndex
            ].children[0].children[0].value = document.getElementById(
                "gradesTable"
            ).rows[newOldIndex].children[0].children[0].value;
            if (document.getElementById("gradesTable").rows[
                newOldIndex
            ].children[0].children[2].children[0].classList.contains("selected")) {
                document.getElementById("gradesTable").rows[
                    newIndex
                ].children[0].children[2].children[0].classList.add("selected")
            }
            if (document.getElementById("gradesTable").rows[
                newOldIndex
            ].children[0].children[2].children[1].classList.contains("selected")) {
                document.getElementById("gradesTable").rows[
                    newIndex
                ].children[0].children[2].children[1].classList.add("selected")
            }
            if (document.getElementById("gradesTable").rows[
                newOldIndex
            ].children[0].children[2].children[2].classList.contains("selected")) {
                document.getElementById("gradesTable").rows[
                    newIndex
                ].children[0].children[2].children[2].classList.add("selected")
            }
            document.getElementById("gradesTable").rows[
                newIndex
            ].children[1].children[0].value = document.getElementById(
                "gradesTable"
            ).rows[newOldIndex].children[1].children[0].value;
            document.getElementById("gradesTable").rows[
                newIndex
            ].children[2].children[0].value = document.getElementById(
                "gradesTable"
            ).rows[newOldIndex].children[2].children[0].value;
            tableStuff.delete(newOldIndex);
        }
    },
    arrayFromTable: function (element) {
        var tableArray = [];
        for (var i = 1; i < element.rows.length; i++) {
            var row = {};
            var tableCells = element.rows[i].children;
            /* course name from textbox (0th child) */
            row.name = tableCells[0].children[0].value
            /* course type (ap, honors, regular) from combo select (1st child) */
            /* ap is 0th, honors is 1st, regular is 2nd */
            if (tableCells[0].children[1].children[0].classList.contains("selected")) {
                row.type = "ap";
            } else if (tableCells[0].children[1].children[1].classList.contains("selected")) {
                row.type = "honors";
            } else if (tableCells[0].children[1].children[2].classList.contains("selected")) {
                row.type = "regular";
            }
            /* credits from textbox (1st child) */
            row.credits = tableCells[1].children[0].value;
            /* grade from textbox (2nd child) */
            row.grade = tableCells[2].children[0].value;
            tableArray.push(row);
        }
        return tableArray;
    },
    tableFromArray: function (array, table) {
        for (var i = 0; i < array.length; i++) {
            var row = array[i];

            tableStuff.add();

            table.rows[i + 1].children[0].children[0].value = row[0];
            table.rows[i + 1].children[1].children[0].value = row[1];
        }
    },
};
