(function(root) {
    'use strict';

    // to use Java-like getter and setter methods with private attributes, we use Object.defineProperties and closures

    var Person = function(firstName, lastName) {
        // define the getter and setter methods
        Object.defineProperties(this, {
            firstName: {
                get: function() {
                    // closure access to the function param
                    return firstName;
                },
                set: function(value) {
                    firstName = String(value).trim();
                }
            },
            lastName: {
                get: function() {
                    // closure access to the function param
                    return lastName;
                },
                set: function(value) {
                    lastName = String(value).trim();
                }
            },
            name: {
                get: function() {
                    return firstName + ' ' + lastName;
                }
            }
        });

        // and use them
        this.firstName = firstName;
        this.lastName = lastName;
    };


    var marc = new Person('Marc     ', 'Remolt');
    console.log(marc.name);
    console.log(marc);

    try {
        marc.name = 'This Fails';
    } catch(e) {
        console.error('Sorry, no setter');
    }

    // To prevent further extensions of an object, we use Object.preventExtensions (usually at the end of the constructor function).
    // So we now have objects with private attributes, getters and setters and without the ability to dynamically add properties - very Java-like!
    Object.preventExtensions(marc);

    marc.email = 'marc.remolt@dcs-fuerth.de';

})(this);