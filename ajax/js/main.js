(function(root) {
    'use strict';

    // just a short example here, most frameworks bring their own AJAX wrapper anyway - really, nobody uses pure XMLHttpRequest

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Fürth,de&units=metric';
    var request = new XMLHttpRequest();

    // this one works in IE >= 10
    request.responseType = 'json';

    request.addEventListener('load', function() {
        console.log(this);
        console.log('Temperature: ', this.response.main.temp);
    });

    request.open('get', url);
    request.send();

    // SOP: See http://de.wikipedia.org/wiki/Same-Origin-Policy
    // CORS: See http://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing (the way to do it)
    // JSONP: See http://de.wikipedia.org/wiki/JSONP#JSONP (this is a massive security problem!!!)

})(this);