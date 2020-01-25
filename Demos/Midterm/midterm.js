let validNumbers = [];

function addValue() {
    let element = document.getElementById("userinput");
    let text = element.value;
    let number = parseInt(text);
    let add = false;
    let errorElement = document.getElementById("errormessage");
    let sum = 0;
    if (isNaN(number) || text.indexOf('.') !== -1 || number < 0) {
        if (text !== "") {
            errorElement.innerHTML = "Enter a valid integer greater than 0.";
            errorElement.style.color = "red";
            errorElement.focus();
            $("#body").append(`<tr class="datarows"><td>${text}</td><td>${add}</td></tr>`);
        } else{
            errorElement.innerHTML = "Enter a valid integer greater than 0.";
            errorElement.style.color = "red";
            errorElement.focus();
        }
    } else {
        errorElement.innerHTML = "";
        add = true;
        $("#body").append(`<tr class="datarows"><td>${number}</td><td>${add}</td></tr>`);
        validNumbers.push(number);
    }
    for (let i = 0; i < validNumbers.length; i++) {
        sum += validNumbers[i]
    }
    $("#sum").html(sum)
}

function removeValues() {
    let table = document.getElementById("inputvalues");
    let length = table.rows.length;
    let rows = table.rows;
    for (let i = 0; i < length; i++) {
        let cells = rows[i].cells;
        if (cells[2].innerText === false) {
            table.deleteRow(i);
        }
    }
}

window.onload = () => {
    $("#add").click(addValue);
    $("#removeinvalid").click(removeValues)
};