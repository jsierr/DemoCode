// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

function numberValidator(elementId, errorId) {
    let element = document.getElementById(elementId);
    let text = element.value;
    let number = parseInt(text);
    let errorElement = document.getElementById(errorId);
    if(isNaN(number) || number % 1 != 0) {
        if(elementId === "coinID")
        errorElement.innerHTML = "Enter a number > 0";
        errorElement.style.color = "red";
        errorElement.focus();
    } else {
        errorElement.innerHTML = "";
    }
}

function agevalidator() {
    numberValidator("ageinput", "ageerror");
}
function heightvalidator() {
    numberValidator("heightinput", "heighterror");
}
function validator() {
    agevalidator();
    heightvalidator();
}

window.onload = function() {
    // let submitbutton = document.getElementById("submitbutton");
    // submitbutton.onclick = validator;
    let ageInput = document.getElementById("ageinput");
    ageInput.onkeyup = agevalidator;
    let heightinput = document.getElementById("heightinput");
    heightinput.onkeyup = heightvalidator;
};

