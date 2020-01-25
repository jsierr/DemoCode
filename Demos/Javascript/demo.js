// In Webstorm: in File/Settings, under Languages and Frameworks/Javascript, set language version to ES 6
//              in Code/Configure Current File Analysis..., follow Configure Inspections link. Select Javascript and then select JSHint as the analysis tool to use.
// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

// Arrays
let i = new Array(6);
let j = [1, 3, 4, 5, 6];
let p = [1, 3, "3", 1, "fa"];
let z = i[4];
let mylength = p.length;

// Console Logging, prompts and alerts
console.log("Hello World!");
let message = prompt("Enter a Message");
alert("You entered:" + message);

// Conditionals
let x = 6;
// NOTE: use triple equals to avoid coercion
if(x === 6) {
    console.log("HI");
}

// Strings and string concatenation
let str = "mystring";
let myint = 3;
console.log("MYSTRING: " + str + myint);  // String concatenation - "MYSTRING: mystring3"
console.log('"MYSTRING": ' + str + myint);  // String concatenation - "MYSTRING: mystring3"
console.log(`MYSTRING: ${str}${myint+5}`);  // String concatenation - "MYSTRING: mystring8"

// Numbers
let i1 = 1;
let i2 = 2;
let i3 = i1/i2;
console.log(Math.floor(i3));

// Strings to Numbers
let s1 = "12345";
let s2 = parseInt(s1);
let s3 = parseFloat("1234.123");
console.log(s2);
console.log(s3);

// Infinity
let mynum = 1/0;
console.log(mynum);

// NaN
let mynum2 = 1/"a";
console.log(mynum2);

let mynumber = parseInt(prompt("enter a number"));
if(isNaN(mynumber)) {
    alert("YOU DID NOT ENTER A NUMBER");
}

// Loops
for(let i = 0; i < 10; i++) {
    console.log(i);
}
let k = 0;
while(k < 10) {
    console.log(k);
    k++;
}
do {
    console.log(k);
    k--;
} while(k > 0);

// Functions
function myFunc(a = 1, b = 2) {
    return a + b;
}
console.log(myFunc(1, 3));
console.log(myFunc(1));
console.log(myFunc());

// Arrow Functions
let myFunc2 = (a = 1, b = 2) => a + b;
console.log(myFunc2(3, 4));

// Array functions
function printit(entry) {
    console.log(entry);
}
j.forEach(printit);
j.forEach((entry) => {
    console.log(entry);
});
let j2 = j.map((entry) => entry * 2);
console.log(j2);

Closure
function doIt() {
    let a = "STRING";
    function doIt2() {
        console.log(a);
    }
    doIt2();
}
doIt();

function makeAdd(y) {
    return function(z) {
        return z + y;
    };
}

let add5 = makeAdd(5);
let add10 = makeAdd(10);

console.log(add5(40));
console.log(add10(40));









