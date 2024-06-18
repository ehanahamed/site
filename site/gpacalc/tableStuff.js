var tableStuff = {
    insert: function (table, index) {
        var newRow = table.insertRow(index);
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
        newRowCell0.children[0].addEventListener(
            "input",
            function () {
                document.getElementById("recalcWarning").classList.remove("hide");
                document.getElementById("calcError").classList.add("hide");
            }
        )
        newRowCell0.children[1].children[0].addEventListener(
            "click",
            function (event) {
                event.target.parentElement.children[0].classList.add("selected");
                event.target.parentElement.children[1].classList.remove("selected");
                event.target.parentElement.children[2].classList.remove("selected");
                calculateGpa()
            }
        );
        newRowCell0.children[1].children[1].addEventListener(
            "click",
            function (event) {
                event.target.parentElement.children[0].classList.remove("selected");
                event.target.parentElement.children[1].classList.add("selected");
                event.target.parentElement.children[2].classList.remove("selected");
                calculateGpa()
            }
        );
        newRowCell0.children[1].children[2].addEventListener(
            "click",
            function (event) {
                event.target.parentElement.children[0].classList.remove("selected");
                event.target.parentElement.children[1].classList.remove("selected");
                event.target.parentElement.children[2].classList.add("selected");
                calculateGpa()
            }
        );
        var newRowCell1 = newRow.insertCell(1);
        newRowCell1.innerHTML = "<input type='text' class='customSmallTxt' placeholder='5.0'>";
        newRowCell1.children[0].addEventListener(
            "input",
            function () {
                document.getElementById("recalcWarning").classList.remove("hide");
                document.getElementById("calcError").classList.add("hide");
            }
        )
        var newRowCell2 = newRow.insertCell(2)
        newRowCell2.innerHTML = "<input type='text' class='customSmallTxt' placeholder='A+'>";
        newRowCell2.children[0].addEventListener(
            "input",
            function () {
                document.getElementById("recalcWarning").classList.remove("hide");
                document.getElementById("calcError").classList.add("hide");
            }
        )
        var newRowCell3 = newRow.insertCell(3);
        newRowCell3.innerHTML = "<div class='flex center'>" +
            "   <button><i class='nf nf-cod-arrow_up'></i></button>" +
            "   <button><i class='nf nf-cod-arrow_down'></i></button>" +
            "   <button class='red'><i class='nf nf-fa-trash_o'></i></button>" +
            "</div>";
        newRowCell3.children[0].children[0].addEventListener(
            "click",
            function (event) {
                tableStuff.move(
                    table,
                    event.target.parentElement.parentElement.parentElement.rowIndex,
                    event.target.parentElement.parentElement.parentElement.rowIndex - 1,
                )
            }
        );
        newRowCell3.children[0].children[1].addEventListener(
            "click",
            function (event) {
                tableStuff.move(
                    table,
                    event.target.parentElement.parentElement.parentElement.rowIndex,
                    event.target.parentElement.parentElement.parentElement.rowIndex + 1,
                );
            }
        );
        newRowCell3.children[0].children[2].addEventListener(
            "click",
            function (event) {
                tableStuff.delete(
                    table,
                    event.target.parentElement.parentElement.parentElement.rowIndex,
                );
            }
        );
    },
    add: function (table) {
        tableStuff.insert(
            table,
            table.rows.length,
        );
    },
    delete: function (table, index) {
        table.deleteRow(index);
    },
    move: function (table, index, newIndex) {
    },
    objectFromRow: function (row) {
        var row = {};
        /* course name from textbox (0th child) */
        row.name = row.cells[0].children[0].value
        /* course type (ap, honors, regular) from combo select (1st child) */
        /* regular is 0th, honors is 1st, ap is 2nd */
        if (row.cells[0].children[1].children[0].classList.contains("selected")) {
            row.type = "regular";
        } else if (row.cells[0].children[1].children[1].classList.contains("selected")) {
            row.type = "honors";
        } else if (row.cells[0].children[1].children[2].classList.contains("selected")) {
            row.type = "ap";
        }
        /* credits from textbox (1st child) */
        row.credits = row.cells[1].children[0].value;
        /* grade from textbox (2nd child) */
        row.grade = row.cells[2].children[0].value;
        return row;
    },
    arrayFromTable: function (element) {
        var tableArray = [];
        for (var i = 1; i < element.rows.length; i++) {
            tableArray.push(tableStuff.objectFromRow(element.rows[i]));
        }
        return tableArray;
    },
    tableFromArray: function (array, table) {
        for (var i = 0; i < array.length; i++) {
            var row = array[i];

            tableStuff.add();
            table.rows[i + 1].children[0].children[0].value = row.name;
            /*
            ap is 2nd, honors is 1st, regular is 0th
            regular (so 0) is the "default"
            */
            if (row.type == "ap") {
                table.rows[i + 1].children[0].children[1].children[0].classList.remove("selected");
                table.rows[i + 1].children[0].children[1].children[1].classList.remove("selected");
                table.rows[i + 1].children[0].children[1].children[2].classList.add("selected");
            } else if (row.type == "honors") {
                table.rows[i + 1].children[0].children[1].children[0].classList.remove("selected");
                table.rows[i + 1].children[0].children[1].children[1].classList.add("selected");
                table.rows[i + 1].children[0].children[1].children[2].classList.remove("selected");
            } else {
                table.rows[i + 1].children[0].children[1].children[0].classList.add("selected");
                table.rows[i + 1].children[0].children[1].children[1].classList.remove("selected");
                table.rows[i + 1].children[0].children[1].children[2].classList.remove("selected");
            }
            table.rows[i + 1].children[1].children[0].value = row.credits;
            table.rows[i + 1].children[2].children[0].value = row.grade;
        }
    },
};
