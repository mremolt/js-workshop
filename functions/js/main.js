'use strict';

// a function in JavaScript is just a type like arrays or strings and can be assigned to a variable
var func = function() {
    console.log('I am assigned to a var');
};

func();

// a function can even return a function
var funcFunc = function() {
    return function() {
        console.log('I am defined as return value of a function!');
    };
};

var func2 = funcFunc();
func2();

// function arguments are never mandatory in JavaScript

var sayName = function(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName + '!');
};

sayName();
sayName('Arthur');
sayName('Arthur', 'Dent');
sayName('Arthur', 'Dent', 42, 'another param');

// all function arguments can be accessed via arguments keyword, arguments basically acts like an array
var logArguments = function() {
    console.log(arguments);
}

logArguments('Arthur', 'Dent', 42, 'another param');


// there are three different ways to call a function
// (OK, 5, see http://devlicio.us/blogs/sergio_pereira/archive/2009/02/09/javascript-5-ways-to-call-a-function.aspx)

// the usual (), the current scope is applied automatically (more about that when we talk about objects)
sayName('Arthur', 'Dent');

// call, with explicit scope
sayName.call(this, 'Arthur', 'Dent');

// apply, with explicit scope
sayName.apply(this, ['Arthur', 'Dent']);


// to prevent access to variables from the outer scope, we use closures and inner functions

var counterFactory = function() {
    var count = 0;

    // only this function has access to count, nothing else
    return function() {
        count += 1;
        return count;
    };
}

var counter = counterFactory();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

var counter2 = counterFactory();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());


// higher order functions are functions that themselves accept functions as arguments

var callXTimes = function (func, times) {
    for (var i = 0; i < times; i++) {
        func();
    }
};

callXTimes(func2, 4);

// a more useful example (teaser for array functions):

var numbers = [3, 1, 25, 17, 88, 12, 33, 34];

var isEven = function(number) {
    return number % 2 === 0;
};

var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);


// see module.js

// not visible: undefined
console.log('the type: ', typeof person);
// this works
logPerson();

