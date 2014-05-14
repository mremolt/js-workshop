define(['module', 'app/weather_info'], function(module, WeatherInfo) {
    'use strict';

    var App = {
        start: function() {
            console.log('starting app');

            var weatherErlangen = new WeatherInfo('Erlangen');
            weatherErlangen.fetch().then(function(data) {
                App.mainContent().innerHTML = 'The temperature in ' + weatherErlangen.city + ' is ' + parseInt(data.main.temp) + ' degree celsius.';
            });
        },

        mainContent: function() {
            return document.getElementById('main');
        }
    };


    module.exports = App;
});
