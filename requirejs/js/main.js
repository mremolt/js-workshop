require.config({
    paths: {
        domReady: '//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady',
        q:        '//cdnjs.cloudflare.com/ajax/libs/q.js/1.0.1/q.min'
    }
});

require(['app', 'domReady!'], function(App) {
    'use strict';

    App.start();
});