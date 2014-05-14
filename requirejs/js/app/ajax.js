define(['exports', 'q'], function(exports, Q) {
    'use strict';

    var sendRequest = function(url, method) {
        var request = new XMLHttpRequest();

        var deferred = Q.defer();

        request.responseType = 'json';

        request.addEventListener('load', function() {
            if (this.status === 200) {
                deferred.resolve(this.response);
            } else {
                deferred.reject(this.response);
            }
        });

        request.open(method, url);
        request.send();

        return deferred.promise;
    };

    var get = function(url) {
        return sendRequest(url, 'get');
    };

    var post = function(url) {
        return sendRequest(url, 'post');
    };


    exports.get  = get;
    exports.post = post;
});
