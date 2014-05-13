(function (root) {
    'use strict';

    // an object in JavaScript is just a hash with properties that can be attributes or methods
    var person = {
        firstName: 'Arthur',
        lastName: 'Dent',

        sayHello: function() {
            console.log('Hello!!!');
        }
    };

    // Any property can be accessed via dot
    console.log(person.firstName);

    // or hash notation
    console.log(person['sayHello']());

    // any property can be assigned to other vars

    var func = person.sayHello;
    func();

    // or the other way round
    var func2 = function() {
        console.log('Hello Objects!');
    };

    person.sayObject = func2;
    person.sayObject();


    // this is used to access an objects own properties
    person.sayName = function() {
        console.log('My name is ' + this.firstName);
    };

    person.sayName();


    // but always beware of scope in inner functions!

    person.sayName = function() {
        var func = function() {
            // this in here is not the person object, but the outer function, so this fails
            return this.firstName + ' ' + this.lastName;
        };

        console.log('My name is ' + func());
    };

    try {
        person.sayName();
    } catch(e) {
        console.error('Not good!');
    }

    // one correct way: via assigning that

    person.sayName = function() {
        // bind the object scope to that;
        var that = this;

        var func = function() {
            // this in here is not the person object, but the outer function, so this fails
            return that.firstName + ' ' + that.lastName;
        };

        console.log('My name is ' + func());
    };

    person.sayName();

    // another one: via bind

    person.sayName = function() {
        var func = function() {
            // this in here is not the person object, but the outer function, so this fails
            return this.firstName + ' ' + this.lastName;
        }.bind(this);
        // function.bind binds this function to the person object, where ever this function is called, this is always person

        console.log('My name is ' + func());
    };

    person.sayName();

    // another one: via call or apply

    person.sayName = function() {
        var func = function() {
            // this in here is not the person object, but the outer function, so this fails
            return this.firstName + ' ' + this.lastName;
        };

        // here this is person, if we give this scope to the call function, everything works again
        console.log('My name is ' + func.call(this));
    };

    person.sayName();

})(this);

