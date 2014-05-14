(function(root) {
    'use strict';

    // don't forget to add Q as a global to jshint

    function loadData() {
        console.log('P: loading data from somewhere');
        // in every part of the promise chain, we create a deferred
        var deferred = Q.defer();

        setTimeout(function() {
            var data = [1, 2, 3, 4, 5];
            // and as soon as we have the data, we resolve it
            deferred.resolve(data);
            console.log('P: finished loading');
        }, 500);

        // we just return the promise - Important! This happens before the resolve step!
        return deferred.promise;
    }

    function processData(data) {
        console.log('P: very intensive data processing');
        var deferred = Q.defer();

        setTimeout(function() {
            data.push(42);
            deferred.resolve(data);
            console.log('P: finished processing');
        }, 500);

        return deferred.promise;
    }

    function storeData(data) {
        console.log('P: extreme storing action!!!');
        var deferred = Q.defer();

        setTimeout(function() {
            // 50/50 chance
            if (Math.round(Math.random())) {
                // if one step produces an error, we reject the promise
                deferred.reject(new Error('Oh no, storing failed!'));
            } else {
                deferred.resolve(data);
                console.log('P: finished storing');
            }
        }, 500);

        return deferred.promise;
    }

    console.log('now the same with promises');


    loadData()
        .then(processData)
        .then(storeData)
        .then(function(data) {
           console.log('P: finished using promises', data);
        })
        .catch(function(error) {
            console.error('P: something wet wrong', error);
        });


    // now a real implementation with an ajax call

    function loadWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',de&units=metric';
        var request = new XMLHttpRequest();
        var deferred = Q.defer();

        request.responseType = 'json';

        request.onload = function() {
            if (this.response.cod === 200) {
                deferred.resolve(this.response);
            } else {
                deferred.reject(this.response);
            }
        };

        request.open('get', url);
        request.send();

        return deferred.promise;
    }

    loadWeather('Erlangen').then(function(data) {
        console.log('Temperature:', data.main.temp);
    }).catch(function(response) {
        console.log('Error', response);
    });

    loadWeather('egrthtyjhtyjuyjuyj').then(function(data) {
        console.log('Temperature:', data.main.temp);
    }).catch(function(response) {
        console.log('Error', response);
    });

})(this);

