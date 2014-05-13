//'use strict';

// there is no scope but function scope

function setName() {
    var name = 'Arthur';
}

setName();
// name is not defined outside setName()
console.log("name:", name);


function noVar() {
    // we 'forgot' the var declaration
    lastName = 'Dent';
}

noVar();
// this is extremely evil (and throws and error if strict mode is on)!
console.log('lastName', lastName);


var age = 32;

function setAge() {
    age = 35;
}

setAge();
// functions see their outer scopes, so age is visible in setAge
// this is called a closure
console.log(age);
