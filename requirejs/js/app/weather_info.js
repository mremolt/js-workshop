define(['module', 'q', 'app/ajax'], function(module, Q, ajax) {
    'use strict';

    function WeatherInfo(city) {
        this.city = city;
    }

    WeatherInfo.prototype.fetch = function() {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.city + ',de&units=metric';
        return ajax.get(url);
    };


    module.exports = WeatherInfo;
});