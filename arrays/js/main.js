(function(root) {
    'use strict';

    // create a new array
    var numbers = [1, 2, 3, 4, 5];

    // access via brackets and index
    console.log(numbers[2]);

    // change the value with index 3
    numbers[3] = 'Hello';
    // yes, that was a string, hello loose typing
    console.log(numbers);

    // arrays (and objects) are passed by reference
    var numbers2 = numbers;
    numbers2[0] = 'zero';
    console.log(numbers);
    console.log(numbers2);

    // how many values are inside the array?
    console.log(numbers.length);

    numbers[99] = 100;

    // and now?
    console.log(numbers.length);

    // basic array methods

    // add value to end of array
    numbers.push(6);

    // add value to start of array
    numbers.unshift('minus one');

    console.log(numbers);

    // remove value from end of array (and return it)
    numbers.pop();

    // remove value from start of array (and return it)
    numbers.shift();

    console.log(numbers);


    // always prefer Array.prototype.forEach (and siblings) to for and while loops
    // because it is not only shorter and mire readable, but we also get a function scope for free
    numbers.forEach(function(n) {
        console.log('number:', n);
    });

    // n is not defined
    console.log('n is', typeof n);


    // reset numbers
    numbers = [1, 2, 3, 4, 5];

    // use map for iterating over an array and generating a new one with processed values
    var doubles = numbers.map(function(n) {
        return n * 2;
    });

    console.log(doubles);

    // use filter for filtering an array via a function: if the function returns a truthy value, the original value is added to the new array
    var evenNumbers = numbers.filter(function(n) {
        return n % 2 === 0;
    });

    console.log(evenNumbers);


    // use reduce to accumulate values from an array, what you return from the accumulator function, goes into the first param on the next step
    var sumOfAll = numbers.reduce(function(sum, n) {
        return sum + n;
    }, 0);

    console.log(sumOfAll);


    numbers = [1, 2, 4, 5, 8, 9];
    evenNumbers = [2, 4, 6, 12, 22];


    console.log('are there some even numbers in numbers?', numbers.some(function(n) {
        return n % 2 === 0;
    }));


    // use some|every to test, if some or all elements of an array match a criteria
    console.log('are there some even numbers in evenNumbers?', evenNumbers.some(function(n) {
        return n % 2 === 0;
    }));

    console.log('are there only even numbers in numbers?', numbers.every(function(n) {
        return n % 2 === 0;
    }));

    console.log('are there only even numbers in evenNumbers?', evenNumbers.every(function(n) {
        return n % 2 === 0;
    }));






})(this);

