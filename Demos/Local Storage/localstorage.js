// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

const myObject = {
    aaa: 3,
    bbb: 4,
    ccc: [1, 2, 3, 4],
};

const onButtonClick = () => {
    const inputText = $('#userinput').val();

    const localStorage = window.localStorage;
    localStorage.setItem("savedText", inputText);

    const myObjectString = JSON.stringify(myObject);
    localStorage.setItem("myObject", myObjectString);

    $('#savedtext').text(inputText);
};

window.onload = () => {
    $('#saveinput').click(onButtonClick);

    const localStorage = window.localStorage;
    const savedText = localStorage.getItem("savedText");
    if(savedText !== undefined) {
        $('#savedtext').text(savedText);
    }

    const myObjectString = localStorage.getItem("myObject");
    console.log(JSON.parse(myObjectString));
};