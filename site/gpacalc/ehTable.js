var ehTable = {
    insertRow: function (element, index) {
        var row = document.createElement("div");
        row.classList.add("row");
        if (index == undefined) {
            element.appendChild(
                row
            )
        } else {
            element.insertBefore(
                row,
                element.children[index]
            )
        }
    },
    appendRow: function (element) {
        ehTable.insertRow(element);
    },
    insertCol: function (element, index) {
        var col = document.createElement("div");
        col.classList.add("col");
        if (index) {
            element.insertBefore(
                col,
                element.children[index]
            )
        }
    },
    appendCol: function (element) {
        ehTable.insertCol(element);
    }
}
