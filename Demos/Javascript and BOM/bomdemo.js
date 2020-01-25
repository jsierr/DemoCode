// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

// Examples using window
window.alert("HI");
let response = window.confirm("Are you sure?");
if(response) {
    window.alert("You said yes!");
} else {
    window.alert("You canceled!");
}
let input = window.prompt("Enter some data:");
console.log(`The user typed: ${input}`);

// Examples using navigator
console.log(`javaEnabled: ${navigator.javaEnabled()}`);
console.log(`appName: ${navigator.appName}`);

function geoSuccess(result) {
    console.log(result);
}
function geoFailure(result) {
    window.alert("Something went wrong when getting geolocation");
    console.log(result);
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure);

// Examples using screen
console.log(`Screen width: ${screen.width}`);
if(screen.availWidth < 300) {
    console.log('Small screen');
}

// Exapmles using history
console.log(history.length);
history.back();

// Examples using location
console.log(location.host);