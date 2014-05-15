'use strict';

var anyData = [1, 2, 'test', { key: 'value' }];
console.log(anyData);

var asJson = JSON.stringify(anyData);
console.log(asJson);

var backToJS = JSON.parse(asJson);
console.log(backToJS);

console.log(anyData === backToJS);



