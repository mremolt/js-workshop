'use strict';


// always use === for comparisons, never rely on automatic type conversion
console.log(0 == false); // true
console.log(' ' == 0);   // true

console.log(false == 'false'); // false
console.log(false == '0');     // true

console.log(true == '0');  // false
console.log(true == '1');  // true
console.log(true == '2');  // false

// and never implicitly mix types
// https://www.destroyallsoftware.com/talks/wat (from 1:20)


// a function definition
function greet(name) {
    return 'Hello ' + name + '!';
}

greet('Marc');


// a function inside a function
function outer() {

    function inner() {
        console.log('inside inner');
    }

    console.log('inside outer');
    inner();
}

outer();


// the special keyword "this" represents the current scope (more on scopes later)
// in a browser, the global scope is window, so
console.log('window === this:', window === this);


// some DOM basics, the rest of the workshop pretty much ignores DOM

document.getElementById();
document.getElementsByClassName();




// using the debugger
var x = 42;

function first() {
    var y = 5;
    debugger;

    function second() {
        var z = 12;
        debugger;
    }

    second();
}

first();