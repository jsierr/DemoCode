// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

class Rectangle {
    constructor(h, w) {

        // Private Function
        function printSize() {
            console.log(h*w);
        }

        // Public Functions
        this.getWidth = () => w;
        this.getHeight = () => h;

        printSize();
    }
}

let r = new Rectangle(3, 4);
console.log(r.getHeight());