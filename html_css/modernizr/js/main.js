(function(root) {
    'use strict';

    if (Modernizr.touch) {
        console.log('device supports touch gestures');

        window.addEventListener('touchmove', function(event) {
            var touchobj = event.changedTouches[0];
            console.log({ x: touchobj.clientX, y: touchobj.clientY });
        });

    } else {
        console.log('Awwww, device supports no touch gestures');
    }

})(this);
