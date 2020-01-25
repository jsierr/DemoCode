// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

window.onload = () => {
    let rosco_slide = false;
    let msoe_fade = false;

    $("#row4btn").click(() => {
        $(".row4").html("done");
    });

    // Set a jquery event for the button click
    $("#row3btn").click(() => {
        if(msoe_fade) {
            $("#MSOE").fadeIn();
        } else {
            $("#MSOE").fadeOut();
        }
        msoe_fade = !msoe_fade;
    });

    $("#row2btn").click(() => {
        if(rosco_slide) {
            $("#Rosco").slideDown();
        } else {
            $("#Rosco").slideUp();
        }
        rosco_slide = !rosco_slide;
    });
};