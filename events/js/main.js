(function(root) {
    'use strict';

    var clicker = root.document.getElementById('click-me');
    var clicker2 = root.document.getElementById('click-me-too');


    // events are always added to a DOM element, or for global events to window
    clicker.addEventListener('click', function(event) {
        console.log('clicked!!!!', event);
    });

    var callback = function(event) {
        console.log('same event, another handler');
    };

    // add a named function
    clicker.addEventListener('click', callback);

    // and remove it again
    clicker.removeEventListener('click', callback);


    clicker2.addEventListener('mouseover', function(event) {
        console.log('mouse enters');
    });

    clicker2.addEventListener('mouseout', function(event) {
        console.log('mouse leaves');
    });

    // you can also check on things like the online/offline status of the browser, very handy for building web apps, then added to window
    root.addEventListener('offline', function(event) {
        console.log('Opps, better check the WIFI cable!');
    });

    root.addEventListener('online', function(event) {
        console.log('Puh, that was close!');
    });

    // for a full list of all possible events, see https://developer.mozilla.org/en-US/docs/Web/Reference/Events


    // beware of scope in event callbacks, if using this! Example:

    var ClickCounter = function(ids) {
        var that = this,
            element;

        // here this is the instantiated object
        console.log('in constructor', this);

        ids.forEach(function(id) {
            element = root.document.getElementById(id);
            that[id] = 0;

            element.addEventListener('click', function() {
                // this in a event callback is the event target, in this case the clicked DOM element (p, h1)
                console.log('in callback', this);
                that[id] += 1;
            });
        });
    };

    root.counter = new ClickCounter(['click-me', 'click-me-too']);


    // Events can be canceled via preventDefault, meaning the default browser action is not executed
    var theForm = root.document.getElementById('the-form');

    theForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("no, we don't");
    });


    // most events bubble up in the dom tree, meaning the event fires on the target and then on every parent element too
    var outer = root.document.getElementById('outer');
    var inner = root.document.getElementById('inner');

    outer.addEventListener('click', function(event) {
        console.log('clicked outer');
    });

    inner.addEventListener('click', function(event) {
        console.log('clicked inner');
    });

    var outer2 = root.document.getElementById('outer2');
    var inner2 = root.document.getElementById('inner2');

    outer2.addEventListener('click', function(event) {
        console.log('clicked outer');
    });

    inner2.addEventListener('click', function(event) {
        console.log('clicked inner');
        // unless you stop it from bubbling
        event.stopPropagation();
    });

})(this);



