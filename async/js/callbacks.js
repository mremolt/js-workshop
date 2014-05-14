(function(root) {
    'use strict';

    function loadData(cb) {
        console.log('loading data from somewhere');

        var data = [1, 2, 3, 4, 5];

        setTimeout(function() {
            cb(data);
        }, 1000);
    }

    function processData(data, cb) {
        console.log('very intensive data processing');

        setTimeout(function() {
            data.push(42);
            cb(data);
        }, 1000);
    }

    function storeData(data, cb) {
        console.log('extreme storing action!!!');

        setTimeout(function() {
            cb(data);
        }, 1000);
    }


    loadData(function(data) {
        processData(data, function(data) {
            storeData(data, function(data) {
                console.log('finished storing', data);
            });
        });
    });

})(this);
