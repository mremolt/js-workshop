// to prevent polluting the global namespace with hundreds of helper functions or objects, we enclose the whole
// javascript file in a function scope

(function(root) {
    'use strict';
    // Whatever we define inside here, stays here (unless we forget var).


    // private
    var person = {
        firstName: 'Marc',
        lastName: 'Remolt'
    };

    // private
    var logPerson = function() {
        console.log(person);
    };

    // append the function we want to export to the enclosing scope (window)
    // this is the basis of all JavaScript module systems: make everything private and export only what's needed
    root.logPerson = logPerson;

})(window);
