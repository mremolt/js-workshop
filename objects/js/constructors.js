(function (root) {
    'use strict';

    // A constructor is a normal function. Convention dictates, that the function name starts with an uppercase letter
    var Person = function(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    // Constructors are called with new, otherwise it is a normal function call and this == window!
    var person = new Person('Ford', 'Perfect');
    console.log(person.firstName);

    // if we want to add an instance method only to person
    person.say = function() {
        return 'what?!';
    };

    // if we want all instances to have a method, add the method to the prototype

    Person.prototype.getName = function() {
        return this.firstName + ' ' + this.lastName;
    };

    Person.prototype.sayName = function() {
        console.log(this.getName());
    };

    person.sayName();

    // if we want to create a static method, add it to the constructor
    Person.sleep = function() {
        console.log('zzzzzzzzzz');
    };

    // and call it
    Person.sleep();

    // or from the instance via constructor property
    person.constructor.sleep();


    /* Inheritance */

    // As ES5 does not support classes yet, we simulate inheritance via the prototype chain.
    //

    var Programmer = function(firstName, lastName, favoriteLanguage) {
        // convention: assign "superclass" to a property named _super for later access
        this._super = Person;
        // call the super constructor
        this._super.call(this, firstName, lastName);
        this.favoriteLanguage = favoriteLanguage;
    };

    // link the prototype to an instance of Person
    Programmer.prototype = Object.create(Person.prototype);
    // but keep the original constructor function
    Programmer.prototype.constructor = Programmer;

    // now define the normal methods

    Programmer.prototype.code = function() {
       console.log(this.getName() + ' is hacking ' + this.favoriteLanguage + ' now!');
    };

    var marc = new Programmer('Marc', 'Remolt', 'JavaScript');
    console.log(marc);
    marc.code();


    // if you want to call a "superclass" method that is overwritten
    Programmer.prototype.getName = function() {
        var name = this._super.prototype.getName.call(this);
        return name + ' (the programmer)';
    };

    marc.code();


})(this);
