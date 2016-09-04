alert("hi"); // Pop up a modal dialog
var i;
for (i = 0; i < 10; i += 2) {
  console.log(i); // Print to the developer console
}

// Emit marked-up into the HTML document
document.write("<b>Hello world</b>");

// Assume that a tag of the form <div id="output"></div> already appeared
// in the HTML
document.getElementById("output").innerHTML += "<i>More</i> information";

// derivatives
function derivative(f) {
   var h = 0.001;
   return function(x) {
     return (f(x + h) - f(x - h)) / (2 * h);
   };
}

console.log(" cos(2) = " + Math.cos(2));
console.log("-sin(2) = " + Math.sin(2));
console.log("(d cos/dx)(2) = " + derivative(Math.cos)(2));

function f(x) { return Math.pow(x, 3) + 2 * x + 1; };
var x = 12.5;

console.log("[6x | x = 12.5] = " + (6 * x));
console.log("(d^2 (x^3 + 2x + 1)/dx^2)(12.5) = " +
    derivative(derivative(f))(x));
